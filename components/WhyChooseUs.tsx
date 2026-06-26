"use client";

import { ArrowRight, Target, ShieldCheck, CheckCircle, Layers, Settings } from 'lucide-react';
import { useState } from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

export default function WhyChooseUs() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const whyChoose = [
    {
      title: "Focused manufacturing expertise in drilling tools",
      description: "Specialized knowledge and precision in every component",
      icon: <Target className="w-7 h-7" />
    },
    {
      title: "Use of premium quality materials and components",
      description: "Only the finest materials for maximum durability",
      icon: <ShieldCheck className="w-7 h-7" />
    },
    {
      title: "Field-tested designs proven in industrial applications",
      description: "Real-world validation ensures reliability",
      icon: <CheckCircle className="w-7 h-7" />
    },
    {
      title: "Comprehensive product range for diverse needs",
      description: "Complete solutions for all drilling requirements",
      icon: <Layers className="w-7 h-7" />
    },
    {
      title: "Capabilities for custom and bulk supply solutions",
      description: "Flexible manufacturing to meet your specifications",
      icon: <Settings className="w-7 h-7" />
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: 30 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section 
      className="py-24 bg-gray-100 border-t border-gray-100 relative overflow-hidden"
    >
      {/* Interactive Global Map Background (Stylized SVG Dotted Map) - Light map */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.03]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dot-pattern-light-why" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle fill="black" cx="2" cy="2" r="2"></circle>
            </pattern>
          </defs>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#dot-pattern-light-why)"></rect>
        </svg>
      </div>

      {/* Animated floating blue/purple background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl animate-float-delayed" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        <motion.div 
          className="mb-16 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="text-sm uppercase tracking-widest text-blue-600 font-bold mb-3 flex items-center justify-center gap-2">
            <span className="w-8 h-px bg-blue-600"></span>
            Our Strengths
            <span className="w-8 h-px bg-blue-600"></span>
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-black tracking-tight mb-4">
            WHY CHOOSE US
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mt-6">
            Our approach combines engineering expertise, controlled manufacturing,
            and a strong focus on reliability to support demanding drilling operations.
          </p>
        </motion.div>

        {/* Split Layout: Image on Left, List on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative h-[400px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl group"
          >
            <Image
              src="/why-choose-us.png"
              alt="Precision Drilling Tools Manufacturing"
              fill
              className="object-cover transform group-hover:scale-105 transition-transform duration-1000"
            />
            {/* Sleek overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900/40 to-transparent opacity-80" />
            
            {/* Glassmorphism Badge */}
            <div className="absolute bottom-8 left-8 right-8">
              <div className="inline-flex flex-col gap-2 bg-white/10 backdrop-blur-md px-8 py-6 rounded-2xl border border-white/20 text-white shadow-xl">
                <span className="text-4xl font-black text-blue-400">100%</span>
                <span className="font-medium tracking-wide text-gray-200">
                  Committed to Industrial Excellence
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right: Sleek List */}
          <motion.div 
            className="flex flex-col gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
          >
            {whyChoose.map((point, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative flex items-start gap-6 p-6 rounded-2xl hover:bg-gray-50 border border-transparent hover:border-gray-100 transition-all duration-300 cursor-pointer"
              >
                {/* Icon Badge */}
                <div className={`flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg transition-all duration-500 ${
                  hoveredIndex === index 
                    ? 'bg-blue-600 text-white scale-110 shadow-blue-500/30' 
                    : 'bg-white text-blue-600 border border-gray-100'
                }`}>
                  {point.icon}
                </div>

                {/* Text */}
                <div className="flex-1 pt-1">
                  <h3 className={`text-xl font-bold mb-2 leading-tight transition-colors duration-300 ${
                    hoveredIndex === index ? 'text-blue-600' : 'text-gray-900'
                  }`}>
                    {point.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed text-sm">
                    {point.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="inline-block p-8 md:p-12 bg-gray-950 rounded-3xl shadow-2xl border border-black relative overflow-hidden group w-full max-w-4xl mx-auto">
            {/* Subtle blue glow behind the CTA */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl" />
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <p className="text-white text-2xl font-bold text-left md:max-w-md">
                Ready to experience the Spenta Engineers difference?
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-3 bg-white text-black hover:bg-gray-200 px-8 py-4 rounded-full font-bold transition-all hover:-translate-y-1 shadow-lg group/btn shrink-0"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" strokeWidth={2} />
              </a>
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