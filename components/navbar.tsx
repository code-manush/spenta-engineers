"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isAchievementsOpen, setIsAchievementsOpen] = useState(false);
    const [achievementsTimeout, setAchievementsTimeout] = useState<NodeJS.Timeout | null>(null);

    const router = useRouter();

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "About Us", path: "/about" },
        { name: "Products", path: "/products" },
        { name: "Industries", path: "/industries" },
        { name: "Catalogue", path: "/catalogue" },
        { name: "Contact", path: "/contact" },
        {name: "Manufacturing", path: "/manufacturing-quality" }
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

    useEffect(() => {
        return () => {
            if (achievementsTimeout) clearTimeout(achievementsTimeout);
        };
    }, [achievementsTimeout]);

    return (
        <>
            {/* FIXED NAVBAR */}
            <div className="fixed top-0 left-0 w-full z-50 px-3 sm:px-4 md:px-6 lg:px-8 pt-4 md:pt-5 lg:pt-6">
                <nav
                    className={`mx-auto max-w-7xl
          px-4 sm:px-5 lg:px-6 rounded-2xl lg:rounded-3xl 
          flex items-center justify-between gap-2 lg:gap-3
          transition-all duration-500 ease-out
          ${isScrolled
                            ? "bg-white/95 backdrop-blur-xl shadow-xl py-0 lg:py-0 border border-gray-100/50"
                            : "bg-transparent py-0 lg:py-0 shadow-lg"
                        }`}
                >
                    {/* LOGO */}
                    <Link href="/" className="flex items-center shrink-0 transition-transform duration-300 hover:scale-105 bg-transparent">
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
                        {navLinks.map((link, i) => {
                            if (link.name === "Product") {
                                return (
                                    <div
                                        key={i}
                                        className="relative"
                                        onMouseEnter={() => {
                                            if (achievementsTimeout) clearTimeout(achievementsTimeout);
                                            setIsAchievementsOpen(true);
                                        }}
                                        onMouseLeave={() => {
                                            const timeout = setTimeout(() => setIsAchievementsOpen(false), 200);
                                            setAchievementsTimeout(timeout);
                                        }}
                                    >
                                        <button
                                            className={`group font-medium flex items-center gap-1
                      ${isScrolled ? "text-gray-00" : "text-white"}`}
                                        >
                                            <span className="relative inline-block pb-1">
                                                {link.name}
                                                <span
                                                    className={`absolute left-0 bottom-0 h-0.5 w-full scale-x-0 group-hover:scale-x-100 transition-all
                          ${isScrolled ? "bg-gray-700" : "bg-white"}`}
                                                />
                                            </span>
                                            <svg className={`w-4 h-4 transition-transform ${isAchievementsOpen ? "rotate-180" : ""}`} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                                <path d="M19 9l-7 7-7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </button>

                                        {isAchievementsOpen && (
                                            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-white rounded-xl shadow-2xl border">
                                                <Link href="/milestones" className="block px-6 py-3 text-gray-800 hover:bg-gray-50">Our Milestones</Link>
                                                <Link href="/journey" className="block px-6 py-3 text-gray-800 hover:bg-gray-50 border-t">10+ Year’s Journey</Link>
                                            </div>
                                        )}
                                    </div>
                                );
                            }

                            return (
                                <Link
                                    key={i}
                                    href={link.path}
                                    className={`group font-medium ${isScrolled ? "text-gray-800" : "text-white"}`}
                                >
                                    <span className="relative inline-block pb-1">
                                        {link.name}
                                        <span
                                            className={`absolute left-0 bottom-0 h-0.5 w-full scale-x-0 group-hover:scale-x-100 transition-all
                      ${isScrolled ? "bg-gray-700" : "bg-white"}`}
                                        />
                                    </span>
                                </Link>
                            );
                        })}
                    </div>

                    {/* BUTTON */}
                    <button
                        onClick={() => router.push("/donate")}
                        className={`hidden lg:block px-6 py-3 rounded-full font-semibold transition-all hover:scale-105
            ${isScrolled ? "bg-yellow-500 hover:bg-yellow-600" : "bg-yellow-400 hover:bg-yellow-500"}`}
                    >
                        Request a Quote
                    </button>

                    {/* MOBILE TOGGLE */}
                    <button onClick={() => setIsMenuOpen(true)} className="lg:hidden">
                        <svg className={`h-6 w-6 ${isScrolled ? "text-gray-800" : "text-white"}`} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <line x1="4" y1="6" x2="20" y2="6" />
                            <line x1="4" y1="12" x2="20" y2="12" />
                            <line x1="4" y1="18" x2="20" y2="18" />
                        </svg>
                    </button>
                </nav>
            </div>
        </>
    );
};

export default Navbar;
