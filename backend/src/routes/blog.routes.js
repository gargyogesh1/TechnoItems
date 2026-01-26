import express from "express";
import fs from "fs";
import { readBlogs, BLOG_FILE_PATH } from "../utils/blogStore.js";

const router = express.Router();

// ✅ Get all blogs
router.get("/", (req, res) => {
  res.json(readBlogs());
});

// ✅ Debug route
router.get("/debug/all", (req, res) => {
  res.json({
    cwd: process.cwd(),
    fileExists: fs.existsSync(BLOG_FILE_PATH),
    data: readBlogs(),
  });
});

// ✅ Get blog by slug
router.get("/:slug", (req, res) => {
  const blogs = readBlogs();
  const blog = blogs.find(b => b.slug === req.params.slug);

  if (!blog) {
    return res.status(404).json({ message: "Blog not found" });
  }

  res.json(blog);
});

export default router;