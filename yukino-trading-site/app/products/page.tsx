"use client";

import Link from "next/link";
import { SiteShell } from "../_components/SiteShell";
import { products } from "../_data/products";
import { useMemo, useState } from "react";

const card: React.CSSProperties = {
  background: "white",
  border: "1px solid #eee",
  borderRadius: 16,
  padding: 16,
  boxShadow: "0 6px 18px rgba(0,0,0,0.04)",
};

export default function ProductsPage() {
  const [q, setQ] = useState("");
  const [category, setCategory] = useState<"All" | "Apparel" | "Plush Toys" | "Accessories">("All");
  const [origin, setOrigin] = useState<"All" | "Japan" | "Korea" | "China">("All");

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchText = (p.title + " " + p.short + " " + p.category + " " + p.origin)
        .toLowerCase()
        .includes(q.toLowerCase());
      const matchCat = category === "All" ? true : p.category === category;
      const matchOrigin = origin === "All" ? true : p.origin === origin;
      return matchText && matchCat && matchOrigin;
    });
  }, [q, category, origin]);

  return (
    <SiteShell>
      <h1 style={{ marginTop: 10 }}>Product Catalog</h1>

      <div style={{ display: "grid", gridTemplateColumns: "1.2fr 0.4fr 0.4fr", gap: 10, marginTop: 12 }}>
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search products…"
          style={{ padding: 10, borderRadius: 12, border: "1px solid #ddd" }}
        />
        <select value={category} onChange={(e) => setCategory(e.target.value as any)} style={sel}>
          <option>All</option>
          <option>Apparel</option>
          <option>Plush Toys</option>
          <option>Accessories</option>
        </select>
        <select value={origin} onChange={(e) => setOrigin(e.target.value as any)} style={sel}>
          <option>All</option>
          <option>Japan</option>
          <option>Korea</option>
          <option>China</option>
        </select>
      </div>

      <div style={{ marginTop: 14, fontSize: 13, opacity: 0.7 }}>Showing {filtered.length} items</div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12, marginTop: 14 }}>
        {filtered.map((p) => (
          <div key={p.slug} style={card}>
            <div style={{ fontWeight: 900 }}>{p.title}</div>
            <div style={{ fontSize: 13, opacity: 0.75, marginTop: 6 }}>
              {p.category} · {p.origin}
            </div>
            <div style={{ fontSize: 14, opacity: 0.85, marginTop: 8, lineHeight: 1.5 }}>{p.short}</div>
            <div style={{ fontSize: 13, opacity: 0.75, marginTop: 10 }}>
              MOQ: <b>{p.moq}</b> · Lead time: <b>{p.leadTime}</b>
            </div>
            <Link href={`/products/${p.slug}`} style={{ display: "inline-block", marginTop: 10, fontSize: 14 }}>
              View details →
            </Link>
          </div>
        ))}
      </div>
    </SiteShell>
  );
}

const sel: React.CSSProperties = { padding: 10, borderRadius: 12, border: "1px solid #ddd", background: "white" };
