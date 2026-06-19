"use client";

import { ClipboardList, CheckCircle2, Check, Zap, Factory, ArrowRight, Twitter } from 'lucide-react';
import RequestQuoteModal from "@/app/products/RequestQuoteModal";
import AddToCartButton from "@/components/products/AddToCartButton";
import Image from "next/image";

import Breadcrumbs from "@/components/Breadcrumbs";

export default function DrillRodsPage() {

    return (
        <main className="bg-white">

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
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">Overshot</h1>
                    <p className="max-w-3xl text-gray-300 text-xl leading-relaxed">
                        Overshots are wireline retrieval tools used to latch onto and recover the inner tube assembly from the core barrel without dismantling the drill rod string.
                    </p>
                </div>
            </section>

            {/* Breadcrumbs */}
            <section className="bg-gray-50 border-b border-gray-200 py-4">
                <div className="max-w-7xl mx-auto px-6">
                    <Breadcrumbs
                        items={[
                            { label: "Home", href: "/" },
                            { label: "Products", href: "/products" },
                            { label: "Core Drilling System", href: "/products/core-drilling-system" },
                            { label: "Overshot", href: "/products/core-drilling-system/overshot" },
                        ]}
                    />
                </div>
            </section>

            {/* Product Images Gallery */}
            <section className="py-16 bg-gradient-to-br from-gray-50 to-white border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-6">
                    {/* Main Image */}
                    <div className="relative h-[400px] bg-gray-100 rounded-sm overflow-hidden shadow-2xl border-2 border-gray-200 mb-6">
                        <Image
                            src="/products/6.png"
                            alt="Overshot"
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
                        The overshot plays a critical role in wireline core drilling operations. It is lowered through the drill rod string using a wireline cable to engage with the head assembly and retrieve the inner tube assembly. This enables rapid core recovery without removing drill rods, significantly improving drilling efficiency and reducing downtime.
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
                        Spenta Engineers manufactures overshots designed for reliable engagement, smooth retrieval, and long service life in demanding drilling conditions. Each overshot is engineered for precise interaction with compatible head assemblies and wireline systems, ensuring consistent performance during repeated retrieval cycles.
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
                            Overshots are manufactured in standard sizes including AQ, BQ, NQ, HQ, and PQ. Components are produced from high-strength alloy steel with precision machining to ensure accurate latching and release mechanisms. Controlled heat treatment enhances durability and resistance to wear during continuous use.
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
                                    { label: "Available Sizes", value: "AQ, BQ, NQ, HQ, PQ" },
                                    { label: "Operating Method", value: "Wireline retrieval" },
                                    { label: "Engagement Type", value: "Mechanical latching mechanism" },
                                    { label: "Material", value: "High-strength alloy steel" },
                                    { label: "Heat Treatment", value: "Controlled heat treatment" },
                                    { label: "Typical Application", value: "Wireline core drilling systems" }
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
                                "Select size based on corresponding head assembly and core barrel size",
                                "Ensure compatibility with wireline cable and winch system",
                                "Consider drilling depth and retrieval frequency for optimal performance"
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
                                "Enables fast core retrieval without removing drill rods",
                                "Reliable latching and release mechanism",
                                "Precision-machined for smooth wireline operation",
                                "Designed for repeated use in demanding drilling environments"
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
                        Overshots must be compatible with the selected head assembly, core barrel, and wireline system. All overshots supplied by Spenta Engineers are designed to integrate seamlessly with standard wireline core drilling system components of corresponding sizes.
                    </p>
                </section>

                {/* CTA Section */}
                <section className="bg-graphite text-white rounded-sm p-12">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                        <div>
                            <h3 className="text-3xl font-bold mb-2">
                                Request a Quote for Overshot
                            </h3>
                            <p className="text-gray-300 text-lg">
                                Share your drilling requirements and system configuration, and our technical team will assist you in selecting the appropriate overshot for your application.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <RequestQuoteModal productName="Overshot" sizes={[{ size: "AQ" }, { size: "BQ" }, { size: "NQ" }, { size: "HQ" }, { size: "PQ" }]} />
                            <AddToCartButton productName="Overshot" />
                        </div>
                    </div>
                </section>

            </div>

        </main>
    );
}