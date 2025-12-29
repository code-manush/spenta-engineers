"use client";

import { useState } from "react";

export default function CTASection() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative py-24 bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-hidden">
      {/* Animated background effects */}
      <div className="absolute inset-0">
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
        
        {/* Floating orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        
        {/* Animated particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-float-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Main content */}
        <div className="text-center space-y-8 mb-12">


          {/* Headline with gradient */}
          <h2 className="text-4xl md:text-6xl font-bold leading-tight animate-slide-up">
            <span className="block mb-2">Ready to Source</span>
            <span className="bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
              Quality Drilling Equipment?
            </span>
          </h2>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed animate-fade-in-delayed">
            Contact us today to discuss your requirements and receive a customized quotation tailored to your project needs.
          </p>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-8 pt-4 animate-fade-in-delayed" style={{ animationDelay: '400ms' }}>
            {[
              { icon: "✓", text: "15+ Years Experience" },
              { icon: "⚡", text: "500+ Projects" },
              { icon: "🏆", text: "Quality Assured" }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-blue-200">
                <span className="text-2xl">{item.icon}</span>
                <span className="font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-delayed" style={{ animationDelay: '600ms' }}>
          
          {/* Primary CTA - Download */}
          <a
            href="/spenta-engineers-catalogue.pdf"
            target="_blank"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-black to-blue-700 hover:from-gray-900 hover:to-blue-700 px-10 py-5 rounded-full font-bold text-lg shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 overflow-hidden"
          >
            {/* Shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            
            <svg className="w-6 h-6 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            
            <span className="relative z-10">Download Catalogue</span>
            
            {/* Animated border */}
            <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="absolute inset-0 rounded-full border-2 border-white/50 animate-ping" />
            </div>
          </a>

          {/* Secondary CTA - Contact */}
          <a
            href="/contact"
            className="group relative inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 border-2 border-white/30 hover:border-white/50 px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105"
          >
            <svg className="w-6 h-6 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span>Contact Us</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>

        {/* Additional info */}
        <div className="mt-12 text-center animate-fade-in-delayed" style={{ animationDelay: '800ms' }}>
          <p className="text-blue-200 text-sm mb-4">
            Need immediate assistance? Call us directly
          </p>
          <a 
            href="tel:+919426753291" 
            className="inline-flex items-center gap-2 text-2xl font-bold text-white hover:text-blue-300 transition-colors group"
          >
            <svg className="w-6 h-6 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            +91-9426753291
          </a>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white/20 rounded-full animate-spin-slow" />
        <div className="absolute bottom-10 right-10 w-16 h-16 border-2 border-white/20 rotate-45 animate-pulse" />
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float-particle {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0; }
          50% { transform: translate(var(--tx, 20px), var(--ty, -40px)) scale(1.5); opacity: 1; }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-fade-in { animation: fade-in 0.8s ease-out; }
        .animate-slide-up { animation: slide-up 0.8s ease-out; }
        .animate-fade-in-delayed { animation: fade-in 0.8s ease-out both; }
        .animate-float-particle { animation: float-particle 10s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 20s linear infinite; }
      `}</style>
    </section>
  );
}