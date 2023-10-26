/* eslint-disable react/prop-types */
import { useId, useContext } from "react";
import "./Filters.css";
import { FiltersContext } from "../context/filters";

export function Filters() {
  const { filters, setFilter } = useContext(FiltersContext);

  const minPriceFilterId = useId();
  const categoryFilterId = useId();

  const handleChange = (e) => {
    setFilter((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section className="filters">
      <div>
        <label htmlFor={minPriceFilterId}>Min price</label>
        <input
          name="minPrice"
          type="range"
          id={minPriceFilterId}
          min={0}
          max={1000}
          value={filters.minPrice}
          onChange={handleChange}
        />
        <span>{filters.minPrice} USD</span>
      </div>
      <div>
        <label htmlFor={categoryFilterId}>Category</label>
        <select
          name="category"
          id={categoryFilterId}
          value={filters.category}
          onChange={handleChange}
        >
          <option value="all">All</option>
          <option value="laptops">Laptops</option>
          <option value="smartphones">Smartphones</option>
        </select>
      </div>
    </section>
  );
}
