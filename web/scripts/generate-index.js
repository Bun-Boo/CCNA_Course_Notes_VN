const fs = require('fs');
const path = require('path');

// Run this script from the project root to update web/src/search-index.json
const rootDir = process.cwd();
const notesDir = path.join(rootDir, 'web/public/notes');
const notesEnDir = path.join(rootDir, 'web/public/notes_en');
const outputFile = path.join(rootDir, 'web/src/search-index.json');

console.log('--- CCNA SEARCH INDEX GENERATOR ---');
console.log('Source (VI):', notesDir);
console.log('Source (EN):', notesEnDir);

const extractContent = (dir) => {
  if (!fs.existsSync(dir)) {
    console.error('Directory does not exist:', dir);
    return {};
  }
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.md'));
  const data = {};
  files.forEach(f => {
    const filePath = path.join(dir, f);
    const content = fs.readFileSync(filePath, 'utf8');
    // Clean markdown and normalize space
    const cleanContent = content
      .replace(/[#*`>\[\]\(\)]/g, ' ')
      .replace(/!\[.*?\]\(.*?\)/g, ' ') // Remove images
      .replace(/\s+/g, ' ')
      .trim();
    data[f] = cleanContent;
  });
  return data;
};

const index = {
  vi: extractContent(notesDir),
  en: extractContent(notesEnDir)
};

fs.mkdirSync(path.dirname(outputFile), { recursive: true });
fs.writeFileSync(outputFile, JSON.stringify(index, null, 2));
console.log('SUCCESS: Search index updated at', outputFile);
console.log('-----------------------------------');
