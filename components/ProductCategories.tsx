"use client";

import { ArrowRight } from 'lucide-react';
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "motion/react";

export default function ProductCategories() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const productCategories = [
    {
      name: "Plastic Core Trays & Boxes",
      description: "Durable plastic solutions for core sample storage and transport.",
      image: "/products/12.png",
      link: "/products/core-trays",
    },
    {
      name: "Core Drilling System & Accessories",
      description: "High-performance drilling systems and essential accessories for core sampling.",
      image: "/products/14.png",
      link: "/products/core-drilling-system",
    },
    {
      name: "Diamond & Tungsten Carbide Tools",
      description: "Advanced cutting tools for mineral exploration and mining.",
      image: "/products/11.png",
      link: "/products/diamond-tungsten-tools",
    },
    {
      name: "Drill Rigs",
      description: "Robust and reliable drill rigs designed for mineral exploration.",
      image: "/products/10.png",
      link: "/products/drill-rigs",
    },
    {
      name: "Dosing Skid System",
      description: "Turnkey chemical injection skids for water treatment, oil & gas, and chemical industries.",
      image: "/dosing-skid.png",
      link: "/products/dosing-skid-system",
    }
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50, damping: 15 } }
  };

  return (
    <section className="py-24 bg-gray-100 relative overflow-hidden text-gray-900 border-t border-gray-200">
      {/* Interactive Global Map Background (Stylized SVG Dotted Map) - Light map */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.03]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dot-pattern-light-prod" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle fill="black" cx="2" cy="2" r="2"></circle>
            </pattern>
          </defs>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#dot-pattern-light-prod)"></rect>
        </svg>
      </div>

      {/* Animated floating blue/purple background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl animate-float-delayed" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Animated header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20 space-y-4"
        >
          <div className="inline-block">
            <p className="text-sm uppercase tracking-widest text-blue-600 font-bold mb-3 flex items-center justify-center gap-2">
              <span className="w-8 h-px bg-blue-600"></span>
              Our Solutions
              <span className="w-8 h-px bg-blue-600"></span>
            </p>
            <h2 className="text-5xl md:text-6xl font-black text-black tracking-tight">
              PRODUCT CATEGORIES
            </h2>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive drilling solutions engineered for precision and reliability
          </p>
        </motion.div>

        {/* Bento grid layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {productCategories.map((category, index) => (
            <motion.div
              variants={itemVariants}
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl 
                transition-all duration-500 overflow-hidden border border-gray-100
                ${index === 0 ? 'md:col-span-2 lg:col-span-1' : ''}
                ${hoveredIndex === index ? 'scale-105 -translate-y-2' : 'scale-100'}`}
            >
              {/* Animated blue gradient border on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`} />

              {/* Card content */}
              <div className="relative p-8 h-full flex flex-col">

                {/* Number badge & Title row */}
                <div className="flex items-start gap-4 mb-6">
                  <div className={`w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100
                    flex items-center justify-center shadow-sm shrink-0
                    transform group-hover:scale-110 group-hover:bg-blue-600 transition-all duration-500`}>
                    <span className="text-2xl text-blue-600 font-bold group-hover:text-white transition-colors duration-500">{index + 1}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 leading-tight group-hover:text-blue-600 transition-colors duration-300">
                    {category.name}
                  </h3>
                </div>

                {/* Image with zoom effect */}
                <div className="relative h-56 mb-6 rounded-2xl overflow-hidden bg-gray-50 border border-gray-100">
                  <Image
                    src={category.image}
                    alt={category.name}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Text content */}
                <div className="space-y-4 flex-grow flex flex-col justify-between">
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {category.description}
                  </p>

                  {/* Animated link */}
                  <Link
                    href={category.link}
                    className="inline-flex items-center text-blue-600 font-semibold group/link hover:text-blue-800 transition-colors mt-auto pt-4"
                  >
                    <span className="relative">
                      Explore Products
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover/link:w-full transition-all duration-300" />
                    </span>
                    <ArrowRight className="ml-2 w-5 h-5 transform group-hover/link:translate-x-1 transition-transform duration-300" strokeWidth={2} />
                  </Link>
                </div>
              </div>
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