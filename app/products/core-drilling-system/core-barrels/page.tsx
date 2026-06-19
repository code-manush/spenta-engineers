"use client";

import { ClipboardList, CheckCircle2, Check, Zap, Factory, ArrowRight, Twitter } from 'lucide-react';
import RequestQuoteModal from "@/app/products/RequestQuoteModal";
import AddToCartButton from "@/components/products/AddToCartButton";
import Image from "next/image";

import Breadcrumbs from "@/components/Breadcrumbs";

export default function CoreBarrelsPage() {
    return (
        <main className="bg-white">
            {/* Breadcrumbs */}
            <section className="bg-gray-50 border-b border-gray-200 py-4 pt-24 sm:pt-28 md:pt-32 lg:pt-36 xl:pt-40">
                <div className="max-w-7xl mx-auto px-6">
                    <Breadcrumbs
                        items={[
                            { label: "Home", href: "/" },
                            { label: "Products", href: "/products" },
                            { label: "Core Drilling System", href: "/products/core-drilling-system" },
                            { label: "Core Barrels", href: "/products/core-drilling-system/core-barrels" },
                        ]}
                    />
                </div>
            </section>

            {/* Hero */}
            <section className="relative py-50 bg-graphite text-white overflow-hidden">
                {/* Grid overlay */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                                         linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                        backgroundSize: '50px 50px'
                    }} />
                </div>

                <div className="relative max-w-7xl mx-auto px-6">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="h-px w-12 bg-blue-500" />
                        <span className="uppercase tracking-widest text-gray-400 text-sm">
                            Products
                        </span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">Core Barrels</h1>
                    <p className="max-w-3xl text-gray-300 text-xl leading-relaxed">
                        Core barrels are downhole drilling assemblies designed to cut, retain, and protect core samples during mineral exploration and geotechnical drilling operations.
                    </p>
                </div>
            </section>

            {/* Product Images Gallery */}
            <section className="py-16 bg-gradient-to-br from-gray-50 to-white border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-6">
                    {/* Main Image */}
                    <div className="relative h-[400px] bg-gray-100 rounded-sm overflow-hidden shadow-2xl border-2 border-gray-200 mb-6">
                        <Image
                            src="/products/core-barrel1.png"
                            alt="Core barrel"
                            fill
                            className="object-cover"
                        />
                    </div>
                    
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-6 py-24 space-y-24">

                {/* Role in System */}
                <section className="mb-20">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="h-px w-8 bg-accent" />
                        <span className="text-sm uppercase tracking-widest text-accent font-semibold">
                            Function
                        </span>
                    </div>
                    <h2 className="text-4xl font-bold text-graphite mb-6">
                        Role in the Core Drilling System
                    </h2>
                    <p className="max-w-4xl text-lg text-gray-700 leading-relaxed">
                        Core barrels are the primary sampling tools within a core drilling system. Positioned at the bottom of the drill string, they house the cutting bit and inner tube assembly responsible for recovering continuous, undisturbed core samples. Proper selection of core barrel type and size is essential to ensure accurate geological information, efficient drilling performance, and reliable core recovery.
                    </p>
                </section>

                {/* Product Description */}
                <section className="bg-gradient-to-br from-gray-50 to-white p-12 rounded-sm border-2 border-gray-200 mb-20 shadow-lg">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="h-px w-8 bg-accent" />
                        <span className="text-sm uppercase tracking-widest text-accent font-semibold">
                            Overview
                        </span>
                    </div>
                    <h2 className="text-4xl font-bold text-graphite mb-6">
                        Product Description
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Spenta Engineers manufactures core barrels designed for consistent performance across a wide range of drilling conditions. Each core barrel is engineered to operate seamlessly with compatible drill rods, head assemblies, and wireline systems, ensuring dimensional accuracy and operational reliability in mineral exploration and geotechnical drilling projects.
                    </p>
                </section>

                {/* Sizes & Manufacturing */}
                <section className="mb-20">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="h-px w-8 bg-accent" />
                        <span className="text-sm uppercase tracking-widest text-accent font-semibold">
                            Manufacturing
                        </span>
                    </div>
                    <h2 className="text-4xl font-bold text-graphite mb-6">
                        Standard Sizes, Lengths & Manufacturing
                    </h2>

                    <div className="max-w-4xl space-y-6 text-lg text-gray-700">
                        <p className="leading-relaxed">
                            Core barrels are manufactured in standard sizes including AQ, BQ, NQ, HQ, and PQ. All components are produced from high-strength alloy steel using precision machining processes. Controlled heat treatment is applied to enhance strength, wear resistance, and durability under continuous drilling conditions.
                        </p>
                    </div>
                </section>

                {/* Specifications Table */}
                <section className="mb-20">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="h-px w-8 bg-accent" />
                        <span className="text-sm uppercase tracking-widest text-accent font-semibold">
                            Technical Data
                        </span>
                    </div>
                    <h2 className="text-4xl font-bold text-graphite mb-8">
                        Standard Specifications
                    </h2>

                    <div className="overflow-hidden rounded-sm border-2 border-gray-200 shadow-lg">
                        <table className="w-full">
                            <tbody className="text-lg">
                                {[
                                    { label: "Available Types", value: "Single Tube, Double Tube, Triple Tube" },
                                    { label: "Standard Sizes", value: "AQ, BQ, NQ, HQ, PQ" },
                                    { label: "Core Recovery Method", value: "Conventional / Wireline" },
                                    { label: "Material", value: "High-strength alloy steel" },
                                    { label: "Heat Treatment", value: "Controlled heat treatment" },
                                    { label: "Typical Application", value: "Mineral exploration and geotechnical drilling" }
                                ].map((row, idx) => (
                                    <tr key={idx} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                                        <td className="py-5 px-6 font-semibold text-graphite bg-gray-50">
                                            {row.label}
                                        </td>
                                        <td className="py-5 px-6 text-gray-700">
                                            {row.value}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Features Grid */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">

                    {/* Selection Guidance */}
                    <div className="bg-white p-8 rounded-sm border-2 border-gray-200 shadow-lg">
                        <div className="flex items-center gap-3 mb-6">
                            <ClipboardList className="w-6 h-6 text-accent" strokeWidth={2} />
                            <h3 className="text-2xl font-bold text-graphite">
                                Selection Guidance
                            </h3>
                        </div>
                        <ul className="space-y-4">
                            {[
                                "Single Tube Core Barrels suitable for stable formations and shallow drilling",
                                "Double Tube Core Barrels used for general exploration drilling to improve core recovery",
                                "Triple Tube Core Barrels recommended for fractured, soft, or weathered formations where maximum core preservation is required"
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-gray-700">
                                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-1" strokeWidth={2} />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Key Advantages */}
                    <div className="bg-white p-8 rounded-sm border-2 border-gray-200 shadow-lg">
                        <div className="flex items-center gap-3 mb-6">
                            <Check className="w-6 h-6 text-accent" strokeWidth={2} />
                            <h3 className="text-2xl font-bold text-graphite">
                                Key Advantages
                            </h3>
                        </div>
                        <ul className="space-y-4">
                            {[
                                "Designed for efficient and reliable core recovery",
                                "Compatible with standard wireline drilling systems",
                                "Precision-machined components for accurate alignment",
                                "Suitable for a wide range of geological formations"
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-gray-700">
                                    <Zap className="w-5 h-5 text-accent flex-shrink-0 mt-1" strokeWidth={2} />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                {/* Compatibility */}
                <section className="bg-blue-50 p-12 rounded-sm border-2 border-blue-200 mb-20 shadow-lg">
                    <div className="flex items-center gap-3 mb-4">
                        <Factory className="w-6 h-6 text-accent" strokeWidth={2} />
                        <h3 className="text-2xl font-bold text-graphite">
                            System Compatibility
                        </h3>
                    </div>
                    <p className="max-w-4xl text-lg text-gray-700 leading-relaxed">
                        Core barrels must be compatible with the selected drill rods, head assembly, and overshot system. All core barrels supplied by Spenta Engineers are designed to integrate seamlessly with standard core drilling system components of corresponding sizes.
                    </p>
                </section>

                {/* CTA Section */}
                <section className="bg-graphite text-white rounded-sm p-12">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                        <div>
                            <h3 className="text-3xl font-bold mb-2">
                                Request a Quote for Core Barrels
                            </h3>
                            <p className="text-gray-300 text-lg">
                                Share your drilling requirements and our technical team will assist you in selecting the appropriate core barrel configuration for your application.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <RequestQuoteModal productName="Core Barrels" sizes={[{ size: "AQ" }, { size: "BQ" }, { size: "NQ" }, { size: "HQ" }, { size: "PQ" }]} />
                            <AddToCartButton productName="Core Barrels" />
                        </div>
                    </div>
                </section>

            </div>

        </main>
    );
}