"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { useState } from "react";
import { Maximize2, X } from "lucide-react";

export interface GalleryImage {
    src: string;
    alt: string;
}

interface ProductGalleryProps {
    title?: string;
    description?: string;
    images: GalleryImage[];
}

export default function ProductGallery({ title = "Product Showcase", description, images }: ProductGalleryProps) {
    const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

    return (
        <section className="py-24 bg-white relative overflow-hidden">

            
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-black text-accent tracking-tight uppercase mb-4">
                        {title}
                    </h2>
                    {description && (
                        <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">
                            {description}
                        </p>
                    )}
                    <div className="flex justify-center mt-6">
                        <div className="h-1 w-24 bg-accent" />
                    </div>
                </div>

                {/* Simple Rectangle Scrollable Layout */}
                <div className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scrollbar-hide">
                    {images.map((img, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="relative group cursor-pointer flex-none w-[85vw] md:w-[600px] aspect-video md:aspect-[4/3] rounded-xl overflow-hidden shadow-lg border-2 border-gray-100 snap-center bg-white"
                            onClick={() => setSelectedImage(img)}
                        >
                            <Image
                                src={img.src}
                                alt={img.alt}
                                fill
                                className="object-contain p-4 transition-transform duration-700 group-hover:scale-105"
                                sizes="(max-width: 768px) 100vw, 600px"
                            />
                            <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/5 transition-colors duration-500" />
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none">
                                <div className="bg-white/90 backdrop-blur-sm p-4 rounded-full text-accent transform scale-50 group-hover:scale-100 transition-transform duration-500 shadow-xl">
                                    <Maximize2 className="w-8 h-8" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div 
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 md:p-8"
                    onClick={() => setSelectedImage(null)}
                >
                    <button 
                        className="absolute top-6 right-6 md:top-10 md:right-10 text-white/70 hover:text-white transition-colors z-50 bg-white/10 p-2 rounded-full backdrop-blur-md"
                        onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
                    >
                        <X className="w-8 h-8" />
                    </button>
                    
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.3 }}
                        className="relative w-full max-w-6xl h-full max-h-[85vh] flex items-center justify-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="relative w-full h-full">
                            <Image
                                src={selectedImage.src}
                                alt={selectedImage.alt}
                                fill
                                className="object-contain"
                                quality={100}
                                priority
                            />
                        </div>
                    </motion.div>
                    <div className="absolute bottom-8 left-0 right-0 text-center text-accent font-bold text-lg tracking-widest uppercase bg-white/90 py-4 mx-auto max-w-md rounded-full shadow-lg backdrop-blur-md">
                        {selectedImage.alt}
                    </div>
                </div>
            )}
        </section>
    );
}
