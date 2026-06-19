"use client";

import { Zap, ChevronRight, ArrowRight } from 'lucide-react';
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
      description: "Advanced drilling solutions for mining operations worldwide"
    },
    { 
      title: "Mineral Exploration", 
      image: "/exploration.jpg",
      description: "Precision tools for geological exploration and sampling"
    },
    { 
      title: "Geotechnical Drilling", 
      image: "/geotechnical.jpg",
      description: "Reliable equipment for soil and foundation analysis"
    },
    { 
      title: "Infrastructure & Construction", 
      image: "/infrastructure.jpg",
      description: "Heavy-duty tools for large-scale construction projects"
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
      className="py-24 bg-gradient-to-br from-gray-50 to-gray-100 border-t border-gray-200 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gray-500 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        <motion.div 
          className="mb-16 max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="text-sm uppercase tracking-widest text-accent mb-3 font-semibold">
            Applications
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-graphite mb-4">
            Industries We Serve
          </h2>
          <div className="h-1 w-24 bg-accent rounded-full mb-6" />
          <p className="text-lg text-gray-600">
            Our drilling tools are trusted across a wide range of industrial and
            exploration applications.
          </p>
        </motion.div>

        {/* Industries grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          {industries.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
              className={`group relative h-80 overflow-hidden rounded-2xl border-2 transition-all duration-700 cursor-pointer ${
                activeIndex === index 
                  ? 'border-accent shadow-2xl scale-105' 
                  : 'border-gray-200 shadow-lg hover:border-blue-400'
              }`}
            >
              {/* Image */}
              <Image
                src={item.image}
                alt={item.title}
                fill
                className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 ${
                  activeIndex === index ? 'scale-110' : 'scale-100'
                }`}
              />
              
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t transition-opacity duration-500 ${
                activeIndex === index 
                  ? 'from-blue-900/90 via-blue-900/70 to-transparent' 
                  : 'from-black/80 via-black/50 to-transparent'
              }`} />

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-end p-6">
                {/* Icon badge */}
                <div className={`absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center transition-all duration-500 ${
                  activeIndex === index ? 'scale-110 rotate-12' : 'scale-100 rotate-0'
                }`}>
                  <Zap className="w-6 h-6 text-white" strokeWidth={2} />
                </div>

                {/* Title */}
                <h3 className={`text-2xl font-bold text-white mb-3 transition-all duration-500 ${
                  activeIndex === index ? 'translate-y-0' : 'translate-y-2'
                }`}>
                  {item.title}
                </h3>

                {/* Description - shows on hover */}
                <p className={`text-white/90 text-sm leading-relaxed transition-all duration-500 ${
                  activeIndex === index 
                    ? 'opacity-100 translate-y-0 max-h-20' 
                    : 'opacity-0 translate-y-4 max-h-0'
                }`}>
                  {item.description}
                </p>

                {/* Arrow indicator */}
                <div className={`absolute bottom-6 right-6 w-10 h-10 rounded-full bg-white flex items-center justify-center transition-all duration-500 ${
                  activeIndex === index 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 translate-x-4'
                }`}>
                  <ChevronRight className="w-5 h-5 text-graphite" strokeWidth={2} />
                </div>

                {/* Bottom accent line */}
                <div className={`absolute bottom-0 left-0 h-1 bg-blue-500 transition-all duration-500 ${
                  activeIndex === index ? 'w-full' : 'w-0'
                }`} />
              </div>

              {/* Number indicator */}
              <div className={`absolute top-6 left-6 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white font-bold text-lg transition-all duration-500 ${
                activeIndex === index ? 'bg-accent border-blue-400' : ''
              }`}>
                {index + 1}
              </div>
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
          <div className="inline-flex flex-col sm:flex-row gap-4 items-center bg-white p-8 rounded-2xl shadow-xl border border-gray-200">
            <div className="text-left">
              <h3 className="text-xl font-bold text-graphite mb-2">
                Need industry-specific solutions?
              </h3>
              <p className="text-gray-600">
                Explore our complete product range tailored for your industry
              </p>
            </div>
            <Link
              href="/industries"
              className="flex-shrink-0 inline-flex items-center gap-2 bg-accent hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold transition-all hover:scale-105 shadow-lg group"
            >
              View All Industries
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" strokeWidth={2} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}