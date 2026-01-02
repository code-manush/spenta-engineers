import Hero from "@/components/hero";
import ProductCategories from "@/components/ProductCategories";
import AboutSection from "@/components/AboutSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import IndustriesServed from "@/components/IndustriesServed";
import ManufacturingQuality from "@/components/ManufacturingQuality";
import CTASection from "@/components/CTASection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Spenta Engineers manufactures precision drilling tools including drill rods, core barrels, diamond tools, and accessories for mining, exploration, and geotechnical applications. Quality-controlled manufacturing in Vadodara, Gujarat, India.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Spenta Engineers | Precision Drilling Tools Manufacturer",
    description:
      "Manufacturer of precision drilling tools for mining, exploration, and geotechnical applications. Quality-controlled production in Vadodara, Gujarat, India.",
    url: "https://www.spentaengineers.com",
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProductCategories />
      <AboutSection />
      <WhyChooseUs />
      <IndustriesServed />
      <ManufacturingQuality />
      <CTASection />
    </>
  );
}
