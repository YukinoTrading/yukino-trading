import Link from "next/link";
import { SiteShell } from "../_components/SiteShell";

export default function Wholesale() {
  return (
    <SiteShell>
      <h1>Wholesale & Custom</h1>
      <div style={card}>
        <h3 style={{ marginTop: 0 }}>Mixed Orders & MOQ</h3>
        <ul style={{ lineHeight: 1.8 }}>
          <li>Support mixed SKUs for retailers testing best-sellers</li>
          <li>MOQ varies by item (usually 60–150 pcs)</li>
          <li>Repeat orders with stable supply & QC</li>
        </ul>

        <h3>Private Label / OEM</h3>
        <ol style={{ lineHeight: 1.8 }}>
          <li>Send reference / target price / quantity</li>
          <li>Sampling & spec confirmation</li>
          <li>Production + QC</li>
          <li>Export documents & delivery</li>
        </ol>

        <div style={{ fontSize: 13, opacity: 0.75 }}>
          Tell us destination + timeline, and we’ll recommend shipping options (air/sea/express).
        </div>

        <div style={{ marginTop: 14 }}>
          <Link href="/contact" style={btnPrimary}>Request Quote</Link>
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
