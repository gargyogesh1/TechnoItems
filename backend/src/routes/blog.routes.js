import express from "express";
import fs from "fs";
import path from "path";
import { readBlogs, BLOG_FILE_PATH } from "../utils/blogStore.js";

const router = express.Router();

// ✅ Get all blogs
router.get("/", (req, res) => {
  res.json(readBlogs());
});
router.get("/download", (req, res) => {
  try {
    if (!fs.existsSync(BLOG_FILE_PATH)) {
      return res.status(404).json({ message: "blogs.json not found on server" });
    }

    // Optional: you can set a nicer download name
    return res.download(BLOG_FILE_PATH, "blogs.json", (err) => {
      if (err) {
        console.error("Download error:", err);
        // headers might already be sent, so guard:
        if (!res.headersSent) {
          res.status(500).json({ message: "Failed to download file" });
        }
      }
    });
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
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