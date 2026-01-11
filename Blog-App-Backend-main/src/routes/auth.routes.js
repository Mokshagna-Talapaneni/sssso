import express from "express";
import { login, registerByAdmin } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/login", login);
router.post("/register-admin", registerByAdmin);

export default router;