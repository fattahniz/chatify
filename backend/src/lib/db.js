import mongoose from "mongoose";
import { ENV } from "./env.js";
const connectDB = async () => {
  if (!ENV.MONGO_URI) {
    throw new Error("MONGO_URI environment variable is required");
  }

  try {
    const conn = await mongoose.connect(ENV.MONGO_URI);
    console.log(`MongoDB connected: ${conn.connection.host}`);
    return conn;
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
    throw error;
  }
};
export default connectDB;
