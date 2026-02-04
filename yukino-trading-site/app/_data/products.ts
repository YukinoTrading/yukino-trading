export type Product = {
  slug: string;
  title: string;
  category: "Apparel" | "Plush Toys" | "Accessories";
  origin: "Japan" | "Korea" | "China";
  moq: string;
  leadTime: string;
  short: string;
  specs: { label: string; value: string }[];
};

// Replace these sample items with your real products.
export const products: Product[] = [
  {
    slug: "kawaii-plush-bear",
    title: "Kawaii Plush Bear (Gift-ready)",
    category: "Plush Toys",
    origin: "China",
    moq: "120 pcs",
    leadTime: "15–25 days",
    short: "Soft plush bear with premium stitching. Packaging customization available.",
    specs: [
      { label: "Material", value: "Polyester" },
      { label: "Size", value: "25–45 cm options" },
      { label: "Packaging", value: "OPP / Gift box (custom)" },
      { label: "Customization", value: "Logo tag / embroidery" },
    ],
  },
  {
    slug: "korean-knit-sweater",
    title: "Korean Style Knit Sweater (Seasonal)",
    category: "Apparel",
    origin: "Korea",
    moq: "60 pcs / color",
    leadTime: "20–35 days",
    short: "Boutique-ready knitwear. Size run and label customization supported.",
    specs: [
      { label: "Fabric", value: "Acrylic / blended" },
      { label: "Sizes", value: "S–XL" },
      { label: "Colors", value: "4–8 options" },
      { label: "Customization", value: "Wash label / hangtag" },
    ],
  },
  {
    slug: "japan-minimal-cap",
    title: "Japan Minimal Cap (Retail add-on)",
    category: "Accessories",
    origin: "Japan",
    moq: "80 pcs",
    leadTime: "10–18 days",
    short: "Minimal cap to increase basket size. Clean embroidery options.",
    specs: [
      { label: "Material", value: "Cotton" },
      { label: "Fit", value: "Adjustable" },
      { label: "Customization", value: "Embroidery / label" },
    ],
  },
];
