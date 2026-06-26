"use client";

import ProductHero from "@/components/products/ui/ProductHero";
import ProductStickyScroll from "@/components/products/ui/ProductStickyScroll";
import ProductSpecsDashboard from "@/components/products/ui/ProductSpecsDashboard";
import ProductFeatures from "@/components/products/ui/ProductFeatures";
import ProductCTA from "@/components/products/ui/ProductCTA";
import { CheckCircle2, ShieldCheck, Zap } from "lucide-react";

export default function DiamondTungstenToolsPage() {
    return (
        <main className="bg-white dark:bg-gray-950 transition-colors duration-300">
            <ProductHero 
                title="Diamond & Tungsten Carbide Tools"
                description="Diamond and tungsten carbide tools are cutting components designed to penetrate a wide range of geological formations during mineral exploration, mining, and geotechnical drilling operations."
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Products", href: "/products" },
                    { label: "Diamond & Tungsten Tools", href: "/products/diamond-tungsten-tools" },
                ]}
            />

            <ProductStickyScroll 
                image="/products/11.png"
                sections={[
                    {
                        title: "Role in the Drilling Operation",
                        content: "Diamond and tungsten carbide tools are responsible for cutting and breaking rock formations at the drilling face. Installed at the bottom of the drilling assembly, these tools directly interact with the ground and determine penetration rate, tool life, and overall drilling efficiency."
                    },
                    {
                        title: "Sizes and Manufacturing",
                        content: "Manufactured in standard sizes to match core drilling systems including AQ, BQ, NQ, HQ, and PQ. Tools are produced using high-quality raw materials, precision machining, and controlled manufacturing processes to ensure dimensional accuracy and durability."
                    }
                ]}
            />

            <ProductSpecsDashboard 
                title="Standard Specifications"
                specs={[
                    { label: "Tool Types", value: "Diamond tools, Tungsten carbide tools" },
                    { label: "Cutting Medium", value: "Diamond segments / Tungsten carbide inserts" },
                    { label: "Manufacturing Process", value: "Precision machining & controlled bonding" },
                    { label: "Typical Operating Environment", value: "Soft to hard rock formations" },
                    { label: "Application", value: "Mineral exploration & geotechnical drilling" }
                ]}
            />

            <ProductFeatures 
                title="Key Advantages"
                features={[
                    {
                        title: "Efficient Rock Cutting",
                        description: "Designed for efficient rock cutting and penetration across various formations.",
                        icon: Zap
                    },
                    {
                        title: "System Compatibility",
                        description: "Compatible with standard core drilling systems.",
                        icon: ShieldCheck
                    },
                    {
                        title: "Extended Service Life",
                        description: "Reliable performance and extended service life under demanding conditions.",
                        icon: CheckCircle2
                    }
                ]}
            />

            <ProductCTA 
                title="Request a Quote"
                description="Share your drilling requirements and system configuration, and our technical team will assist you in selecting the appropriate tools for your application."
                productName="Diamond & Tungsten Carbide Tools"
            />
        </main>
    );
}