import app from "./app.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";
import express from "express";
import { fileURLToPath } from 'url';

dotenv.config();

const PORT = process.env.PORT || 5001;

// Fix for __dirname in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Database Connection
const connectDB = async () => {
  try {
    // Railway will provide MONGO_URI from its environment variables
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Sairam! MongoDB Connected to Atlas");
  } catch (err) {
    console.error("Database Connection Failed:", err.message);
    // Don't kill the process immediately in development, but do in production
    if (process.env.NODE_ENV === "production") process.exit(1);
  }
};

// --- PRODUCTION SETUP ---
if (process.env.NODE_ENV === "production") {
  /**
   * Adjust the path below if your 'dist' folder is in a different spot.
   * If backend and frontend are in the same root, use: path.join(__dirname, "../../SSSO-main/dist")
   */
  const frontendPath = path.resolve(__dirname, "../../SSSO-main/dist");
  
  // Serve static files
  app.use(express.static(frontendPath));

  // The "Catch-All" route: If the URL doesn't match an API route, serve React
  app.get("*", (req, res) => {
    res.sendFile(path.join(frontendPath, "index.html"));
  });
}

// Start Server
connectDB().then(() => {
  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Sairam! Server running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`);
  });
});