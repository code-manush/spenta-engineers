import type { Metadata } from "next";
import CatalogueContent from "./CatalogueContent";

export const metadata: Metadata = {
  title: "Product Catalogue",
  description:
    "Download the complete Spenta Engineers product catalogue covering drill rods, core barrels, diamond tools, plastic core trays, and drilling accessories. PDF download available.",
  alternates: {
    canonical: "/catalogue",
  },
  openGraph: {
    title: "Product Catalogue | Spenta Engineers",
    description:
      "Complete product catalogue with specifications for all drilling tools and accessories.",
    url: "https://www.spentaengineers.com/catalogue",
  },
};

export default function CataloguePage() {
  return <CatalogueContent />;
}