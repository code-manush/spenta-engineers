"use client";

import { motion } from "motion/react";
import Breadcrumbs from "@/components/Breadcrumbs";
import Image from "next/image";

interface ProductHeroProps {
    title: string;
    description: string;
    breadcrumbs: { label: string; href: string }[];
}

export default function ProductHero({ title, description, breadcrumbs }: ProductHeroProps) {
    return (
        <section className="relative min-h-[70vh] bg-blue-950 text-white overflow-hidden flex flex-col">
            {/* Background Texture / Gradient for depth */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 opacity-90" />
            


            {/* Massive Watermark Typography */}
            <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 0.05, x: 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute right-0 top-1/4 pointer-events-none select-none overflow-hidden flex items-center"
            >
                <h2 className="text-[150px] md:text-[250px] font-black leading-none whitespace-nowrap text-white/50">
                    SPENTA
                </h2>
            </motion.div>

            {/* Content Container */}
            <div className="relative z-10 flex flex-col flex-grow max-w-7xl mx-auto px-6 w-full pt-32 pb-32">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-4xl mt-auto"
                >
                    <div className="flex items-center gap-3 mb-6">
                        <div className="h-1 w-12 bg-white" />
                        <span className="uppercase tracking-widest text-white/90 font-bold text-sm">
                            Innovation With Excellency
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight text-white drop-shadow-sm">
                        {title}
                    </h1>

                    <p className="text-xl md:text-2xl text-white/80 leading-relaxed font-light max-w-2xl">
                        {description}
                    </p>
                </motion.div>
            </div>

            {/* Curved Bottom Edge (Catalogue Style) */}
            <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-10 rotate-180">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px] md:h-[100px]">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#ffffff"></path>
                </svg>
            </div>

            {/* Breadcrumbs Bar - Floating above curve */}
            <div className="absolute bottom-4 md:bottom-8 left-0 w-full z-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="inline-block bg-white/10 backdrop-blur-md rounded-full px-6 py-2 border border-white/20 shadow-lg">
                        <Breadcrumbs items={breadcrumbs} />
                    </div>
                </div>
            </div>
        </section>
    );
}
