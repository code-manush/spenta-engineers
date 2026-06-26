"use client";

import { ArrowRight, Mountain, Pickaxe, Building2, Map } from 'lucide-react';
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

export default function IndustriesServed() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const industries = [
    { 
      title: "Mining", 
      image: "/mining.jpg",
      description: "Advanced drilling solutions for heavy-duty mining operations worldwide.",
      icon: Pickaxe
    },
    { 
      title: "Mineral Exploration", 
      image: "/exploration.jpg",
      description: "Precision coring tools for accurate geological sampling and exploration.",
      icon: Map
    },
    { 
      title: "Geotechnical Drilling", 
      image: "/geotechnical.jpg",
      description: "Reliable equipment for detailed soil analysis and foundation testing.",
      icon: Mountain
    },
    { 
      title: "Infrastructure", 
      image: "/infrastructure.jpg",
      description: "Industrial-grade tools for large-scale construction and infrastructure projects.",
      icon: Building2
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section 
      className="py-24 bg-white border-t border-gray-100 relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.03]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dot-pattern-light-ind" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle fill="black" cx="2" cy="2" r="2"></circle>
            </pattern>
          </defs>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#dot-pattern-light-ind)"></rect>
        </svg>
      </div>

      {/* Animated floating blue/purple background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-100/40 rounded-full blur-3xl animate-float-delayed" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        <motion.div 
          className="mb-20 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="text-sm uppercase tracking-widest text-blue-600 font-bold mb-3 flex items-center justify-center gap-2">
            <span className="w-8 h-px bg-blue-600"></span>
            Applications
            <span className="w-8 h-px bg-blue-600"></span>
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-black tracking-tight mb-6">
            INDUSTRIES WE SERVE
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Our precision drilling tools are trusted across a wide range of industrial and
            exploration applications worldwide.
          </p>
        </motion.div>

        {/* 2x2 Massive Bento Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          {industries.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
                className="group relative h-[400px] md:h-[450px] overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 cursor-pointer bg-gray-950"
              >
                {/* Image */}
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                />
                
                {/* Sleek Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900/60 to-transparent transition-opacity duration-500 opacity-90 group-hover:opacity-80" />

                {/* Hover Accent Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent opacity-0 transition-opacity duration-500 blur-xl ${
                  activeIndex === index ? 'opacity-100' : ''
                }`} />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-10 z-10">
                  <div className="transform transition-all duration-500 group-hover:-translate-y-4">
                    {/* Icon badge */}
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-lg transition-colors duration-500 ${
                      activeIndex === index ? 'bg-blue-600 text-white shadow-blue-500/30' : 'bg-white/10 backdrop-blur-md border border-white/20 text-white'
                    }`}>
                      <Icon className="w-7 h-7" strokeWidth={1.5} />
                    </div>

                    <h3 className="text-3xl font-bold text-white mb-3">
                      {item.title}
                    </h3>

                    <p className="text-gray-300 text-lg leading-relaxed max-w-md opacity-80 group-hover:opacity-100 transition-opacity duration-500">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Arrow indicator */}
                <div className={`absolute bottom-10 right-10 w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-xl transition-all duration-500 ${
                  activeIndex === index 
                    ? 'opacity-100 translate-x-0 scale-100' 
                    : 'opacity-0 translate-x-4 scale-90'
                }`}>
                  <ArrowRight className="w-5 h-5 text-black" strokeWidth={2.5} />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="inline-block p-12 bg-gray-950 rounded-3xl border border-black shadow-2xl relative overflow-hidden w-full max-w-4xl mx-auto group">
            {/* Subtle blue gradient hover inside CTA */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-left md:max-w-md">
                <h3 className="text-white text-2xl font-bold mb-2">
                  Need industry-specific solutions?
                </h3>
                <p className="text-gray-400">
                  Explore our complete product range tailored for your exact requirements.
                </p>
              </div>
              <Link
                href="/industries"
                className="inline-flex items-center gap-3 bg-blue-600 text-white hover:bg-blue-500 px-8 py-4 rounded-full font-bold transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] group/btn shrink-0"
              >
                View All Industries
                <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" strokeWidth={2.5} />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-20px, -20px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(20px, 20px); }
        }
        .animate-float { animation: float 8s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 10s ease-in-out infinite; }
      `}</style>
    </section>
  );
}