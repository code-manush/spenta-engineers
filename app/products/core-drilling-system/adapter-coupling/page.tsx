"use client";

import ProductHero from "@/components/products/ui/ProductHero";
import ProductStickyScroll from "@/components/products/ui/ProductStickyScroll";
import ProductFeatures from "@/components/products/ui/ProductFeatures";
import ProductCTA from "@/components/products/ui/ProductCTA";
import { ClipboardList, CheckCircle2, Check, Zap, Factory } from 'lucide-react';

export default function AdapterCouplingPage() {
    return (
        <main className="bg-white transition-colors duration-300">
            <ProductHero 
                title="Adapter Coupling"
                description="Adapter couplings are used to connect drilling components of different sizes or standards, ensuring compatibility and continuity within a core drilling system."
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Products", href: "/products" },
                    { label: "Core Drilling System", href: "/products/core-drilling-system" },
                    { label: "Adapter Coupling", href: "/products/core-drilling-system/adapter-coupling" },
                ]}
            />

            <ProductStickyScroll 
                image="/products/8.png"
                sections={[
                    {
                        title: "Role in the Core Drilling System",
                        content: "Adapter couplings provide dimensional and thread compatibility between drilling components that would otherwise be incompatible. They are used to connect drill rods, core barrels, or other system components of different sizes or standards, enabling flexible system configurations without compromising operational safety or performance.",
                        icon: Factory
                    },
                    {
                        title: "Product Description",
                        content: "Spenta Engineers manufactures adapter couplings designed for accurate alignment, secure connections, and reliable performance in core drilling operations. Each adapter coupling is precision-engineered to maintain proper load transfer, torque transmission, and dimensional integrity when integrating mixed system components.",
                        icon: ClipboardList
                    },
                    {
                        title: "Standard Sizes, Lengths & Manufacturing",
                        content: "Adapter couplings are manufactured to suit standard core drilling sizes including AQ, BQ, NQ, HQ, and PQ. Components are produced from high-strength alloy steel using precision machining processes. Controlled heat treatment is applied to enhance strength, durability, and resistance to wear under drilling loads.",
                        icon: CheckCircle2
                    }
                ]}
            />

            <ProductFeatures 
                title="Key Advantages & Technical Data"
                features={[
                    {
                        title: "Flexible Connection",
                        description: "Enables connection between different drilling component sizes and maintains torque transmission and structural integrity.",
                        icon: Zap
                    },
                    {
                        title: "Precision Threads",
                        description: "Precision-machined threads for secure engagement. Allows flexible system configuration without equipment replacement.",
                        icon: Check
                    },
                    {
                        title: "Technical Specifications",
                        description: "Available Sizes: AQ, BQ, NQ, HQ, PQ. Connection Type: Threaded. Material: High-strength alloy steel with controlled heat treatment.",
                        icon: ClipboardList
                    }
                ]}
            />

            <ProductCTA 
                title="Request a Quote for Adapter Coupling"
                description="Share your drilling requirements and system configuration, and our technical team will assist you."
                productName="Adapter Coupling"
                sizes={[{ size: "AQ" }, { size: "BQ" }, { size: "NQ" }, { size: "HQ" }, { size: "PQ" }]}
            />
        </main>
    );
}