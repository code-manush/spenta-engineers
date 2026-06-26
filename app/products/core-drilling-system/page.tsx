"use client";

import ProductHero from "@/components/products/ui/ProductHero";
import ProductStickyScroll from "@/components/products/ui/ProductStickyScroll";
import ProductFeatures from "@/components/products/ui/ProductFeatures";
import ProductCTA from "@/components/products/ui/ProductCTA";
import { Link, Zap, ShieldCheck, CheckCircle } from "lucide-react";
import SystemCompatibilityConfigurator from "@/components/products/SystemCompatibilityConfigurator";

export default function CoreDrillingSystemPage() {
    return (
        <main className="bg-white dark:bg-gray-950 transition-colors duration-300">
            <ProductHero 
                title="Core Drilling System"
                description="Integrated drilling solution with compatible components for efficient mineral exploration and geotechnical drilling."
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Products", href: "/products" },
                    { label: "Core Drilling System", href: "/products/core-drilling-system" },
                ]}
            />

            <ProductStickyScroll 
                image="/products/core-drilling-system-cover.png"
                sections={[
                    {
                        title: "Overview",
                        content: "A core drilling system is a coordinated assembly of drilling components used to recover continuous core samples from the ground. Each component performs a specific function, and correct compatibility between components is essential for drilling efficiency, safety, and reliable core recovery."
                    },
                    {
                        title: "Process Flow",
                        content: (
                            <ul className="space-y-4 text-gray-600 mt-4">
                                <li><strong>01.</strong> Drilling rig provides rotation and feed force</li>
                                <li><strong>02.</strong> Drill rods transmit torque to the downhole assembly</li>
                                <li><strong>03.</strong> Core barrel cuts and retains the core sample</li>
                                <li><strong>04.</strong> Head assembly connects rods to the core barrel</li>
                                <li><strong>05.</strong> Overshot retrieves the inner tube</li>
                                <li><strong>06.</strong> Couplings ensure secure connections</li>
                            </ul>
                        )
                    },
                    {
                        title: "Compatibility & Standards",
                        content: "All core drilling system components are designed to conform to industry-recognized dimensional standards and are manufactured to ensure interchangeability within compatible systems. Correct selection of components is essential for safe and efficient drilling operations."
                    }
                ]}
            />

            {/* Custom Interactive Component for this specific page */}
            <section className="py-24 bg-gray-50 border-t border-gray-200">
                <div className="max-w-7xl mx-auto px-6">
                    <SystemCompatibilityConfigurator />
                </div>
            </section>

            <ProductFeatures 
                title="System Integration Benefits"
                features={[
                    {
                        title: "Enhanced Efficiency",
                        description: "Drilling efficiency through compatible, engineered components working in harmony.",
                        icon: Zap
                    },
                    {
                        title: "Improved Core Recovery",
                        description: "Maximizes sample quality and reliability across varied ground conditions.",
                        icon: CheckCircle
                    },
                    {
                        title: "Reduced Downtime",
                        description: "Simplified component selection and reliable performance in demanding field conditions.",
                        icon: ShieldCheck
                    }
                ]}
            />

            <ProductCTA 
                title="Need Help Selecting the Right System?"
                description="Our technical team can assist with system configuration and compatibility."
                productName="Core Drilling System"
            />
        </main>
    );
}