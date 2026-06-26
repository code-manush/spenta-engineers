"use client";

import { motion } from "motion/react";
import RequestQuoteModal from "@/app/products/RequestQuoteModal";
import AddToCartButton from "@/components/products/AddToCartButton";

interface ProductCTAProps {
    title: string;
    description: string;
    productName: string;
    sizes?: { size: string }[];
}

export default function ProductCTA({ title, description, productName, sizes = [] }: ProductCTAProps) {
    return (
        <section className="py-24 bg-gray-950 relative border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative rounded-[3rem] overflow-hidden bg-gradient-to-br from-blue-900/40 to-gray-900 border border-blue-500/20 p-12 md:p-20 text-center shadow-2xl"
                >
                    {/* Ambient Glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-500/10 blur-[100px] pointer-events-none" />

                    <div className="relative z-10 max-w-3xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
                            {title}
                        </h2>
                        <p className="text-xl text-gray-300 mb-12 font-light leading-relaxed">
                            {description}
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                            <RequestQuoteModal productName={productName} sizes={sizes} />
                            <AddToCartButton productName={productName} />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
