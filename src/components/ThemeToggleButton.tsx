// -------------------------------------------------------------
// STEP 13 — THEME TOGGLE BUTTON
// -------------------------------------------------------------

import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export const ThemeToggleButton = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) return null;

  const { theme, toggleTheme } = ctx;

  return (
    <button onClick={toggleTheme}>
      Switch to {theme === "light" ? "Dark" : "Light"}
    </button>
  );
};
