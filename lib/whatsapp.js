export function buildWhatsAppLink(product) {
  const phone = "254737525933"; // +254 format without plus
  const text = `Hello Mwanga Creations,%0AI would like to order:%0A- ${product.name}%0ABrand: ${product.brand}%0AQuantity: ${product.quantity}%0AWholesale: KSh ${product.price_wholesale}%0ARetail: KSh ${product.price_retail}`;
  return `https://wa.me/${phone}?text=${text}`;
}
