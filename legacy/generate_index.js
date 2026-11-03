const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, 'data');
const OUTPUT_FILE = path.join(DATA_DIR, 'index.json');

const index = {
    posts: [],
    inputs: {
        books: [],
        movies: [],
        podcasts: [],
        videos: []
    }
};

// Helper to get files from a directory
function getFiles(dir) {
    if (!fs.existsSync(dir)) return [];
    return fs.readdirSync(dir).filter(file => file.endsWith('.md'));
}

// 1. Scan Posts
const postsDir = path.join(DATA_DIR, 'posts');
index.posts = getFiles(postsDir);
console.log(`Found ${index.posts.length} posts.`);

// 2. Scan Inputs
Object.keys(index.inputs).forEach(category => {
    const categoryDir = path.join(DATA_DIR, 'inputs', category);
    index.inputs[category] = getFiles(categoryDir);
    console.log(`Found ${index.inputs[category].length} ${category}.`);
});

// 3. Write index.json
fs.writeFileSync(OUTPUT_FILE, JSON.stringify(index, null, 2));
console.log(`Index generated at ${OUTPUT_FILE}`);
