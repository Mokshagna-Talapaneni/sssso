import mongoose from "mongoose";
import dotenv from "dotenv";
import User from "./src/models/user.model.js";

dotenv.config();

async function checkLocalDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("--- Connection Successful ---");
    console.log("Connected to database:", mongoose.connection.name);

    const users = await User.find({});
    console.log(`Found ${users.length} user(s) in the 'users' collection.`);
    
    users.forEach(u => {
      console.log(`- Email in DB: "${u.email}" | Role: ${u.role}`);
    });

    process.exit(0);
  } catch (err) {
    console.error("Connection Failed:", err.message);
    process.exit(1);
  }
}

checkLocalDB();