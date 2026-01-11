// src/app.js
import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.routes.js";

const app = express();

// 1. MUST COME FIRST: Middleware to parse incoming JSON
app.use(cors());
app.use(express.json()); 

// 2. MUST COME AFTER: Route definitions
app.use("/api/auth", authRoutes);

export default app;