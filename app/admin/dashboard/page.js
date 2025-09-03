"use client";

import Header from "@/components/Header";
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

  useEffect(() => {
    load();
  }, []);

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
      setMsg("Product added.");
      setForm({ name: "", category: "Soap", brand: "", quantity: "", price_wholesale: "", price_retail: "", image_url: "" });
      load();
    }
  }

  async function del(id) {
    await supabase.from("products").delete().eq("id", id);
    load();
  }

  return (
    <main>
      <Header />
      <h1 className="text-3xl mb-4">Admin Dashboard</h1>

      <form onSubmit={addProduct} className="grid md:grid-cols-3 gap-3 border rounded-2xl p-4 mb-6">
        <input className="border rounded-xl p-2" placeholder="Name" value={form.name} onChange={e=>setForm({...form, name:e.target.value})} required />
        <select className="border rounded-xl p-2" value={form.category} onChange={e=>setForm({...form, category:e.target.value})}>
          <option>Soap</option>
          <option>Detergent</option>
          <option>Chicken Feed</option>
        </select>
        <input className="border rounded-xl p-2" placeholder="Brand" value={form.brand} onChange={e=>setForm({...form, brand:e.target.value})} required />
        <input className="border rounded-xl p-2" placeholder="Quantity (e.g., 500g, 50kg)" value={form.quantity} onChange={e=>setForm({...form, quantity:e.target.value})} required />
        <input className="border rounded-xl p-2" type="number" step="0.01" placeholder="Wholesale Price" value={form.price_wholesale} onChange={e=>setForm({...form, price_wholesale:e.target.value})} required />
        <input className="border rounded-xl p-2" type="number" step="0.01" placeholder="Retail Price" value={form.price_retail} onChange={e=>setForm({...form, price_retail:e.target.value})} required />
        <input className="border rounded-xl p-2 md:col-span-2" placeholder="Image URL" value={form.image_url} onChange={e=>setForm({...form, image_url:e.target.value})} />
        <button className="btn btn-primary">Add Product</button>
        {msg && <p className="md:col-span-3 text-green-700">{msg}</p>}
      </form>

      <div className="grid md:grid-cols-3 gap-6">
        {products.map(p => (
          <div key={p.id} className="border rounded-2xl p-3">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold">{p.name}</h3>
              <button onClick={()=>del(p.id)} className="text-red-600">Delete</button>
            </div>
            <p className="text-sm">{p.brand} • {p.category} • {p.quantity}</p>
            <p className="text-sm">W: KSh {p.price_wholesale} • R: KSh {p.price_retail}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
