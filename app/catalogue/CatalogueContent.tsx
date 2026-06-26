"use client";

import { CheckCircle2, FileDown, Download, FileText, Folder, ClipboardList, Server, ArrowRight } from 'lucide-react';
import Breadcrumbs from "@/components/Breadcrumbs";
import CatalogueHero from "./CatalogueHero";
import { motion, Variants } from "motion/react";
import Link from "next/link";

export default function CatalogueContent() {
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
      {/* HERO */}
      <CatalogueHero />

      {/* Breadcrumbs */}
      <section className="bg-gray-50 border-b border-gray-200 py-4">
        <div className="max-w-7xl mx-auto px-6">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Catalogue", href: "/catalogue" },
            ]}
          />
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-50/50 via-white to-white pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-16 lg:gap-24 items-center relative z-10">
          {/* LEFT: Overview */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-blue-600" />
              <span className="text-sm uppercase tracking-widest text-blue-600 font-bold">
                Complete Overview
              </span>
            </motion.div>
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-black text-black mb-8 tracking-tight">
              COMPLETE PRODUCT OVERVIEW
            </motion.h2>

            <motion.p variants={itemVariants} className="text-lg text-gray-600 leading-relaxed mb-6">
              Our catalogue provides detailed information about our drilling
              tools, specifications, configurations, and supported applications.
            </motion.p>

            <motion.p variants={itemVariants} className="text-lg text-gray-600 leading-relaxed mb-10">
              It is designed to help engineers, procurement teams, and project
              managers quickly evaluate the right tools for their drilling
              requirements.
            </motion.p>

            <div className="space-y-4">
              {[
                "Drill Rods",
                "Core Barrels",
                "Diamond & Tungsten Carbide Tools",
                "Plastic Core Trays & Boxes",
                "Overshots & Drilling Accessories"
              ].map((name, i) => (
                <motion.div key={i} variants={itemVariants} className="flex items-center gap-4 text-lg text-black font-medium group">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-50 border border-blue-100 rounded-full flex items-center justify-center text-blue-600 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">
                    <CheckCircle2 className="w-5 h-5" strokeWidth={2.5} />
                  </div>
                  <span>{name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT - Download Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-br from-blue-600/10 to-purple-600/10 blur-2xl rounded-[3rem]" />
            <div className="relative bg-[#020617] p-10 md:p-14 rounded-[3rem] border border-gray-800 shadow-2xl text-center group overflow-hidden">
              
              {/* Background accent */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-500/20 transition-colors" />
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-24 h-24 bg-blue-600/20 rounded-full mb-8 group-hover:scale-110 transition-transform shadow-[0_0_30px_rgba(37,99,235,0.2)]">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                    <FileDown className="w-8 h-8 text-white" strokeWidth={2.5} />
                  </div>
                </div>

                <h3 className="text-3xl font-black text-white mb-4 tracking-tight">
                  DOWNLOAD CATALOGUE
                </h3>

                <p className="text-gray-400 mb-10 text-lg">
                  Get the complete product catalogue in PDF format.
                </p>

                <a
                  href="/spenta-engineers-catalogue.pdf"
                  target="_blank"
                  className="w-full inline-flex justify-center items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white px-8 py-5 rounded-full font-bold text-lg transition-all hover:scale-[1.02] shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)]"
                >
                  <Download className="w-6 h-6" strokeWidth={2.5} />
                  <span>Download PDF</span>
                </a>

                <div className="mt-8 flex items-center justify-center gap-8 text-sm text-gray-500 font-bold uppercase tracking-wider">
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4" strokeWidth={2.5} />
                    <span>PDF Format</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Folder className="w-4 h-4" strokeWidth={2.5} />
                    <span>~15 MB</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <motion.div variants={itemVariants} className="flex justify-center items-center gap-3 mb-6">
              <div className="h-px w-8 bg-blue-600" />
              <span className="text-sm uppercase tracking-widest text-blue-600 font-bold">
                Inside Look
              </span>
              <div className="h-px w-8 bg-blue-600" />
            </motion.div>
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-black text-black mb-6 tracking-tight">
              WHAT&apos;S INSIDE THE CATALOGUE
            </motion.h2>
            <motion.p variants={itemVariants} className="text-xl text-gray-600">
              Comprehensive product information for informed decision-making
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: ClipboardList,
                title: "Technical Specifications",
                description: "Detailed dimensions, materials, and performance data"
              },
              {
                icon: Server,
                title: "Product Configurations",
                description: "Available sizes, variants, and compatibility information"
              },
              {
                icon: FileText,
                title: "Application Guidelines",
                description: "Recommended use cases and industry applications"
              }
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div key={i} variants={itemVariants} className="bg-white p-10 rounded-[2.5rem] border border-gray-100 hover:border-blue-200 hover:bg-blue-50/50 transition-all duration-500 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-xl group">
                  <div className="w-16 h-16 bg-gray-50 border border-gray-100 rounded-2xl flex items-center justify-center text-blue-600 mb-8 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all shadow-sm">
                    <Icon className="w-8 h-8" strokeWidth={2} />
                  </div>
                  <h3 className="text-2xl font-black text-black mb-4 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#020617] text-center border-t border-gray-800 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
              NEED CUSTOM SPECIFICATIONS OR PRICING?
            </motion.h2>
            <motion.p variants={itemVariants} className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
              Contact our team to receive tailored recommendations based on your
              drilling application.
            </motion.p>
            <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 bg-blue-600 text-white px-10 py-5 rounded-full font-bold text-lg transition-all hover:scale-105 shadow-[0_0_20px_rgba(37,99,235,0.3)] group"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" strokeWidth={2.5} />
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center gap-3 bg-white/10 text-white hover:bg-white/20 border border-white/20 px-10 py-5 rounded-full font-bold text-lg transition-all hover:scale-105 backdrop-blur-sm group"
              >
                <span>Browse Products</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" strokeWidth={2.5} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
