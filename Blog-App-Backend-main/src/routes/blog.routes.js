import express from "express";
import {
  getBlogs,
  getBlogById,
  createBlog,
  updateBlog,  // ✅ Added this to handle Edit saves
  deleteBlog,
  approveBlog 
} from "../controllers/blog.controller.js";

const router = express.Router();

router.get("/", getBlogs);
router.get("/:id", getBlogById);
router.post("/", createBlog);
router.delete("/:id", deleteBlog);

// ✅ FIX: This handles the general update (Edit Form "Save Changes")
router.patch("/:id", updateBlog);

// ✅ NEW: Route specifically for Superadmin to approve an activity
router.patch("/approve/:id", approveBlog);

export default router;