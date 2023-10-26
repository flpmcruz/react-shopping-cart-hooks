import { useContext } from "react";
import { FiltersContext } from "../context/filters";

export function useFilter() {
  const { filters, setFilter } = useContext(FiltersContext);

  const filererProducts = (products) => {
    return products.filter((p) => {
      return (
        p.price >= filters.minPrice &&
        (filters.category === "all" || p.category === filters.category)
      );
    });
  };
  return { filererProducts, setFilter };
}
