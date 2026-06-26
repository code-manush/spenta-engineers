"use client";

import { motion } from "motion/react";
import { LucideIcon } from "lucide-react";

interface Feature {
    title: string;
    description: string;
    icon?: LucideIcon;
}

interface ProductFeaturesProps {
    title?: string;
    features: Feature[];
}

export default function ProductFeatures({ title = "Key Advantages", features }: ProductFeaturesProps) {
    return (
        <section className="py-24 bg-gray-50 relative border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-16">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="h-1 w-12 bg-[#087f82]" />
                        <span className="uppercase tracking-widest text-[#087f82] font-bold text-sm">
                            Benefits
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
                        {title}
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, idx) => {
                        const Icon = feature.icon;
                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ delay: idx * 0.1, duration: 0.5 }}
                                className="bg-white border border-gray-200 p-8 hover:shadow-xl hover:border-[#087f82]/30 transition-all duration-500 group"
                                style={{ borderRadius: "0 24px 0 24px" }}
                            >
                                {Icon && (
                                    <div 
                                        className="w-16 h-16 bg-[#087f82]/5 border border-[#087f82]/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#087f82]/10 transition-all duration-500"
                                        style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
                                    >
                                        <Icon className="w-7 h-7 text-[#087f82]" />
                                    </div>
                                )}
                                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#087f82] transition-colors">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed font-light">
                                    {feature.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
