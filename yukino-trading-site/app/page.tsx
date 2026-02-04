import Link from "next/link";
import { SiteShell } from "./_components/SiteShell";

const card: React.CSSProperties = {
  background: "white",
  border: "1px solid #eee",
  borderRadius: 16,
  padding: 16,
  boxShadow: "0 6px 18px rgba(0,0,0,0.04)",
};

const btnPrimary: React.CSSProperties = {
  background: "#111",
  color: "white",
  padding: "10px 14px",
  borderRadius: 12,
  textDecoration: "none",
  fontWeight: 750,
  display: "inline-block",
};

const btnGhost: React.CSSProperties = {
  background: "transparent",
  color: "#111",
  padding: "10px 14px",
  borderRadius: 12,
  border: "1px solid #ddd",
  textDecoration: "none",
  fontWeight: 750,
  display: "inline-block",
};

export default function Home() {
  return (
    <SiteShell>
      <section style={{ marginTop: 18, padding: 26, borderRadius: 18, background: "#f3f3f3" }}>
        <h1 style={{ fontSize: 40, margin: 0, lineHeight: 1.1 }}>
          Asia-sourced Apparel & Plush Goods for Retailers
        </h1>
        <p style={{ maxWidth: 800, lineHeight: 1.7, marginTop: 12 }}>
          <b>Yukino Trading</b> supplies retail-ready products from <b>Japan, Korea, and China</b> — with
          flexible MOQ, quality control, and export logistics. Ideal for boutiques, gift shops, and
          online retailers.
        </p>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 14 }}>
          <Link href="/products" style={btnPrimary}>
            Browse Catalog
          </Link>
          <Link href="/contact" style={btnGhost}>
            Get a Quote
          </Link>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12, marginTop: 18 }}>
          {[
            ["Curated Supply Chain", "Reliable factories + consistent QC."],
            ["Flexible MOQ", "Mixed orders to test best-sellers."],
            ["Custom Branding", "Private label, packaging & OEM."],
          ].map(([t, d]) => (
            <div key={t} style={card}>
              <div style={{ fontWeight: 900 }}>{t}</div>
              <div style={{ fontSize: 14, opacity: 0.82, marginTop: 6 }}>{d}</div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ marginTop: 28 }}>
        <h2 style={{ fontSize: 24 }}>Main Categories</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
          {[
            ["Apparel", "Seasonal fashion, basics, boutique-ready."],
            ["Plush Toys", "Kawaii plush, dolls, gift products."],
            ["Accessories", "Retail add-ons to increase AOV."],
          ].map(([t, d]) => (
            <div key={t} style={card}>
              <div style={{ fontWeight: 900 }}>{t}</div>
              <div style={{ fontSize: 14, opacity: 0.82, marginTop: 6 }}>{d}</div>
              <Link href="/products" style={{ display: "inline-block", marginTop: 10, fontSize: 14 }}>
                View items →
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section style={{ marginTop: 28 }}>
        <h2 style={{ fontSize: 24 }}>How Sourcing Works</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
          {[
            ["1) Tell us your needs", "Category, quantity, destination, timeline."],
            ["2) Samples & quotation", "Fast response. Confirm specs & pricing."],
            ["3) Production & delivery", "QC + export documents + shipping options."],
          ].map(([t, d]) => (
            <div key={t} style={card}>
              <div style={{ fontWeight: 900 }}>{t}</div>
              <div style={{ fontSize: 14, opacity: 0.82, marginTop: 6 }}>{d}</div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ marginTop: 28 }}>
        <div
          style={{
            ...card,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 14,
            flexWrap: "wrap",
          }}
        >
          <div>
            <div style={{ fontWeight: 900, fontSize: 18 }}>Want the latest catalog & price range?</div>
            <div style={{ fontSize: 14, opacity: 0.82, marginTop: 6 }}>
              Send your store info and target order quantity. We’ll reply with options.
            </div>
          </div>
          <Link href="/contact" style={btnPrimary}>
            Request Catalog
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
