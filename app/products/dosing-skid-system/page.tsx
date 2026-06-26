"use client";

import ProductHero from "@/components/products/ui/ProductHero";
import ProductStickyScroll from "@/components/products/ui/ProductStickyScroll";
import ProductSpecsDashboard from "@/components/products/ui/ProductSpecsDashboard";
import ProductFeatures from "@/components/products/ui/ProductFeatures";
import ProductGallery from "@/components/products/ui/ProductGallery";
import ProductVariantsCarousel from "@/components/products/ui/ProductVariantsCarousel";
import ProductCTA from "@/components/products/ui/ProductCTA";
import { Droplets, Gauge, Shield, Layers, Factory, Settings, Zap } from "lucide-react";

export default function DosingSkidSystemPage() {
    return (
        <main className="bg-white dark:bg-gray-950 transition-colors duration-300">
            <ProductHero
                title="Dosing Skid System"
                description="Fully integrated, pre-assembled chemical dosing packages engineered for precise, safe, and uninterrupted chemical injection across demanding industrial applications."
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Products", href: "/products" },
                    { label: "Dosing Skid System", href: "/products/dosing-skid-system" },
                ]}
            />

            <ProductGallery
                images={[
                    { src: "/dosing-skid.png", alt: "Dosing Skid System Front View" },
                    { src: "/dosing-skid-3.png", alt: "Dosing Skid System Details" }
                ]}
            />

            <ProductFeatures
                title="Built for Industrial Reliability"
                features={[
                    {
                        title: "Turnkey Engineering",
                        description: "Fully integrated and pre-assembled industrial chemical feed skids — delivered ready to connect and commission.",
                        icon: Layers
                    },
                    {
                        title: "Continuous Performance",
                        description: "Configured with duty and standby pump arrangements to guarantee uninterrupted dosing operations.",
                        icon: Gauge
                    },
                    {
                        title: "Safe Handling",
                        description: "Double-contained chemical skid design maximises operator protection against leaks and spills.",
                        icon: Shield
                    }
                ]}
            />

            <ProductStickyScroll
                image="/dosing-skid.png"
                sections={[
                    {
                        title: "What is a Dosing Skid System?",
                        content: "A factory-assembled, self-contained unit designed to store, condition, and precisely inject chemicals into industrial processes at controlled flow rates. Spenta Engineers designs and supplies complete dosing skid packages — integrating storage tanks, metering pumps, instrumentation, and safety accessories on a single structural skid frame."
                    },
                    {
                        title: "Custom Engineering Capability",
                        content: "Every dosing skid is engineered to your specific industrial application. We account for chemical properties, required injection rates, operating pressure and temperature, site classification, local safety regulations, and future capacity requirements."
                    }
                ]}
            />

            <ProductVariantsCarousel
                title="Inside the Skid"
                description="Our standard dosing skids consist of three main integrated sub-systems."
                variants={[
                    {
                        title: "01. Storage & Mixing Tank",
                        description: "Heavy-duty PE/FRP construction with motorized agitator and automated high/low level alarms.",
                    },
                    {
                        title: "02. Precision Dosing Pump",
                        description: "Advanced electronic diaphragm dosing pump in duty/standby configuration for pulsation-free delivery.",
                    },
                    {
                        title: "03. Ancillary Accessories",
                        description: "Pulsation dampener, calibration pot, PRV, strainers, and level measurement instruments.",
                    }
                ]}
            />

            <ProductSpecsDashboard
                title="Standard Specifications"
                specs={[
                    { label: "Skid Type", value: "Pre-assembled, factory-tested Chemical Dosing Skid" },
                    { label: "Tank Material", value: "PE (Polyethylene) / FRP (Fibre-Reinforced Plastic)" },
                    { label: "Pump Type", value: "Electronic Diaphragm Dosing Pump" },
                    { label: "Configuration", value: "Duty / Standby (1+1 or 2+1 as required)" },
                    { label: "Dosing Control", value: "Micro-adjustable stroke frequency & length" },
                    { label: "Containment", value: "Double-contained skid design as standard" },
                    { label: "Level Monitoring", value: "Automated high & low level alarms" },
                    { label: "Accessories", value: "Dampener, calibration pot, PRV, strainers, instrumentation" },
                    { label: "Skid Frame", value: "Structural steel with corrosion-resistant coating / SS option" },
                ]}
            />

            <section className="py-24 bg-gray-50 border-t border-gray-200">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                            Dosing solutions tailored for diverse industrial applications.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { icon: <Droplets />, title: "Water & Wastewater" },
                            { icon: <Factory />, title: "Fertilizer & Chemical" },
                            { icon: <Layers />, title: "Oil & Gas" },
                            { icon: <Settings />, title: "Chemical Processing" },
                            { icon: <Shield />, title: "Power Generation" },
                            { icon: <Gauge />, title: "Custom Applications" }
                        ].map((ind, i) => (
                            <div key={i} className="flex items-center gap-4 p-6 bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-all">
                                <div className="text-blue-600 bg-blue-50 p-3 rounded-lg">
                                    {ind.icon}
                                </div>
                                <h3 className="font-bold text-gray-900">{ind.title}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <ProductCTA
                title="Request a Quote for Dosing Skid"
                description="Share your application details — chemical type, dosing rate, industry — and our engineering team will design the right skid for your process."
                productName="Dosing Skid System"
            />
        </main>
    );
}
