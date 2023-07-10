import React, { useState } from "react";

export default function CreateTodo({ onNewItem }) {
  const [input, setInput] = useState("");
  return (
    <div data-testid="CreateTodo">
      <h1>Create Todo Form</h1>
      <input type="text" onChange={(e) => setInput(e.target.value)} />
      <button onClick={() => onNewItem(input)} disabled={!input} type="submit">
        add item
      </button>
    </div>
  );
}
