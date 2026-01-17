// -------------------------------------------------------------
// STEP 12 — FILTER BUTTONS
// -------------------------------------------------------------

import { useContext } from "react";
import { FilterContext } from "../contexts/FilterContext";

export const FilterButtons = () => {
  const ctx = useContext(FilterContext);
  if (!ctx) return null;

  const { filter, setFilter } = ctx;

  return (
    <div>
      <button onClick={() => setFilter("all")} disabled={filter === "all"}>
        All
      </button>
      <button onClick={() => setFilter("active")} disabled={filter === "active"}>
        Active
      </button>
      <button
        onClick={() => setFilter("completed")}
        disabled={filter === "completed"}
      >
        Completed
      </button>
    </div>
  );
};

