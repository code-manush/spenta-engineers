"use client";

import ProductHero from "@/components/products/ui/ProductHero";
import ProductStickyScroll from "@/components/products/ui/ProductStickyScroll";
import ProductFeatures from "@/components/products/ui/ProductFeatures";
import ProductCTA from "@/components/products/ui/ProductCTA";
import { ClipboardList, CheckCircle2, Check, Zap, Factory } from 'lucide-react';

export default function OvershotPage() {
    return (
        <main className="bg-white transition-colors duration-300">
            <ProductHero 
                title="Overshot"
                description="Overshots are wireline retrieval tools used to latch onto and recover the inner tube assembly from the core barrel without dismantling the drill rod string."
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Products", href: "/products" },
                    { label: "Core Drilling System", href: "/products/core-drilling-system" },
                    { label: "Overshot", href: "/products/core-drilling-system/overshot" },
                ]}
            />

            <ProductStickyScroll 
                image="/products/6.png"
                sections={[
                    {
                        title: "Role in the Core Drilling System",
                        content: "The overshot plays a critical role in wireline core drilling operations. It is lowered through the drill rod string using a wireline cable to engage with the head assembly and retrieve the inner tube assembly. This enables rapid core recovery without removing drill rods, significantly improving drilling efficiency and reducing downtime.",
                        icon: Factory
                    },
                    {
                        title: "Product Description",
                        content: "Spenta Engineers manufactures overshots designed for reliable engagement, smooth retrieval, and long service life in demanding drilling conditions. Each overshot is engineered for precise interaction with compatible head assemblies and wireline systems, ensuring consistent performance during repeated retrieval cycles.",
                        icon: ClipboardList
                    },
                    {
                        title: "Standard Sizes, Lengths & Manufacturing",
                        content: "Overshots are manufactured in standard sizes including AQ, BQ, NQ, HQ, and PQ. Components are produced from high-strength alloy steel with precision machining to ensure accurate latching and release mechanisms. Controlled heat treatment enhances durability and resistance to wear during continuous use.",
                        icon: CheckCircle2
                    }
                ]}
            />

            <ProductFeatures 
                title="Key Advantages & Technical Data"
                features={[
                    {
                        title: "Rapid Core Retrieval",
                        description: "Enables fast core retrieval without removing drill rods, drastically improving operational efficiency.",
                        icon: Zap
                    },
                    {
                        title: "Reliable Latching",
                        description: "Precision-machined for smooth wireline operation with a highly reliable latching and release mechanism.",
                        icon: Check
                    },
                    {
                        title: "Technical Specifications",
                        description: "Available Sizes: AQ, BQ, NQ, HQ, PQ. Operating Method: Wireline retrieval. Engagement: Mechanical latching mechanism.",
                        icon: ClipboardList
                    }
                ]}
            />

            <ProductCTA 
                title="Request a Quote for Overshot"
                description="Share your drilling requirements and system configuration, and our technical team will assist you in selecting the appropriate overshot for your application."
                productName="Overshot"
                sizes={[{ size: "AQ" }, { size: "BQ" }, { size: "NQ" }, { size: "HQ" }, { size: "PQ" }]}
            />
        </main>
    );
}