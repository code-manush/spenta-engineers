import ProductsHero from "@/components/products/ProductsHero";
import ProductCategoriesGrid from "@/components/products/ProductCategoriesGrid";
import ProductsCTA from "@/components/products/ProductsCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore Spenta Engineers’ range of drilling tools including drill rods, core barrels, diamond tools, plastic core trays, and accessories.",
};

export default function ProductsPage() {
  return (
    <>
      <ProductsHero />
      <ProductCategoriesGrid />
      <ProductsCTA />
    </>
  );
}
