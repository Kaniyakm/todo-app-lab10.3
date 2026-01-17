// -------------------------------------------------------------
// STEP 6 — THEME CONTEXT (Light / Dark Mode)
// -------------------------------------------------------------
// This context manages the app theme and persists it to localStorage.
// -------------------------------------------------------------

import { createContext, useState, useEffect } from "react";
import type { ReactNode } from "react";

type Theme = "light" | "dark";

interface ThemeContextValue {
  theme: Theme;
  toggleTheme: () => void;
}

// -------------------------------------------------------------
// STEP 6.1 — CREATE CONTEXT
// -------------------------------------------------------------
export const ThemeContext = createContext<ThemeContextValue | undefined>(
  undefined
);

// -------------------------------------------------------------
// STEP 6.2 — PROVIDER
// -------------------------------------------------------------
export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const loadTheme = (): Theme => {
    const stored = localStorage.getItem("theme");
    return stored ? (stored as Theme) : "light";
  };

  const [theme, setTheme] = useState<Theme>(loadTheme);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.className = theme; // apply theme globally
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
