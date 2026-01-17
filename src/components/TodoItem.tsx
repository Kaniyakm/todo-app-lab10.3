// -------------------------------------------------------------
// STEP 10 — TODO ITEM
// -------------------------------------------------------------
// Represents a single todo with toggle, edit, delete.
// -------------------------------------------------------------

import { useState } from "react";
import type { Todo } from "../types/todo";
import { useTodos } from "../hooks/useTodos";

export const TodoItem = ({ todo }: { todo: Todo }) => {
  const { toggleTodo, deleteTodo, editTodo } = useTodos();
  const [editing, setEditing] = useState(false);
  const [value, setValue] = useState(todo.text);

  const saveEdit = () => {
    editTodo(todo.id, value);
    setEditing(false);
  };

  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
      />

      {editing ? (
        <>
          <input value={value} onChange={(e) => setValue(e.target.value)} />
          <button onClick={saveEdit}>Save</button>
        </>
      ) : (
        <span>{todo.text}</span>
      )}

      <button onClick={() => setEditing((prev) => !prev)}>
        {editing ? "Cancel" : "Edit"}
      </button>

      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </li>
  );
};

