const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Get the blog post data to use the correct dates
const blogIndexPath = path.resolve(__dirname, '../src/data/blog/index.ts');
const blogPostsPath = path.resolve(__dirname, '../src/data/blog/posts.ts');

// Function to extract post IDs and dates from the data files
function extractDatesFromFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Extract date information using regex
  const dateRegex = /id:\s*['"]([^'"]+)['"][^}]*date:\s*['"]([^'"]+)['"]/g;
  const dates = {};
  
  let match;
  while ((match = dateRegex.exec(content)) !== null) {
    const [, id, date] = match;
    dates[id] = date;
  }
  
  return dates;
}

// Get dates from both files
const indexDates = extractDatesFromFile(blogIndexPath);
const postsDates = extractDatesFromFile(blogPostsPath);

// Merge dates, preferring posts.ts dates
const postDates = { ...indexDates, ...postsDates };

// Find all blog post page files
const blogPostPaths = glob.sync(path.resolve(__dirname, '../src/app/blog/*/page.tsx'));

// Set a fallback date
const defaultDate = 'May 8, 2024';
const defaultDateISO = '2024-05-08';

// Process each file
let updatedFiles = 0;

blogPostPaths.forEach(filePath => {
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Get post ID from the file path
  const postId = path.basename(path.dirname(filePath));
  
  // Get the correct date for this post
  let postDate = postDates[postId] || defaultDate;
  
  // Convert to ISO format for publishedTime attributes
  const dateParts = postDate.split(' ');
  const month = dateParts[0];
  const day = parseInt(dateParts[1].replace(',', ''), 10);
  const year = parseInt(dateParts[2], 10);
  
  const months = {
    'January': '01', 'February': '02', 'March': '03', 'April': '04', 
    'May': '05', 'June': '06', 'July': '07', 'August': '08', 
    'September': '09', 'October': '10', 'November': '11', 'December': '12'
  };
  
  const monthNumber = months[month];
  const isoDate = monthNumber ? `${year}-${monthNumber}-${day.toString().padStart(2, '0')}` : defaultDateISO;
  
  // Replace all instances of dates in the file
  let updatedContent = content;
  
  // Replace publishedTime format (yyyy-mm-dd)
  updatedContent = updatedContent.replace(/publishedTime:\s*['"](\d{4}-\d{2}-\d{2})['"]/, `publishedTime: '${isoDate}'`);
  
  // Replace datePublished and dateModified in JSON-LD
  updatedContent = updatedContent.replace(/"datePublished":\s*"[^"]*"/, `"datePublished": "${postDate}"`);
  updatedContent = updatedContent.replace(/"dateModified":\s*"[^"]*"/, `"dateModified": "${postDate}"`);
  
  // Replace date in BlogPostLayout component
  updatedContent = updatedContent.replace(/date="[^"]*"/, `date="${postDate}"`);
  
  // Fix inline date constants
  updatedContent = updatedContent.replace(/const date = ['"][^'"]*['"]/, `const date = '${postDate}'`);
  
  // Fix 2025 references in article text (if not part of a title that needs to keep the future year)
  if (!postId.includes('2025') && !postId.includes('trends')) {
    // Replace future dates in article text, but preserve titles that should mention future
    // Be cautious with this - only replace generic date references
    updatedContent = updatedContent.replace(/in 2025,/g, 'in 2024,');
    updatedContent = updatedContent.replace(/for 2025/g, 'for 2024');
    updatedContent = updatedContent.replace(/of 2025/g, 'of 2024');
  }
  
  // Only write if changes were made
  if (updatedContent !== content) {
    fs.writeFileSync(filePath, updatedContent, 'utf8');
    console.log(`Updated dates in: ${postId}`);
    updatedFiles++;
  }
});

console.log(`\nDone! Updated ${updatedFiles} files.`); 