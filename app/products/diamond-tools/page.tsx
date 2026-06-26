"use client";

import ProductHero from "@/components/products/ui/ProductHero";
import ProductStickyScroll from "@/components/products/ui/ProductStickyScroll";
import ProductVariantsCarousel from "@/components/products/ui/ProductVariantsCarousel";
import ProductFeatures from "@/components/products/ui/ProductFeatures";
import ProductCTA from "@/components/products/ui/ProductCTA";
import { Zap, ShieldCheck, Factory, Gauge } from "lucide-react";

export default function DiamondToolsPage() {
    return (
        <main className="bg-white dark:bg-gray-950 transition-colors duration-300">
            <ProductHero
                title="Diamond & Tungsten Tools"
                description="Diamond and tungsten carbide drilling tools engineered for efficient cutting and long service life."
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Products", href: "/products" },
                    { label: "Diamond Tools", href: "/products/diamond-tools" },
                ]}
            />

            <ProductStickyScroll
                image="/diamond.jpg"
                sections={[
                    {
                        title: "Advanced Cutting Performance",
                        content: "Our diamond and tungsten carbide tools are engineered to deliver efficient penetration rates while maintaining dimensional accuracy and durability across a wide range of formations."
                    },
                    {
                        title: "Optimal Tool Wear",
                        content: "Careful selection of diamond grades, matrix composition, and manufacturing processes ensures optimal cutting performance and reduced tool wear in the field."
                    }
                ]}
            />

            <ProductVariantsCarousel
                title="Available Tool Types"
                description="Our range of diamond and carbide tools supports various drilling methods and ground conditions."
                variants={[
                    {
                        title: "Surface Set Diamond Bits",
                        description: "Designed for softer to medium-hard formations with controlled diamond exposure.",
                    },
                    {
                        title: "Impregnated Diamond Bits",
                        description: "Suitable for hard and abrasive formations requiring gradual diamond wear.",
                    },
                    {
                        title: "Tungsten Carbide Tools",
                        description: "Robust tools used for casing shoes, reaming, and non-core drilling operations.",
                    }
                ]}
            />

            <ProductFeatures
                title="Technical Highlights"
                features={[
                    {
                        title: "Optimized Distribution",
                        description: "Optimized diamond grade and distribution for maximum cutting efficiency.",
                        icon: Gauge
                    },
                    {
                        title: "Controlled Wear",
                        description: "Controlled wear characteristics and high-quality matrix formulation for longer tool life.",
                        icon: ShieldCheck
                    },
                    {
                        title: "Smooth Operation",
                        description: "Reduced vibration and smoother drilling. Compatibility with standard drilling systems.",
                        icon: Zap
                    }
                ]}
            />

            <ProductCTA
                title="Need Diamond Tool Specifications?"
                description="Contact our team to discuss formation conditions and receive the right diamond or carbide tool recommendation."
                productName="Diamond & Tungsten Carbide Tools"
            />
        </main>
    );
}