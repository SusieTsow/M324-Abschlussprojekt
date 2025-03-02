export default function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li className="todo__item">
      <label>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo._id, todo.completed)}
        />
        <span className="bubble"></span>
      </label>
      <div className="todo__content">
        <span className={todo.completed ? "completed" : ""}>{todo.title}</span>
      </div>
      <div className="todo__actions">
        <button className="buttons" onClick={() => onDelete(todo._id)}>
          delete
        </button>
      </div>
    </li>
  );
}
