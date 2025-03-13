import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import todoRoutes from "./routes/todoRoutes.js";

dotenv.config({ path: "../.env" });

const app = express();
const TEST_CONNECTION = process.env.TEST_CONNECTION;
const ANOTHER_NAME = process.env.ANOTHER_NAME;
const REACT_APP_API_URL = process.env.REACT_APP_API_URL;

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
  res.send(
    `Text connection is: X${TEST_CONNECTION}X \n Another name is: X${ANOTHER_NAME}X \n api url is: X${REACT_APP_API_URL}X`
  );
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
