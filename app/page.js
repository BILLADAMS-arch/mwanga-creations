"use client";

import Header from "@/components/Header";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Header />
      <section className="hero-bg rounded-2xl h-[50vh] grid place-items-center text-center text-white shadow-lg">
        <div className="bg-black/40 p-6 rounded-2xl">
          <h1 className="text-3xl md:text-5xl mb-2">Affordable Soaps, Detergents & Feeds</h1>
          <p className="mb-4">Wholesale & Retail • Nyamira • Kisii • Migori</p>
          <Link href="/products" className="btn btn-primary">Shop Now →</Link>
        </div>
      </section>

      <section className="mt-10 grid md:grid-cols-3 gap-6">
        {[
          { title: "Soaps", img: "https://source.unsplash.com/400x300/?soap" },
          { title: "Detergents", img: "https://source.unsplash.com/400x300/?detergent" },
          { title: "Chicken Feeds", img: "https://source.unsplash.com/400x300/?chicken,feed" },
        ].map((c) => (
          <div key={c.title} className="rounded-2xl overflow-hidden border">
            <img src={c.img} alt={c.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl">{c.title}</h3>
              <Link href="/products" className="btn btn-outline mt-3 inline-block">Browse</Link>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
