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
        { src: "/products/9.png", alt: "DCDMA drill rods" },
        { src: "/products/10.png", alt: "Drill rod threaded connection" }
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
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">Drill Rigs</h1>
                    <p className="max-w-3xl text-gray-300 text-xl leading-relaxed">
                        Drilling rigs provide the rotational power, feed force, and control required to perform mineral exploration and geotechnical drilling operations efficiently and safely.
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
                            { label: "Drill Rigs", href: "/products/drill-rigs" },
                        ]}
                    />
                </div>
            </section>

            {/* Product Images Gallery */}
            <section className="py-16 bg-gradient-to-br from-gray-50 to-white border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-6">
                    {/* Main Image */}
                    <div className="relative h-[500px] bg-gray-100 rounded-sm overflow-hidden shadow-2xl border-2 border-gray-200 mb-6">
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
                                className={`relative h-32 bg-gray-100 rounded-sm overflow-hidden transition-all ${activeImage === idx
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
                        Drilling rigs serve as the primary power and control units in drilling operations. They provide rotation, feed force, and hydraulic or mechanical control to the drill string and downhole tools. Proper rig selection is critical to ensure drilling efficiency, operational safety, and compatibility with the selected core drilling system.
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
                        Spenta Engineers manufactures drilling rigs designed for reliable performance in mineral exploration and geotechnical drilling applications. These rigs are engineered to operate with standard core drilling systems and are available in configurations suitable for a wide range of drilling depths, ground conditions, and site environments.
                    </p>
                </section>

                {/* TYPES */}
                <section className="mb-20">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="h-px w-8 bg-accent" />
                        <span className="text-sm uppercase tracking-widest text-accent font-semibold">
                            Variants
                        </span>
                    </div>
                    <h2 className="text-4xl font-bold text-graphite mb-6">
                        Types of Drilling Rigs
                    </h2>
                    <ul className="space-y-4 text-gray-700 text-lg leading-relaxed max-w-4xl">
                        <li>
                            <strong>Portable Drilling Rigs:</strong> Compact rigs designed
                            for ease of transportation and rapid setup, suitable for remote
                            locations and confined work sites.
                        </li>
                        <li>
                            <strong>Crawler Mounted Drilling Rigs:</strong> Heavy-duty rigs
                            mounted on crawler tracks, offering enhanced stability and
                            mobility on uneven terrain.
                        </li>
                    </ul>
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
                        Capacity and Configuration
                    </h2>

                    <div className="max-w-4xl space-y-6 text-lg text-gray-700">
                        <p className="leading-relaxed">
                            Drilling rigs are available in multiple configurations depending on
              drilling depth, formation conditions, site accessibility, and power
              requirements. Typical configuration parameters include drilling
              depth capacity, torque and rotation speed, feed force, power
              source, and mounting type.
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
                                    { label: "Available Types", value: "Portable rigs, Crawler-mounted rigs" },
                                    { label: "Power Source", value: "Diesel/Electric" },
                                    { label: "Control System", value: "Hydraulic / Mechanical" },
                                    { label: "Mounting Options", value: "Skid-mounted, Portable, Crawler" },
                                    { label: "Compatibility", value: "Standard core drilling systems" },
                                    { label: "Typical Operating Environment", value: "Remote sites, uneven terrain" },
                                    { label: "Application", value: "Mineral exploration & geotechnical drilling" }
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
                                "Select rig type based on site accessibility and terrain",
                                "Match rig capacity to required drilling depth and formation conditions",
                                "Ensure compatibility with selected core drilling system components"
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
                                "Designed for reliable and continuous drilling operations",
                                "Compatible with standard core drilling systems",
                                "Configurable for different site and drilling requirements",
                                "Robust construction for demanding field conditions"
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
                        Drilling rigs must be compatible with the selected core drilling system, including drill rods, core barrels, and wireline components. All drilling rigs supplied by Spenta Engineers are designed to operate seamlessly with industry-standard core drilling equipment.
                    </p>
                </section>

                {/* CTA Section */}
                <section className="bg-graphite text-white rounded-sm p-12">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                        <div>
                            <h3 className="text-3xl font-bold mb-2">
                                Request a Quote for Drilling Rigs
                            </h3>
                            <p className="text-gray-300 text-lg">
                                Share your drilling requirements and system configuration, and our technical team will assist you in selecting the appropriate drilling rig for your application.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <RequestQuoteModal productName="Drill Rigs" sizes={[]} />
                            <AddToCartButton productName="Drill Rigs" />
                        </div>
                    </div>
                </section>

            </div>

        </main>
    );
}