"use client";

import ProductHero from "@/components/products/ui/ProductHero";
import ProductStickyScroll from "@/components/products/ui/ProductStickyScroll";
import ProductFeatures from "@/components/products/ui/ProductFeatures";
import ProductCTA from "@/components/products/ui/ProductCTA";
import { ClipboardList, CheckCircle2, Check, Zap, Factory } from 'lucide-react';

export default function LockingCouplingPage() {
    return (
        <main className="bg-white transition-colors duration-300">
            <ProductHero 
                title="Locking Coupling"
                description="Locking couplings are precision components used to secure internal drilling assemblies and ensure positive engagement between wireline system components during core drilling operations."
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Products", href: "/products" },
                    { label: "Core Drilling System", href: "/products/core-drilling-system" },
                    { label: "Locking Coupling", href: "/products/core-drilling-system/locking-coupling" },
                ]}
            />

            <ProductStickyScroll 
                image="/products/7.png"
                sections={[
                    {
                        title: "Role in the Core Drilling System",
                        content: "Locking couplings play a vital role in maintaining secure connections within a core drilling system. Installed as part of the internal assembly, they prevent unintentional disengagement of components during drilling and retrieval operations.",
                        icon: Factory
                    },
                    {
                        title: "Product Description",
                        content: "Spenta Engineers manufactures locking couplings designed for dependable performance in wireline core drilling systems. Each locking coupling is engineered to provide secure engagement, precise alignment, and consistent operation when used with compatible head assemblies, overshots, and core barrel components.",
                        icon: ClipboardList
                    },
                    {
                        title: "Standard Sizes, Lengths & Manufacturing",
                        content: "Locking couplings are manufactured in standard sizes including AQ, BQ, NQ, HQ, and PQ. Components are produced from high-strength alloy steel using precision machining processes. Controlled heat treatment enhances strength, wear resistance, and durability under repeated loading conditions.",
                        icon: CheckCircle2
                    }
                ]}
            />

            <ProductFeatures 
                title="Key Advantages & Technical Data"
                features={[
                    {
                        title: "Secure Assembly",
                        description: "Prevents accidental disengagement of internal components, ensuring secure and stable drilling operations.",
                        icon: Zap
                    },
                    {
                        title: "Precision Engineering",
                        description: "Precision-machined for accurate fit and alignment. Designed for repeated use in demanding field conditions.",
                        icon: Check
                    },
                    {
                        title: "Technical Specifications",
                        description: "Available Sizes: AQ, BQ, NQ, HQ, PQ. Connection: Mechanical latching mechanism. Material: High-strength alloy steel.",
                        icon: ClipboardList
                    }
                ]}
            />

            <ProductCTA 
                title="Request a Quote for Locking Coupling"
                description="Share your drilling requirements and system configuration, and our technical team will assist you in selecting the appropriate locking coupling for your application."
                productName="Locking Coupling"
                sizes={[{ size: "AQ" }, { size: "BQ" }, { size: "NQ" }, { size: "HQ" }, { size: "PQ" }]}
            />
        </main>
    );
}