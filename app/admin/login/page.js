"use client";

import Header from "@/components/Header";
import { supabase } from "@/lib/supabaseClient";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const router = useRouter();

  async function onLogin(e) {
    e.preventDefault();
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) setMsg(error.message);
    else router.push("/admin/dashboard");
  }

  return (
    <main>
      <Header />
      <h1 className="text-3xl mb-4">Admin Login</h1>
      <form onSubmit={onLogin} className="max-w-md space-y-3">
        <input className="border rounded-xl p-2 w-full" type="email" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
        <input className="border rounded-xl p-2 w-full" type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} />
        <button className="btn btn-primary">Login</button>
        {msg && <p className="text-red-600">{msg}</p>}
      </form>
    </main>
  );
}
