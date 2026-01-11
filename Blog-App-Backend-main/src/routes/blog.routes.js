import express from "express";
import {
  getBlogs,      // Change this from getAllBlogs to getBlogs
  getBlogById,
  createBlog,
  deleteBlog,
} from "../controllers/blog.controller.js";

const router = express.Router();

router.get("/", getBlogs);         // Ensure this matches the name above
router.get("/:id", getBlogById);
router.post("/", createBlog);
router.delete("/:id", deleteBlog);

export default router;