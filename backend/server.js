import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import todoRoutes from "./routes/todoRoutes.js";

dotenv.config();

const app = express();

// middleware
app.use(
  cors({
    origin: "*", // Allow all origins (for development purposes)
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(express.json());

// routes
app.use("/api/todos", todoRoutes);

// Add a route for the root URL
app.get("/", (req, res) => {
  res.send("Welcome to the Todo API");
});

// Connect to MongoDB and start the server
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT || 5001, () => {
      console.log(
        `🚀 Server running on http://localhost:${process.env.PORT || 5001}`
      );
    });
  })
  .catch((err) => console.log("❌ MongoDB connection error:", err));
