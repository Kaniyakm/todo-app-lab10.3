// -------------------------------------------------------------
// STEP 11 — TODO LIST
// -------------------------------------------------------------
// Displays todos based on active filter.
// -------------------------------------------------------------

import { useTodos } from "../hooks/useTodos";
import { useContext } from "react";
import { FilterContext } from "../contexts/FilterContext";
import { TodoItem } from "./TodoItem";

export const TodoList = () => {
  const { todos } = useTodos();
  const filterCtx = useContext(FilterContext);

  if (!filterCtx) return null;

  const { filter } = filterCtx;

  const filtered = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  return (
    <ul>
      {filtered.length === 0 ? (
        <p>No todos yet!</p>
      ) : (
        filtered.map((todo) => <TodoItem key={todo.id} todo={todo} />)
      )}
    </ul>
  );
};
