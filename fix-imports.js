const fs = require('fs');
const path = require('path');

// Function to recursively get all .ts, .tsx, .js, .jsx files in a directory
function getAllFiles(dirPath, arrayOfFiles = []) {
  const files = fs.readdirSync(dirPath);

  files.forEach(file => {
    const filePath = path.join(dirPath, file);
    if (fs.statSync(filePath).isDirectory()) {
      arrayOfFiles = getAllFiles(filePath, arrayOfFiles);
    } else {
      if (/\.(tsx|ts|jsx|js)$/.test(file)) {
        arrayOfFiles.push(filePath);
      }
    }
  });

  return arrayOfFiles;
}

// Function to fix imports in a file
function fixImportsInFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;

    // First, replace all @/app/ with a temporary placeholder
    content = content.replace(/@\/app\//g, '___TEMP_APP___');
    
    // Then replace all @/ with @/app/ (this will impact both @/ and @/lib, @/components, etc.)
    content = content.replace(/@\//g, '@/app/');
    
    // Finally, replace the temporary placeholder back to @/
    content = content.replace(/___TEMP_APP___/g, '@/');

    // Only write back to file if content changed
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed imports in: ${filePath}`);
      return true;
    }
    return false;
  } catch (err) {
    console.error(`Error processing file ${filePath}:`, err);
    return false;
  }
}

// Main function
function main() {
  const appDir = path.join(__dirname, 'app');
  console.log(`Scanning directory: ${appDir}`);
  
  const files = getAllFiles(appDir);
  console.log(`Found ${files.length} files to process`);
  
  let fixedFilesCount = 0;
  
  files.forEach(file => {
    if (fixImportsInFile(file)) {
      fixedFilesCount++;
    }
  });
  
  console.log(`Fixed imports in ${fixedFilesCount} files`);
}

main(); 