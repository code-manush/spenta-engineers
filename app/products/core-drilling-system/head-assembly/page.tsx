"use client";

import ProductHero from "@/components/products/ui/ProductHero";
import ProductStickyScroll from "@/components/products/ui/ProductStickyScroll";
import ProductFeatures from "@/components/products/ui/ProductFeatures";
import ProductCTA from "@/components/products/ui/ProductCTA";
import { ClipboardList, CheckCircle2, Check, Zap, Factory } from 'lucide-react';

export default function HeadAssemblyPage() {
    return (
        <main className="bg-white transition-colors duration-300">
            <ProductHero 
                title="Head Assembly"
                description="Head assemblies connect the drill rod string to the core barrel and enable smooth rotation, fluid circulation, and efficient wireline core recovery during drilling operations."
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Products", href: "/products" },
                    { label: "Core Drilling System", href: "/products/core-drilling-system" },
                    { label: "Head Assembly", href: "/products/core-drilling-system/head-assembly" },
                ]}
            />

            <ProductStickyScroll 
                image="/products/5.png"
                sections={[
                    {
                        title: "Role in the Core Drilling System",
                        content: "The head assembly is a critical interface component within a core drilling system. Installed between the drill rods and the core barrel, it transmits rotational force and drilling fluid while enabling engagement with the overshot during wireline operations.",
                        icon: Factory
                    },
                    {
                        title: "Product Description",
                        content: "Spenta Engineers manufactures head assemblies designed for dependable performance in mineral exploration and geotechnical drilling. Each head assembly is precision-engineered to provide secure connections, smooth rotation, and accurate alignment with compatible drill rods, core barrels, and overshot systems.",
                        icon: ClipboardList
                    },
                    {
                        title: "Standard Sizes, Lengths & Manufacturing",
                        content: "Head assemblies are manufactured in standard sizes including AQ, BQ, NQ, HQ, and PQ. Components are produced from high-strength alloy steel using precision machining processes. Controlled heat treatment is applied to enhance wear resistance, structural integrity, and service life under continuous drilling conditions.",
                        icon: CheckCircle2
                    }
                ]}
            />

            <ProductFeatures 
                title="Key Advantages & Technical Data"
                features={[
                    {
                        title: "Efficient Recovery",
                        description: "Enables efficient wireline core retrieval and provides a secure connection between drill rods and core barrel.",
                        icon: Zap
                    },
                    {
                        title: "Precision Operation",
                        description: "Precision-machined for smooth rotation and alignment. Designed for reliable operation in demanding drilling environments.",
                        icon: Check
                    },
                    {
                        title: "Technical Specifications",
                        description: "Available Sizes: AQ, BQ, NQ, HQ, PQ. Connection: Threaded with free rotation for wireline operations. Material: High-strength alloy steel.",
                        icon: ClipboardList
                    }
                ]}
            />

            <ProductCTA 
                title="Request a Quote for Head Assemblies"
                description="Share your drilling requirements and system configuration, and our technical team will assist you in selecting the appropriate head assembly for your application."
                productName="Head Assembly"
                sizes={[{ size: "AQ" }, { size: "BQ" }, { size: "NQ" }, { size: "HQ" }, { size: "PQ" }]}
            />
        </main>
    );
}