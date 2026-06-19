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
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">Diamond & Tungsten Carbide Tools</h1>
                    <p className="max-w-3xl text-gray-300 text-xl leading-relaxed">
                        Diamond and tungsten carbide tools are cutting components designed to penetrate a wide range of geological formations during mineral exploration, mining, and geotechnical drilling operations.
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
                            { label: "Diamond & Tungsten Tools", href: "/products/diamond-tungsten-tools" },
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
                            src="/products/11.png"
                            alt="Diamond & Tungsten Carbide Tools"
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
                        Role in the Drilling Operation
                    </h2>
                    <p className="max-w-4xl text-lg text-gray-700 leading-relaxed">
                        Diamond and tungsten carbide tools are responsible for cutting and breaking rock formations at the drilling face. Installed at the bottom of the drilling assembly, these tools directly interact with the ground and determine penetration rate, tool life, and overall drilling efficiency. Proper tool selection is essential for optimizing performance across different ground conditions.
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
                        Spenta Engineers manufactures a range of diamond and tungsten carbide tools engineered for reliable cutting performance and long service life. Designed to operate with standard core drilling systems and drilling rigs, these tools provide consistent performance in soft, medium, and hard rock formations.
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
                        Types of Tools
                    </h2>
                    <ul className="space-y-4 text-gray-700 text-lg leading-relaxed max-w-4xl">
                        <li>
                            <strong>Diamond Tools:</strong> Used for hard, abrasive, and consolidated formations. Diamond tools provide high wear resistance and maintain cutting efficiency over extended drilling cycles.
                        </li>
                        <li>
                            <strong>Tungsten Carbide Tools:</strong> Suitable for soft to medium formations. Tungsten carbide tools offer impact resistance and cost-effective performance in less abrasive ground conditions.
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
                        Sizes and Manufacturing
                    </h2>

                    <div className="max-w-4xl space-y-6 text-lg text-gray-700">
                        <p className="leading-relaxed">
                            Diamond and tungsten carbide tools are manufactured in standard sizes to match core drilling systems including AQ, BQ, NQ, HQ, and PQ. Tools are produced using high-quality raw materials, precision machining, and controlled manufacturing processes to ensure dimensional accuracy and durability.
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
                                    { label: "Tool Types", value: "Diamond tools, Tungsten carbide tools" },
                                    { label: "Cutting Medium", value: "Diamond segments / Tungsten carbide inserts" },
                                    { label: "Manufacturing Process", value: "Precision machining & controlled bonding" },
                                    { label: "Typical Operating Environment", value: "Soft to hard rock formations" },
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
                                "Use diamond tools for hard, abrasive, or consolidated formations",
                                "Use tungsten carbide tools for soft to medium ground conditions",
                                "Select tool size based on core barrel and drilling system compatibility"
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
                                "Designed for efficient rock cutting and penetration",
                                "Suitable for a wide range of geological formations",
                                "Compatible with standard core drilling systems",
                                "Reliable performance and extended service life"
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
                        Diamond and tungsten carbide tools must be compatible with the selected core barrel, drill rods, and drilling rig. All tools supplied by Spenta Engineers are designed to integrate seamlessly with standard drilling equipment of corresponding sizes.
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
                                Share your drilling requirements and system configuration, and our technical team will assist you in selecting the appropriate tools for your application.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <RequestQuoteModal productName="Diamond & Tungsten Carbide Tools" sizes={[]} />
                            <AddToCartButton productName="Diamond & Tungsten Carbide Tools" />
                        </div>
                    </div>
                </section>

            </div>

        </main>
    );
}