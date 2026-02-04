"use client";

import Link from "next/link";

const shell: React.CSSProperties = {
  fontFamily: "system-ui",
  padding: 22,
  maxWidth: 1120,
  margin: "0 auto",
};

const nav: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: 14,
  padding: "12px 0",
};

const navLinks: React.CSSProperties = {
  display: "flex",
  gap: 14,
  fontSize: 14,
  flexWrap: "wrap",
};

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div style={shell}>
      <header style={nav}>
        <Link
          href="/"
          style={{
            fontWeight: 900,
            fontSize: 18,
            textDecoration: "none",
            color: "#111",
            letterSpacing: 0.2,
          }}
        >
          Yukino Trading
        </Link>
        <nav style={navLinks}>
          <Link href="/products">Products</Link>
          <Link href="/wholesale">Wholesale & Custom</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </header>

      {children}

      <footer
        style={{
          marginTop: 40,
          borderTop: "1px solid #eee",
          paddingTop: 16,
          fontSize: 12,
          opacity: 0.7,
        }}
      >
        © {new Date().getFullYear()} Yukino Trading. All rights reserved.
      </footer>
    </div>
  );
}
