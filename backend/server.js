import dotenv from "dotenv";
dotenv.config();

console.log("✅ SERVER FILE STARTED");

// ✅ FORCE FILE EXECUTION
import "./src/cron/dailyBlog.cron.js";

// ✅ Start server
import app from "./src/app.js";

app.listen(5000, () => {
  console.log("✅ Server running on http://localhost:5000");
});