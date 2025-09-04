"use client";

import { buildWhatsAppLink } from "@/lib/whatsapp";

export default function ProductCard({ product }) {
  return (
    <div className="product-card">
      {product.image_url ? (
        <img src={product.image_url} alt={product.name} />
      ) : (
        <img
          src={`https://source.unsplash.com/400x300/?${encodeURIComponent(
            product.category
          )}`}
          alt={product.name}
        />
      )}
      <div className="content">
        <h3>{product.name}</h3>
        <p>{product.brand} • {product.quantity}</p>
        <div className="prices">
          <div>Wholesale: <span>KSh {Number(product.price_wholesale).toFixed(2)}</span></div>
          <div>Retail: <span>KSh {Number(product.price_retail).toFixed(2)}</span></div>
        </div>
        <div className="btn-group">
          <a className="btn btn-primary" href={buildWhatsAppLink(product)} target="_blank" rel="noreferrer">Order on WhatsApp</a>
          <a className="btn btn-outline" href="tel:+254737525933">Call</a>
          <a className="btn btn-outline" href="sms:+254737525933">SMS</a>
        </div>
      </div>
    </div>
  );
}
