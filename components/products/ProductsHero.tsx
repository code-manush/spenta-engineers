"use client";

import { useState, useEffect } from "react";

export default function ProductsHero() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <section
            className="relative py-32 md:py-40 text-white bg-cover bg-center overflow-hidden"
            style={{
                backgroundImage: "url('/product-cover.png')",
            }}
        >
            {/* Layered gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/70" />

            {/* Animated grid pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                                     linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                    backgroundSize: '50px 50px',
                    animation: 'gridMove 20s linear infinite'
                }} />
            </div>

            {/* Floating particles */}
            {[...Array(15)].map((_, i) => (
                <div
                    key={i}
                    className="absolute w-2 h-2 bg-blue-400/30 rounded-full"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animation: `float ${5 + Math.random() * 10}s ease-in-out infinite`,
                        animationDelay: `${Math.random() * 5}s`
                    }}
                />
            ))}

            {/* Glowing orbs */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gray-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

            {/* Content */}
            <div className="relative max-w-7xl mx-auto px-6 z-10">
                
                {/* Breadcrumb */}
                <div 
                    className={`flex items-center gap-2 text-sm mb-6 transition-all duration-700 ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                >
                    <a href="/" className="text-blue-400 hover:text-blue-300 transition-colors">Home</a>
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    <span className="text-gray-300">Products</span>
                </div>

                {/* Badge */}
                <div 
                    className={`inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 mb-6 transition-all duration-700 ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                    style={{ transitionDelay: '100ms' }}
                >
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                    <span className="text-sm font-semibold">Complete Product Range</span>
                </div>

                {/* Main heading */}
                <h1 
                    className={`text-5xl md:text-7xl font-bold mb-6 tracking-tight transition-all duration-700 ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                    style={{ transitionDelay: '200ms' }}
                >
                    <span className="block">Our Products</span>
                    <span className="block text-blue-400 mt-2">Precision Engineered</span>
                </h1>

                {/* Description */}
                <p 
                    className={`text-xl text-gray-200 max-w-3xl leading-relaxed mb-10 transition-all duration-700 ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                    style={{ transitionDelay: '300ms' }}
                >
                    Spenta Engineers manufactures and supplies a comprehensive range of
                    precision drilling tools designed for mineral exploration, mining,
                    and geotechnical applications.
                </p>

                {/* Features list */}
                <div 
                    className={`flex flex-wrap gap-6 mb-10 transition-all duration-700 ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                    style={{ transitionDelay: '400ms' }}
                >
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
                </div>

                {/* CTA Buttons */}
                <div 
                    className={`flex flex-wrap gap-4 transition-all duration-700 ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                    style={{ transitionDelay: '500ms' }}
                >
                    <a
                        href="#products"
                        className="group inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all hover:scale-105"
                    >
                        Explore Products
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </a>
                    <a
                        href="/catalogue"
                        className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 border-2 border-white/30 hover:border-white/50 px-8 py-4 rounded-full font-semibold transition-all hover:scale-105"
                    >
                        Download Catalogue
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                    </a>
                </div>

                {/* Stats bar */}
                <div 
                    className={`mt-16 flex flex-wrap gap-8 transition-all duration-700 ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                    style={{ transitionDelay: '600ms' }}
                >
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
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
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