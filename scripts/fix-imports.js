const fs = require('fs');
const path = require('path');

// Function to recursively scan directory
function scanDirectory(directoryPath) {
  const files = fs.readdirSync(directoryPath, { withFileTypes: true });
  
  files.forEach(file => {
    const filePath = path.join(directoryPath, file.name);
    
    if (file.isDirectory()) {
      // Skip node_modules, .next, and other non-source directories
      if (file.name !== 'node_modules' && file.name !== '.next' && file.name !== '.git') {
        scanDirectory(filePath);
      }
    } else if (
      file.name.endsWith('.js') || 
      file.name.endsWith('.jsx') || 
      file.name.endsWith('.ts') || 
      file.name.endsWith('.tsx')
    ) {
      updateImports(filePath);
    }
  });
}

// Function to update imports in a file
function updateImports(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let updated = false;
  
  // Check if the file is in src directory
  const isInSrc = filePath.includes('/src/');
  
  if (isInSrc) {
    // For files inside src/app directory, update the @/ imports to include app components
    // For example: from '@/components/Navbar' to '@/app/components/Navbar'
    if (filePath.includes('/src/app/blog/') || filePath.includes('/src/app/about/') || 
        filePath.includes('/src/app/contact/') || filePath.includes('/src/app/privacy/') ||
        filePath.includes('/src/app/terms/') || filePath.includes('/src/app/policy/') ||
        filePath.includes('/src/app/pricing/')) {
      
      const updatedContent = content.replace(/from\s+['"]@\/components\//g, 'from \'@/app/components/');
      if (updatedContent !== content) {
        content = updatedContent;
        updated = true;
      }
      
      // Fix other common imports
      const fixedContent = content.replace(/from\s+['"]@\/lib\//g, 'from \'@/app/lib/');
      if (fixedContent !== content) {
        content = fixedContent;
        updated = true;
      }
    }
    
    // Also update any relative path imports that previously referenced app folder
    const relativePathFixed = content.replace(/from\s+['"]\.\.\/\.\.\/app\//g, 'from \'..\/..\/');
    if (relativePathFixed !== content) {
      content = relativePathFixed;
      updated = true;
    }
  }
  
  if (updated) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated imports in: ${filePath}`);
  }
}

// Start scanning from the project root
console.log('Starting to fix imports...');
scanDirectory('./src');
console.log('Finished fixing imports.'); 