"use client";

import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header>
      <div className="container">
        <Link href="/" className="logo">
          <Image
            src="/images/mwanga-logo.jpg"
            alt="Mwanga Creations Logo"
            width={40}
            height={40}
          />
          <span>Mwanga Creations</span>
        </Link>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/admin/login">Admin</Link>
        </nav>
      </div>
    </header>
  );
}
