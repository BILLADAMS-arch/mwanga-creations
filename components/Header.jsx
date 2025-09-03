import Link from "next/link";

export default function Header() {
  return (
    <header className="py-4 flex items-center justify-between">
      <Link href="/" className="text-2xl font-bold text-navy">
        Mwanga Creations
      </Link>
      <nav className="flex gap-4">
        <Link href="/" className="hover:underline">Home</Link>
        <Link href="/products" className="hover:underline">Products</Link>
        <Link href="/contact" className="hover:underline">Contact</Link>
        <Link href="/admin/login" className="hover:underline">Admin</Link>
      </nav>
    </header>
  );
}
