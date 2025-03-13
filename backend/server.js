import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import todoRoutes from "./routes/todoRoutes.js";

dotenv.config({ path: "../.env" });

const app = express();

// middleware
app.use(
  cors({
    origin: ["https://frontend-react-t3aq.onrender.com"],
  })
);
app.use(express.json());

// routes
app.use("/api/todos", todoRoutes);

// Health check route
app.get("/", (req, res) => {
  res.send("Welcome to the Todo API");
});

// Connect to MongoDB and start the server
const PORT = process.env.PORT || 5001;

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(
        `🚀 Server running on http://localhost:${process.env.PORT || 5001}`
      );
    });
  })
  .catch((err) => console.log("❌ MongoDB connection error:", err));
