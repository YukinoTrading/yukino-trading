export const metadata = {
  title: "Yukino Trading | Asia Apparel & Plush Wholesale",
  description:
    "Wholesale-ready apparel and plush retail goods sourced from Japan, Korea, and China. Flexible MOQ, quality control, and export logistics.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, background: "#fafafa" }}>{children}</body>
    </html>
  );
}
