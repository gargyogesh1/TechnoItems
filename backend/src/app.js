import express from "express";
import cors from "cors";
import blogRoutes from "./routes/blog.routes.js";
import meetingRoutes from "./routes/blog.routes.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/blogs", blogRoutes);
app.use("/api", meetingRoutes);

export default app;