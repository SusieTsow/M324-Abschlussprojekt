import express from "express";
import Todo from "../models/Todo.js";

const router = express.Router();

router.options("*", (req, res) => {
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, DELETE, PATCH, OPTIONS"
  );
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.send();
});

router.get("/", async (req, res) => {
  const todos = await Todo.find();
  res.send(todos);
});

router.post("/", async (req, res) => {
  const todo = new Todo({
    title: req.body.title,
    completed: false,
  });
  await todo.save();
  res.send(todo);
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

router.delete("/:id", async (req, res) => {
  try {
    const todo = await Todo.findByIdAndDelete(req.params.id);
    if (!todo) {
      return res.status(404).send();
    }
    res.send(todo);
  } catch (error) {
    res.status(500).send(error);
  }
});

export default router;
