import { useState, useEffect } from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import { getTodos, addTodo, deleteTodo, toggleComplete } from "./services/api";

export default function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodos().then(setTodos);
  }, []);

  const handleAddTodo = async (text) => {
    const newTodo = await addTodo(text);
    console.log("New Todo:", newTodo); // 调试信息
    setTodos([newTodo, ...todos]);
    console.log("Updated Todos:", [newTodo, ...todos]); // 调试信息
  };

  const handleDeleteTodo = async (id) => {
    await deleteTodo(id);
    setTodos(todos.filter((todo) => todo._id !== id));
  };

  const handleToggleComplete = async (id) => {
    try {
      console.log("Toggling complete for ID:", id); // 调试信息
      const updatedTodo = await toggleComplete(id);
      setTodos(todos.map((todo) => (todo._id === id ? updatedTodo : todo)));
    } catch (error) {
      console.error("Error in handleToggleComplete:", error); // 调试信息
    }
  };

  return (
    <div className="container">
      <main className="app">
        <h1 className="app__title">🎯 finito</h1>
        <TodoForm onAdd={handleAddTodo} />
        <TodoList
          todos={todos}
          onDelete={handleDeleteTodo}
          onToggle={handleToggleComplete}
        />
      </main>
    </div>
  );
}
