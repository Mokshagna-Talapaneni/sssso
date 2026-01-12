// src/app.js
import express from "express";
import cors from "cors";

import authRoutes from "./routes/auth.routes.js";
import blogRoutes from "./routes/blog.routes.js";

const app = express();

/* ---------- MIDDLEWARE ---------- */
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* ---------- ROUTES ---------- */
app.use("/api/auth", authRoutes);
app.use("/api/blogs", blogRoutes);   // ⭐ THIS WAS MISSING

/* ---------- HEALTH CHECK ---------- */
app.get("/", (req, res) => {
  res.send("Backend running 🚀");
});

export default app;
