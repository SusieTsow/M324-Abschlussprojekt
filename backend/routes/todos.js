import express from "express";
const router = express.Router();
import Todo from "../models/Todo.js";

// ...existing code...

router.options("*", (req, res) => {
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, DELETE, PATCH, OPTIONS"
  );
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.send();
});

router.patch("/:id/toggle", async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (!todo) {
      return res.status(404).send();
    }
    todo.completed = !todo.completed;
    await todo.save();
    res.send(todo);
  } catch (error) {
    res.status(500).send(error);
  }
});

// ...existing code...

export default router;
