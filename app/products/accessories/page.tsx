"use client";

import ProductHero from "@/components/products/ui/ProductHero";
import ProductStickyScroll from "@/components/products/ui/ProductStickyScroll";
import ProductVariantsCarousel from "@/components/products/ui/ProductVariantsCarousel";
import ProductFeatures from "@/components/products/ui/ProductFeatures";
import ProductCTA from "@/components/products/ui/ProductCTA";
import { Link, Shield, Wrench, CheckCircle } from "lucide-react";

export default function AccessoriesPage() {
    return (
        <main className="bg-white dark:bg-gray-950 transition-colors duration-300">
            <ProductHero
                title="Overshots & Accessories"
                description="Drilling accessories including overshots, adapters, and core lifters supporting efficient drilling operations."
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Products", href: "/products" },
                    { label: "Accessories", href: "/products/accessories" },
                ]}
            />

            <ProductStickyScroll
                image="/overshot.webp"
                sections={[
                    {
                        title: "Essential Components",
                        content: "Drilling accessories play a critical role in ensuring operational continuity, safety, and equipment compatibility during drilling activities."
                    },
                    {
                        title: "Reliable Operations",
                        content: "Our accessories are engineered for precise fitment, durability, and ease of use, helping reduce downtime and maintain drilling efficiency under challenging field conditions."
                    }
                ]}
            />

            <ProductVariantsCarousel
                title="Available Accessories"
                description="Our accessory range supports standard wireline drilling systems and field requirements."
                variants={[
                    {
                        title: "Overshots",
                        description: "Used for retrieval of core barrels during wireline drilling operations.",
                    },
                    {
                        title: "Couplings & Adapters",
                        description: "Precision components ensuring secure connections between drilling tools.",
                    },
                    {
                        title: "Core Lifters & Catchers",
                        description: "Designed to retain core samples during recovery and minimize core loss.",
                    }
                ]}
            />

            <ProductFeatures
                title="Technical Highlights"
                features={[
                    {
                        title: "Precision Machining",
                        description: "Accurate fitment through rigorous precision machining.",
                        icon: Wrench
                    },
                    {
                        title: "Operational Safety",
                        description: "Designed for repeated field use and improved operational safety.",
                        icon: Shield
                    },
                    {
                        title: "System Compatibility",
                        description: "Compatibility with standard drilling systems and consistent quality inspection standards.",
                        icon: Link
                    }
                ]}
            />

            <ProductCTA
                title="Need Accessory Details?"
                description="Contact our team to confirm accessory selection and compatibility with your drilling setup."
                productName="Accessories"
            />
        </main>
    );
}
