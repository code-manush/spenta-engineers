"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showSearch, setShowSearch] = useState(false);

    const router = useRouter();
    const pathname = usePathname();

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "About Us", path: "/about" },
        { name: "Products", path: "/products" },
        { name: "Industries", path: "/industries" },
        { name: "Catalogue", path: "/catalogue" },
        { name: "Contact", path: "/contact" },
        { name: "Manufacturing", path: "/manufacturing-quality" }
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
                    <div className="hidden lg:flex flex-2 justify-center items-center gap-6 xl:gap-10 max-w-3xl mx-4">
                        {navLinks.map((link, i) => (
                            <Link
                                key={i}
                                href={link.path}
                                className={`group font-medium relative transition-colors duration-300
                                    ${pathname === link.path 
                                        ? (isScrolled ? "text-blue-600" : "text-blue-300")
                                        : (isScrolled ? "text-gray-800 hover:text-blue-600" : "text-white hover:text-blue-300")
                                    }`}
                            >
                                <span className="relative inline-block pb-1">
                                    {link.name}
                                    <span
                                        className={`absolute left-0 bottom-0 h-0.5 w-full transition-all duration-300
                                        ${pathname === link.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}
                                        ${isScrolled ? "bg-blue-600" : "bg-white"}`}
                                    />
                                </span>
                            </Link>
                        ))}
                    </div>

                    {/* SEARCH BUTTON */}
                    <button
                        onClick={() => setShowSearch(!showSearch)}
                        className={`hidden lg:block p-3 rounded-full transition-all hover:scale-110
                            ${isScrolled ? "hover:bg-gray-100" : "hover:bg-white/20"}`}
                    >
                        <svg className={`w-5 h-5 ${isScrolled ? "text-gray-800" : "text-white"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </button>

                    {/* CTA BUTTON */}
                    <button
                        onClick={() => router.push("/contact")}
                        className={`hidden lg:block px-6 py-3 rounded-full font-semibold transition-all hover:scale-105 hover:shadow-xl relative overflow-hidden group
                            ${isScrolled ? "bg-yellow-500 hover:bg-yellow-600" : "bg-yellow-400 hover:bg-yellow-500"}`}
                    >
                        <span className="relative z-10">Request a Quote</span>
                        <span className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </button>

                    {/* MOBILE TOGGLE */}
                    <button 
                        onClick={() => setIsMenuOpen(true)} 
                        className={`lg:hidden p-2 rounded-lg transition-all hover:scale-110
                            ${isScrolled ? "hover:bg-gray-100" : "hover:bg-white/20"}`}
                    >
                        <svg className={`h-6 w-6 ${isScrolled ? "text-gray-800" : "text-white"}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                            <line x1="4" y1="6" x2="20" y2="6" />
                            <line x1="4" y1="12" x2="20" y2="12" />
                            <line x1="4" y1="18" x2="20" y2="18" />
                        </svg>
                    </button>
                </nav>

                {/* SEARCH BAR */}
                <div className={`max-w-7xl mx-auto mt-4 transition-all duration-500 ${showSearch ? 'opacity-100 max-h-20' : 'opacity-0 max-h-0 overflow-hidden'}`}>
                    <div className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 p-4">
                        <div className="flex items-center gap-3">
                            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                            <input 
                                type="text" 
                                placeholder="Search products, industries..."
                                className="flex-1 bg-transparent outline-none text-gray-800 placeholder-gray-400"
                            />
                            <button 
                                onClick={() => setShowSearch(false)}
                                className="text-gray-400 hover:text-gray-600"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* MOBILE MENU */}
            <div className={`fixed inset-0 z-[100] lg:hidden transition-all duration-500 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)} />
                <div className={`absolute right-0 top-0 h-full w-80 bg-white/95 backdrop-blur-2xl shadow-2xl transition-transform duration-500 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <div className="p-6">
                        <button onClick={() => setIsMenuOpen(false)} className="ml-auto block p-2 hover:bg-gray-100 rounded-lg">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <nav className="mt-8 space-y-2">
                            {navLinks.map((link, i) => (
                                <Link
                                    key={i}
                                    href={link.path}
                                    onClick={() => setIsMenuOpen(false)}
                                    className={`block px-4 py-3 rounded-lg font-medium transition-all hover:bg-blue-50
                                        ${pathname === link.path ? 'bg-blue-100 text-blue-600' : 'text-gray-800'}`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </nav>
                        <button
                            onClick={() => {
                                setIsMenuOpen(false);
                                router.push("/contact");
                            }}
                            className="w-full mt-6 bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-4 rounded-full font-semibold transition-all hover:shadow-xl"
                        >
                            Request a Quote
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;