// -------------------------------------------------------------
// STEP 4 — IMPLEMENT TODO CONTEXT (STATE + ACTIONS + PERSISTENCE)
// -------------------------------------------------------------
// This file completes Step 4 of the project plan.
// It provides:
//   - TodoContext (global state container)
//   - TodoProvider (wraps the app)
//   - Reducer for todo actions
//   - LocalStorage persistence
//
// This is the backbone of the entire Todo App.
// Every component that needs todos will consume this context.
// -------------------------------------------------------------

// -------------------------------------------------------------
// STEP 4.1 — RUNTIME IMPORTS
// -------------------------------------------------------------
import { createContext, useReducer, useEffect } from "react";

// -------------------------------------------------------------
// STEP 4.2 — TYPE-ONLY IMPORTS
// -------------------------------------------------------------
import type { ReactNode } from "react";
import type { Todo } from "../types/todo";

// -------------------------------------------------------------
// STEP 4.3 — DEFINE CONTEXT VALUE SHAPE
// -------------------------------------------------------------
interface TodoContextValue {
  todos: Todo[];
  addTodo: (text: string) => void;
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
  editTodo: (id: string, newText: string) => void;
  clearCompleted: () => void;
}

// -------------------------------------------------------------
// STEP 4.4 — CREATE CONTEXT
// -------------------------------------------------------------
export const TodoContext = createContext<TodoContextValue | undefined>(undefined);

// -------------------------------------------------------------
// STEP 4.5 — DEFINE REDUCER ACTION TYPES
// -------------------------------------------------------------
type TodoAction =
  | { type: "ADD_TODO"; payload: string }
  | { type: "TOGGLE_TODO"; payload: string }
  | { type: "DELETE_TODO"; payload: string }
  | { type: "EDIT_TODO"; payload: { id: string; newText: string } }
  | { type: "CLEAR_COMPLETED" };

// -------------------------------------------------------------
// STEP 4.6 — REDUCER FUNCTION
// -------------------------------------------------------------
const todoReducer = (state: Todo[], action: TodoAction): Todo[] => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: crypto.randomUUID(),
          text: action.payload,
          completed: false,
        },
      ];

    case "TOGGLE_TODO":
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );

    case "DELETE_TODO":
      return state.filter((todo) => todo.id !== action.payload);

    case "EDIT_TODO":
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, text: action.payload.newText }
          : todo
      );

    case "CLEAR_COMPLETED":
      return state.filter((todo) => !todo.completed);

    default:
      return state;
  }
};

// -------------------------------------------------------------
// STEP 4.7 — PROVIDER COMPONENT
// -------------------------------------------------------------
export const TodoProvider = ({ children }: { children: ReactNode }) => {
  const loadTodos = (): Todo[] => {
    const stored = localStorage.getItem("todos");
    return stored ? JSON.parse(stored) : [];
  };

  const [state, dispatch] = useReducer(todoReducer, [], loadTodos);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(state));
  }, [state]);

  const addTodo = (text: string) =>
    dispatch({ type: "ADD_TODO", payload: text });

  const toggleTodo = (id: string) =>
    dispatch({ type: "TOGGLE_TODO", payload: id });

  const deleteTodo = (id: string) =>
    dispatch({ type: "DELETE_TODO", payload: id });

  const editTodo = (id: string, newText: string) =>
    dispatch({ type: "EDIT_TODO", payload: { id, newText } });

  const clearCompleted = () =>
    dispatch({ type: "CLEAR_COMPLETED" });

  return (
    <TodoContext.Provider
      value={{
        todos: state,
        addTodo,
        toggleTodo,
        deleteTodo,
        editTodo,
        clearCompleted,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
