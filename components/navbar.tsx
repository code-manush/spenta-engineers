"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const [showProductsDropdown, setShowProductsDropdown] = useState(false);

    const router = useRouter();
    const pathname = usePathname();

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "About Us", path: "/about" },
        { name: "Products", path: "/products/core-trays" },
        { name: "Industries", path: "/industries" },
        { name: "Catalogue", path: "/catalogue" },
        { name: "Contact", path: "/contact" },
    ];

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 10);
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
            <div className="fixed top-0 left-0 w-full z-50 px-3 sm:px-4 md:px-6 lg:px-8 pt-4 md:pt-5 lg:pt-6">
                <nav
                    className={`mx-auto max-w-7xl px-4 sm:px-5 lg:px-6 rounded-2xl lg:rounded-3xl 
                    flex items-center justify-between gap-2 lg:gap-3
                    transition-all duration-500 ease-out
                    ${isScrolled
                            ? "bg-white/80 backdrop-blur-2xl shadow-2xl py-0 lg:py-0 border border-white/20"
                            : "bg-black/20 backdrop-blur-md py-0 lg:py-0 shadow-lg border border-white/10"
                        }`}
                >
                    {/* LOGO */}
                    <Link href="/" className="flex items-center shrink-0 transition-transform duration-300 hover:scale-105">
                        <div className="relative h-16 sm:h-18 md:h-20 lg:h-24 xl:h-28">
                            <Image
                                src={isScrolled ? "/logo.png" : "/logo-white.png"}
                                alt="Spenta Engineers"
                                width={240}
                                height={140}
                                className="h-16 sm:h-18 md:h-20 lg:h-24 xl:h-28 w-auto object-contain transition-all duration-500"
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
                                        className="relative"
                                        onMouseEnter={() => setShowProductsDropdown(true)}
                                        onMouseLeave={() => setShowProductsDropdown(false)}
                                    >
                                        <Link
                                            href={link.path}
                                            className={`relative font-medium transition-colors duration-300 flex items-center gap-1 ${pathname === link.path ? (isScrolled ? "text-blue-600" : "text-white") : (isScrolled ? "text-gray-700 hover:text-blue-600" : "text-white/90 hover:text-white")}`}
                                        >
                                            <span className="relative">
                                                {link.name}
                                                <span className={`absolute left-0 -bottom-1 h-px w-full transition-all duration-300 ${pathname === link.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'} ${isScrolled ? "bg-blue-600" : "bg-white"}`} />
                                            </span>
                                            <svg className={`w-4 h-4 transition-transform duration-300 ${showProductsDropdown ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </Link>

                                        {/* Dropdown */}
                                        <div className={`absolute top-full left-0 mt-2 w-64 bg-white border border-gray-200 shadow-2xl overflow-hidden transition-all duration-300 ${showProductsDropdown ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                                            <div className="py-2">
                                                <a href="/products/core-trays" className="block px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                                                    <div className="font-medium">Core Trays and Boxes</div>
                                                </a>
                                                <div className="h-px bg-gray-200 mx-4" />
                                                <a href="/products/core-drilling-system" className="block px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                                                    <div className="font-medium">Core Drilling System</div>
                                                </a>
                                                <div className="h-px bg-gray-200 mx-4" />
                                                <a href="/products/drill-rigs" className="block px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                                                    <div className="font-medium">Drilling Rigs</div>
                                                </a>
                                                <div className="h-px bg-gray-200 mx-4" />
                                                <a href="/products/diamond-tungsten-tools" className="block px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                                                    <div className="font-medium">Diamond and Carbide Tools</div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                );
                            }

                            return (
                                <Link key={i} href={link.path} className={`relative font-medium transition-colors duration-300 ${pathname === link.path ? (isScrolled ? "text-blue-600" : "text-white") : (isScrolled ? "text-gray-700 hover:text-blue-600" : "text-white/90 hover:text-white")}`}>
                                    <span className="relative">
                                        {link.name}
                                        <span className={`absolute left-0 -bottom-1 h-px w-full transition-all duration-300 ${pathname === link.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'} ${isScrolled ? "bg-blue-600" : "bg-white"}`} />
                                    </span>
                                </Link>
                            );
                        })}
                    </div>

                    {/* CTA BUTTON */}
                    <button onClick={() => router.push("/contact")} className={`hidden lg:block px-6 py-3 rounded-full font-semibold transition-all hover:scale-105 hover:shadow-xl relative overflow-hidden group ${isScrolled ? "bg-yellow-500 hover:bg-yellow-600" : "bg-yellow-400 hover:bg-yellow-500"}`}>
                        <span className="relative z-10">Request a Quote</span>
                        <span className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </button>

                    {/* MOBILE TOGGLE */}
                    <button onClick={() => setIsMenuOpen(true)} className={`lg:hidden p-2 rounded-lg transition-all hover:scale-110 ${isScrolled ? "hover:bg-gray-100" : "hover:bg-white/20"}`}>
                        <svg className={`h-6 w-6 ${isScrolled ? "text-gray-800" : "text-white"}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                            <line x1="4" y1="6" x2="20" y2="6" />
                            <line x1="4" y1="12" x2="20" y2="12" />
                            <line x1="4" y1="18" x2="20" y2="18" />
                        </svg>
                    </button>
                </nav>
            </div>

            {/* MOBILE MENU */}
            <div className={`fixed inset-0 z-[100] lg:hidden transition-all duration-500 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)} />
                <div className={`absolute right-0 top-0 h-full w-80 bg-white/95 backdrop-blur-2xl shadow-2xl transition-transform duration-500 overflow-y-auto ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <div className="p-6">
                        <button onClick={() => setIsMenuOpen(false)} className="ml-auto block p-2 hover:bg-gray-100 rounded-lg">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <nav className="mt-8 space-y-2">
                            {navLinks.map((link, i) => {
                                if (link.name === "Products") {
                                    return (
                                        <div key={i}>
                                            <button onClick={() => setShowProductsDropdown(!showProductsDropdown)} className={`w-full flex items-center justify-between px-4 py-3 rounded-lg font-medium transition-all hover:bg-blue-50 ${pathname.includes('/products') ? 'bg-blue-100 text-blue-600' : 'text-gray-800'}`}>
                                                <span>Products</span>
                                                <svg className={`w-5 h-5 transition-transform duration-300 ${showProductsDropdown ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </button>
                                            <div className={`overflow-hidden transition-all duration-300 ${showProductsDropdown ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                                                <div className="ml-4 mt-2 space-y-1 border-l-2 border-blue-200 pl-4">
                                                    <a href="/products/core-trays" onClick={() => setIsMenuOpen(false)} className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors">
                                                        Core Trays and Boxes
                                                    </a>
                                                    <a href="/products/core-drilling-system" onClick={() => setIsMenuOpen(false)} className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors">
                                                        Core Drilling System
                                                    </a>
                                                    <a href="/products/drill-rigs" onClick={() => setIsMenuOpen(false)} className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors">
                                                        Drilling Rigs
                                                    </a>
                                                    <a href="/products/diamond-tungsten-tools" onClick={() => setIsMenuOpen(false)} className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors">
                                                        Diamond and Carbide Tools
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                }

                                return (
                                    <Link key={i} href={link.path} onClick={() => setIsMenuOpen(false)} className={`block px-4 py-3 rounded-lg font-medium transition-all hover:bg-blue-50 ${pathname === link.path ? 'bg-blue-100 text-blue-600' : 'text-gray-800'}`}>
                                        {link.name}
                                    </Link>
                                );
                            })}
                        </nav>
                        <button onClick={() => { setIsMenuOpen(false); router.push("/contact"); }} className="w-full mt-6 bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-4 rounded-full font-semibold transition-all hover:shadow-xl">
                            Request a Quote
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;