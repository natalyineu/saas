/**
 * Script to standardize all blog posts to use the BlogPostLayout component
 * with a consistent structure including the CTA section
 * 
 * Usage: node scripts/standardize-blog-posts.js
 */

const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const readdir = promisify(fs.readdir);
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);
const stat = promisify(fs.stat);

const BLOG_DIR = path.join(__dirname, '../src/app/blog');
const IGNORE_DIRS = ['page.tsx', 'urban-beans-case-study', 'programmatic-advertising-ai'];

async function isDirectory(filePath) {
  const stats = await stat(filePath);
  return stats.isDirectory();
}

async function findBlogPages(dir) {
  const files = await readdir(dir);
  const pageFiles = [];

  for (const file of files) {
    if (IGNORE_DIRS.includes(file)) continue;
    
    const filePath = path.join(dir, file);
    
    if (await isDirectory(filePath)) {
      const pagePath = path.join(filePath, 'page.tsx');
      if (fs.existsSync(pagePath)) {
        pageFiles.push(pagePath);
      }
      
      // Look in subdirectories
      const subDirFiles = await findBlogPages(filePath);
      pageFiles.push(...subDirFiles);
    }
  }

  return pageFiles;
}

function extractPostInfo(content, filePath) {
  // Extract basic meta info
  const titleMatch = content.match(/title: ['"]([^'"]+)['"]/);
  const title = titleMatch ? titleMatch[1] : '';
  
  const dateMatch = content.match(/date: ['"]([^'"]+)['"]/);
  const date = dateMatch ? dateMatch[1] : '';
  
  const authorMatch = content.match(/author: ['"]([^'"]+)['"]/);
  const author = authorMatch ? authorMatch[1] : '';
  
  const readTimeMatch = content.match(/readTime: ['"]([^'"]+)['"]/);
  const readTime = readTimeMatch ? readTimeMatch[1] : '';
  
  // Look for the "const postData" object if available
  const postDataMatch = content.match(/const postData = {[\s\S]*?};/);
  const postDataObj = postDataMatch ? postDataMatch[0] : null;
  
  let id = '';
  let category = '';
  let tags = [];
  
  if (postDataObj) {
    const idMatch = postDataObj.match(/id: ['"]([^'"]+)['"]/);
    id = idMatch ? idMatch[1] : '';
    
    const categoryMatch = postDataObj.match(/category: ['"]([^'"]+)['"]/);
    category = categoryMatch ? categoryMatch[1] : '';
    
    const tagsMatch = postDataObj.match(/tags: \[(.*?)\]/);
    if (tagsMatch) {
      try {
        const tagsStr = `[${tagsMatch[1]}]`;
        tags = eval(tagsStr);
      } catch (e) {
        tags = [];
      }
    }
  }
  
  // Extract article content
  const contentMatch = content.match(/(<p className="lead">[\s\S]*?)(<div className="mt-12 border-t border-gray-200 pt-8">|<\/article>|<\/main>|<\/BlogPostLayout>|$)/);
  const articleContent = contentMatch ? contentMatch[1] : '';
  
  return {
    id: id || path.basename(path.dirname(filePath)),
    title,
    date,
    author,
    readTime,
    category: category || (title.toLowerCase().includes('case study') ? 'Case Study' : 'Article'),
    tags,
    articleContent
  };
}

function getCtaTemplate(category) {
  const isAI = category.toLowerCase().includes('ai') || category.toLowerCase().includes('technology');
  const isAdvertising = category.toLowerCase().includes('advertising') || category.toLowerCase().includes('marketing');
  
  let heading = 'Boost Your Digital Marketing';
  let description = 'AI-Vertise Boost has helped hundreds of businesses achieve exceptional results through intelligent, AI-powered advertising.';
  let ctaText = 'Ready to transform your marketing performance?';
  
  if (isAI) {
    heading = 'Leverage AI for Your Marketing';
    description = 'AI-Vertise Boost has helped businesses harness the power of artificial intelligence to transform their marketing strategies.';
    ctaText = 'Ready to bring AI to your marketing strategy?';
  } else if (isAdvertising) {
    heading = 'Take Your Advertising to the Next Level';
    description = 'AI-Vertise Boost has helped hundreds of businesses achieve extraordinary ROI through our intelligent, data-driven advertising platform.';
    ctaText = 'Ready to boost your advertising performance?';
  }
  
  return `
      <h2>${heading}</h2>
      <p>
        ${description} Our platform makes sophisticated targeting, bidding, and optimization accessible to businesses of all sizes, without requiring technical expertise.
      </p>
      
      <div className="bg-gradient-to-r from-primary-purple/10 to-primary-pink/10 p-6 rounded-lg my-8">
        <h3 className="font-bold text-xl mb-3">${ctaText}</h3>
        <p className="mb-4">
          Join hundreds of other businesses that have transformed their growth with AI-Vertise Boost.
        </p>
        <Link href="/#pricing" className="bg-gradient-to-r from-primary-purple to-primary-pink text-white px-6 py-2 rounded-lg inline-block font-medium hover:shadow-lg transition-all">
          Get Started Today
        </Link>
      </div>`;
}

