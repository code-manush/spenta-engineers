"use client";

import ProductHero from "@/components/products/ui/ProductHero";
import ProductStickyScroll from "@/components/products/ui/ProductStickyScroll";
import ProductFeatures from "@/components/products/ui/ProductFeatures";
import ProductCTA from "@/components/products/ui/ProductCTA";
import { ClipboardList, CheckCircle2, Check, Zap, Factory } from 'lucide-react';

export default function CoreBarrelsPage() {
    return (
        <main className="bg-white transition-colors duration-300">
            <ProductHero 
                title="Core Barrels"
                description="Core barrels are downhole drilling assemblies designed to cut, retain, and protect core samples during mineral exploration and geotechnical drilling operations."
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Products", href: "/products" },
                    { label: "Core Drilling System", href: "/products/core-drilling-system" },
                    { label: "Core Barrels", href: "/products/core-drilling-system/core-barrels" },
                ]}
            />

            <ProductStickyScroll 
                image="/products/core-barrel1.png"
                sections={[
                    {
                        title: "Role in the Core Drilling System",
                        content: "Core barrels are the primary sampling tools within a core drilling system. Positioned at the bottom of the drill string, they house the cutting bit and inner tube assembly responsible for recovering continuous, undisturbed core samples. Proper selection of core barrel type and size is essential to ensure accurate geological information, efficient drilling performance, and reliable core recovery.",
                        icon: Factory
                    },
                    {
                        title: "Product Description",
                        content: "Spenta Engineers manufactures core barrels designed for consistent performance across a wide range of drilling conditions. Each core barrel is engineered to operate seamlessly with compatible drill rods, head assemblies, and wireline systems, ensuring dimensional accuracy and operational reliability in mineral exploration and geotechnical drilling projects.",
                        icon: ClipboardList
                    },
                    {
                        title: "Standard Sizes, Lengths & Manufacturing",
                        content: "Core barrels are manufactured in standard sizes including AQ, BQ, NQ, HQ, and PQ. All components are produced from high-strength alloy steel using precision machining processes. Controlled heat treatment is applied to enhance strength, wear resistance, and durability under continuous drilling conditions.",
                        icon: CheckCircle2
                    }
                ]}
            />

            <ProductFeatures 
                title="Key Advantages & Technical Data"
                features={[
                    {
                        title: "Efficient Recovery",
                        description: "Designed for efficient and reliable core recovery in a wide range of geological formations.",
                        icon: Zap
                    },
                    {
                        title: "Precision & Compatibility",
                        description: "Precision-machined components compatible with standard wireline drilling systems.",
                        icon: Check
                    },
                    {
                        title: "Technical Specifications",
                        description: "Types: Single, Double, Triple Tube. Sizes: AQ, BQ, NQ, HQ, PQ. Recovery: Conventional / Wireline. Material: High-strength alloy steel.",
                        icon: ClipboardList
                    }
                ]}
            />

            <ProductCTA 
                title="Request a Quote for Core Barrels"
                description="Share your drilling requirements and our technical team will assist you in selecting the appropriate core barrel configuration for your application."
                productName="Core Barrels"
                sizes={[{ size: "AQ" }, { size: "BQ" }, { size: "NQ" }, { size: "HQ" }, { size: "PQ" }]}
            />
        </main>
    );
}