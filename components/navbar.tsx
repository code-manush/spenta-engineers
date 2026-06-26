"use client";

import { ChevronDown, Menu, X, ShoppingCart, Box, Target, Settings, Shield, Droplets, ArrowRight } from 'lucide-react';
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useQuoteList } from "@/components/QuoteListContext";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showProductsDropdown, setShowProductsDropdown] = useState(false);
    const [hoveredProductIndex, setHoveredProductIndex] = useState(0);

    const router = useRouter();
    const pathname = usePathname();
    const { items, setIsCartOpen } = useQuoteList();

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "About Us", path: "/about" },
        { name: "Products", path: "/products/core-trays" },
        { name: "Industries", path: "/industries" },
        { name: "Catalogue", path: "/catalogue" },
        { name: "Contact", path: "/contact" },
    ];

    const productCategories = [
        {
            name: "Core Trays and Boxes",
            path: "/products/core-trays",
            icon: Box,
            description: "Durable plastic solutions for core sample storage.",
            image: "/products/12.png"
        },
        {
            name: "Core Drilling System",
            path: "/products/core-drilling-system",
            icon: Target,
            description: "High-performance drilling systems & accessories.",
            image: "/products/14.png"
        },
        {
            name: "Drilling Rigs",
            path: "/products/drill-rigs",
            icon: Settings,
            description: "Robust and reliable drill rigs for exploration.",
            image: "/products/10.png"
        },
        {
            name: "Diamond & Carbide Tools",
            path: "/products/diamond-tungsten-tools",
            icon: Shield,
            description: "Advanced cutting tools for mineral exploration.",
            image: "/products/11.png"
        },
        {
            name: "Dosing Skid System",
            path: "/products/dosing-skid-system",
            icon: Droplets,
            description: "Turnkey chemical injection skids for water treatment.",
            image: "/dosing-skid.png"
        },
    ];

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isMenuOpen]);

    return (
        <>
            {/* The Floating Pill Wrapper */}
            <div className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-out ${isScrolled ? "pt-4 px-4 sm:px-6" : "pt-0 px-0"}`}>
                <nav
                    className={`mx-auto max-w-7xl flex items-center justify-between transition-all duration-500 ease-out
                    ${isScrolled
                            ? "bg-white/90 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] rounded-2xl sm:rounded-full px-4 sm:px-6 py-2 border border-gray-100"
                            : "bg-gradient-to-b from-black/60 to-transparent backdrop-blur-[2px] px-6 lg:px-10 py-4"
                        }`}
                >
                    {/* LOGO */}
                    <Link href="/" className="flex items-center shrink-0 transition-transform duration-300 hover:scale-105">
                        <div className={`relative transition-all duration-500 ${isScrolled ? "h-12 sm:h-14" : "h-16 sm:h-20"}`}>
                            <Image
                                src={isScrolled ? "/logo.png" : "/logo-white.png"}
                                alt="Spenta Engineers"
                                width={240}
                                height={140}
                                className="h-full w-auto object-contain"
                                priority
                            />
                        </div>
                    </Link>

                    {/* DESKTOP LINKS */}
                    <div className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link, i) => {
                            if (link.name === "Products") {
                                return (
                                    <div
                                        key={i}
                                        className="relative group"
                                        onMouseEnter={() => setShowProductsDropdown(true)}
                                        onMouseLeave={() => {
                                            setShowProductsDropdown(false);
                                            // Reset to first item when menu closes after a short delay
                                            setTimeout(() => setHoveredProductIndex(0), 300);
                                        }}
                                    >
                                        <Link
                                            href={link.path}
                                            className={`relative font-semibold text-sm tracking-wide transition-colors duration-300 flex items-center gap-1 py-4 
                                                ${pathname.includes('/products')
                                                    ? (isScrolled ? "text-blue-600" : "text-white")
                                                    : (isScrolled ? "text-gray-800 hover:text-blue-600" : "text-white/90 hover:text-white")}`}
                                        >
                                            <span className="relative">
                                                {link.name}
                                                <span className={`absolute left-0 -bottom-1 h-0.5 w-full transition-all duration-300 ${pathname.includes('/products') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'} ${isScrolled ? "bg-blue-600" : "bg-white"}`} />
                                            </span>
                                            <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${showProductsDropdown ? 'rotate-180' : ''}`} />
                                        </Link>

                                        {/* Premium Bento Mega-Menu Dropdown */}
                                        <div className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[680px] transition-all duration-400 origin-top ${showProductsDropdown ? 'opacity-100 visible translate-y-0 scale-y-100' : 'opacity-0 invisible -translate-y-4 scale-y-95'}`}>
                                            <div className="bg-white/95 backdrop-blur-3xl rounded-3xl border border-gray-100/50 shadow-[0_40px_80px_rgba(0,0,0,0.15)] overflow-hidden flex min-h-[320px]">

                                                {/* Left Column: Categories (Light) */}
                                                <div className="w-[300px] p-3 flex flex-col gap-1 z-10 relative bg-white/90 backdrop-blur-md">
                                                    {productCategories.map((category, idx) => {
                                                        const Icon = category.icon;
                                                        const isHovered = hoveredProductIndex === idx;
                                                        return (
                                                            <Link
                                                                key={idx}
                                                                href={category.path}
                                                                onMouseEnter={() => setHoveredProductIndex(idx)}
                                                                className={`flex items-start gap-3 p-3 rounded-2xl transition-all duration-300 group/item relative overflow-hidden ${isHovered ? 'bg-blue-50/50 shadow-sm border border-blue-100' : 'hover:bg-gray-50 border border-transparent'}`}
                                                            >
                                                                {/* Hover Accent Line */}
                                                                <div className={`absolute left-0 top-0 bottom-0 w-1 bg-blue-600 transition-all duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />

                                                                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 relative z-10 ${isHovered ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30 scale-105' : 'bg-gray-100 text-gray-500 group-hover/item:text-blue-600'}`}>
                                                                    <Icon className="w-4 h-4" />
                                                                </div>
                                                                <div className="relative z-10 mt-0.5">
                                                                    <div className={`font-bold text-sm transition-colors ${isHovered ? 'text-blue-700' : 'text-gray-900'}`}>
                                                                        {category.name}
                                                                    </div>
                                                                    <div className="text-[11px] text-gray-500 mt-1 leading-relaxed pr-2 line-clamp-1">
                                                                        {category.description}
                                                                    </div>
                                                                </div>
                                                            </Link>
                                                        );
                                                    })}
                                                </div>

                                                {/* Right Column: Featured Image Preview (Dark Mode Contrast & Edge-to-Edge Fill) */}
                                                <div className="flex-1 bg-gray-950 relative overflow-hidden group/preview block border-l border-gray-900">
                                                    {/* Subtle grid pattern in the dark background */}
                                                    <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

                                                    {productCategories.map((category, idx) => (
                                                        <div
                                                            key={idx}
                                                            className={`absolute inset-0 flex flex-col transition-all duration-500 ${hoveredProductIndex === idx ? 'opacity-100 translate-x-0 z-10' : 'opacity-0 translate-x-12 -z-10'}`}
                                                        >
                                                            {/* Background Watermark */}
                                                            <div className="absolute top-4 right-5 text-[70px] font-black text-white/[0.05] pointer-events-none select-none tracking-tighter z-20">
                                                                0{idx + 1}
                                                            </div>

                                                            {/* Edge-to-Edge Image Cover */}
                                                            <div className="absolute inset-0 z-10 opacity-70 mix-blend-screen group-hover/preview:opacity-90 transition-opacity duration-500">
                                                                <Image
                                                                    src={category.image}
                                                                    alt={category.name}
                                                                    fill
                                                                    className={`object-cover object-center transition-transform duration-700 ease-out ${hoveredProductIndex === idx ? 'scale-105 hover:scale-110' : 'scale-90'}`}
                                                                />
                                                            </div>

                                                            {/* Dark gradient overlay so the text remains perfectly readable */}
                                                            <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/60 to-transparent z-20" />

                                                            {/* Text Content overlaying the image */}
                                                            <div className="absolute bottom-6 left-6 right-6 z-30">
                                                                <div className="flex items-end justify-between gap-3">
                                                                    <div>
                                                                        <div className="text-blue-400 font-bold tracking-widest text-[9px] uppercase mb-1">Featured</div>
                                                                        <h4 className="font-black text-lg text-white leading-tight drop-shadow-md">{category.name}</h4>
                                                                    </div>
                                                                    <Link
                                                                        href={category.path}
                                                                        className="shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-500 text-white transition-all duration-300 hover:scale-110 shadow-[0_0_15px_rgba(37,99,235,0.4)]"
                                                                    >
                                                                        <ArrowRight className="w-4 h-4" />
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            }

                            return (
                                <Link key={i} href={link.path} className={`relative font-semibold text-sm tracking-wide py-4 transition-colors duration-300 ${pathname === link.path ? (isScrolled ? "text-blue-600" : "text-white") : (isScrolled ? "text-gray-800 hover:text-blue-600" : "text-white/90 hover:text-white")}`}>
                                    <span className="relative">
                                        {link.name}
                                        <span className={`absolute left-0 -bottom-1 h-0.5 w-full transition-all duration-300 ${pathname === link.path ? 'scale-x-100' : 'scale-x-0 hover:scale-x-100'} ${isScrolled ? "bg-blue-600" : "bg-white"}`} />
                                    </span>
                                </Link>
                            );
                        })}
                    </div>

                    {/* CTA BUTTON & CART */}
                    <div className="hidden lg:flex items-center gap-5">
                        {/* Cart */}
                        <button
                            onClick={() => setIsCartOpen(true)}
                            className={`p-2 rounded-full transition-all relative group flex items-center justify-center ${isScrolled ? 'text-gray-800 hover:bg-gray-100 hover:text-blue-600' : 'text-white hover:bg-white/20'}`}
                        >
                            <ShoppingCart className="w-6 h-6 transition-transform group-hover:scale-110" />
                            {items.length > 0 && (
                                <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white shadow-sm">
                                    {items.length}
                                </span>
                            )}
                        </button>

                        {/* Request Quote Button */}
                        <button onClick={() => router.push("/contact")} className={`px-7 py-3.5 rounded-full font-bold tracking-wide transition-all duration-300 hover:scale-105 shadow-xl relative overflow-hidden group ${isScrolled ? "bg-black text-white hover:bg-blue-600 hover:shadow-blue-500/30" : "bg-white text-black hover:bg-blue-600 hover:text-white hover:shadow-blue-500/40"}`}>
                            <span className="relative z-10 flex items-center gap-2">Request a Quote</span>
                        </button>
                    </div>

                    {/* MOBILE TOGGLE & CART */}
                    <div className="lg:hidden flex items-center gap-3">
                        <button
                            onClick={() => setIsCartOpen(true)}
                            className={`p-2 rounded-full transition-all relative ${isScrolled ? 'text-gray-800' : 'text-white'}`}
                        >
                            <ShoppingCart className="w-6 h-6" />
                            {items.length > 0 && (
                                <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white">
                                    {items.length}
                                </span>
                            )}
                        </button>
                        <button onClick={() => setIsMenuOpen(true)} className={`p-2 rounded-full transition-all active:scale-95 ${isScrolled ? "bg-gray-100 text-gray-800" : "bg-white/20 text-white"}`}>
                            <Menu className="h-6 w-6" strokeWidth={2.5} />
                        </button>
                    </div>
                </nav>
            </div>

            {/* MOBILE MENU */}
            <div className={`fixed inset-0 z-[100] lg:hidden transition-all duration-500 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                {/* Backdrop */}
                <div className="absolute inset-0 bg-gray-950/40 backdrop-blur-sm transition-opacity duration-500" onClick={() => setIsMenuOpen(false)} />

                {/* Menu Panel */}
                <div className={`absolute right-0 top-0 h-full w-[85vw] max-w-sm bg-white shadow-2xl transition-transform duration-500 overflow-y-auto ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <div className="p-6 flex flex-col h-full">
                        {/* Header */}
                        <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-100">
                            <span className="font-black text-xl text-black tracking-tight">MENU</span>
                            <button onClick={() => setIsMenuOpen(false)} className="p-2 bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-black rounded-full transition-colors">
                                <X className="w-5 h-5" strokeWidth={2.5} />
                            </button>
                        </div>

                        {/* Navigation Links */}
                        <nav className="flex-1 space-y-2">
                            {navLinks.map((link, i) => {
                                if (link.name === "Products") {
                                    return (
                                        <div key={i} className="mb-2">
                                            <button onClick={() => setShowProductsDropdown(!showProductsDropdown)} className={`w-full flex items-center justify-between px-4 py-4 rounded-2xl font-bold transition-all ${pathname.includes('/products') ? 'bg-blue-50 text-blue-600' : 'text-gray-800 hover:bg-gray-50'}`}>
                                                <span className="text-lg">Products</span>
                                                <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${showProductsDropdown ? 'rotate-180 text-blue-600' : 'text-gray-400'}`} />
                                            </button>
                                            <div className={`overflow-hidden transition-all duration-300 ${showProductsDropdown ? 'max-h-[500px] opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                                                <div className="ml-4 space-y-1 border-l-2 border-gray-100 pl-4 py-2">
                                                    {productCategories.map((category, idx) => {
                                                        const Icon = category.icon;
                                                        return (
                                                            <Link
                                                                key={idx}
                                                                href={category.path}
                                                                onClick={() => setIsMenuOpen(false)}
                                                                className="flex items-center gap-3 px-4 py-3 text-sm font-semibold text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-colors group"
                                                            >
                                                                <Icon className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                                                                {category.name}
                                                            </Link>
                                                        );
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    );
                                }

                                return (
                                    <Link
                                        key={i}
                                        href={link.path}
                                        onClick={() => setIsMenuOpen(false)}
                                        className={`block px-4 py-4 rounded-2xl font-bold text-lg transition-all ${pathname === link.path ? 'bg-blue-50 text-blue-600' : 'text-gray-800 hover:bg-gray-50'}`}
                                    >
                                        {link.name}
                                    </Link>
                                );
                            })}
                        </nav>

                        {/* Mobile Bottom CTA */}
                        <div className="pt-8 mt-auto border-t border-gray-100">
                            <button onClick={() => { setIsMenuOpen(false); router.push("/contact"); }} className="w-full bg-black hover:bg-blue-600 text-white px-6 py-4 rounded-full font-bold text-lg transition-all shadow-xl hover:shadow-blue-500/30">
                                Request a Quote
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;