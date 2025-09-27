import { ENV } from "./lib/env.js";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import connectDB from "./lib/db.js";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import cookieParser from "cookie-parser";
import cors from "cors";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = ENV.PORT || 4000;

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// 🔑 very important: allow cookies from frontend
app.use(
  cors({
    origin: "http://localhost:5173", // change to your frontend URL
    credentials: true,
  })
);

// routes
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

// serve React in prod
if (ENV.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../../frontend/dist")));
  app.get("*", (req, res) =>
    res.sendFile(path.join(__dirname, "../../frontend", "dist", "index.html"))
  );
}

// start server
async function init() {
  try {
    await connectDB();
    app.listen(PORT, () => console.log(`Server running at localhost:${PORT}`));
  } catch (err) {
    console.error("Failed to connect to database:", err);
    process.exit(1);
  }
}

init();