async function updateBlogPost(filePath) {
  console.log(`Processing ${filePath}...`);
  let content = await readFile(filePath, 'utf8');
  
  // Skip if already updated with BlogPostLayout
  if (content.includes('BlogPostLayout')) {
    console.log(`- Already using BlogPostLayout, skipping`);
    return false;
  }
  
  // Extract information
  const pageInfo = extractPostInfo(content, filePath);
  const id = path.basename(path.dirname(filePath));
  
  // Create jsonLd data
  const jsonLd = `
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "${pageInfo.title}",
    "description": "Learn about ${pageInfo.title.toLowerCase()}",
    "author": {
      "@type": "Organization",
      "name": "${pageInfo.author}"
    },
    "publisher": {
      "@type": "Organization",
      "name": "AI-Vertise",
      "logo": {
        "@type": "ImageObject",
        "url": "/logo.png"
      }
    },
    "datePublished": "${pageInfo.date}",
    "dateModified": "${pageInfo.date}",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://ai-vertise.com/blog/${id}"
    }
  };`;
  
  // Get article content
  let bodyContent = pageInfo.articleContent;
  if (!bodyContent) {
    console.log(`- Could not extract article content`);
    return false;
  }
  
  // Add CTA section
  const ctaSection = getCtaTemplate(pageInfo.category);
  
  // Create the new imports
  const imports = `import { Metadata } from 'next';
import BlogPostLayout from '@/components/blog/BlogPostLayout';
import Link from 'next/link';`;
  
  // Create the new content
  const tagsArray = pageInfo.tags && pageInfo.tags.length > 0 
    ? `[${pageInfo.tags.map(tag => `'${tag}'`).join(', ')}]` 
    : '[]';
  
  const newContent = `${imports}

// Metadata for SEO
export const metadata: Metadata = {
  title: '${pageInfo.title} | AI-Vertise Boost',
  description: 'Learn about ${pageInfo.title.toLowerCase()} and how it can improve your marketing results.',
  openGraph: {
    title: '${pageInfo.title} | AI-Vertise Boost',
    description: 'Learn about ${pageInfo.title.toLowerCase()} and how it can improve your marketing results.',
    images: [
      {
        url: '/images/blog/placeholder.svg',
        width: 1200,
        height: 630,
        alt: '${pageInfo.title}',
      }
    ],
  },
};

${jsonLd}

export default function BlogPost() {
  return (
    <BlogPostLayout
      title="${pageInfo.title}"
      date="${pageInfo.date}"
      author="${pageInfo.author}"
      readTime="${pageInfo.readTime}"
      tags=${tagsArray}
      structuredData={jsonLd}
    >
      ${bodyContent}
      ${ctaSection}
    </BlogPostLayout>
  );
}`;

  await writeFile(filePath, newContent, 'utf8');
  console.log(`- Updated successfully`);
  return true;
}

async function main() {
  try {
    const blogPages = await findBlogPages(BLOG_DIR);
    console.log(`Found ${blogPages.length} blog pages to process`);
    
    let updatedCount = 0;
    for (const page of blogPages) {
      const updated = await updateBlogPost(page);
      if (updated) updatedCount++;
    }
    
    console.log(`Updated ${updatedCount} files to use BlogPostLayout and added CTAs`);
  } catch (error) {
    console.error('Error:', error);
  }
}

main(); 