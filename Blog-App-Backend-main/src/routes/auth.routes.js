import express from "express";
import { 
  login, 
  registerByAdmin, 
  getAllUsers, // Make sure to export this from controller
  deleteUser 
} from "../controllers/auth.controller.js";
import { authMiddleware, superAdminOnly } from "../middlewares/auth.middleware.js";

const router = express.Router();

// Public
router.post("/login", login);

// Admin Protected
// NOTE: Ensure your Frontend uses "/api/auth/register-admin"
router.post("/register-admin", authMiddleware, superAdminOnly, registerByAdmin);

// ✅ Add this to fix the 404 error
router.get("/users", authMiddleware, superAdminOnly, getAllUsers);

// ✅ Add this for the delete functionality
router.delete("/users/:id", authMiddleware, superAdminOnly, deleteUser);

export default router;