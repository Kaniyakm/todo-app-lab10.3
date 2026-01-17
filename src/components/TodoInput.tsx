// -------------------------------------------------------------
// STEP 9 — TODO INPUT
// -------------------------------------------------------------
// Allows user to add new todos.
// -------------------------------------------------------------

import { useState } from "react";
import { useTodos } from "../hooks/useTodos";

export const TodoInput = () => {
  const { addTodo } = useTodos();
  const [text, setText] = useState("");

  const handleAdd = () => {
    if (!text.trim()) return;
    addTodo(text);
    setText("");
  };

  return (
    <div>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a todo..."
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};
