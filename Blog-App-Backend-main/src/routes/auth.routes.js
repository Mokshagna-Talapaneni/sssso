import express from "express";
import { login, registerByAdmin } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/login", login);
// Backend Route
router.post("/register-admin", authMiddleware, superAdminOnly, createAdmin);
export default router;