"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section
        className="hero"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
      >
        <div className="hero-content">
          <h1>Affordable Soaps, Detergents & Feeds</h1>
          <p>Wholesale & Retail • Nyamira • Kisii • Migori</p>
          <Link href="/products" className="btn">
            Shop Now →
          </Link>
        </div>
      </section>

      <section className="categories">
        {[
          { title: "Soaps", img: "https://source.unsplash.com/400x300/?soap" },
          { title: "Detergents", img: "https://source.unsplash.com/400x300/?detergent" },
          { title: "Chicken Feeds", img: "https://source.unsplash.com/400x300/?chicken,feed" },
        ].map((c) => (
          <div key={c.title} className="category-card">
            <img src={c.img} alt={c.title} />
            <div className="card-content">
              <h3>{c.title}</h3>
              <Link href="/products">Browse</Link>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
