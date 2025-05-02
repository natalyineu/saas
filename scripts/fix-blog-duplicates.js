/**
 * Script to fix duplicate destructuring in blog post files
 * 
 * Usage: node scripts/fix-blog-duplicates.js
 */

const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const readdir = promisify(fs.readdir);
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);
const stat = promisify(fs.stat);

const BLOG_DIR = path.join(__dirname, '../src/app/blog');

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

async function fixDuplicateDestructuring(filePath) {
  console.log(`Processing ${filePath}...`);
  let content = await readFile(filePath, 'utf8');
  
  // Fix duplicate destructuring
  const hasDuplicateDestructuring = content.includes('const icon = getBlogIcon(postData);') && 
                                   content.match(/const \{[^}]*\} = postData;[\s\S]*?const \{[^}]*\} = postData;/);
  
  if (hasDuplicateDestructuring) {
    content = content.replace(
      /const \{([^}]*)\} = postData;[\s\S]*?const icon = getBlogIcon\(postData\);[\s\S]*?const stats = getBlogStats\(postData\);[\s\S]*?const \{([^}]*)\} = postData;/,
      'const { $1 } = postData;\n  const icon = getBlogIcon(postData);\n  const stats = getBlogStats(postData);'
    );
    
    await writeFile(filePath, content, 'utf8');
    console.log(`- Fixed duplicate destructuring`);
    return true;
  }
  
  // Fix duplicate postData declarations
  const hasDuplicatePostData = content.match(/const postData = \{[\s\S]*?\};[\s\S]*?const postData = \{/);
  
  if (hasDuplicatePostData) {
    // This is a more complex fix, we'll need to combine the two postData objects
    // First, extract both objects
    const matches = content.match(/const postData = \{([\s\S]*?)\};[\s\S]*?const postData = \{([\s\S]*?)\};/);
    
    if (matches) {
      // Create a merged version by taking properties from both objects
      const merged = `const postData = {
  id: '${path.basename(path.dirname(filePath))}',${matches[1]}${matches[2]}`;
      
      // Replace both declarations with the merged one
      content = content.replace(
        /const postData = \{[\s\S]*?\};[\s\S]*?const postData = \{[\s\S]*?\};/,
        merged
      );
      
      await writeFile(filePath, content, 'utf8');
      console.log(`- Fixed duplicate postData declarations`);
      return true;
    }
  }
  
  console.log(`- No issues found`);
  return false;
}

async function main() {
  try {
    const blogPages = await findBlogPages(BLOG_DIR);
    console.log(`Found ${blogPages.length} blog pages to process`);
    
    let fixedCount = 0;
    
    for (const page of blogPages) {
      const fixed = await fixDuplicateDestructuring(page);
      if (fixed) fixedCount++;
    }
    
    console.log(`Fixed issues in ${fixedCount} files`);
  } catch (error) {
    console.error('Error:', error);
  }
}

main(); 