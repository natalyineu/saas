const fs = require('fs');
const path = require('path');

// Load the blog post registry to generate URLs
const blogDataPath = path.join(__dirname, '..', 'src', 'data', 'blog', 'index.ts');
const blogDataContent = fs.readFileSync(blogDataPath, 'utf8');

// Extract blog post IDs using regex
function extractBlogIds() {
  const blogPostsMatch = blogDataContent.match(/export const blogPosts: BlogPost\[] = \[([\s\S]*?)\];/);
  const successStoriesMatch = blogDataContent.match(/export const successStories: BlogPost\[] = \[([\s\S]*?)\];/);
  
  const blogPostIds = [];
  
  if (blogPostsMatch) {
    const idMatches = blogPostsMatch[1].match(/id: '([^']+)'/g);
    if (idMatches) {
      idMatches.forEach(match => {
        const id = match.replace("id: '", "").replace("'", "");
        blogPostIds.push(id);
      });
    }
  }
  
  if (successStoriesMatch) {
    const idMatches = successStoriesMatch[1].match(/id: '([^']+)'/g);
    if (idMatches) {
      idMatches.forEach(match => {
        const id = match.replace("id: '", "").replace("'", "");
        blogPostIds.push(id);
      });
    }
  }
  
  return blogPostIds;
}

// Get blog post IDs
const blogPostIds = extractBlogIds();

// Define required URLs for our site
const requiredUrls = [
  '/',
  '/blog',
  '/terms',
  '/privacy',
  '/policy',
  '/cookie-policy',
  '/faq',
  // Add blog post URLs dynamically
  ...blogPostIds.map(id => `/blog/${id}`)
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
function verifyUrls() {
  console.log('Verifying required URLs...');
  
  let allValid = true;
  
  for (const url of requiredUrls) {
    const exists = checkUrlPath(url);
    if (!exists) {
      console.error(`❌ Missing URL path: ${url}`);
      allValid = false;
    } else {
      console.log(`✅ Found URL path: ${url}`);
    }
  }
  
  if (allValid) {
    console.log('\n✅ All required URLs are valid!');
    process.exit(0);
  } else {
    console.error('\n❌ Some required URLs are missing!');
    process.exit(1);
  }
}

// Run the verification
verifyUrls(); 