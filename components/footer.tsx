"use client";

import { useState } from "react";

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
    <footer className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-hidden">
      
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Gradient accents */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gray-600/10 rounded-full blur-3xl" />

      <div className="relative z-10">
        
        {/* Newsletter section */}
        <div className="border-b border-gray-800">
          <div className="max-w-7xl mx-auto px-6 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-2">Stay Informed</h3>
                <p className="text-gray-400">Receive updates on products, industry insights, and technical resources</p>
              </div>
              <form onSubmit={handleSubscribe} className="flex gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 rounded-sm bg-white/5 border border-white/10 backdrop-blur-sm focus:outline-none focus:border-blue-500 transition-all placeholder-gray-500"
                  required
                />
                <button
                  type="submit"
                  disabled={subscribed}
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-sm font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {subscribed ? (
                    <span className="flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Subscribed
                    </span>
                  ) : "Subscribe"}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Main footer content */}
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
            
            {/* Company info */}
            <div className="lg:col-span-2 space-y-6">
              <img
                src="/logo-white.png"
                alt="Spenta Engineers"
                className="h-16 object-contain transition-transform duration-300 hover:scale-105"
              />
              <p className="text-gray-400 leading-relaxed max-w-sm">
                Manufacturing excellence in precision drilling tools for mineral exploration, mining, and geotechnical applications worldwide.
              </p>
              
              {/* Social links */}
              <div className="flex gap-3">
                {[
                  { label: "LinkedIn", icon: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 2a2 2 0 100 4 2 2 0 000-4z" },
                  { label: "Twitter", icon: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" },
                  { label: "Facebook", icon: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" }
                ].map((social, i) => (
                  <a
                    key={i}
                    href="#"
                    aria-label={social.label}
                    className="w-10 h-10 rounded-sm bg-white/5 border border-white/10 hover:bg-blue-600 hover:border-blue-600 flex items-center justify-center transition-all hover:scale-110 group"
                  >
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d={social.icon} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Company links */}
            <div className="space-y-4">
              <h4 className="text-lg font-bold mb-6 relative inline-block">
                Company
                <span className="absolute bottom-0 left-0 w-8 h-px bg-blue-500" />
              </h4>
              <ul className="space-y-3">
                {[
                  { name: "About Us", href: "/about" },
                  { name: "Contact", href: "/contact" },
                  { name: "Industries", href: "/industries" },
                  { name: "Catalogue", href: "/catalogue" }
                ].map((link, i) => (
                  <li key={i}>
                    <a href={link.href} className="text-gray-400 hover:text-white transition-all inline-block group">
                      <span className="relative">
                        {link.name}
                        <span className="absolute bottom-0 left-0 w-0 h-px bg-blue-500 group-hover:w-full transition-all duration-300" />
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Products */}
            <div className="space-y-4">
              <h4 className="text-lg font-bold mb-6 relative inline-block">
                Products
                <span className="absolute bottom-0 left-0 w-8 h-px bg-blue-500" />
              </h4>
              <ul className="space-y-3">
                {[
                  { name: "Drill Rods", href: "/products/drill-rods" },
                  { name: "Core Barrels", href: "/products/core-barrels" },
                  { name: "Diamond Tools", href: "/products/diamond-tools" },
                  { name: "Core Trays", href: "/products/plastic-core-trays" },
                  { name: "Accessories", href: "/products/accessories" }
                ].map((link, i) => (
                  <li key={i}>
                    <a href={link.href} className="text-gray-400 hover:text-white transition-all inline-block group">
                      <span className="relative">
                        {link.name}
                        <span className="absolute bottom-0 left-0 w-0 h-px bg-blue-500 group-hover:w-full transition-all duration-300" />
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h4 className="text-lg font-bold mb-6 relative inline-block">
                Contact
                <span className="absolute bottom-0 left-0 w-8 h-px bg-blue-500" />
              </h4>
              <div className="space-y-4">
                <a href="mailto:spentaeng@gmail.com" className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors group">
                  <div className="w-10 h-10 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-600 transition-all">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Email</p>
                    <p className="text-sm">spentaeng@gmail.com</p>
                  </div>
                </a>
                <a href="tel:+919426753291" className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors group">
                  <div className="w-10 h-10 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-600 transition-all">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Phone</p>
                    <p className="text-sm">+91-9426753291</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-6 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
              <p>&copy; 2025 Spenta Engineers. All rights reserved.</p>
              <div className="flex gap-6">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              </div>
              <p>Designed & Manufactured in India</p>
            </div>
          </div>
        </div>
      </div>

      {/* Back to top button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-sm shadow-xl flex items-center justify-center transition-all hover:scale-110 group z-50"
        aria-label="Back to top"
      >
        <svg className="w-6 h-6 text-white group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </footer>
  );
}