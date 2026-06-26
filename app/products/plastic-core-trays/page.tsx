"use client";

import ProductHero from "@/components/products/ui/ProductHero";
import ProductStickyScroll from "@/components/products/ui/ProductStickyScroll";
import ProductVariantsCarousel from "@/components/products/ui/ProductVariantsCarousel";
import ProductFeatures from "@/components/products/ui/ProductFeatures";
import ProductCTA from "@/components/products/ui/ProductCTA";
import { Link, ShieldCheck, Factory, Gauge } from "lucide-react";

export default function PlasticCoreTraysPage() {
    return (
        <main className="bg-white dark:bg-gray-950 transition-colors duration-300">
            <ProductHero 
                title="Plastic Core Trays & Boxes"
                description="Durable plastic core trays and boxes designed for safe storage and transport of core samples."
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Products", href: "/products" },
                    { label: "Plastic Core Trays", href: "/products/plastic-core-trays" },
                ]}
            />

            <ProductStickyScroll 
                image="/core-tray.webp"
                sections={[
                    {
                        title: "Designed to Protect Valuable Samples",
                        content: "Proper core handling and storage are critical to maintaining geological data integrity. Our plastic core trays are designed to securely hold core samples while minimizing damage during transport and field handling."
                    },
                    {
                        title: "High-Quality Materials",
                        content: "Manufactured using high-quality plastic materials, these trays offer excellent impact resistance, dimensional stability, and long service life under demanding site conditions."
                    }
                ]}
            />

            <ProductVariantsCarousel 
                title="Available Core Tray Types"
                description="Our plastic core trays are available in standard sizes to accommodate different core diameters and storage requirements."
                variants={[
                    {
                        title: "BQ Core Trays",
                        description: "Designed for compact core samples used in shallow and exploratory drilling.",
                    },
                    {
                        title: "NQ Core Trays",
                        description: "Standard trays suitable for most mineral exploration applications.",
                    },
                    {
                        title: "HQ / PQ Core Trays",
                        description: "Larger trays designed for high-capacity core storage and handling.",
                    }
                ]}
            />

            <ProductFeatures 
                title="Technical Highlights"
                features={[
                    {
                        title: "Durable Construction",
                        description: "High-impact, durable plastic construction that is lightweight yet robust.",
                        icon: ShieldCheck
                    },
                    {
                        title: "Organized Logging",
                        description: "Consistent dimensions for organized core logging and stackable for efficient storage and transport.",
                        icon: Gauge
                    },
                    {
                        title: "Field Ready",
                        description: "Weather-resistant for field conditions, with easy cleaning and reuse capabilities.",
                        icon: Factory
                    }
                ]}
            />

            <ProductCTA 
                title="Need Core Tray Specifications or Bulk Supply?"
                description="Contact our team to confirm sizes, quantities, and delivery options for your project."
                productName="Plastic Core Trays & Boxes"
            />
        </main>
    );
}
