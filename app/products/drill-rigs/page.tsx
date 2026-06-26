"use client";

import ProductHero from "@/components/products/ui/ProductHero";
import ProductStickyScroll from "@/components/products/ui/ProductStickyScroll";
import ProductVariantsCarousel from "@/components/products/ui/ProductVariantsCarousel";
import ProductSpecsDashboard from "@/components/products/ui/ProductSpecsDashboard";
import ProductFeatures from "@/components/products/ui/ProductFeatures";
import ProductCTA from "@/components/products/ui/ProductCTA";
import { ClipboardList, CheckCircle2, Factory } from "lucide-react";

export default function DrillRigsPage() {
    return (
        <main className="bg-white dark:bg-gray-950 transition-colors duration-300">
            <ProductHero 
                title="Drill Rigs"
                description="Heavy-duty drilling rigs providing the rotational power, feed force, and control required for mineral exploration and geotechnical operations."
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Products", href: "/products" },
                    { label: "Drill Rigs", href: "/products/drill-rigs" },
                ]}
            />

            <ProductStickyScroll 
                image="/products/10.png"
                sections={[
                    {
                        title: "Role in the Drilling Operation",
                        content: "Drilling rigs serve as the primary power and control units in drilling operations. They provide rotation, feed force, and hydraulic or mechanical control to the drill string and downhole tools. Proper rig selection is critical to ensure drilling efficiency, operational safety, and compatibility with the selected core drilling system."
                    },
                    {
                        title: "Engineering Overview",
                        content: "Spenta Engineers manufactures drilling rigs designed for reliable performance in mineral exploration and geotechnical drilling applications. These rigs are engineered to operate with standard core drilling systems and are available in configurations suitable for a wide range of drilling depths, ground conditions, and site environments."
                    },
                    {
                        title: "Capacity & Configuration",
                        content: "Available in multiple configurations depending on drilling depth, formation conditions, site accessibility, and power requirements. Typical configuration parameters include drilling depth capacity, torque and rotation speed, feed force, power source, and mounting type."
                    }
                ]}
            />

            <ProductVariantsCarousel 
                title="Types of Drilling Rigs"
                variants={[
                    {
                        title: "Portable Drilling Rigs",
                        description: "Compact rigs designed for ease of transportation and rapid setup, suitable for remote locations and confined work sites.",
                        image: "/products/10.png"
                    },
                    {
                        title: "Crawler Mounted Rigs",
                        description: "Heavy-duty rigs mounted on crawler tracks, offering enhanced stability and mobility on uneven or difficult terrain.",
                        image: "/products/9.png"
                    }
                ]}
            />

            <ProductSpecsDashboard 
                title="Standard Specifications"
                metrics={[
                    { label: "Power Source", value: "Diesel/Electric" },
                    { label: "Control", value: "Hydraulic" }
                ]}
                specs={[
                    { label: "Available Types", value: "Portable rigs, Crawler-mounted rigs" },
                    { label: "Mounting Options", value: "Skid-mounted, Portable, Crawler" },
                    { label: "Compatibility", value: "Standard core drilling systems" },
                    { label: "Typical Operating Environment", value: "Remote sites, uneven terrain" },
                    { label: "Application", value: "Mineral exploration & geotechnical drilling" }
                ]}
            />

            <ProductFeatures 
                title="Key Advantages"
                features={[
                    {
                        title: "Continuous Operations",
                        description: "Designed for reliable and continuous drilling operations in extreme conditions without catastrophic failure.",
                        icon: CheckCircle2
                    },
                    {
                        title: "Universal Compatibility",
                        description: "Fully compatible with standard core drilling systems (drill rods, core barrels, wireline components).",
                        icon: Factory
                    },
                    {
                        title: "Configurable Design",
                        description: "Highly configurable for different site access restrictions and precise drilling requirements.",
                        icon: ClipboardList
                    }
                ]}
            />

            <ProductCTA 
                title="Request a Quote for Drill Rigs"
                description="Share your drilling requirements and system configuration, and our technical team will assist you in selecting the appropriate drilling rig for your application."
                productName="Drill Rigs"
            />
        </main>
    );
}