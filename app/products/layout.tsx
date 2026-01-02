import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Browse Spenta Engineers' complete range of drilling tools including core drilling systems, drill rods, core barrels, diamond tools, core trays, and drill rigs.",
  alternates: {
    canonical: "/products",
  },
  openGraph: {
    title: "Products | Spenta Engineers",
    description:
      "Precision drilling tools and equipment for mining, exploration, and geotechnical applications.",
    url: "https://www.spentaengineers.com/products",
  },
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

