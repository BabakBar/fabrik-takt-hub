
#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const ALLOWED_COLORS = ['#2F4F4F', '#F9A825', '#E5E5E5', '#FFFFFF', '#000000'];
const FORBIDDEN_PATTERN = /#[0-9A-Fa-f]{6}|#[0-9A-Fa-f]{3}/g;

function auditFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const matches = content.match(FORBIDDEN_PATTERN) || [];
  const violations = matches.filter(color =>
    !ALLOWED_COLORS.includes(color.toUpperCase()));

  if (violations.length > 0) {
    console.error(`❌ ${filePath}: Found forbidden colors: ${violations.join(', ')}`);
    return false;
  }
  return true;
}

function auditDirectory(dir) {
  const extensions = ['.css', '.js', '.ts', '.jsx', '.tsx'];
  let hasViolations = false;

  function walkDir(currentPath) {
    const files = fs.readdirSync(currentPath);
    
    for (const file of files) {
      const fullPath = path.join(currentPath, file);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
        walkDir(fullPath);
      } else if (extensions.some(ext => file.endsWith(ext))) {
        if (!auditFile(fullPath)) {
          hasViolations = true;
        }
      }
    }
  }

  walkDir(dir);
  
  if (hasViolations) {
    console.error('\n❌ Color audit failed! Please use only approved colors.');
    process.exit(1);
  } else {
    console.log('✅ Color audit passed! All colors are approved.');
  }
}

// Run audit on src directory
auditDirectory('./src');
