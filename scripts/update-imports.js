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
  let modified = false;
  
  // Update imports from app/components to components
  const componentsRegex = /@\/app\/components\//g;
  if (componentsRegex.test(content)) {
    content = content.replace(componentsRegex, '@/components/');
    modified = true;
  }
  
  // Update imports from app/lib to lib
  const libRegex = /@\/app\/lib\//g;
  if (libRegex.test(content)) {
    content = content.replace(libRegex, '@/lib/');
    modified = true;
  }
  
  // Update imports from app/data to data
  const dataRegex = /@\/app\/data\//g;
  if (dataRegex.test(content)) {
    content = content.replace(dataRegex, '@/data/');
    modified = true;
  }
  
  // Update imports from app/config to config
  const configRegex = /@\/app\/config\//g;
  if (configRegex.test(content)) {
    content = content.replace(configRegex, '@/config/');
    modified = true;
  }
  
  // Update imports from app/types to types
  const typesRegex = /@\/app\/types\//g;
  if (typesRegex.test(content)) {
    content = content.replace(typesRegex, '@/types/');
    modified = true;
  }
  
  // Handle relative imports within the new directories
  // This is more complex and might require specific adjustments
  // Commented out for now as it would need careful implementation
  
  if (modified) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated imports in: ${filePath}`);
  }
}

// Start the process from the src directory
console.log('Updating import paths...');
scanDirectory('./src');
console.log('Done updating imports!'); 