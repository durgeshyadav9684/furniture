import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectRoot = __dirname;
const publicDir = path.join(projectRoot, 'public');

const externalImages = new Set();
const localImages = new Set();

function findImagesInFile(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    const regex = /(?:image|src)[:=]\s*["']([^"']+)["']/g;
    let match;
    while ((match = regex.exec(content)) !== null) {
        let url = match[1];
        if (url.startsWith('http')) externalImages.add(url);
        else if (url.startsWith('/') || url.includes('.png') || url.includes('.jpg') || url.includes('.webp')) localImages.add(url);
    }
    const bgRegex = /url\(['"]?([^'"]+)['"]?\)/g;
    while ((match = bgRegex.exec(content)) !== null) {
        let url = match[1];
        if (url.startsWith('http')) externalImages.add(url);
        else localImages.add(url);
    }
}

function walkDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            if (file !== 'node_modules' && file !== '.next' && file !== '.git') walkDir(fullPath);
        } else if (file.endsWith('.js') || file.endsWith('.tsx') || file.endsWith('.ts')) findImagesInFile(fullPath);
    }
}

walkDir(projectRoot);

const brokenLocal = [];
for (const img of localImages) {
    const filePath = img.startsWith('/') ? path.join(publicDir, img) : path.join(projectRoot, img);
    if (!fs.existsSync(filePath)) brokenLocal.push(img);
}

const brokenExternal = [];
const urls = Array.from(externalImages);
const checks = urls.map(async (url) => {
    try {
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 8000);
        const response = await fetch(url, { method: 'GET', signal: controller.signal, headers: { 'User-Agent': 'Mozilla/5.0' } });
        clearTimeout(timeout);
        if (!response.ok) brokenExternal.push(`[Status ${response.status}] ${url}`);
    } catch (error) {
        brokenExternal.push(`[Error: ${error.name === 'AbortError' ? 'Timeout' : error.message}] ${url}`);
    }
});

await Promise.all(checks);

if (brokenLocal.length > 0) {
    console.log('BROKEN_LOCAL_START');
    brokenLocal.forEach(img => console.log(img));
    console.log('BROKEN_LOCAL_END');
} else {
    console.log('NO_BROKEN_LOCAL');
}

if (brokenExternal.length > 0) {
    console.log('BROKEN_EXTERNAL_START');
    brokenExternal.forEach(err => console.log(err));
    console.log('BROKEN_EXTERNAL_END');
} else {
    console.log('NO_BROKEN_EXTERNAL');
}
