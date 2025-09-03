export const metadata = {
  title: "Mwanga Creations",
  description: "Soaps, Detergents & Chicken Feeds – Wholesale & Retail",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-navy">
        <div className="max-w-6xl mx-auto px-4">
          {children}
        </div>
      </body>
    </html>
  );
}
