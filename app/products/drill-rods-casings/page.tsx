"use client";

import ProductHero from "@/components/products/ui/ProductHero";
import ProductStickyScroll from "@/components/products/ui/ProductStickyScroll";
import ProductVariantsCarousel from "@/components/products/ui/ProductVariantsCarousel";
import ProductFeatures from "@/components/products/ui/ProductFeatures";
import ProductGallery from "@/components/products/ui/ProductGallery";
import ProductCTA from "@/components/products/ui/ProductCTA";
import { Link, ShieldCheck, Factory, Gauge } from "lucide-react";

export default function DrillRodsPage() {
    return (
        <main className="bg-white dark:bg-gray-950 transition-colors duration-300">
            <ProductHero
                title="Drill Rods"
                description="High-strength drill rods manufactured for mineral exploration, mining, and geotechnical drilling applications."
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Products", href: "/products" },
                    { label: "Drill Rods", href: "/products/drill-rods-casings" },
                ]}
            />

            <ProductGallery 
                images={[
                    { src: "/products/drill-rod1.png", alt: "Drill Rod String" },
                    { src: "/products/drill-rod2.png", alt: "Drill Rod Connection" }
                ]}
            />

            <ProductStickyScroll
                image="/drill-rod.jpg"
                sections={[
                    {
                        title: "Engineered for Demanding Conditions",
                        content: "Spenta Engineers drill rods are manufactured using high-grade alloy steels and precision machining processes to ensure strength, durability, and consistent thread performance in field conditions."
                    },
                    {
                        title: "Reliable Torque Transmission",
                        content: "Designed for compatibility with standard wireline drilling systems, our drill rods deliver reliable torque transmission and reduced wear across exploration, mining, and geotechnical applications."
                    }
                ]}
            />

            <ProductVariantsCarousel
                title="Available Drill Rod Variants"
                description="Our drill rods are available in standard wireline sizes to suit different drilling depths and formation conditions."
                variants={[
                    {
                        title: "NQ Drill Rods",
                        description: "Optimized for mineral exploration with an excellent balance of strength and weight.",
                    },
                    {
                        title: "HQ Drill Rods",
                        description: "Heavy-duty rods designed for deeper drilling and higher torque requirements.",
                    },
                    {
                        title: "PQ Drill Rods",
                        description: "Large-diameter rods suitable for high-capacity core drilling operations.",
                    }
                ]}
            />

            <ProductFeatures
                title="Technical Highlights"
                features={[
                    {
                        title: "Precision Machining",
                        description: "Precision-machined threads for reduced wear and excellent torque transmission.",
                        icon: Gauge
                    },
                    {
                        title: "High-Strength Construction",
                        description: "High-strength alloy steel construction designed for repeated make-up and break-out cycles.",
                        icon: ShieldCheck
                    },
                    {
                        title: "Standard Compatibility",
                        description: "Compatible with standard wireline systems with strict quality inspection at every stage.",
                        icon: Factory
                    }
                ]}
            />

            <ProductCTA
                title="Need Specifications or Pricing?"
                description="Contact our team to receive detailed specifications and a customized quotation."
                productName="Drill Rods"
            />
        </main>
    );
}
