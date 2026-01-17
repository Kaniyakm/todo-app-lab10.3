// -------------------------------------------------------------
// STEP 7 — APP PROVIDERS WRAPPER
// -------------------------------------------------------------
// This keeps App.tsx clean by grouping all providers.
// -------------------------------------------------------------

import type { ReactNode } from "react";
import { TodoProvider } from "./TodoContext";
import { FilterProvider } from "./FilterContext";
import { ThemeProvider } from "./ThemeContext";

export const AppProviders = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider>
      <TodoProvider>
        <FilterProvider>{children}</FilterProvider>
      </TodoProvider>
    </ThemeProvider>
  );
};
