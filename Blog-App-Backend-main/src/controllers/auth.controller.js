import User from "../models/user.model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import nodemailer from "nodemailer";

/**
 * Handle Admin Login
 * Path: POST /api/auth/login
 */
export const login = async (req, res) => {
  const { email, password } = req.body;

  // Normalize email
  const cleanEmail = email ? email.trim().toLowerCase() : "";
  console.log(`Attempting login for: "${cleanEmail}"`);

  try {
    // Find user
    const user = await User.findOne({ email: cleanEmail });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Compare password (schema stores hashed password)
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Create JWT
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.status(200).json({
      token,
      role: user.role,
      message: "Sairam! Login Successful"
    });

  } catch (error) {
    console.error("Login Server Error:", error);
    res.status(500).json({ message: "Server error during login" });
  }
};

/**
 * Handle New Admin Registration (Superadmin only via middleware)
 * Path: POST /api/auth/register-admin
 */
export const registerByAdmin = async (req, res) => {
  const { email, role } = req.body;

  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }

  try {
    // Default password
    const defaultPassword = "Sairam@1234";
    const cleanEmail = email.trim().toLowerCase();

    // Check if user already exists
    const existingUser = await User.findOne({ email: cleanEmail });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Create user (Note: Password hashing should be in your User Model middleware)
    const newUser = new User({
      email: cleanEmail,
      password: defaultPassword,
      role: role || "admin"
    });

    await newUser.save();

    // Skip email if credentials missing
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.log("⚠️ Email credentials missing. Skipping email.");
      return res.status(201).json({
        message: "Admin registered successfully (email skipped)."
      });
    }

    // Nodemailer config (Gmail SMTP)
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: cleanEmail,
      subject: "SSSO Admin Access Created",
      text: `Sairam.\n\nYour admin account is ready.\n\nLogin Email: ${cleanEmail}\nTemporary Password: ${defaultPassword}\n\nPlease login and change your password.`
    });

    res.status(201).json({
      message: "Admin registered successfully and email sent."
    });

  } catch (error) {
    console.error("Registration Error:", error);
    res.status(500).json({ message: error.message });
  }
};

/**
 * Fetch all registered users
 * Path: GET /api/auth/users
 */
export const getAllUsers = async (req, res) => {
  try {
    // Find all users but don't send back their passwords
    const users = await User.find().select("-password");
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Sairam. Error fetching users", error: error.message });
  }
};

/**
 * Delete a user by ID
 * Path: DELETE /api/auth/users/:id
 */
export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    
    const userToDelete = await User.findById(id);
    if (!userToDelete) {
      return res.status(404).json({ message: "User not found" });
    }

    // Safety: Prevent deleting the superadmin
    if (userToDelete.role === "superadmin") {
      return res.status(403).json({ message: "Sairam. Cannot delete a Super Admin" });
    }

    await User.findByIdAndDelete(id);
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Sairam. Error deleting user", error: error.message });
  }
};