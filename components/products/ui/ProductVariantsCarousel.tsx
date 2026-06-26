"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useMotionValue } from "motion/react";
import Image from "next/image";

interface Variant {
    title: string;
    description: string;
    image?: string;
}

interface ProductVariantsCarouselProps {
    title?: string;
    description?: string;
    variants: Variant[];
}

export default function ProductVariantsCarousel({ title = "Available Variants", description, variants }: ProductVariantsCarouselProps) {
    const carouselRef = useRef<HTMLDivElement>(null);
    const [dragConstraints, setDragConstraints] = useState({ left: 0, right: 0 });
    const x = useMotionValue(0);

    useEffect(() => {
        if (carouselRef.current) {
            const scrollWidth = carouselRef.current.scrollWidth;
            const clientWidth = carouselRef.current.clientWidth;
            setDragConstraints({ left: -scrollWidth + clientWidth, right: 0 });
        }
    }, [variants]);

    return (
        <section className="py-24 bg-gray-50 overflow-hidden relative border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-6 mb-16">
                <div className="flex items-center gap-3 mb-6">
                    <div className="h-px w-12 bg-blue-500" />
                    <span className="uppercase tracking-widest text-blue-600 font-bold text-sm">
                        Configurations
                    </span>
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight mb-6">
                    {title}
                </h2>
                {description && (
                    <p className="text-xl text-gray-600 max-w-2xl font-light">
                        {description}
                    </p>
                )}
            </div>

            <div className="pl-6 md:pl-[calc((100vw-80rem)/2+1.5rem)] cursor-grab active:cursor-grabbing">
                <motion.div
                    ref={carouselRef}
                    drag="x"
                    dragConstraints={dragConstraints}
                    style={{ x }}
                    className="flex gap-6 md:gap-10 pr-6 w-max"
                >
                    {variants.map((variant, index) => (
                        <div
                            key={index}
                            className="w-[300px] md:w-[450px] shrink-0 bg-white border border-gray-200 shadow-sm rounded-3xl overflow-hidden group hover:shadow-xl transition-shadow duration-500"
                        >
                            {variant.image && (
                                <div className="relative h-[250px] overflow-hidden bg-gray-100">
                                    <Image
                                        src={variant.image}
                                        alt={variant.title}
                                        fill
                                        className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                                    />
                                </div>
                            )}
                            <div className={`p-8 ${!variant.image ? 'pt-12' : ''}`}>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">{variant.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{variant.description}</p>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Scroll Indication */}
            <div className="max-w-7xl mx-auto px-6 mt-12 flex justify-end opacity-50 pointer-events-none">
                <div className="flex items-center gap-2 text-sm text-gray-500 font-bold tracking-widest uppercase">
                    <span>Drag to explore</span>
                    <div className="w-16 h-px bg-gradient-to-r from-gray-400 to-transparent" />
                </div>
            </div>
        </section>
    );
}
