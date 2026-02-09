import cron from "node-cron";
import { generateBlog  } from "../services/blog.service.js";
import { readBlogs, writeBlogs, isDuplicate } from "../utils/blogStore.js";

console.log("✅ CRON FILE LOADED"); 
let isRunning = false;

const CATEGORIES = [
  "Web Development",
  "App Development",
  "Digital Marketing",
  "Data Science & AI",
  "E-Commerce & Marketplaces",
  "CRM & Business Management",
  "Job Portals & HR Tech",
  "Healthcare & Medical Tech",
  "Education & EdTech",
  "Finance, FinTech & Banking",
  "Logistics & Transportation",
  "Digital Marketing & Media",
  "Real Estate & Property Tech"
];
const randomItem = (arr) =>
  arr[Math.floor(Math.random() * arr.length)];

cron.schedule(
  // "0 10 * * *",
  "*/5 * * * *",
  // "0 10 */2 * *",
  async () => {
  if (isRunning) {
    console.log("⏳ Previous job still running, skipping...");
    return;
  }

  isRunning = true;
    try {
      console.log("✅ Cron job started");
      const category = randomItem(CATEGORIES);
      console.log("📂 Category:", category);
      // const topic = "Best UI Components for Modern Websites";
      const blog = await generateBlog(category);
      if (isDuplicate(blog.slug)) {
        console.log("⚠️ Duplicate blog skipped:", blog.slug);
        return;
      }

      const blogs = readBlogs();
      

      blogs.unshift({
        ...blog,
        createdAt: new Date().toISOString()
      });
      writeBlogs(blogs);
      console.log("✅ Daily blog published");
    }catch(error){
      console.error("❌ Cron error:", error.message);
    }
    finally {
      // ✅ THIS LINE WAS MISSING
      isRunning = false;
      console.log("🔓 Cron job finished, lock released");
    }

  },
  { timezone: "Asia/Kolkata" }
);
