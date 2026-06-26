"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useInView, Variants } from "framer-motion";
import { Settings, Search, ShieldCheck, CheckCircle, Clock, Target, Star } from 'lucide-react';

export default function ManufacturingQuality() {
  const [activeTab, setActiveTab] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const features = [
    {
      icon: Settings,
      title: "Controlled Manufacturing Processes",
      description: "Precision machining, controlled workflows, and skilled workmanship ensure absolute dimensional accuracy and consistent product quality.",
      stats: "99.9% Accuracy"
    },
    {
      icon: Search,
      title: "Material Selection & Inspection",
      description: "Careful selection of raw materials combined with rigorous inspection at critical stages helps maintain durability and performance reliability.",
      stats: "100% Tested"
    },
    {
      icon: ShieldCheck,
      title: "Field-Oriented Quality Focus",
      description: "Our products are developed with real drilling conditions in mind, ensuring they perform reliably in the most demanding environments.",
      stats: "Field-Proven"
    }
  ];

  useEffect(() => {
    if (isInView) {
      const interval = setInterval(() => {
        setActiveTab((prev) => (prev + 1) % features.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isInView, features.length]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const slideRightVariants: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const slideLeftVariants: Variants = {
    hidden: { opacity: 0, x: 30 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="py-24 bg-gray-100 border-t border-gray-100 relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.03]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dot-pattern-light-mq" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle fill="black" cx="2" cy="2" r="2"></circle>
            </pattern>
          </defs>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#dot-pattern-light-mq)"></rect>
        </svg>
      </div>

      {/* Floating blurs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-60 animate-float pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-100 rounded-full blur-3xl opacity-50 animate-float-delayed pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        <motion.div 
          className="mb-20 text-center max-w-3xl mx-auto"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={itemVariants}
        >
          <p className="text-sm uppercase tracking-widest text-blue-600 font-bold mb-3 flex items-center justify-center gap-2">
            <span className="w-8 h-px bg-blue-600"></span>
            Manufacturing & Quality
            <span className="w-8 h-px bg-blue-600"></span>
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-black tracking-tight mb-6">
            BUILT WITH PRECISION.<br/>TESTED FOR RELIABILITY.
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Our manufacturing processes and quality practices are absolutely focused on delivering
            drilling tools that perform consistently in demanding field conditions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Image with overlay */}
          <motion.div 
            className="relative"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={slideRightVariants}
          >
            <div className="relative group rounded-3xl overflow-hidden shadow-2xl h-[400px] lg:h-[550px]">
              <Image
                src="/manufacturing-quality.jpg"
                alt="Manufacturing and Quality Control"
                fill
                className="object-cover transform group-hover:scale-105 transition-transform duration-1000"
              />
              
              {/* Deep Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900/40 to-transparent opacity-90 transition-opacity duration-500" />
              
              {/* Quality badge (Top Right) */}
              <div className="absolute top-8 right-8 bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 rounded-full shadow-lg flex items-center gap-3">
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                <span className="font-bold text-white tracking-wide">Quality Assured</span>
              </div>

              {/* Bottom info card */}
              <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl shadow-2xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center shrink-0 shadow-lg">
                    <ShieldCheck className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-white text-xl mb-1 tracking-wide">ISO Certified Facility</p>
                    <p className="text-gray-300">State-of-the-art manufacturing infrastructure</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Interactive Features tabs */}
          <motion.div 
            className="space-y-6"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={slideLeftVariants}
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const isActive = activeTab === index;

              return (
                <div
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`relative p-8 rounded-3xl cursor-pointer transition-all duration-500 overflow-hidden group ${
                    isActive 
                      ? 'bg-gray-950 shadow-2xl scale-[1.02] border border-black' 
                      : 'bg-white shadow-lg border border-gray-100 hover:border-blue-200 hover:shadow-xl'
                  }`}
                >
                  {/* Subtle blue gradient hover for inactive cards */}
                  {!isActive && (
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                  )}

                  <div className="relative flex items-start gap-6 z-10">
                    {/* Icon */}
                    <div className={`flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg transition-all duration-500 ${
                      isActive 
                        ? 'bg-blue-600 text-white shadow-blue-500/30' 
                        : 'bg-gray-50 border border-gray-100 text-blue-600'
                    }`}>
                      <Icon className="w-8 h-8" strokeWidth={1.5} />
                    </div>

                    {/* Content */}
                    <div className="flex-1 pt-1">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 gap-2">
                        <h3 className={`text-xl font-bold transition-colors duration-300 ${
                          isActive ? 'text-white' : 'text-gray-900'
                        }`}>
                          {feature.title}
                        </h3>
                        <span className={`text-xs font-bold px-4 py-1.5 rounded-full transition-all shrink-0 w-max ${
                          isActive 
                            ? 'bg-blue-600 text-white' 
                            : 'bg-gray-100 text-gray-600'
                        }`}>
                          {feature.stats}
                        </span>
                      </div>
                      <div className={`overflow-hidden transition-all duration-500 ${
                        isActive ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                      }`}>
                        <p className="text-gray-400 leading-relaxed text-sm pt-2">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Progress bar line indicating time left */}
                  {isActive && (
                    <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gray-900">
                      <div className="h-full bg-blue-600 animate-progress" />
                    </div>
                  )}
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div 
          className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {[
            { label: "Quality Control Points", value: "50+", icon: CheckCircle },
            { label: "Years of Experience", value: "20+", icon: Clock },
            { label: "Manufacturing Precision", value: "±0.01mm", icon: Target },
            { label: "Customer Satisfaction", value: "100%", icon: Star }
          ].map((stat, index) => {
            const StatIcon = stat.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gray-950 p-6 md:p-8 rounded-3xl border border-black shadow-2xl relative overflow-hidden group text-center"
              >
                {/* Hover Glow inside Stat Card */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 group-hover:text-blue-500 transition-all duration-500">
                    <StatIcon className="w-7 h-7" strokeWidth={1.5} />
                  </div>
                  <div className="text-4xl font-black text-white mb-2 tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-sm font-medium text-gray-400 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes progress {
          from { width: 0%; }
          to { width: 100%; }
        }
        .animate-progress {
          animation: progress 5s linear;
        }
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