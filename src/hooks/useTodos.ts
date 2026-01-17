// -------------------------------------------------------------
// useTodos Hook
// -------------------------------------------------------------
// Gives components safe access to the TodoContext.
// -------------------------------------------------------------

import { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";

export const useTodos = () => {
  const context = useContext(TodoContext);

  if (!context) {
    throw new Error("useTodos must be used inside a TodoProvider");
  }

  return context;
};
