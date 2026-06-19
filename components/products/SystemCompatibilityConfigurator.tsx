"use client";

import { ArrowRight, ChevronRight, Zap } from 'lucide-react';
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, Variants } from "framer-motion";

const SIZES = ["AQ", "BQ", "NQ", "HQ", "PQ"];

const COMPONENTS = [
  {
    name: "Drill Rods",
    desc: "Transmit torque and feed force from the drilling rig to the downhole assembly",
    baseLink: "/products/core-drilling-system/drill-rods",
  },
  {
    name: "Core Barrels",
    desc: "Cut and retain continuous core samples during drilling operations",
    baseLink: "/products/core-drilling-system/core-barrels",
  },
  {
    name: "Head Assembly",
    desc: "Connects drill rods to the core barrel and enables wireline operations",
    baseLink: "/products/core-drilling-system/head-assembly",
  },
  {
    name: "Overshot",
    desc: "Retrieves the inner tube assembly during wireline core drilling",
    baseLink: "/products/core-drilling-system/overshot",
  },
  {
    name: "Locking Coupling",
    desc: "Secures internal drilling assemblies and prevents disengagement",
    baseLink: "/products/core-drilling-system/locking-coupling",
  },
  {
    name: "Adapter Coupling",
    desc: "Provides compatibility between different component sizes or standards",
    baseLink: "/products/core-drilling-system/adapter-coupling",
  },
];

export default function SystemCompatibilityConfigurator() {
  const [activeSize, setActiveSize] = useState<string>("NQ"); // Default to NQ (most common)

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
    hidden: { opacity: 0, scale: 0.95, y: 10 },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  return (
    <div className="relative mb-20">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-30 -z-10" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gray-100 rounded-full blur-3xl opacity-40 -z-10" />

      <div className="flex items-center gap-3 mb-6">
        <div className="h-px w-8 bg-gradient-to-r from-accent to-blue-400" />
        <span className="text-sm uppercase tracking-widest text-accent font-semibold">
          Configurator
        </span>
      </div>
      <h2 className="text-4xl font-bold text-graphite mb-4">
        System Compatibility
      </h2>
      <p className="text-lg text-gray-600 mb-10 max-w-3xl">
        Select a drilling size to view compatible system components and generate a tailored quote.
      </p>

      {/* Size Selector Tabs */}
      <div className="flex flex-wrap items-center gap-4 mb-12">
        <span className="font-semibold text-gray-700 mr-2">Drilling Size:</span>
        <div className="flex bg-gray-100 p-1 rounded-full shadow-inner border border-gray-200">
          {SIZES.map((size) => (
            <button
              key={size}
              onClick={() => setActiveSize(size)}
              className={`relative px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 ${
                activeSize === size
                  ? "text-white shadow-md"
                  : "text-gray-500 hover:text-graphite hover:bg-gray-200/50"
              }`}
            >
              {activeSize === size && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-accent rounded-full"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10">{size}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Components */}
      {/* AnimatePresence allows re-mounting/animating when size changes to highlight the refresh */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSize}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={containerVariants}
        >
          {COMPONENTS.map((item, idx) => (
            <motion.div key={idx} variants={itemVariants}>
              <Link
                href={`${item.baseLink}?size=${activeSize}`}
                className="group block relative bg-white border border-gray-200 p-8 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 h-full rounded-sm"
              >
                {/* Gradient accent on hover */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between mb-6">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <ArrowRight className="w-6 h-6 text-accent" strokeWidth={2} />
                      </div>
                      <span className="inline-flex items-center justify-center bg-blue-50 text-accent text-xs font-bold px-3 py-1 rounded-full border border-blue-100">
                        {activeSize} Compatible
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-graphite mb-3 group-hover:text-accent transition-colors duration-300">
                      {item.name}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {item.desc}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-sm font-semibold text-accent opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-2">
                    <span>View {activeSize} Details</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Request Quote Button */}
      <motion.div 
        className="bg-graphite text-white rounded-sm p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
            <Zap className="w-6 h-6 text-white" strokeWidth={2} />
          </div>
          <div>
            <h4 className="text-xl font-bold mb-1">Ready to Order a Complete {activeSize} System?</h4>
            <p className="text-gray-400">Get a custom quote for the entire {activeSize} drilling assembly.</p>
          </div>
        </div>
        
        <Link
          href={`/contact?product=Core+Drilling+System&size=${activeSize}`}
          className="flex-shrink-0 inline-flex items-center gap-2 bg-accent hover:bg-blue-600 text-white px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-blue-500/30 transition-all hover:-translate-y-1 group"
        >
          Request Quote for {activeSize} System
          <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" strokeWidth={2} />
        </Link>
      </motion.div>
    </div>
  );
}
