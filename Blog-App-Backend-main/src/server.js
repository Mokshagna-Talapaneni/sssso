import app from "./app.js";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 5001;

// ✅ Vercel optimization: Use a cached connection if available
// This prevents multiple connections in a serverless environment
let isConnected = false;

const connectDB = async () => {
  if (isConnected) return;
  
  try {
    const db = await mongoose.connect(process.env.MONGO_URI);
    isConnected = db.connections[0].readyState;
    console.log("Sairam! MongoDB Connected");
  } catch (err) {
    console.error("Database Connection Failed:", err);
  }
};

// In local development, we need to call listen
if (process.env.NODE_ENV !== "production") {
  connectDB().then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  });
}

// ✅ Crucial for Vercel: Export the app and the connectDB function
export default async (req, res) => {
  await connectDB();
  return app(req, res);
};