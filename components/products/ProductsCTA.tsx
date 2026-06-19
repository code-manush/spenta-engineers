"use client";

import { CheckCircle2, FileDown, MessageSquare, ArrowRight, Phone, Mail } from 'lucide-react';
import { useState } from "react";

export default function ProductsCTA() {
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);

  return (
    <section className="py-24 bg-gradient-to-br from-gray-100 via-white to-gray-100 border-t border-gray-200 relative overflow-hidden">
      
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #000 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Floating shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-20 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gray-300 rounded-full blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">

        {/* Icon badge */}
        <div className="inline-flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full mb-6 animate-fade-in">
          <CheckCircle2 className="w-5 h-5 text-accent" strokeWidth={2} />
          <span className="text-sm font-semibold text-accent">Expert Support Available</span>
        </div>

        {/* Main heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-graphite mb-6 animate-slide-up">
          Need Detailed Specifications?
        </h2>

        {/* Subheading */}
        <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed animate-fade-in-delayed">
          Contact our team to receive product specifications, pricing details,
          or a customized quotation based on your drilling requirements.
        </p>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 animate-fade-in-delayed" style={{ animationDelay: '300ms' }}>
          {[
            { icon: "📋", title: "Technical Specs", desc: "Detailed product information" },
            { icon: "💰", title: "Custom Quotes", desc: "Tailored pricing for your needs" },
            { icon: "🚚", title: "Fast Delivery", desc: "Quick turnaround times" }
          ].map((item, i) => (
            <div 
              key={i}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl border border-gray-200 hover:border-blue-300 transition-all hover:-translate-y-1 group"
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{item.icon}</div>
              <h3 className="font-bold text-graphite mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12 animate-fade-in-delayed" style={{ animationDelay: '500ms' }}>
          
          {/* Primary CTA */}
          <a
            href="/catalogue"
            onMouseEnter={() => setHoveredButton('catalogue')}
            onMouseLeave={() => setHoveredButton(null)}
            className="group relative inline-flex items-center gap-3 bg-graphite hover:bg-black text-white px-10 py-5 rounded-full font-bold text-lg shadow-2xl transition-all hover:scale-105 overflow-hidden"
          >
            {/* Shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            
            <FileDown className="w-6 h-6 relative z-10" strokeWidth={2} />
            
            <span className="relative z-10">Download Catalogue</span>

            {/* Animated dots */}
            {hoveredButton === 'catalogue' && (
              <>
                <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-ping" />
                <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-blue-400 rounded-full animate-ping" style={{ animationDelay: '0.2s' }} />
              </>
            )}
          </a>

          {/* Secondary CTA */}
          <a
            href="/contact"
            onMouseEnter={() => setHoveredButton('contact')}
            onMouseLeave={() => setHoveredButton(null)}
            className="group relative inline-flex items-center gap-3 bg-white hover:bg-gray-50 border-2 border-graphite hover:border-accent text-graphite hover:text-accent px-10 py-5 rounded-full font-bold text-lg transition-all hover:scale-105"
          >
            <MessageSquare className="w-6 h-6" strokeWidth={2} />
            
            <span>Request a Quote</span>

            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" strokeWidth={2} />
          </a>
        </div>

        {/* Additional info */}
        <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200 max-w-3xl mx-auto animate-fade-in-delayed" style={{ animationDelay: '700ms' }}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            
            {/* Contact info */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <Phone className="w-6 h-6 text-accent" strokeWidth={2} />
              </div>
              <div className="text-left">
                <p className="text-sm text-gray-500 mb-1">Need immediate help?</p>
                <a href="tel:+919426753291" className="text-lg font-bold text-graphite hover:text-accent transition-colors">
                  +91-9426753291
                </a>
              </div>
            </div>

            {/* Divider */}
            <div className="hidden md:block w-px h-12 bg-gray-300" />

            {/* Email info */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                <Mail className="w-6 h-6 text-gray-600" strokeWidth={2} />
              </div>
              <div className="text-left">
                <p className="text-sm text-gray-500 mb-1">Or email us at</p>
                <a href="mailto:spentaeng@gmail.com" className="text-lg font-bold text-graphite hover:text-accent transition-colors">
                  spentaeng@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Trust indicators */}
        <div className="mt-12 flex flex-wrap justify-center gap-8 text-gray-600 animate-fade-in-delayed" style={{ animationDelay: '900ms' }}>
          {[
            { icon: "✓", text: "15+ Years Trusted" },
            { icon: "🏆", text: "Quality Assured" },
            { icon: "🚀", text: "Fast Response" }
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className="text-accent">{item.icon}</span>
              <span className="text-sm font-medium">{item.text}</span>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fade-in 0.6s ease-out; }
        .animate-slide-up { animation: slide-up 0.8s ease-out; }
        .animate-fade-in-delayed { animation: fade-in 0.6s ease-out both; }
      `}</style>
    </section>
  );
}