// -------------------------------------------------------------
// STEP 8 — MAIN APP LAYOUT
// -------------------------------------------------------------

import { AppProviders } from "./contexts/AppProviders";
import { TodoInput } from "./components/TodoInput";
import { TodoList } from "./components/TodoList";
import { FilterButtons } from "./components/FilterButtons";
import { ThemeToggleButton } from "./components/ThemeToggleButton";

export default function App() {
  return (
    <AppProviders>
      <div className="app-container">
        <ThemeToggleButton />
        <h1>Todo App</h1>
        <TodoInput />
        <FilterButtons />
        <TodoList />
      </div>
    </AppProviders>
  );
}
