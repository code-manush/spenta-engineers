import Hero from "@/components/hero";
import ProductCategories from "@/components/ProductCategories";
import AboutSection from "@/components/AboutSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import IndustriesServed from "@/components/IndustriesServed";
import ManufacturingQuality from "@/components/ManufacturingQuality";
import CTASection from "@/components/CTASection";

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
