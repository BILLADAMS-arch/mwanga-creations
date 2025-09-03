"use client";

import { buildWhatsAppLink } from "@/lib/whatsapp";

export default function ProductCard({ product }) {
  return (
    <div className="border rounded-2xl overflow-hidden shadow-sm">
      {product.image_url ? (
        <img src={product.image_url} alt={product.name} className="w-full h-48 object-cover" />
      ) : (
        <img src={`https://source.unsplash.com/400x300/?${encodeURIComponent(product.category)}`} alt={product.name} className="w-full h-48 object-cover" />
      )}
      <div className="p-4">
        <h3 className="text-xl">{product.name}</h3>
        <p className="text-sm opacity-80">{product.brand} • {product.quantity}</p>
        <div className="mt-2 text-sm">
          <div>Wholesale: <span className="font-semibold">KSh {Number(product.price_wholesale).toFixed(2)}</span></div>
          <div>Retail: <span className="font-semibold">KSh {Number(product.price_retail).toFixed(2)}</span></div>
        </div>
        <div className="mt-4 flex gap-2">
          <a className="btn btn-primary" href={buildWhatsAppLink(product)} target="_blank" rel="noreferrer">Order on WhatsApp</a>
          <a className="btn btn-outline" href="tel:+254737525933">Call</a>
          <a className="btn btn-outline" href="sms:+254737525933">SMS</a>
        </div>
      </div>
    </div>
  );
}
