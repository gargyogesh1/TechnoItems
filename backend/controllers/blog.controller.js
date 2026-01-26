import { generateBlog } from "../src/services/blog.service.js.js";

export const createBlog = async (req, res) => {
  const blog = await generateBlogJSON(req.body.topic);

  db.prepare(`
    INSERT INTO blogs (id, slug, data, createdAt)
    VALUES (?, ?, ?, ?)
  `).run(
    blog.id,
    blog.slug,
    JSON.stringify(blog),
    new Date().toISOString()
  );

  res.json(blog);
};