"use client";

import ProductHero from "@/components/products/ui/ProductHero";
import ProductStickyScroll from "@/components/products/ui/ProductStickyScroll";
import ProductVariantsCarousel from "@/components/products/ui/ProductVariantsCarousel";
import ProductFeatures from "@/components/products/ui/ProductFeatures";
import ProductCTA from "@/components/products/ui/ProductCTA";
import { Search, ShieldCheck, Factory, Gauge } from "lucide-react";

export default function CoreBarrelsPage() {
    return (
        <main className="bg-white dark:bg-gray-950 transition-colors duration-300">
            <ProductHero
                title="Core Barrels"
                description="Precision-engineered core barrels designed for efficient core recovery in mineral exploration and mining operations."
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Products", href: "/products" },
                    { label: "Core Barrels", href: "/products/core-barrels" },
                ]}
            />

            <ProductStickyScroll
                image="/core-barrel.jpg"
                sections={[
                    {
                        title: "Precision Core Recovery by Design",
                        content: "Our core barrels are designed to maximize core recovery while minimizing disturbance, even in fractured or challenging formations."
                    },
                    {
                        title: "Robust Manufacturing",
                        content: "Manufactured with tight tolerances and robust materials, Spenta Engineers core barrels ensure smooth operation, consistent performance, and long service life in demanding drilling environments."
                    }
                ]}
            />

            <ProductVariantsCarousel
                title="Available Core Barrel Types"
                description="Our core barrels are available in standard configurations to suit varying ground conditions and drilling objectives."
                variants={[
                    {
                        title: "Single Tube Core Barrels",
                        description: "Suitable for competent formations where core disturbance is minimal.",
                    },
                    {
                        title: "Double Tube Core Barrels",
                        description: "Designed to reduce core disturbance and improve recovery in broken formations.",
                    },
                    {
                        title: "Triple Tube Core Barrels",
                        description: "Ideal for highly fractured formations requiring maximum core preservation.",
                    }
                ]}
            />

            <ProductFeatures
                title="Technical Highlights"
                features={[
                    {
                        title: "Optimized Design",
                        description: "Optimized inner and outer tube design for smooth core entry and retention.",
                        icon: Gauge
                    },
                    {
                        title: "High-Strength Materials",
                        description: "Built with high-strength materials for durability and reduced core loss in fractured formations.",
                        icon: ShieldCheck
                    },
                    {
                        title: "Universal Compatibility",
                        description: "Fully compatible with standard wireline systems. Precision manufacturing and quality inspection.",
                        icon: Factory
                    }
                ]}
            />

            <ProductCTA
                title="Need Core Barrel Specifications?"
                description="Get in touch with our team to receive technical details and confirmation of the right core barrel configuration for your application."
                productName="Core Barrels"
            />
        </main>
    );
}