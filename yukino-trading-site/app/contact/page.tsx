"use client";

import { SiteShell } from "../_components/SiteShell";
import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <SiteShell>
      <h1>Contact</h1>
      <div style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: 12, alignItems: "start" }}>
        <form
          style={card}
          onSubmit={(e) => {
            e.preventDefault();
            // This is a placeholder. Connect to your email/CRM via Formspree/Zapier/your API.
            setSent(true);
          }}
        >
          <label style={label}>Name</label>
          <input style={input} placeholder="Your name" required />

          <label style={label}>Company</label>
          <input style={input} placeholder="Company / Store" />

          <label style={label}>Email</label>
          <input style={input} placeholder="name@company.com" type="email" required />

          <label style={label}>Inquiry</label>
          <textarea style={{ ...input, minHeight: 120 }} placeholder="What products, quantity, destination, timeline…" required />

          <button style={btnPrimary} type="submit">
            Send Inquiry
          </button>

          {sent && (
            <div style={{ marginTop: 10, fontSize: 13 }}>
              ✅ Saved. Next step: I can connect this form to your real email (no server needed).
            </div>
          )}

          <div style={{ marginTop: 10, fontSize: 12, opacity: 0.7 }}>
            Tip: Tell us destination + target quantity to get accurate pricing and lead time.
          </div>
        </form>

        <div style={card}>
          <div style={{ fontWeight: 900 }}>Direct</div>
          <div style={{ marginTop: 10, fontSize: 14, opacity: 0.85, lineHeight: 1.7 }}>
            WhatsApp: +xx xxx xxxx<br />
            Email: sales@yukinotrading.com<br />
            Hours: Mon–Sat
          </div>

          <a
            href="https://wa.me/"
            target="_blank"
            rel="noreferrer"
            style={{ ...btnGhost, marginTop: 14, display: "inline-block" }}
          >
            WhatsApp Us
          </a>
        </div>
      </div>
    </SiteShell>
  );
}

const card: React.CSSProperties = {
  background: "white",
  border: "1px solid #eee",
  borderRadius: 16,
  padding: 16,
  boxShadow: "0 6px 18px rgba(0,0,0,0.04)",
};

const label: React.CSSProperties = { display: "block", marginTop: 10, fontSize: 13, fontWeight: 800 };
const input: React.CSSProperties = {
  width: "100%",
  marginTop: 6,
  padding: 10,
  borderRadius: 12,
  border: "1px solid #ddd",
  fontSize: 14,
};

const btnPrimary: React.CSSProperties = {
  background: "#111",
  color: "white",
  padding: "10px 14px",
  borderRadius: 12,
  border: "none",
  fontWeight: 850,
  marginTop: 12,
  cursor: "pointer",
};

const btnGhost: React.CSSProperties = {
  background: "transparent",
  color: "#111",
  padding: "10px 14px",
  borderRadius: 12,
  border: "1px solid #ddd",
  textDecoration: "none",
  fontWeight: 850,
};
