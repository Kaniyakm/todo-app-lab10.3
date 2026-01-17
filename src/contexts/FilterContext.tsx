// -------------------------------------------------------------
// STEP 5 — FILTER CONTEXT (Visibility Filters)
// -------------------------------------------------------------
// This context controls which todos are visible:
//   - "all"
//   - "active"
//   - "completed"
// -------------------------------------------------------------

import { createContext, useState } from "react";
import type { ReactNode } from "react";

// -------------------------------------------------------------
// STEP 5.1 — DEFINE FILTER TYPE + CONTEXT SHAPE
// -------------------------------------------------------------
type Filter = "all" | "active" | "completed";

interface FilterContextValue {
  filter: Filter;
  setFilter: (filter: Filter) => void;
}

// -------------------------------------------------------------
// STEP 5.2 — CREATE CONTEXT
// -------------------------------------------------------------
export const FilterContext = createContext<FilterContextValue | undefined>(
  undefined
);

// -------------------------------------------------------------
// STEP 5.3 — PROVIDER COMPONENT
// -------------------------------------------------------------
export const FilterProvider = ({ children }: { children: ReactNode }) => {
  const [filter, setFilter] = useState<Filter>("all");

  return (
    <FilterContext.Provider value={{ filter, setFilter }}>
      {children}
    </FilterContext.Provider>
  );
};
