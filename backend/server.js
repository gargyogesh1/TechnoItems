import dotenv from "dotenv";
dotenv.config();

console.log("✅ SERVER FILE STARTED");

// ✅ FORCE FILE EXECUTION
import "./src/cron/dailyBlog.cron.js";

// ✅ Start server
import app from "./src/app.js";

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});