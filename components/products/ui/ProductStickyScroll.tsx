"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { LucideIcon } from "lucide-react";

interface ScrollSection {
    title: string;
    content: string | React.ReactNode;
    icon?: LucideIcon;
}

interface ProductStickyScrollProps {
    image: string;
    sections: ScrollSection[];
}

export default function ProductStickyScroll({ image, sections }: ProductStickyScrollProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <section className="bg-white py-24 relative" ref={containerRef}>


            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 relative z-10">

                {/* Left Side: Pinned Image in Hexagon Frame */}
                <div className="relative h-[400px] lg:h-[700px] lg:sticky lg:top-32 group flex items-center justify-center">
                    {/* Background Solid Hexagon (Shadow/Border effect) */}
                    <div className="absolute inset-4 bg-[#087f82]/10" style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }} />
                    
                    <div 
                        className="relative w-full h-[350px] lg:h-[600px] bg-gray-100 overflow-hidden shadow-2xl transition-transform duration-700 group-hover:scale-105"
                        style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
                    >
                        <Image
                            src={image}
                            alt="Product Overview"
                            fill
                            className="object-cover transition-transform duration-1000 opacity-90 group-hover:opacity-100"
                        />
                        <div className="absolute inset-0 bg-[#087f82]/0 group-hover:bg-[#087f82]/10 transition-colors duration-500" />
                    </div>

                    {/* Glowing Accent */}
                    <div className="absolute -inset-4 bg-[#087f82]/20 blur-3xl opacity-0 group-hover:opacity-60 transition-opacity duration-700 -z-10" />
                </div>

                {/* Right Side: Scrolling Content */}
                <div className="space-y-32 py-10 lg:py-32">
                    {sections.map((section, index) => (
                        <ScrollSectionItem key={index} section={section} index={index} />
                    ))}
                </div>

            </div>
        </section>
    );
}

function ScrollSectionItem({ section, index }: { section: ScrollSection, index: number }) {
    const Icon = section.icon;

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
        >
            <div className="flex items-center gap-4 mb-6">
                <div 
                    className="w-14 h-14 bg-[#087f82]/10 flex items-center justify-center shadow-sm"
                    style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
                >
                    {Icon ? <Icon className="w-6 h-6 text-[#087f82]" /> : <span className="text-[#087f82] font-bold text-lg">{index + 1}</span>}
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight">
                    {section.title}
                </h2>
            </div>
            <div className="text-lg md:text-xl text-gray-600 leading-relaxed font-light">
                {typeof section.content === 'string' ? (
                    <p>{section.content}</p>
                ) : (
                    section.content
                )}
            </div>
        </motion.div>
    );
}
