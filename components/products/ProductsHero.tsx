"use client";

import { ChevronRight, ArrowDown, FileDown } from 'lucide-react';
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, Variants } from "framer-motion";

export default function ProductsHero() {
    const [particles, setParticles] = useState<Array<{left: string, top: string, animation: string, animationDelay: string}>>([]);
    const sectionRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end start"]
    });
    
    // Parallax effect: background moves down half as fast as you scroll
    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

    useEffect(() => {
        setParticles([...Array(15)].map(() => ({
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `float ${5 + Math.random() * 10}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 5}s`
        })));
    }, []);

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <section
            ref={sectionRef}
            className="relative py-32 md:py-40 text-white overflow-hidden"
        >
            {/* Parallax Background Image */}
            <motion.div 
                className="absolute inset-0 z-0 bg-cover bg-center"
                style={{
                    backgroundImage: "url('/product-cover.png')",
                    y: backgroundY,
                    // slightly scale up to prevent edges showing during parallax bounce
                    scale: 1.1 
                }}
            />

            {/* Layered gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50 z-0" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/70 z-0" />

            {/* Animated grid pattern */}
            <div className="absolute inset-0 opacity-10 z-0">
                <div className="absolute inset-0" style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                                     linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                    backgroundSize: '50px 50px',
                    animation: 'gridMove 20s linear infinite'
                }} />
            </div>

            {/* Floating particles */}
            {particles.map((style, i) => (
                <div
                    key={i}
                    className="absolute w-2 h-2 bg-blue-400/30 rounded-full z-0"
                    style={style}
                />
            ))}

            {/* Glowing orbs */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse z-0" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gray-600/20 rounded-full blur-3xl animate-pulse z-0" style={{ animationDelay: '1s' }} />

            {/* Content */}
            <motion.div 
                className="relative max-w-7xl mx-auto px-6 z-10"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                {/* Breadcrumb */}
                <motion.div variants={itemVariants} className="flex items-center gap-2 text-sm mb-6">
                    <Link href="/" className="text-blue-400 hover:text-blue-300 transition-colors">Home</Link>
                    <ChevronRight className="w-4 h-4 text-gray-400" strokeWidth={2} />
                    <span className="text-gray-300">Products</span>
                </motion.div>

                {/* Badge */}
                <motion.div variants={itemVariants} className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 mb-6">
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                    <span className="text-sm font-semibold">Complete Product Range</span>
                </motion.div>

                {/* Main heading */}
                <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                    <span className="block">Our Products</span>
                    <span className="block text-blue-400 mt-2">Precision Engineered</span>
                </motion.h1>

                {/* Description */}
                <motion.p variants={itemVariants} className="text-xl text-gray-200 max-w-3xl leading-relaxed mb-10">
                    Spenta Engineers manufactures and supplies a comprehensive range of
                    precision drilling tools designed for mineral exploration, mining,
                    and geotechnical applications.
                </motion.p>

                {/* Features list */}
                <motion.div variants={itemVariants} className="flex flex-wrap gap-6 mb-10">
                    {[
                        { icon: "✓", text: "6 Product Categories" },
                        { icon: "⚙️", text: "Premium Quality" },
                        { icon: "🌍", text: "Global Standards" }
                    ].map((item, i) => (
                        <div key={i} className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/10">
                            <span className="text-blue-400">{item.icon}</span>
                            <span className="text-sm font-medium">{item.text}</span>
                        </div>
                    ))}
                </motion.div>

                {/* CTA Buttons */}
                <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
                    <Link
                        href="#products"
                        className="group inline-flex items-center gap-2 bg-accent hover:bg-blue-700 px-8 py-4 rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all hover:scale-105"
                    >
                        Explore Products
                        <ArrowDown className="w-5 h-5 group-hover:translate-x-1 transition-transform" strokeWidth={2} />
                    </Link>
                    <Link
                        href="/catalogue"
                        className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 border-2 border-white/30 hover:border-white/50 px-8 py-4 rounded-full font-semibold transition-all hover:scale-105"
                    >
                        Download Catalogue
                        <FileDown className="w-5 h-5" strokeWidth={2} />
                    </Link>
                </motion.div>

                {/* Stats bar */}
                <motion.div variants={itemVariants} className="mt-16 flex flex-wrap gap-8">
                    {[
                        { value: "500+", label: "Products" },
                        { value: "15+", label: "Years Experience" },
                        { value: "100%", label: "Quality Tested" }
                    ].map((stat, i) => (
                        <div key={i} className="text-left">
                            <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-1">{stat.value}</div>
                            <div className="text-sm text-gray-400 uppercase tracking-wider">{stat.label}</div>
                        </div>
                    ))}
                </motion.div>
            </motion.div>

            {/* Scroll indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
                <div className="w-8 h-12 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
                    <div className="w-1 h-3 bg-white/70 rounded-full animate-scroll" />
                </div>
            </div>

            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translate(0, 0); opacity: 0.3; }
                    50% { transform: translate(20px, -20px); opacity: 0.6; }
                }
                @keyframes gridMove {
                    0% { transform: translate(0, 0); }
                    100% { transform: translate(50px, 50px); }
                }
                @keyframes scroll {
                    0% { transform: translateY(0); opacity: 0; }
                    50% { opacity: 1; }
                    100% { transform: translateY(16px); opacity: 0; }
                }
                .animate-scroll { animation: scroll 2s ease-in-out infinite; }
            `}</style>
        </section>
    );
}