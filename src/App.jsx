import { useState } from "react";
import { useDispatch } from "react-redux";

import { addTodo } from "./store/todoSlise";

import InputField from "./components/InputField";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const dispatch = useDispatch()

  function addTask() { 
    dispatch(addTodo({text}))
    setText('')
  }

  return (
    <div className="App">
      <InputField text={text} handleInput={setText} handleSubmit={addTask}/>
      <TodoList />
    </div>
  );
}

export default App;
