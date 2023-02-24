import { useDispatch } from "react-redux";
import { removeTodo, toggleTodoComplete } from "../store/todoSlise";

function TodoItem({ id, completed, text }) {
  const dispatch = useDispatch();

  return (
    <li>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => dispatch(toggleTodoComplete({ id }))}
      />
      <span>{text}</span>
      <span
        onClick={() => dispatch(removeTodo({ id }))}
        style={{ color: "red", cursor: "pointer" }}
      >
        &times;
      </span>
    </li>
  );
}

export default TodoItem;
