/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const FiltersContext = createContext();

export function FiltersProvider({ children }) {
  const [filters, setFilter] = useState({
    minPrice: 0,
    category: "all",
  });

  return (
    <FiltersContext.Provider value={{ filters, setFilter }}>
      {children}
    </FiltersContext.Provider>
  );
}
