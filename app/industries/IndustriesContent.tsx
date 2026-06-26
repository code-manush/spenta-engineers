"use client";

import { Wrench, Search, Map, Building2, ArrowRight } from 'lucide-react';
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { motion, Variants } from "motion/react";

export default function IndustriesContent() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative pt-20 pb-16 lg:pt-28 lg:pb-24 bg-[#020617] text-white overflow-hidden">
        {/* Topographic Map Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <svg width="100%" height="100%" viewBox="0 0 1000 600" preserveAspectRatio="none" className="absolute inset-0 opacity-40">
            <motion.g
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
            >
              {/* Layer 1 (Deep) */}
              <motion.path 
                d="M -100 150 Q 200 50 500 200 T 1100 150"
                stroke="#1e3a8a" strokeWidth="1" fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 4, ease: "easeInOut" }}
              />
              {/* Layer 2 */}
              <motion.path 
                d="M -100 200 Q 250 80 550 250 T 1100 200"
                stroke="#1e40af" strokeWidth="1" fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 4.5, delay: 0.2, ease: "easeInOut" }}
              />
              {/* Layer 3 */}
              <motion.path 
                d="M -100 250 Q 300 120 600 300 T 1100 250"
                stroke="#2563eb" strokeWidth="1" fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 5, delay: 0.4, ease: "easeInOut" }}
              />
              {/* Layer 4 */}
              <motion.path 
                d="M -100 300 Q 350 160 650 350 T 1100 300"
                stroke="#3b82f6" strokeWidth="1.5" fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 5.5, delay: 0.6, ease: "easeInOut" }}
              />
              {/* Layer 5 (Surface) */}
              <motion.path 
                d="M -100 350 Q 400 200 700 400 T 1100 350"
                stroke="#60a5fa" strokeWidth="2" fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 6, delay: 0.8, ease: "easeInOut" }}
              />
            </motion.g>
          </svg>
          {/* Gradient Overlay to blend it nicely */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_transparent_0%,_#020617_80%)]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-blue-500" />
              <p className="uppercase tracking-widest text-blue-400 font-bold text-sm">
                Applications
              </p>
            </motion.div>
            <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-black mb-8 leading-tight tracking-tight">
              INDUSTRIES WE SERVE
            </motion.h1>
            <motion.p variants={itemVariants} className="text-xl md:text-2xl max-w-3xl text-gray-400 leading-relaxed">
              Spenta Engineers supports a wide range of industries with reliable
              drilling tools engineered for performance, durability, and
              operational efficiency in demanding environments.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Breadcrumbs */}
      <section className="bg-white border-b border-gray-100 py-4">
        <div className="max-w-7xl mx-auto px-6">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Industries", href: "/industries" },
            ]}
          />
        </div>
      </section>

      {/* Overview */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="max-w-4xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-blue-600" />
              <span className="text-sm uppercase tracking-widest text-blue-600 font-bold">
                Our Expertise
              </span>
            </motion.div>
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-black text-black mb-8 tracking-tight">
              APPLICATION-FOCUSED ENGINEERING
            </motion.h2>

            <motion.p variants={itemVariants} className="text-lg text-gray-600 leading-relaxed mb-6">
              Different industries present different drilling challenges —
              from hard rock formations to fractured ground conditions and
              varying depth requirements.
            </motion.p>

            <motion.p variants={itemVariants} className="text-lg text-gray-600 leading-relaxed">
              Our product range is designed with application-specific
              requirements in mind, ensuring compatibility, reliability, and
              consistent field performance across diverse projects.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-24 bg-gray-50 border-y border-gray-200 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-200/40 rounded-full blur-3xl animate-float pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
          >

            {[
              {
                title: "Mining",
                image: "/mining.jpg",
                description: "Reliable drilling tools designed to withstand high loads, abrasive formations, and continuous operations in mining environments.",
                icon: Wrench
              },
              {
                title: "Mineral Exploration",
                image: "/exploration.jpg",
                description: "Precision tools for accurate core recovery, geological logging, and exploration drilling across varied terrains.",
                icon: Search
              },
              {
                title: "Geotechnical Drilling",
                image: "/geotechnical.jpg",
                description: "Tools engineered for soil investigation, foundation analysis, and subsurface assessment in infrastructure projects.",
                icon: Map
              },
              {
                title: "Infrastructure & Construction",
                image: "/infrastructure.jpg",
                description: "Drilling equipment supporting foundation work, site investigations, and construction-related drilling applications.",
                icon: Building2
              }
            ].map((industry, index) => {
              const Icon = industry.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group relative bg-white rounded-[3rem] overflow-hidden shadow-xl border border-gray-100 transition-all duration-500 hover:shadow-2xl"
                >
                  <div className="relative h-[400px] overflow-hidden">
                    <Image
                      src={industry.image}
                      alt={industry.title}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/60 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-95" />

                    {/* Massive Watermark */}
                    <div className="absolute -top-10 -right-10 text-[180px] font-black text-white/[0.03] pointer-events-none select-none transition-all duration-700 group-hover:text-blue-500/[0.05] group-hover:-translate-x-4">
                      0{index + 1}
                    </div>

                    {/* Icon badge */}
                    <div className="absolute top-8 left-8 w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-lg border border-white/10">
                      <Icon className="w-8 h-8" strokeWidth={1.5} />
                    </div>

                    {/* Content overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-10">
                      <h3 className="text-3xl font-black text-white mb-4 tracking-tight group-hover:text-blue-400 transition-colors duration-300">
                        {industry.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed text-lg">
                        {industry.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}

          </motion.div>
        </div>
      </section>

      {/* Product Link */}
      <section className="py-24 bg-white text-center border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-black text-black mb-6 tracking-tight">
              DESIGNED FOR REAL-WORLD APPLICATIONS
            </motion.h2>
            <motion.p variants={itemVariants} className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Explore our product range to find drilling tools suited to your
              industry requirements.
            </motion.p>
            <motion.div variants={itemVariants}>
              <Link
                href="/products/core-trays"
                className="inline-flex items-center gap-3 bg-blue-600 text-white hover:bg-blue-500 px-10 py-5 rounded-full font-bold text-lg transition-all hover:scale-105 shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] group"
              >
                View Products
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" strokeWidth={2.5} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gray-950 text-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-black text-white/[0.02] pointer-events-none select-none tracking-tighter w-full text-center">
          GUIDANCE
        </div>
        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            <motion.h3 variants={itemVariants} className="text-4xl md:text-5xl font-black mb-6 tracking-tight">
              UNSURE WHICH PRODUCTS SUIT YOUR INDUSTRY?
            </motion.h3>
            <motion.p variants={itemVariants} className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
              Contact our team to discuss your application and receive guidance
              on the right drilling solutions.
            </motion.p>
            <motion.div variants={itemVariants}>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 bg-white text-black hover:bg-gray-100 px-10 py-5 rounded-full font-bold text-lg transition-all hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] group"
              >
                Contact Us
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" strokeWidth={2.5} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

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
    </div>
  );
}
