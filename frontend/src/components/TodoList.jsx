import TodoItem from "./TodoItem";

export default function TodoList({ todos, onToggle, onDelete }) {
  return (
    <ul className="todo__list">
      {todos.map((todo) => (
        <TodoItem
          key={todo._id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}
