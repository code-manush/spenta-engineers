"use client";

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
            <section className="relative py-50 bg-gray-900 text-white overflow-hidden">
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
                                                    ? 'ring-4 ring-blue-600 scale-105' 
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
                        <div className="h-px w-8 bg-blue-600" />
                        <span className="text-sm uppercase tracking-widest text-blue-600 font-semibold">
                            Function
                        </span>
                    </div>
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">
                        Role in the Drilling Operation
                    </h2>
                    <p className="max-w-4xl text-lg text-gray-700 leading-relaxed">
                        Spenta Engineers manufactures plastic core trays and boxes designed for durability, ease of handling, and long service life in field and storage conditions. These products are engineered to provide reliable core containment while withstanding rough site handling, weather exposure, and repeated use in exploration projects.
                    </p>
                </section>

                {/* Product Description */}
                <section className="bg-gradient-to-br from-gray-50 to-white p-12 rounded-sm border-2 border-gray-200 mb-20 shadow-lg">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="h-px w-8 bg-blue-600" />
                        <span className="text-sm uppercase tracking-widest text-blue-600 font-semibold">
                            Overview
                        </span>
                    </div>
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">
                        Product Description
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Spenta Engineers manufactures plastic core trays and boxes designed for durability, ease of handling, and long service life in field and storage conditions. These products are engineered to provide reliable core containment while withstanding rough site handling, weather exposure, and repeated use in exploration projects.
                    </p>
                </section>

                {/* Capacity and Configuration */}
                <section className="mb-20">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="h-px w-8 bg-blue-600" />
                        <span className="text-sm uppercase tracking-widest text-blue-600 font-semibold">
                            Details
                        </span>
                    </div>
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">
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
                        <div className="h-px w-8 bg-blue-600" />
                        <span className="text-sm uppercase tracking-widest text-blue-600 font-semibold">
                            Technical Data
                        </span>
                    </div>
                    <h2 className="text-4xl font-bold text-gray-900 mb-8">
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
                                        <td className="py-5 px-6 font-semibold text-gray-900 bg-gray-50">
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
                            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                            </svg>
                            <h3 className="text-2xl font-bold text-gray-900">
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
                                    <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Key Advantages */}
                    <div className="bg-white p-8 rounded-sm border-2 border-gray-200 shadow-lg">
                        <div className="flex items-center gap-3 mb-6">
                            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <h3 className="text-2xl font-bold text-gray-900">
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
                                    <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                {/* Compatibility */}
                <section className="bg-blue-50 p-12 rounded-sm border-2 border-blue-200 mb-20 shadow-lg">
                    <div className="flex items-center gap-3 mb-4">
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                        </svg>
                        <h3 className="text-2xl font-bold text-gray-900">
                            System Compatibility
                        </h3>
                    </div>
                    <p className="max-w-4xl text-lg text-gray-700 leading-relaxed">
                        Plastic core trays and boxes are compatible with standard core sizes recovered from core drilling systems. All trays and boxes supplied by Spenta Engineers are designed to integrate smoothly into standard geological logging, storage, and transportation workflows.
                    </p>
                </section>

                {/* CTA Section */}
                <section className="bg-gray-900 text-white rounded-sm p-12">
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
                            <a
                                href="/contact"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-900 rounded-sm font-bold hover:bg-gray-100 transition-all"
                            >
                                <span>Contact Us</span>
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </a>
                            <a
                                href="https://wa.me/919426753291?text=I%20am%20interested%20in%20Drill%20Rods"
                                target="_blank"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-600 text-white rounded-sm font-bold hover:bg-green-700 transition-all"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                </svg>
                                <span>WhatsApp Enquiry</span>
                            </a>
                        </div>
                    </div>
                </section>

            </div>

        </main>
    );
}