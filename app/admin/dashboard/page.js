"use client";

import { supabase } from "@/lib/supabaseClient";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({
    name: "", category: "Soap", brand: "", quantity: "",
    price_wholesale: "", price_retail: "", image_url: ""
  });
  const [msg, setMsg] = useState("");

  async function load() {
    const { data } = await supabase.from("products").select("*").order("created_at", { ascending: false });
    setProducts(data || []);
  }

  useEffect(() => { load(); }, []);

  async function addProduct(e) {
    e.preventDefault();
    const payload = {
      ...form,
      price_wholesale: Number(form.price_wholesale),
      price_retail: Number(form.price_retail)
    };
    const { error } = await supabase.from("products").insert([payload]);
    if (error) setMsg(error.message);
    else {
      setMsg("Product added successfully!");
      setForm({ name: "", category: "Soap", brand: "", quantity: "", price_wholesale: "", price_retail: "", image_url: "" });
      load();
    }
  }

  async function del(id) {
    await supabase.from("products").delete().eq("id", id);
    load();
  }

  return (
    <main className="dashboard-page">
      <h1 className="dashboard-title">Admin Dashboard</h1>

      <form onSubmit={addProduct} className="dashboard-form">
        <input className="dashboard-input" placeholder="Name" value={form.name} onChange={e=>setForm({...form, name:e.target.value})} required />
        <select className="dashboard-input" value={form.category} onChange={e=>setForm({...form, category:e.target.value})}>
          <option>Soap</option>
          <option>Detergent</option>
          <option>Chicken Feed</option>
        </select>
        <input className="dashboard-input" placeholder="Brand" value={form.brand} onChange={e=>setForm({...form, brand:e.target.value})} required />
        <input className="dashboard-input" placeholder="Quantity (e.g., 500g, 50kg)" value={form.quantity} onChange={e=>setForm({...form, quantity:e.target.value})} required />
        <input className="dashboard-input" type="number" step="0.01" placeholder="Wholesale Price" value={form.price_wholesale} onChange={e=>setForm({...form, price_wholesale:e.target.value})} required />
        <input className="dashboard-input" type="number" step="0.01" placeholder="Retail Price" value={form.price_retail} onChange={e=>setForm({...form, price_retail:e.target.value})} required />
        <input className="dashboard-input md-span-2" placeholder="Image URL" value={form.image_url} onChange={e=>setForm({...form, image_url:e.target.value})} />
        <button className="dashboard-btn">Add Product</button>
        {msg && <p className="dashboard-msg">{msg}</p>}
      </form>

      <div className="products-grid">
        {products.map(p => (
          <div key={p.id} className="product-card">
            {p.image_url && <img src={p.image_url} alt={p.name} className="product-image" />}
            <div className="product-header">
              <h3>{p.name}</h3>
              <button onClick={()=>del(p.id)} className="product-delete">Delete</button>
            </div>
            <p className="product-info">{p.brand} • {p.category} • {p.quantity}</p>
            <p className="product-info">W: KSh {p.price_wholesale} • R: KSh {p.price_retail}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
