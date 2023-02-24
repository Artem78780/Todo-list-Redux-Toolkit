import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

function TodoList() {
    const todos = useSelector(state => state.todos.todos)

  return (
    <ul>
      {todos.map((elem) => (
        <TodoItem
          key={elem.id}
          {...elem}
        />
      ))}
    </ul>
  );
}

export default TodoList;
