"use client";

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
    <main className="login-page">
      <div className="login-container">
        <form onSubmit={onLogin} className="login-form">
          <h1 className="login-title">Admin Login</h1>

          <input
            className="login-input"
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            className="login-input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />

          <button className="login-btn" type="submit">Login</button>

          {msg && <p className="login-msg">{msg}</p>}
        </form>
      </div>
    </main>
  );
}
