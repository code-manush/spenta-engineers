"use client";

import ProductHero from "@/components/products/ui/ProductHero";
import ProductStickyScroll from "@/components/products/ui/ProductStickyScroll";
import ProductFeatures from "@/components/products/ui/ProductFeatures";
import ProductCTA from "@/components/products/ui/ProductCTA";
import { ClipboardList, CheckCircle2, Check, Zap, Factory } from 'lucide-react';
import ProductGallery from "@/components/products/ui/ProductGallery";

export default function DrillRodsPage() {
    return (
        <main className="bg-white transition-colors duration-300">
            <ProductHero 
                title="Drill Rods"
                description="High-strength drill rods engineered to transmit torque and drilling force reliably, forming the backbone of core drilling systems."
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Products", href: "/products" },
                    { label: "Core Drilling System", href: "/products/core-drilling-system" },
                    { label: "Drill Rods", href: "/products/core-drilling-system/drill-rods" },
                ]}
            />

            <ProductGallery 
                images={[
                    { src: "/products/2.png", alt: "DCDMA drill rods" },
                    { src: "/products/3.png", alt: "Drill rod threaded connection" }
                ]}
            />

            <ProductStickyScroll 
                image="/products/2.png"
                sections={[
                    {
                        title: "Role in the Core Drilling System",
                        content: "Drill rods are the primary load-bearing and torque-transmitting components in a core drilling system. Connected in series, they transfer rotational energy and feed force from the drilling rig to the downhole assembly.",
                        icon: Factory
                    },
                    {
                        title: "Product Description",
                        content: "Wireline Drill Rods manufactured in AQ, BQ, NQ, HQ, and PQ sizes for mineral exploration and geotechnical drilling applications. Designed to ensure reliable torque transmission and dimensional compatibility within standard core drilling systems.",
                        icon: ClipboardList
                    },
                    {
                        title: "Standard Sizes, Lengths & Manufacturing",
                        content: "Drill rods are manufactured in standard sizes including AQ, BQ, NQ, HQ, and PQ, with standard lengths of 1.5 m and 3.0 m. All drill rods are manufactured from high-grade alloy steel with precision-machined threaded connections and controlled heat treatment processes to ensure strength, durability, and reliable field performance.",
                        icon: CheckCircle2
                    }
                ]}
            />

            <ProductFeatures 
                title="Key Advantages & Technical Data"
                features={[
                    {
                        title: "Reliable Performance",
                        description: "Reliable torque transmission and secure threaded connections designed for continuous drilling operations.",
                        icon: Zap
                    },
                    {
                        title: "High Strength",
                        description: "Manufactured from high-strength alloy steel, quenched and tempered for maximum durability.",
                        icon: Check
                    },
                    {
                        title: "Technical Specifications",
                        description: "Standard Sizes: AQ, BQ, NQ, HQ, PQ. Lengths: 1.5 m, 3.0 m. Heat Treatment: Quenched and tempered.",
                        icon: ClipboardList
                    }
                ]}
            />

            <ProductCTA 
                title="Need Help Selecting Drill Rods?"
                description="Our technical team can assist with sizing and compatibility for your drilling operations."
                productName="Drill Rods"
                sizes={[{ size: "AQ" }, { size: "BQ" }, { size: "NQ" }, { size: "HQ" }, { size: "PQ" }]}
            />
        </main>
    );
}