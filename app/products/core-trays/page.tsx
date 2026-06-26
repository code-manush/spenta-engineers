"use client";

import ProductHero from "@/components/products/ui/ProductHero";
import ProductStickyScroll from "@/components/products/ui/ProductStickyScroll";
import ProductSpecsDashboard from "@/components/products/ui/ProductSpecsDashboard";
import ProductFeatures from "@/components/products/ui/ProductFeatures";
import ProductGallery from "@/components/products/ui/ProductGallery";
import ProductCTA from "@/components/products/ui/ProductCTA";
import { CheckCircle2, ShieldCheck, Zap } from "lucide-react";

export default function CoreTraysPage() {
    return (
        <main className="bg-white dark:bg-gray-950 transition-colors duration-300">
            <ProductHero
                title="Plastic Core Trays & Boxes"
                description="Plastic core trays and boxes are used for systematic storage, handling, and transportation of drilled core samples during mineral exploration and geotechnical investigations."
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Products", href: "/products" },
                    { label: "Core Trays", href: "/products/core-trays" },
                ]}
            />

            <ProductGallery 
                images={[
                    { src: "/products/12.png", alt: "Plastic Core Trays" },
                    { src: "/products/13.png", alt: "Core Boxes" }
                ]}
            />

            <ProductStickyScroll
                image="/products/12.png"
                sections={[
                    {
                        title: "Role in the Drilling Operation",
                        content: "Spenta Engineers manufactures plastic core trays and boxes designed for durability, ease of handling, and long service life in field and storage conditions. These products are engineered to provide reliable core containment while withstanding rough site handling, weather exposure, and repeated use in exploration projects."
                    },
                    {
                        title: "Sizes and Manufacturing",
                        content: "Plastic core trays and boxes are available in multiple configurations to suit different core sizes and lengths, including AQ, BQ, NQ, HQ, and PQ. They are manufactured using high-quality polymer materials through controlled molding processes to ensure consistent dimensions, structural strength, and resistance to impact and environmental conditions."
                    }
                ]}
            />

            <ProductSpecsDashboard
                title="Standard Specifications"
                specs={[
                    { label: "Product Types", value: "Plastic Core Trays and Boxes" },
                    { label: "Material", value: "High-strength industrial plastic" },
                    { label: "Configuration", value: "Multi-channel trays / Lidded boxes" },
                    { label: "Typical Operating Environment", value: "Soft to hard rock formations" },
                    { label: "Application", value: "Core storage, transport & logging" },
                    { label: "Core Sizes Supported", value: "AQ, BQ, NQ, HQ, PQ" },
                    { label: "Typical Use Environment", value: "Field sites & storage facilities" },
                ]}
            />

            <ProductFeatures
                title="Key Advantages"
                features={[
                    {
                        title: "Durable Construction",
                        description: "Manufactured with high-strength materials for repeated field use.",
                        icon: ShieldCheck
                    },
                    {
                        title: "Core Organization",
                        description: "Maintains core orientation and systematic organization.",
                        icon: CheckCircle2
                    },
                    {
                        title: "Environmental Resistance",
                        description: "Resistant to moisture and prolonged environmental exposure.",
                        icon: Zap
                    }
                ]}
            />

            <ProductCTA
                title="Request a Quote"
                description="Share your drilling requirements and system configuration, and our technical team will assist you in selecting the appropriate trays for your application."
                productName="Plastic Core Trays & Boxes"
            />
        </main>
    );
}