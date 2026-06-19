"use client";

import { ArrowRight } from 'lucide-react';
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView, Variants } from "framer-motion";

export default function AboutSection() {
  const [counters, setCounters] = useState({ years: 0, clients: 0 });
  const statsRef = useRef<HTMLDivElement>(null);
  const isStatsInView = useInView(statsRef, { once: true, amount: 0.2 });

  useEffect(() => {
    if (isStatsInView) {
      const duration = 2000;
      const steps = 60;
      const interval = duration / steps;
      
      const targets = { years: 20, clients: 100 };
      let step = 0;

      const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        
        setCounters({
          years: Math.floor(targets.years * progress),
          clients: Math.floor(targets.clients * progress)
        });

        if (step >= steps) clearInterval(timer);
      }, interval);

      return () => clearInterval(timer);
    }
  }, [isStatsInView]);

  const features = [
    {
      icon: "🎯",
      title: "Precision Engineering",
      description: "Manufacturing high-quality drilling tools with meticulous attention to detail"
    },
    {
      icon: "⚡",
      title: "Reliable Performance",
      description: "Quality control ensures consistent performance in demanding environments"
    },
    {
      icon: "🤝",
      title: "Industry Partnership",
      description: "Associated with Finerock Industries for comprehensive drilling solutions"
    },
    {
      icon: "🌍",
      title: "Global Reach",
      description: "Years of expertise serving professionals in mineral exploration and mining"
    }
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
      className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl animate-float-delayed" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header with animation */}
        <motion.div 
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={itemVariants}
        >
          <div className="inline-block">
            <p className="text-sm uppercase tracking-widest text-accent font-semibold mb-3">
              About Us
            </p>
            <h2 className="text-5xl md:text-6xl font-bold text-graphite tracking-tight">
              SPENTA ENGINEERS
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-accent to-black mt-4 rounded-full" />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          
          {/* Text content */}
          <motion.div 
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            {[
              "Spenta Engineers specializes in manufacturing high-quality drilling tools and equipment for industrial applications.",
              "Our focus on precision engineering and quality control ensures reliable performance in demanding environments.",
              "Associated with Finerock Industries, we deliver solutions trusted by professionals in mineral exploration and mining.",
              "With years of expertise, we provide comprehensive support from design to delivery."
            ].map((text, index) => (
              <motion.p 
                key={index}
                variants={slideRightVariants}
                className="text-xl text-gray-700 leading-relaxed"
              >
                {text}
              </motion.p>
            ))}

            {/* CTA Button */}
            <motion.div 
              variants={slideRightVariants}
              className="pt-6"
            >
              <Link 
                href="/about"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-black to-accent hover:from-graphite hover:to-accent text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group"
              >
                Learn More About Us
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" strokeWidth={2} />
              </Link>
            </motion.div>
          </motion.div>

          {/* Image with overlay effects */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={slideLeftVariants}
            className="relative"
          >
            <div className="relative group">
              {/* Decorative frame */}
              <div className="absolute -inset-4 bg-gradient-to-r from-accent to-purple-600 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity" />
              
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/about.jpg"
                  alt="Spenta Engineers Manufacturing Facility"
                  width={600}
                  height={420}
                  className="w-full h-[420px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Floating badge */}
                <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg flex items-center gap-3 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="font-semibold text-graphite">Manufacturing Excellence</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats counters */}
        <motion.div 
          ref={statsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {[
            { value: counters.years, label: "Years Experience", suffix: "+" },
            { value: counters.clients, label: "Quality Assurance", suffix: "%" }
          ].map((stat, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="text-5xl font-bold bg-gradient-to-r from-accent to-gray-600 bg-clip-text text-transparent mb-2">
                {stat.value}{stat.suffix}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Feature cards */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="group p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
            >
              <div className="text-4xl mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-graphite mb-2 group-hover:text-blue-700 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
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
        .animate-float-delayed { animation: float-delayed 8s ease-in-out infinite 2s; }
      `}</style>
    </section>
  );
}