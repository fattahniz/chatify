import "dotenv/config";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import connectDB from "./lib/db.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";

const app = express();

const PORT = process.env.PORT || 4000;

async function init() {
  try {
    await connectDB();
    app.listen(PORT, () => console.log(`Server running at localhost:${PORT}`));
  } catch (err) {
    console.error("Failed to connect to database:", err);
    process.exit(1);
  }
}

// Handle unhandled promise rejections
process.on("unhandledRejection", (reason, promise) => {
  console.error("Unhandled Rejection at:", promise, "reason:", reason);
  process.exit(1);
});

init();

app.use(express.json(), express.urlencoded({ extended: true }));
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

// Serve React build
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../../frontend/dist")));
  app.get("*", (req, res) =>
    res.sendFile(path.join(__dirname, "../../frontend", "dist", "index.html"))
  );
}
