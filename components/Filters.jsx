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
    <div className="flex flex-wrap gap-3 items-center mb-6">
      <select className="border rounded-xl p-2" value={category} onChange={(e)=>{setCategory(e.target.value); emit({category: e.target.value})}}>
        <option value="">All Categories</option>
        <option value="Soap">Soap</option>
        <option value="Detergent">Detergent</option>
        <option value="Chicken Feed">Chicken Feed</option>
      </select>
      <input className="border rounded-xl p-2" placeholder="Brand" value={brand} onChange={(e)=>{setBrand(e.target.value); emit({brand: e.target.value})}} />
      <input className="border rounded-xl p-2 flex-1 min-w-[200px]" placeholder="Search products..." value={query} onChange={(e)=>{setQuery(e.target.value); emit({query: e.target.value})}} />
    </div>
  );
}
