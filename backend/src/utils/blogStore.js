import fs from "fs";
import path from "path";

const dataDir = path.join(process.cwd(), "data");
const filePath = path.join(dataDir, "blogs.json");

// ✅ ensure directory & file exist
if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir);
if (!fs.existsSync(filePath)) fs.writeFileSync(filePath, "[]");

export const BLOG_FILE_PATH = filePath;

export function readBlogs() {
  try {
    return JSON.parse(fs.readFileSync(filePath, "utf8") || "[]");
  } catch {
    return [];
  }
}

export function writeBlogs(blogs) {
  fs.writeFileSync(filePath, JSON.stringify(blogs, null, 2));
}

export function isDuplicate(slug) {
  const blogs = readBlogs();
  return blogs.some(b => b.slug === slug);
}