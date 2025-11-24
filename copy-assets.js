import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sourceDir = path.resolve(__dirname, '../../assets');
const destDir = path.resolve(__dirname, 'public/assets');

console.log(`Copying from ${sourceDir} to ${destDir}`);

if (!fs.existsSync(destDir)){
    fs.mkdirSync(destDir, { recursive: true });
}

function copyRecursive(src, dest) {
    if (fs.existsSync(src)) {
        const stats = fs.statSync(src);
        if (stats.isDirectory()) {
            if (!fs.existsSync(dest)) {
                fs.mkdirSync(dest);
            }
            fs.readdirSync(src).forEach(childItemName => {
                copyRecursive(path.join(src, childItemName), path.join(dest, childItemName));
            });
        } else {
            fs.copyFileSync(src, dest);
        }
    }
}

try {
    copyRecursive(sourceDir, destDir);
    console.log('Assets copied successfully!');
} catch (err) {
    console.error('Error copying assets:', err);
}
