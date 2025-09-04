"use client";

import { useState } from "react";

export default function Filters({ onChange }) {
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [query, setQuery] = useState("");

  function emit(next) {
    onChange({ category, brand, query, ...next });
  }

  return (
    <div className="filters-container">
      <form>
        <select
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
            emit({ category: e.target.value });
          }}
        >
          <option value="">All Categories</option>
          <option value="Soap">Soap</option>
          <option value="Detergent">Detergent</option>
          <option value="Chicken Feed">Chicken Feed</option>
        </select>

        <input
          type="text"
          placeholder="Brand"
          value={brand}
          onChange={(e) => {
            setBrand(e.target.value);
            emit({ brand: e.target.value });
          }}
        />

        <input
          type="text"
          placeholder="Search products..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            emit({ query: e.target.value });
          }}
        />

        <button type="button">Filter</button>
      </form>
    </div>
  );
}
