import { SiteShell } from "../_components/SiteShell";

export default function About() {
  return (
    <SiteShell>
      <h1>About Yukino Trading</h1>
      <div style={card}>
        <p style={{ lineHeight: 1.8, marginTop: 0 }}>
          Yukino Trading is a sourcing and trading company specializing in retail-ready apparel and plush goods from
          Japan, Korea, and China. We focus on stable supply chain management, quality control, and export logistics.
        </p>

        <h3>What we do</h3>
        <ul style={{ lineHeight: 1.8 }}>
          <li>Sourcing & product curation for boutiques and gift retailers</li>
          <li>QC and production coordination</li>
          <li>Packaging and private label support</li>
          <li>Export documents and delivery solutions</li>
        </ul>

        <h3>Why clients choose us</h3>
        <ul style={{ lineHeight: 1.8 }}>
          <li>Fast response and clear communication</li>
          <li>Flexible MOQs and mixed orders</li>
          <li>Consistent QC standards</li>
          <li>Export-ready paperwork support</li>
        </ul>
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
