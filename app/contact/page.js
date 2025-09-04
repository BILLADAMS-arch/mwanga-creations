"use client";

import { Phone, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <main className="contact-page">
      <h1 className="contact-title">Contact</h1>
      <div className="contact-links">
        <a
          className="contact-btn whatsapp"
          href="https://wa.me/254737525933"
          target="_blank"
          rel="noreferrer"
        >
          <MessageCircle size={20} className="icon" /> WhatsApp
        </a>
        <a className="contact-btn call" href="tel:+254737525933">
          <Phone size={20} className="icon" /> Call
        </a>
        <a className="contact-btn sms" href="sms:+254737525933">
          <MessageCircle size={20} className="icon" /> SMS
        </a>
        <p className="contact-info">
          Email:{" "}
          <a className="underline" href="mailto:mwangacreations@gmail.com">
            mwangacreations@gmail.com
          </a>
        </p>
        <p className="contact-info">
          Regions: Nyamira • Kisii • Migori (HQ: Ekerenyo, Nyamira)
        </p>
      </div>
    </main>
  );
}
