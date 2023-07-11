import "./App.css";
import { useState } from "react";
import TodoList from "./components/todo/TodoList";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, content: "Yoga" },
    { id: 2, content: "Write Tests" },
    { id: 3, content: "Cook Dinner" },
  ]);
  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
