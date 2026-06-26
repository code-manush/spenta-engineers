"use client";

import { Check, Mail, Phone, ArrowUp, ArrowRight } from 'lucide-react';
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setEmail("");
    }, 3000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gray-950 text-white overflow-hidden border-t-8 border-blue-600">
      
      {/* Interactive Global Map Background (Stylized SVG Dotted Map) - Dark map */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.02]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dot-pattern-dark" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle fill="white" cx="2" cy="2" r="2"></circle>
            </pattern>
          </defs>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#dot-pattern-dark)"></rect>
        </svg>
      </div>

      {/* Massive SPENTA Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-black text-white/[0.02] pointer-events-none select-none tracking-tighter w-full text-center">
        SPENTA
      </div>

      {/* Gradient accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10">
        
        {/* Newsletter section */}
        <div className="border-b border-gray-900 bg-black/20 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6 py-16 lg:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl lg:text-4xl font-black mb-4 tracking-tight">Join Our Global Network</h3>
                <p className="text-gray-400 text-lg max-w-md">Receive the latest updates on precision drilling technologies, industry insights, and technical resources.</p>
              </div>
              <form onSubmit={handleSubscribe} className="relative max-w-xl lg:ml-auto w-full group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative flex items-center bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-full p-1.5 sm:p-2 pl-4 sm:pl-6 focus-within:border-blue-600 transition-colors">
                  <Mail className="hidden sm:block w-5 h-5 text-gray-500 mr-3 shrink-0" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter email address..."
                    className="flex-1 bg-transparent border-none focus:outline-none text-white placeholder-gray-500 py-2 sm:py-3 w-full text-sm sm:text-base px-2 sm:px-0"
                    required
                  />
                  <button
                    type="submit"
                    disabled={subscribed}
                    className="shrink-0 px-4 sm:px-8 py-2.5 sm:py-4 bg-blue-600 hover:bg-blue-500 rounded-full font-bold transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 group/btn text-sm sm:text-base"
                  >
                    {subscribed ? (
                      <>
                        <Check className="w-5 h-5" strokeWidth={2.5} />
                        <span className="hidden sm:inline">Subscribed</span>
                      </>
                    ) : (
                      <>
                        <span>Subscribe</span>
                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover/btn:translate-x-1 transition-transform" strokeWidth={2.5} />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Main footer content */}
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
            
            {/* Company info */}
            <div className="lg:col-span-4 space-y-8 pr-4">
              <Link href="/" className="inline-block transition-transform duration-300 hover:scale-105">
                <Image
                  src="/logo-white.png"
                  alt="Spenta Engineers"
                  width={220}
                  height={80}
                  className="h-16 w-auto object-contain"
                />
              </Link>
              <p className="text-gray-400 leading-relaxed text-sm">
                Manufacturing excellence in precision drilling tools for mineral exploration, mining, and geotechnical applications worldwide.
              </p>
              
              {/* Social links */}
              <div className="flex gap-4">
                {[
                  { label: "LinkedIn", url: "https://www.linkedin.com/company/spenta-engineers-0201/", icon: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 2a2 2 0 100 4 2 2 0 000-4z" },
                  { label: "Twitter", url: "#", icon: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" },
                  { label: "Facebook", url: "#", icon: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" }
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-12 h-12 rounded-full bg-gray-900 border border-gray-800 hover:bg-blue-600 hover:border-blue-500 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1 shadow-lg group"
                  >
                    <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d={social.icon} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Empty Spacer Column for Desktop */}
            <div className="hidden lg:block lg:col-span-1"></div>

            {/* Company links */}
            <div className="lg:col-span-2 space-y-6">
              <h4 className="text-lg font-bold tracking-wide text-white uppercase flex flex-col gap-3">
                Company
                <span className="w-8 h-1 bg-blue-600 rounded-full" />
              </h4>
              <ul className="space-y-4">
                {[
                  { name: "About Us", href: "/about" },
                  { name: "Contact", href: "/contact" },
                  { name: "Industries", href: "/industries" },
                  { name: "Catalogue", href: "/catalogue" }
                ].map((link, i) => (
                  <li key={i}>
                    <Link href={link.href} className="text-gray-400 hover:text-white transition-all inline-block group font-medium text-sm">
                      <span className="relative">
                        {link.name}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300" />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Products */}
            <div className="lg:col-span-3 space-y-6">
              <h4 className="text-lg font-bold tracking-wide text-white uppercase flex flex-col gap-3">
                Products
                <span className="w-8 h-1 bg-blue-600 rounded-full" />
              </h4>
              <ul className="space-y-4">
                {[
                  { name: "Drill Rods", href: "/products/core-drilling-system/drill-rods" },
                  { name: "Core Barrels", href: "/products/core-drilling-system/core-barrels" },
                  { name: "Diamond Tools", href: "/products/diamond-tungsten-tools" },
                  { name: "Core Trays", href: "/products/core-trays" },
                  { name: "Drilling Rigs", href: "/products/drill-rigs" }
                ].map((link, i) => (
                  <li key={i}>
                    <Link href={link.href} className="text-gray-400 hover:text-white transition-all inline-block group font-medium text-sm">
                      <span className="relative">
                        {link.name}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300" />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="lg:col-span-2 space-y-6">
              <h4 className="text-lg font-bold tracking-wide text-white uppercase flex flex-col gap-3">
                Contact
                <span className="w-8 h-1 bg-blue-600 rounded-full" />
              </h4>
              <div className="space-y-6">
                <a href="mailto:spentaeng@gmail.com" className="flex items-start gap-4 text-gray-400 hover:text-white transition-colors group">
                  <div className="w-10 h-10 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:border-blue-500 transition-all duration-300 shadow-lg group-hover:scale-110">
                    <Mail className="w-4 h-4 text-gray-300 group-hover:text-white" strokeWidth={2.5} />
                  </div>
                  <div className="mt-0.5">
                    <p className="text-[10px] uppercase tracking-wider text-gray-500 font-bold mb-1">Email</p>
                    <p className="text-sm font-medium">spentaeng@gmail.com</p>
                  </div>
                </a>
                <a href="tel:+919426753291" className="flex items-start gap-4 text-gray-400 hover:text-white transition-colors group">
                  <div className="w-10 h-10 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:border-blue-500 transition-all duration-300 shadow-lg group-hover:scale-110">
                    <Phone className="w-4 h-4 text-gray-300 group-hover:text-white" strokeWidth={2.5} />
                  </div>
                  <div className="mt-0.5">
                    <p className="text-[10px] uppercase tracking-wider text-gray-500 font-bold mb-1">Phone</p>
                    <p className="text-sm font-medium">+91-9426753291</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-900 bg-black/40 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm font-medium text-gray-500">
              <p>&copy; {new Date().getFullYear()} Spenta Engineers. All rights reserved.</p>
              <div className="flex items-center gap-6">
                <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                <p className="hidden md:block border-l border-gray-800 pl-6">Designed & Manufactured in India</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Premium Back to top button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-14 h-14 bg-blue-600 hover:bg-blue-500 rounded-full shadow-[0_0_30px_rgba(37,99,235,0.3)] flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-2 group z-50 border border-blue-500"
        aria-label="Back to top"
      >
        <ArrowUp className="w-6 h-6 text-white group-hover:-translate-y-1 transition-transform duration-300" strokeWidth={2.5} />
      </button>
    </footer>
  );
}