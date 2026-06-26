"use client";

import { motion } from "motion/react";

export default function CatalogueHero() {
  return (
    <section className="relative pt-20 pb-16 lg:pt-28 lg:pb-24 bg-[#020617] text-white overflow-hidden">
      {/* Background Deep Grid */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Floating Glassmorphic Cards */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 2, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-20 w-64 h-32 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-2xl flex flex-col justify-center transform rotate-12"
        >
          <div className="w-10 h-1 bg-blue-500/50 mb-3 rounded-full" />
          <div className="text-xl font-bold text-white/80">Drill Rods</div>
          <div className="text-sm text-gray-400 mt-1">NW, HW, PW Sizes</div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 30, 0], rotate: [0, -3, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-20 right-[20%] w-72 h-36 bg-blue-900/20 backdrop-blur-md border border-blue-500/20 rounded-2xl p-6 shadow-2xl flex flex-col justify-center transform -rotate-6"
        >
          <div className="w-12 h-1 bg-purple-500/50 mb-3 rounded-full" />
          <div className="text-xl font-bold text-white/90">Core Barrels</div>
          <div className="text-sm text-gray-400 mt-1">Wireline Systems</div>
        </motion.div>

        <motion.div
          animate={{ y: [0, -25, 0], x: [0, 10, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-40 left-[10%] w-56 h-28 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-2xl flex flex-col justify-center transform -rotate-12 opacity-50"
        >
          <div className="w-8 h-1 bg-gray-500/50 mb-3 rounded-full" />
          <div className="text-lg font-bold text-white/70">Diamond Tools</div>
        </motion.div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 z-10 text-left pt-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-blue-500" />
            <p className="uppercase tracking-widest text-blue-400 font-bold text-sm">
              Catalogue
            </p>
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight tracking-tight">
            PRODUCT<br />CATALOGUE
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl leading-relaxed">
            Access the complete range of Spenta Engineers drilling tools and
            accessories in a single, detailed product catalogue.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
