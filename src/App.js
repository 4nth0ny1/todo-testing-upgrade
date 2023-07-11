import "./App.css";
import { useState } from "react";
import TodoList from "./components/todo/TodoList";
import CreateTodo from "./components/todo/CreateTodo";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  return (
    <div className="App">
      <h1>Todo App</h1>
      <CreateTodo onNewItem={addTodo} />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
