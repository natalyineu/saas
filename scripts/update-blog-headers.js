/**
 * Script to update all blog posts to use the new BlogHeader component
 * 
 * Usage: node scripts/update-blog-headers.js
 */

const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const readdir = promisify(fs.readdir);
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);
const stat = promisify(fs.stat);

const BLOG_DIR = path.join(__dirname, '../src/app/blog');
const TEMPLATE_HEADER_IMPORTS = `import BlogHeader from '@/components/blog/BlogHeader';
import { getBlogIcon, getBlogStats } from '@/lib/utils/blog-helpers';`;

const TEMPLATE_POST_DATA = `
// Blog post data
const postData = {
  id: '$BLOG_ID',
  title: '$TITLE',
  date: '$DATE',
  author: '$AUTHOR',
  readTime: '$READ_TIME',
  category: '$CATEGORY',
  tags: [$TAGS]
};`;

const TEMPLATE_HEADER_USAGE = `const { title, date, author, readTime, tags, category } = postData;
  const icon = getBlogIcon(postData);
  const stats = getBlogStats(postData);`;

const TEMPLATE_BLOG_HEADER = `<BlogHeader
            title={title}
            date={date}
            author={author}
            readTime={readTime}
            tags={tags}
            icon={icon}
            stats={stats}
            category={category}
          />`;

async function isDirectory(path) {
  const stats = await stat(path);
  return stats.isDirectory();
}

async function findBlogPages(dir) {
  const files = await readdir(dir);
  const pageFiles = [];

  for (const file of files) {
    const filePath = path.join(dir, file);
    
    if (await isDirectory(filePath)) {
      if (file !== 'node_modules' && file !== '.next') {
        const subDirFiles = await findBlogPages(filePath);
        pageFiles.push(...subDirFiles);
      }
    } else if (file === 'page.tsx') {
      pageFiles.push(filePath);
    }
  }

  return pageFiles;
}

function extractMetadata(content) {
  // Extract basic page info
  const titleMatch = content.match(/title: ['"]([^'"]+)['"]/);
  const title = titleMatch ? titleMatch[1] : '';
  
  // Extract date from the content
  const dateMatch = content.match(/(?:date: ['"]([^'"]+)['"])|(?:<span>([^<]+)<\/span>)/);
  const date = dateMatch ? (dateMatch[1] || dateMatch[2]) : '';
  
  // Extract author
  const authorMatch = content.match(/(?:author: ['"]([^'"]+)['"])|(?:<span>([^<]+)<\/span>)/);
  const author = authorMatch ? (authorMatch[1] || authorMatch[2]) : '';
  
  // Extract read time
  const readTimeMatch = content.match(/(?:readTime: ['"]([^'"]+)['"])|(?:<span>(\d+ min read)<\/span>)/);
  const readTime = readTimeMatch ? (readTimeMatch[1] || readTimeMatch[2]) : '';
  
  // Extract tags
  const tagsMatch = content.match(/tags: \[(.*?)\]/);
  const tags = tagsMatch ? tagsMatch[1] : '';
  
  // Extract category or use a default
  const categoryMatch = content.match(/category: ['"]([^'"]+)['"]/);
  let category = categoryMatch ? categoryMatch[1] : '';
  
  if (!category) {
    if (content.includes('case study') || content.includes('Case Study')) {
      category = 'Case Study';
    } else if (content.includes('AI') || content.includes('ai-') || content.includes('artificial intelligence')) {
      category = 'AI Technology';
    } else {
      category = 'Article';
    }
  }
  
  return { title, date, author, readTime, tags, category };
}

async function updateBlogPost(filePath) {
  console.log(`Processing ${filePath}...`);
  let content = await readFile(filePath, 'utf8');
  
  // Skip if already updated
  if (content.includes('BlogHeader')) {
    console.log(`- Already updated, skipping`);
    return;
  }
  
  // Extract blog ID from path
  const blogId = path.basename(path.dirname(filePath));
  
  // Extract metadata from content
  const { title, date, author, readTime, tags, category } = extractMetadata(content);
  
  // Create post data
  const postData = TEMPLATE_POST_DATA
    .replace('$BLOG_ID', blogId)
    .replace('$TITLE', title)
    .replace('$DATE', date)
    .replace('$AUTHOR', author)
    .replace('$READ_TIME', readTime)
    .replace('$CATEGORY', category)
    .replace('$TAGS', tags);
  
  // Add imports if needed
  if (!content.includes("import BlogHeader")) {
    content = content.replace(
      /import ([^;]+);/,
      `import $1;\n${TEMPLATE_HEADER_IMPORTS}`
    );
  }
  
  // Add post data before the component function
  content = content.replace(
    /export default function ([^{]+)\{/,
    `${postData}\n\nexport default function $1{
  ${TEMPLATE_HEADER_USAGE}\n`
  );
  
  // Replace old header with new BlogHeader component
  content = content.replace(
    /<header[\s\S]*?<\/header>(?:\s*<div[\s\S]*?<\/div>)?/,
    TEMPLATE_BLOG_HEADER
  );
  
  // Write updated content back to file
  await writeFile(filePath, content, 'utf8');
  console.log(`- Updated successfully`);
}

async function main() {
  try {
    const blogPages = await findBlogPages(BLOG_DIR);
    console.log(`Found ${blogPages.length} blog pages to process`);
    
    for (const page of blogPages) {
      await updateBlogPost(page);
    }
    
    console.log('All blog posts have been updated to use the new BlogHeader component!');
  } catch (error) {
    console.error('Error:', error);
  }
}

main(); 