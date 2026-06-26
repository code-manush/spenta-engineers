"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";

export interface Hotspot {
    top: string; // e.g. "45%"
    left: string; // e.g. "60%"
    title: string;
    description: string;
}

interface ProductHotspotsProps {
    title: string;
    description: string;
    image: string;
    hotspots: Hotspot[];
}

export default function ProductHotspots({ title, description, image, hotspots }: ProductHotspotsProps) {
    const [activeHotspot, setActiveHotspot] = useState<number | null>(null);

    return (
        <section className="py-24 bg-gray-950 border-t border-white/5 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
                        {title}
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">
                        {description}
                    </p>
                </div>

                <div className="relative w-full aspect-[4/3] lg:aspect-[21/9] bg-white/5 border border-white/10 rounded-3xl overflow-hidden shadow-2xl group">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover opacity-80 mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-1000"
                    />
                    
                    {/* Dark gradient overlay so the hotspots pop */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent opacity-80 pointer-events-none" />

                    {hotspots.map((hotspot, index) => (
                        <div 
                            key={index} 
                            className="absolute z-20 cursor-pointer"
                            style={{ top: hotspot.top, left: hotspot.left }}
                            onMouseEnter={() => setActiveHotspot(index)}
                            onMouseLeave={() => setActiveHotspot(null)}
                            onClick={() => setActiveHotspot(activeHotspot === index ? null : index)}
                        >
                            {/* Glowing Ring */}
                            <motion.div 
                                animate={{ scale: [1, 2, 1], opacity: [0.3, 0.8, 0.3] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -inset-4 bg-blue-500 rounded-full blur-md"
                            />
                            {/* Core Dot */}
                            <div className="relative w-4 h-4 bg-white border-2 border-blue-500 rounded-full shadow-[0_0_15px_#3b82f6] transition-transform duration-300 group-hover:scale-125" />
                            
                            {/* Tooltip */}
                            <AnimatePresence>
                                {activeHotspot === index && (
                                    <motion.div 
                                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-64 p-4 bg-gray-900/95 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl z-50 pointer-events-none"
                                    >
                                        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-gray-900/95 border-t border-l border-white/20 rotate-45" />
                                        <h4 className="text-white font-bold text-lg mb-1">{hotspot.title}</h4>
                                        <p className="text-gray-400 text-sm leading-relaxed">{hotspot.description}</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
