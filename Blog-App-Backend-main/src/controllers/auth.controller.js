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
 * Handle New Admin Registration (Admin only)
 * Path: POST /api/auth/register-admin
 */
export const registerByAdmin = async (req, res) => {
  const { email, role } = req.body;

  try {
    // Default password (hashed automatically by schema)
    const defaultPassword = "Sairam@1234";
    const cleanEmail = email.trim().toLowerCase();

    // Check if user already exists
    const existingUser = await User.findOne({ email: cleanEmail });
    if (existingUser) {
      return res.status(400).json({
        message: "User already exists"
      });
    }

    // Create user (DO NOT hash password here)
    const newUser = new User({
      email: cleanEmail,
      password: defaultPassword,
      role: role || "admin"
    });

    await newUser.save();

    // Skip email if credentials missing (prevents crash)
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
      text: `Sairam.

Your admin account is ready.

Login Email: ${cleanEmail}
Temporary Password: ${defaultPassword}

Please login and change your password.
`
    });

    res.status(201).json({
      message: "Admin registered successfully and email sent."
    });

  } catch (error) {
    console.error("Registration Error:", error);
    res.status(500).json({ message: error.message });
  }
};
