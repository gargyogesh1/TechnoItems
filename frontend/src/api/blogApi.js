// const API_BASE = "http://localhost:5000/api/blogs";
const API_BASE = "https://technoitemsbackend.onrender.com/api/blogs";

export const getBlogs = async () => {
  const res = await fetch(API_BASE);
  return res.json();
};

export const getBlogBySlug = async (slug) => {
  const res = await fetch(`${API_BASE}/${slug}`);
  return res.json();
};