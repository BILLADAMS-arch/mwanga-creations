"use client";

import Filters from "@/components/Filters";
import ProductCard from "@/components/ProductCard";
import { supabase } from "@/lib/supabaseClient";
import { useEffect, useState } from "react";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({ category: "", brand: "", query: "" });

  useEffect(() => {
    async function load() {
      setLoading(true);
      let query = supabase
        .from("products")
        .select("*")
        .order("created_at", { ascending: false });
      const { data, error } = await query;
      if (!error && data) setProducts(data);
      setLoading(false);
    }
    load();
  }, []);

  const filtered = products.filter((p) => {
    if (filters.category && p.category !== filters.category) return false;
    if (filters.brand && !p.brand.toLowerCase().includes(filters.brand.toLowerCase())) return false;
    if (filters.query) {
      const q = filters.query.toLowerCase();
      const hay = `${p.name} ${p.brand} ${p.category} ${p.quantity}`.toLowerCase();
      if (!hay.includes(q)) return false;
    }
    return true;
  });

  return (
    <main className="products-page">
      <h1 className="products-title">Products</h1>
      <div className="filters-container">
        <Filters onChange={setFilters} />
      </div>

      {loading ? (
        <p className="status-message">Loading...</p>
      ) : (
        <div className="products-grid">
          {filtered.length > 0 ? (
            filtered.map((p) => <ProductCard key={p.id} product={p} />)
          ) : (
            <p className="status-message">No products match your filters.</p>
          )}
        </div>
      )}
    </main>
  );
}
