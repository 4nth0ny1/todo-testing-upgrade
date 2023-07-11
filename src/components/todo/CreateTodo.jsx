import React, { useState } from "react";

export default function CreateTodo({ onNewItem }) {
  const [count, setCount] = useState(1);
  const [content, setContent] = useState("");

  const handleSubmit = () => {
    setCount(count + 1);
    setContent(content);
    onNewItem({ id: count, content: content });
    setContent("");
  };

  return (
    <div data-testid="CreateTodo">
      <h1>Create Todo Form</h1>
      <input
        type="text"
        data-testid="input"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button onClick={handleSubmit} disabled={!content} type="submit">
        add item
      </button>
    </div>
  );
}
