import Link from "next/link";
import { SiteShell } from "../../_components/SiteShell";
import { products } from "../../_data/products";

export default function ProductDetail({ params }: { params: { slug: string } }) {
  const p = products.find((x) => x.slug === params.slug);

  if (!p) {
    return (
      <SiteShell>
        <h1>Product not found</h1>
        <Link href="/products">Back to catalog</Link>
      </SiteShell>
    );
  }

  return (
    <SiteShell>
      <Link href="/products" style={{ fontSize: 14 }}>
        ← Back
      </Link>

      <h1 style={{ marginTop: 10 }}>{p.title}</h1>
      <div style={{ fontSize: 13, opacity: 0.75 }}>
        {p.category} · Origin: <b>{p.origin}</b>
      </div>

      <div style={{ marginTop: 14, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        <div style={card}>
          <div style={{ fontWeight: 900 }}>Overview</div>
          <p style={{ marginTop: 8, lineHeight: 1.7 }}>{p.short}</p>
          <div style={{ fontSize: 13, opacity: 0.8 }}>
            MOQ: <b>{p.moq}</b> · Lead time: <b>{p.leadTime}</b>
          </div>

          <div style={{ display: "flex", gap: 10, marginTop: 12, flexWrap: "wrap" }}>
            <Link href="/contact" style={btnPrimary}>
              Get Quote
            </Link>
            <Link href="/contact" style={btnGhost}>
              Request Sample
            </Link>
          </div>
        </div>

        <div style={card}>
          <div style={{ fontWeight: 900 }}>Specifications</div>
          <div style={{ marginTop: 10, display: "grid", gap: 8 }}>
            {p.specs.map((s) => (
              <div key={s.label} style={{ display: "flex", justifyContent: "space-between", gap: 10, fontSize: 14 }}>
                <span style={{ opacity: 0.75 }}>{s.label}</span>
                <b style={{ textAlign: "right" }}>{s.value}</b>
              </div>
            ))}
          </div>
          <div style={{ fontSize: 12, opacity: 0.7, marginTop: 12 }}>
            Note: specs can be customized depending on MOQ and packaging requirements.
          </div>
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
