const fs = require('fs');
const path = require('path');
const { parse } = require('@babel/parser');
const traverse = require('@babel/traverse').default;

// Configuration
const BLOG_DIR = path.join(__dirname, '../src/app/blog');
const BLOG_POSTS_DATA = path.join(__dirname, '../src/data/blog/posts.ts');

// Load blog posts data
const blogPostsFile = fs.readFileSync(BLOG_POSTS_DATA, 'utf8');
let blogPosts = [];

// Extremely simplified TypeScript parsing for blogPosts array
const match = blogPostsFile.match(/export const blogPosts: BlogPost\[\] = \[([\s\S]*)\];/);
if (match && match[1]) {
  const postsSection = match[1];
  const postMatches = postsSection.match(/\{\s*id:\s*"([^"]+)"/g);
  
  if (postMatches) {
    blogPosts = postMatches.map(match => {
      const idMatch = match.match(/id:\s*"([^"]+)"/);
      return idMatch ? idMatch[1] : null;
    }).filter(Boolean);
  }
}

console.log(`Found ${blogPosts.length} blog posts in data file\n`);

// Result tracking
const results = {
  missingImages: [],
  missingAltText: [],
  missingMetadata: [],
  missingStructuredData: [],
  inconsistentImages: []
};

// Check each blog post directory
for (const postId of blogPosts) {
  const postDir = path.join(BLOG_DIR, postId);
  const postFile = path.join(postDir, 'page.tsx');
  
  // Skip if directory or file doesn't exist
  if (!fs.existsSync(postDir) || !fs.existsSync(postFile)) {
    console.log(`Warning: Blog post directory or file not found for ${postId}`);
    continue;
  }
  
  console.log(`Checking ${postId}...`);
  const fileContent = fs.readFileSync(postFile, 'utf8');
  
  // Check for image references
  const imagePathMatches = fileContent.match(/url:\s*['"]([^'"]+)['"]/g) || [];
  const imagePaths = imagePathMatches.map(match => {
    const pathMatch = match.match(/url:\s*['"]([^'"]+)['"]/);
    return pathMatch ? pathMatch[1] : null;
  }).filter(Boolean);
  
  // Check if the image exists
  for (const imagePath of imagePaths) {
    const fullImagePath = path.join(__dirname, '..', 'public', imagePath.replace(/^\//, ''));
    if (!fs.existsSync(fullImagePath)) {
      results.missingImages.push({ postId, imagePath });
    }
  }
  
  // Check for alt text
  const hasAltText = fileContent.includes('alt:');
  if (imagePaths.length > 0 && !hasAltText) {
    results.missingAltText.push({ postId });
  }
  
  // Check for OpenGraph metadata
  const hasOpenGraph = fileContent.includes('openGraph:');
  if (!hasOpenGraph) {
    results.missingMetadata.push({ postId, missing: 'OpenGraph' });
  }
  
  // Check for structured data
  const hasStructuredData = fileContent.includes('jsonLd');
  if (!hasStructuredData) {
    results.missingStructuredData.push({ postId });
  }
  
  // Check for image consistency (using the same image in metadata and structured data)
  if (imagePaths.length > 1) {
    const uniqueImages = new Set(imagePaths);
    if (uniqueImages.size > 1) {
      results.inconsistentImages.push({ 
        postId, 
        images: Array.from(uniqueImages) 
      });
    }
  }
}

// Display results
console.log("\n=== SEO Check Results ===");

if (results.missingImages.length) {
  console.log("\n❌ Missing Images:");
  results.missingImages.forEach(({ postId, imagePath }) => {
    console.log(`  - ${postId}: ${imagePath}`);
  });
} else {
  console.log("\n✅ All referenced images exist");
}

if (results.missingAltText.length) {
  console.log("\n❌ Missing Alt Text:");
  results.missingAltText.forEach(({ postId }) => {
    console.log(`  - ${postId}`);
  });
} else {
  console.log("✅ All images have alt text");
}

if (results.missingMetadata.length) {
  console.log("\n❌ Missing Metadata:");
  results.missingMetadata.forEach(({ postId, missing }) => {
    console.log(`  - ${postId}: missing ${missing}`);
  });
} else {
  console.log("✅ All posts have proper metadata");
}

if (results.missingStructuredData.length) {
  console.log("\n❌ Missing Structured Data:");
  results.missingStructuredData.forEach(({ postId }) => {
    console.log(`  - ${postId}`);
  });
} else {
  console.log("✅ All posts have structured data");
}

if (results.inconsistentImages.length) {
  console.log("\n❌ Inconsistent Images:");
  results.inconsistentImages.forEach(({ postId, images }) => {
    console.log(`  - ${postId}:`);
    images.forEach(img => console.log(`    * ${img}`));
  });
} else {
  console.log("✅ All posts use consistent images");
}

console.log("\nSEO check completed!"); 