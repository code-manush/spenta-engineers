"use client";

import { ArrowRight } from 'lucide-react';
import { useState } from "react";
import { motion, Variants } from "framer-motion";

export default function WhyChooseUs() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const whyChoose = [
    {
      title: "Focused manufacturing expertise in drilling tools",
      description: "Specialized knowledge and precision in every component"
    },
    {
      title: "Use of premium quality materials and components",
      description: "Only the finest materials for maximum durability"
    },
    {
      title: "Field-tested designs proven in industrial applications",
      description: "Real-world validation ensures reliability"
    },
    {
      title: "Comprehensive product range for diverse needs",
      description: "Complete solutions for all drilling requirements"
    },
    {
      title: "Capabilities for custom and bulk supply solutions",
      description: "Flexible manufacturing to meet your specifications"
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
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section 
      className="py-24 bg-white border-t border-gray-200 relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, #000 1px, transparent 1px),
                           linear-gradient(to bottom, #000 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Floating shapes */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-30 animate-float" />
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-gray-100 rounded-full blur-3xl opacity-40 animate-float-delayed" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        <motion.div 
          className="mb-16 max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="text-sm uppercase tracking-widest text-accent font-semibold mb-3">
            Our Strengths
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-graphite tracking-tight mb-4">
            Why Choose Spenta Engineers
          </h2>
          <div className="h-1 w-24 bg-accent rounded-full mb-6" />
          <p className="text-lg text-gray-600 leading-relaxed">
            Our approach combines engineering expertise, controlled manufacturing,
            and a strong focus on reliability to support demanding drilling operations.
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
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
              className={`group relative bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border-2 transition-all duration-500 ${
                hoveredIndex === index 
                  ? 'border-accent shadow-2xl scale-[1.02] -translate-y-1' 
                  : 'border-gray-200 shadow-md hover:border-blue-300'
              }`}
            >
              {/* Animated background effect */}
              <div className={`absolute inset-0 bg-blue-50 rounded-2xl transition-opacity duration-500 ${
                hoveredIndex === index ? 'opacity-100' : 'opacity-0'
              }`} />

              {/* Content */}
              <div className="relative flex items-start gap-6">
                {/* Icon */}
                <div className={`flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-accent to-blue-700 flex items-center justify-center shadow-lg transition-all duration-500 ${
                  hoveredIndex === index ? 'scale-110 rotate-6' : 'scale-100 rotate-0'
                }`}>
                  <span className="text-2xl font-bold text-white">{index + 1}</span>
                </div>

                {/* Text */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-graphite mb-3 leading-tight group-hover:text-accent transition-colors">
                    {point.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>

              {/* Corner accent */}
              <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-accent/10 to-transparent rounded-bl-full transition-opacity duration-500 ${
                hoveredIndex === index ? 'opacity-100' : 'opacity-0'
              }`} />

              {/* Bottom line indicator */}
              <div className={`absolute bottom-0 left-0 h-1 bg-accent rounded-full transition-all duration-500 ${
                hoveredIndex === index ? 'w-full' : 'w-0'
              }`} />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="inline-block p-8 bg-gradient-to-r from-graphite to-blue-900 rounded-2xl shadow-2xl">
            <p className="text-white text-lg mb-4">
              Ready to experience the Spenta Engineers difference?
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-white hover:bg-blue-50 text-graphite px-8 py-4 rounded-full font-bold transition-all hover:scale-105 shadow-lg group"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" strokeWidth={2} />
            </a>
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