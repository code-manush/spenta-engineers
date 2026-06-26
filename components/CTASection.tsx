"use client";

import { FileDown, Mail, ArrowRight, Phone, CheckCircle2 } from 'lucide-react';
import Link from "next/link";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="relative py-32 bg-gray-950 text-white overflow-hidden border-t-8 border-blue-600">
      {/* Background pattern - Dark Mode Map */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.05]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dot-pattern-dark-cta" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle fill="white" cx="2" cy="2" r="2"></circle>
            </pattern>
          </defs>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#dot-pattern-dark-cta)"></rect>
        </svg>
      </div>

      {/* Floating Orbs for depth */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] animate-float pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/30 rounded-full blur-[100px] animate-float-delayed pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
        
        {/* Main content */}
        <motion.div 
          className="space-y-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          {/* Headline */}
          <h2 className="text-5xl md:text-7xl font-black leading-tight tracking-tight">
            <span className="block text-white mb-2">READY TO SOURCE</span>
            <span className="text-blue-500">
              QUALITY EQUIPMENT?
            </span>
          </h2>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Contact us today to discuss your requirements and receive a customized quotation tailored precisely to your project needs.
          </p>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-8 pt-6">
            {[
              "15+ Years Experience",
              "500+ Projects Supplied",
              "100% Quality Assured"
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-3 text-gray-300 font-medium">
                <CheckCircle2 className="w-6 h-6 text-blue-500" />
                <span className="text-lg">{text}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Primary CTA - Download */}
          <a
            href="/spenta-engineers-catalogue.pdf"
            target="_blank"
            className="group relative inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white px-10 py-5 rounded-full font-bold text-lg shadow-[0_0_40px_rgba(37,99,235,0.4)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_60px_rgba(37,99,235,0.6)] overflow-hidden w-full sm:w-auto justify-center"
          >
            {/* Shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            
            <FileDown className="w-6 h-6 group-hover:-translate-y-1 transition-transform" strokeWidth={2.5} />
            <span className="relative z-10">Download Catalogue</span>
          </a>

          {/* Secondary CTA - Contact */}
          <Link
            href="/contact"
            className="group relative inline-flex items-center gap-3 bg-transparent hover:bg-white/5 border-2 border-gray-600 hover:border-white text-white px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 w-full sm:w-auto justify-center"
          >
            <Mail className="w-6 h-6 group-hover:rotate-12 transition-transform" strokeWidth={2.5} />
            <span>Contact Us</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" strokeWidth={2.5} />
          </Link>
        </motion.div>

        {/* Additional info */}
        <motion.div 
          className="mt-16 pt-12 border-t border-gray-800 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-gray-500 text-sm mb-4 uppercase tracking-widest font-semibold">
            Need immediate assistance? Call us directly
          </p>
          <a 
            href="tel:+919426753291" 
            className="inline-flex items-center gap-3 text-3xl md:text-4xl font-black text-white hover:text-blue-400 transition-colors group"
          >
            <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
              <Phone className="w-6 h-6 group-hover:animate-bounce" strokeWidth={2.5} />
            </div>
            +91-9426753291
          </a>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-30px, -30px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(30px, 30px); }
        }
        .animate-float { animation: float 10s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 12s ease-in-out infinite; }
      `}</style>
    </section>
  );
}