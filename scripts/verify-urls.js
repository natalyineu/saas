const fs = require('fs');
const path = require('path');

// Define the required URLs from our task
const requiredUrls = [
  '/',
  '/blog',
  '/terms',
  '/privacy',
  '/policy',
  '/cookie-policy',
  '/faq',
  '/blog/ai-telegram-channel-strategy',
  '/blog/privacy-first-advertising',
  '/blog/social-media-ai-ads',
  '/blog/programmatic-advertising-ai',
  '/blog/social-media-ai-content',
  '/blog/ecommerce-personalization',
  '/blog/metaverse-marketing-opportunities',
  '/blog/telegram-ai-channel-selection',
  '/blog/ai-in-digital-advertising',
  '/blog/uk-advertising-landscape-2025',
  '/blog/urban-beans-case-study'
];

const appDir = path.join(__dirname, '..', 'src', 'app');

// Function to check if a URL path exists in the app directory
function checkUrlPath(urlPath) {
  // Remove leading slash and convert to file path
  const relativePath = urlPath === '/' ? '' : urlPath.substring(1);
  const filePath = path.join(appDir, relativePath);
  
  // Check if directory exists
  if (fs.existsSync(filePath)) {
    // Check if there's a page.tsx file
    if (fs.existsSync(path.join(filePath, 'page.tsx'))) {
      return true;
    }
  }
  
  return false;
}

// Main verification function
function verifyRequiredUrls() {
  console.log('Verifying required URLs...');
  let allValid = true;
  
  for (const url of requiredUrls) {
    const exists = checkUrlPath(url);
    console.log(`${exists ? '✅' : '❌'} ${url}`);
    
    if (!exists) {
      allValid = false;
    }
  }
  
  // Check for any missing blog posts
  const blogDir = path.join(appDir, 'blog');
  if (fs.existsSync(blogDir)) {
    const blogDirs = fs.readdirSync(blogDir, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory())
      .map(dirent => dirent.name);
    
    const blogUrls = requiredUrls.filter(url => url.startsWith('/blog/'))
      .map(url => url.substring('/blog/'.length));
    
    const missingBlogs = blogUrls.filter(blog => !blogDirs.includes(blog));
    
    if (missingBlogs.length > 0) {
      console.log('\nMissing blog directories:');
      missingBlogs.forEach(blog => console.log(`- ${blog}`));
    }
  }
  
  return allValid;
}

// Run the verification
const result = verifyRequiredUrls();

if (result) {
  console.log('\nAll required URLs are valid! ✅');
} else {
  console.log('\nSome required URLs are missing. ❌');
}

// Output result code for CI/CD pipelines
process.exit(result ? 0 : 1); 