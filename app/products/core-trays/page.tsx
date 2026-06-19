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
        { src: "/products/12.png", alt: "DCDMA drill rods" },
        { src: "/products/13.png", alt: "Drill rod threaded connection" }
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
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">Plastic Core Trays & Boxes</h1>
                    <p className="max-w-3xl text-gray-300 text-xl leading-relaxed">
                        Plastic core trays and boxes are used for systematic storage, handling, and transportation of drilled core samples during mineral exploration and geotechnical investigations.
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
                            { label: "Core Trays", href: "/products/core-trays" },
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
                        Role in the Drilling Operation
                    </h2>
                    <p className="max-w-4xl text-lg text-gray-700 leading-relaxed">
                        Spenta Engineers manufactures plastic core trays and boxes designed for durability, ease of handling, and long service life in field and storage conditions. These products are engineered to provide reliable core containment while withstanding rough site handling, weather exposure, and repeated use in exploration projects.
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
                        Spenta Engineers manufactures plastic core trays and boxes designed for durability, ease of handling, and long service life in field and storage conditions. These products are engineered to provide reliable core containment while withstanding rough site handling, weather exposure, and repeated use in exploration projects.
                    </p>
                </section>

                {/* Capacity and Configuration */}
                <section className="mb-20">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="h-px w-8 bg-accent" />
                        <span className="text-sm uppercase tracking-widest text-accent font-semibold">
                            Details
                        </span>
                    </div>
                    <h2 className="text-4xl font-bold text-graphite mb-6">
                        Sizes and Manufacturing
                    </h2>

                    <div className="max-w-4xl space-y-6 text-lg text-gray-700">
                        <p className="leading-relaxed">
                            Plastic core trays and boxes are available in multiple configurations to suit different core sizes and lengths, including AQ, BQ, NQ, HQ, and PQ. They are manufactured using high-quality polymer materials through controlled molding processes to ensure consistent dimensions, structural strength, and resistance to impact and environmental conditions.
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
                                    { label: "Product Types", value: "Plastic Core Trays and Boxes" },
                                    { label: "Material", value: "High-strength industrial plastic" },
                                    { label: "Configuration", value: "Multi-channel trays / Lidded boxes" },
                                    { label: "Typical Operating Environment", value: "Soft to hard rock formations" },
                                    { label: "Application", value: "Core storage, transport & logging" },
                                    { label: "Core Sizes Supported", value: "AQ, BQ, NQ, HQ, PQ" },
                                    { label: "Typical Use Environment", value: "Field sites & storage facilities" },
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
                                "Select tray or box size based on recovered core diameter",
                                "Use lidded boxes for long-distance transport and storage",
                                "Consider stacking and handling requirements at sites"
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
                                "Durable construction for repeated field use",
                                "Maintains core orientation and organization",
                                "Resistant to moisture and environmental exposure",
                                "Lightweight and easy to handle during transport"
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
                        Plastic core trays and boxes are compatible with standard core sizes recovered from core drilling systems. All trays and boxes supplied by Spenta Engineers are designed to integrate smoothly into standard geological logging, storage, and transportation workflows.
                    </p>
                </section>

                {/* CTA Section */}
                <section className="bg-graphite text-white rounded-sm p-12">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                        <div>
                            <h3 className="text-3xl font-bold mb-2">
                                Request a Quote
                            </h3>
                            <p className="text-gray-300 text-lg">
                                Share your drilling requirements and system configuration, and our technical team will assist you in selecting the appropriate trays for your application.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <RequestQuoteModal productName="Plastic Core Trays & Boxes" sizes={[]} />
                            <AddToCartButton productName="Plastic Core Trays & Boxes" />
                        </div>
                    </div>
                </section>

            </div>

        </main>
    );
}