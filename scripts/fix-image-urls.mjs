import fs from 'fs/promises';
import path from 'path';

const ROOT = path.resolve('src');
const PARAMS = 'fmt=webp&w=800&q=75';
const exts = ['.ts', '.tsx', '.js', '.jsx', '.json', '.css', '.html'];

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      await walk(full);
    } else if (exts.includes(path.extname(e.name))) {
      await processFile(full);
    }
  }
}

async function processFile(file) {
  let txt = await fs.readFile(file, 'utf8');
  const urlRegex = /https?:\/\/[^"'\s)<>]+/g;
  let changed = false;
  txt = txt.replace(urlRegex, (url) => {
    // skip non-image-like urls (heuristic)
    const lower = url.toLowerCase();
    const isImage = /\.(jpe?g|png|gif|webp|svg)(?:$|[?#])/.test(lower) || /images\.unsplash\.com|plus\.unsplash\.com|betamedia\.experienceegypt/.test(lower) || /upload\.wikimedia\.org/.test(lower);
    if (!isImage) return url;
    if (url.includes('fmt=webp')) return url;
    const separator = url.includes('?') ? '&' : '?';
    changed = true;
    return url + separator + PARAMS;
  });
  if (changed) {
    await fs.writeFile(file, txt, 'utf8');
    console.log('Updated', file);
  }
}

(async () => {
  try {
    await walk(ROOT);
    console.log('Done');
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
