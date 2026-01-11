import mongoose from "mongoose";
import dotenv from "dotenv";
import User from "./src/models/user.model.js";

dotenv.config();

async function createAdmin() {
  try {
    // 1. Connect to MongoDB
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected to:", mongoose.connection.name);

    // 2. Admin credentials
    const email = "moksha8280@gmail.com";   // CHANGE if needed
    const password = "Sairam@1234";         // Temporary password
    const role = "superadmin";

    // 3. Normalize email
    const cleanEmail = email.trim().toLowerCase();

    // 4. Remove existing user (avoid duplicates)
    await User.deleteOne({ email: cleanEmail });

    // 5. Create admin (PASSWORD MUST BE PLAIN TEXT)
    const admin = new User({
      email: cleanEmail,
      password: password,   // ❗ DO NOT HASH HERE
      role: role
    });

    // 6. Save (password will be hashed by schema pre-save hook)
    await admin.save();

    console.log("✅ SUCCESS: Super Admin created");
    console.log("📧 Email:", cleanEmail);
    console.log("🔐 Password:", password);
    console.log("🛡 Role:", role);

    process.exit(0);
  } catch (error) {
    console.error("❌ Failed to create admin:", error.message);
    process.exit(1);
  }
}

createAdmin();
