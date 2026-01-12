import Blog from "../models/blog.model.js";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Admin login
export const adminLogin = async (req, res) => {
  const { email, password } = req.body;

  const admin = await User.findOne({ email, role: { $in: ["admin", "superadmin"] } });
  if (!admin) return res.status(401).json({ message: "Unauthorized" });

  const isMatch = await bcrypt.compare(password, admin.password);
  if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });

  const token = jwt.sign(
    { id: admin._id, role: admin.role },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );

  res.json({ token });
};

// Get pending blogs
export const getPendingBlogs = async (req, res) => {
  const blogs = await Blog.find({ status: "pending" });
  res.json(blogs);
};

// Approve blog
export const approveBlog = async (req, res) => {
  const blog = await Blog.findByIdAndUpdate(
    req.params.id,
    { status: "approved" },
    { new: true }
  );

  res.json(blog);
};

// Create admin (Super Admin only)
export const createAdmin = async (req, res) => {
  const { email, password, role } = req.body;

  const hashed = await bcrypt.hash(password, 10);

  const admin = await User.create({
    email,
    password: hashed,
    role // admin or superadmin
  });

  res.status(201).json(admin);
};
