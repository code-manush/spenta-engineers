"use client";

import { ClipboardList, CheckCircle2, Check, Zap, Factory, ArrowRight, Twitter } from 'lucide-react';
import RequestQuoteModal from "@/app/products/RequestQuoteModal";
import AddToCartButton from "@/components/products/AddToCartButton";
import Image from "next/image";
import { useState } from "react";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function DrillRodsPage() {
    const [activeImage, setActiveImage] = useState(0);

    const images = [
        { src: "/products/2.png", alt: "DCDMA drill rods" },
        { src: "/products/3.png", alt: "Drill rod threaded connection" }
    ];

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
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">Drill Rods</h1>
                    <p className="max-w-3xl text-gray-300 text-xl leading-relaxed">
                        High-strength drill rods engineered to transmit torque and drilling force
                        reliably, forming the backbone of core drilling systems.
                    </p>
                </div>
            </section>

            {/* Product Images Gallery */}
            <section className="py-16 bg-gradient-to-br from-gray-50 to-white border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-6">
                    {/* Main Image */}
                    <div className="relative h-[400px] bg-gray-100 rounded-sm overflow-hidden shadow-2xl border-2 border-gray-200 mb-6">
                        <Image
                            src={images[activeImage].src}
                            alt={images[activeImage].alt}
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Thumbnail Navigation */}
                    <div className="grid grid-cols-2 gap-4 max-w-2xl">
                        {images.map((img, idx) => (
                            <button
                                key={idx}
                                onClick={() => setActiveImage(idx)}
                                className={`relative h-32 bg-gray-100 rounded-sm overflow-hidden transition-all ${
                                    activeImage === idx 
                                        ? 'ring-4 ring-accent scale-105' 
                                        : 'opacity-60 hover:opacity-100'
                                }`}
                            >
                                <Image
                                    src={img.src}
                                    alt={img.alt}
                                    fill
                                    className="object-cover"
                                />
                            </button>
                        ))}
                    </div>
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
                            { label: "Drill Rods", href: "/products/core-drilling-system/drill-rods" },
                        ]}
                    />
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
                        Drill rods are the primary load-bearing and torque-transmitting
                        components in a core drilling system. Connected in series, they
                        transfer rotational energy and feed force from the drilling rig
                        to the downhole assembly.
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
                        Wireline Drill Rods manufactured in AQ, BQ, NQ, HQ, and PQ sizes 
                        for mineral exploration and geotechnical drilling applications.
                        Designed to ensure reliable torque transmission and dimensional compatibility
                        within standard core drilling systems.
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
                            Drill rods are manufactured in standard sizes including AQ, BQ, NQ, HQ,
                            and PQ, with standard lengths of 1.5 m and 3.0 m. Selection of size depends
                            on drilling depth, formation conditions, and required core diameter.
                        </p>

                        <p className="leading-relaxed">
                            All drill rods are manufactured from high-grade alloy steel with
                            precision-machined threaded connections and controlled heat treatment
                            processes to ensure strength, durability, and reliable field performance.
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
                                    { label: "Standard Sizes", value: "AQ, BQ, NQ, HQ, PQ" },
                                    { label: "Standard Lengths", value: "1.5 m, 3.0 m" },
                                    { label: "Material", value: "High-strength alloy steel" },
                                    { label: "Heat Treatment", value: "Quenched and tempered" },
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
                                "Smaller sizes for shallow drilling and smaller core diameters",
                                "Medium sizes for general exploration drilling",
                                "Larger sizes for deeper drilling and unstable formations"
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
                                "Reliable torque transmission",
                                "Secure threaded connections",
                                "Manufactured to dimensional standards",
                                "Suitable for continuous drilling operations"
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
                        Drill rods must be compatible with the selected core barrel, head
                        assembly, and drilling rig. All drill rods supplied by Spenta
                        Engineers are designed to integrate seamlessly with standard core
                        drilling system components.
                    </p>
                </section>

                {/* CTA Section */}
                <section className="bg-graphite text-white rounded-sm p-12">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                        <div>
                            <h3 className="text-3xl font-bold mb-2">
                                Need Help Selecting Drill Rods?
                            </h3>
                            <p className="text-gray-300 text-lg">
                                Our technical team can assist with sizing and compatibility.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <RequestQuoteModal productName="Drill Rods" sizes={[{ size: "AQ" }, { size: "BQ" }, { size: "NQ" }, { size: "HQ" }, { size: "PQ" }]} />
                            <AddToCartButton productName="Drill Rods" />
                        </div>
                    </div>
                </section>

            </div>

        </main>
    );
}