"use client";

import { Clock, CheckCircle2, ClipboardList, Crosshair, Settings, ShieldCheck, Wrench, ArrowRight } from 'lucide-react';
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { motion, Variants } from "motion/react";

export default function AboutContent() {
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
      <section className="relative pt-20 pb-16 lg:pt-28 lg:pb-24 bg-[#020617] text-white overflow-hidden">
        {/* Blueprint Background */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <svg width="100%" height="100%" className="absolute inset-0 opacity-20">
                        <defs>
                            <pattern id="blueprint-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                                <rect width="40" height="40" fill="none" stroke="#3b82f6" strokeWidth="0.5" strokeDasharray="2 2" />
                            </pattern>
                            <pattern id="blueprint-grid-large" width="160" height="160" patternUnits="userSpaceOnUse">
                                <rect width="160" height="160" fill="none" stroke="#3b82f6" strokeWidth="1" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#blueprint-grid)" />
                        <rect width="100%" height="100%" fill="url(#blueprint-grid-large)" />
                        
                        {/* Animated Schematic Lines */}
                        <motion.g
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                        >
                            <motion.path 
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 3, ease: "easeInOut" }}
                                d="M 160 0 L 160 1000 M 0 240 L 2000 240 M 480 0 L 480 1000" 
                                stroke="#60a5fa" strokeWidth="2" fill="none"
                            />
                            <motion.path 
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 2.5, delay: 0.5, ease: "easeInOut" }}
                                d="M 160 240 L 320 80 L 480 240" 
                                stroke="#93c5fd" strokeWidth="1" fill="none" strokeDasharray="4 4"
                            />
                            <motion.circle 
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.8, delay: 2, ease: "easeOut", type: "spring" }}
                                cx="160" cy="240" r="6" fill="#3b82f6"
                            />
                            <motion.circle 
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 1, delay: 2.2, ease: "easeOut" }}
                                cx="480" cy="240" r="12" fill="none" stroke="#60a5fa" strokeWidth="2" strokeDasharray="2 2"
                            />
                            <motion.circle 
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 1, delay: 2.4, ease: "easeOut" }}
                                cx="480" cy="240" r="4" fill="#60a5fa"
                            />
                        </motion.g>
                    </svg>
                    {/* Gradient Overlay to fade out edges */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#020617_100%)]" />
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
                                About Us
                            </p>
                        </motion.div>
                        <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-black mb-8 leading-tight tracking-tight">
                            ENGINEERING TRUST.<br />MANUFACTURING RELIABILITY.
                        </motion.h1>
                        <motion.p variants={itemVariants} className="text-xl md:text-2xl max-w-3xl text-gray-400 leading-relaxed">
                            Spenta Engineers is a manufacturing-driven company delivering
                            precision drilling tools designed to perform reliably in demanding
                            field conditions.
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
                            { label: "About Us", href: "/about" },
                        ]}
                    />
                </div>
            </section>

            {/* STORY */}
            <section className="py-24 bg-white overflow-hidden relative">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={containerVariants}
                    >
                        <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
                            <div className="h-px w-8 bg-blue-600" />
                            <span className="text-sm uppercase tracking-widest text-blue-600 font-bold">
                                Our Journey
                            </span>
                        </motion.div>
                        <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-black text-black mb-8 tracking-tight">
                            OUR STORY
                        </motion.h2>

                        <motion.div variants={itemVariants} className="space-y-6 text-lg text-gray-600 leading-relaxed">
                            <p>
                                Spenta Engineers was established with a clear focus on
                                manufacturing precision drilling tools that meet the practical
                                demands of mineral exploration, mining, and geotechnical drilling.
                            </p>
                            <p>
                                We believe that dependable performance in the field comes from
                                disciplined engineering, controlled manufacturing processes, and
                                uncompromising quality standards.
                            </p>
                            <p>
                                Our products are built not for catalog appeal, but for real-world
                                drilling environments where reliability matters most.
                            </p>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative group"
                    >
                        <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl" />
                        <div className="relative w-full h-[400px] lg:h-[550px] rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
                            <Image
                                src="/about-hero-highres.png"
                                alt="Manufacturing Facility"
                                fill
                                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent opacity-80" />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* METRICS */}
            <section className="py-24 bg-gray-100 border-y border-gray-200 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-200/40 rounded-full blur-3xl animate-float pointer-events-none" />
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={containerVariants}
                    >
                        {[
                            { value: "10+", label: "Years of Experience", icon: Clock },
                            { value: "500+", label: "Projects Supported", icon: CheckCircle2 },
                            { value: "100%", label: "Quality-Controlled", icon: ClipboardList },
                            { value: "Global", label: "Operational Reach", icon: Crosshair },
                        ].map((item, i) => {
                            const Icon = item.icon;
                            return (
                                <motion.div
                                    key={i}
                                    variants={itemVariants}
                                    className="bg-gray-950 p-8 rounded-3xl border border-black shadow-xl relative overflow-hidden group text-center"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                                    <div className="relative z-10 flex flex-col items-center">
                                        <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 group-hover:text-blue-500 transition-all duration-500 shadow-lg">
                                            <Icon className="w-8 h-8" strokeWidth={1.5} />
                                        </div>
                                        <h3 className="text-4xl md:text-5xl font-black text-white mb-2 tracking-tight">
                                            {item.value}
                                        </h3>
                                        <p className="text-sm font-bold text-gray-400 uppercase tracking-wider">{item.label}</p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </section>

            {/* FOUNDER */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative group order-2 lg:order-1"
                    >
                        <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl" />
                        <div className="relative w-full h-[400px] lg:h-[550px] rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
                            <Image
                                src="/f.png"
                                alt="Founder – Spenta Engineers"
                                fill
                                className="object-cover object-top transition-transform duration-1000 group-hover:scale-105"
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={containerVariants}
                        className="order-1 lg:order-2"
                    >
                        <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
                            <div className="h-px w-8 bg-blue-600" />
                            <p className="uppercase tracking-widest text-blue-600 font-bold text-sm">
                                Leadership
                            </p>
                        </motion.div>
                        <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-black text-black mb-8 tracking-tight">
                            FOUNDER&apos;S MESSAGE
                        </motion.h2>

                        <motion.div variants={itemVariants} className="space-y-6 text-lg text-gray-600 leading-relaxed mb-10">
                            <p className="pl-6 border-l-4 border-blue-600 font-medium italic text-gray-800">
                                &quot;Spenta Engineers was founded with a simple belief — that drilling
                                tools should be engineered with responsibility, precision, and a
                                deep understanding of field realities.
                            </p>
                            <p className="pl-6 border-l-4 border-gray-200 italic">
                                Every product we manufacture reflects our commitment to quality,
                                performance, and long-term partnerships with our clients.&quot;
                            </p>
                        </motion.div>

                        <motion.div variants={itemVariants} className="bg-gray-50 p-8 rounded-3xl border border-gray-100 shadow-sm">
                            <p className="text-2xl font-black text-black mb-1">
                                Mr. Rohitkumar Patel
                            </p>
                            <p className="text-blue-600 font-bold mb-4 uppercase tracking-widest text-sm">
                                Founder & Managing Director
                            </p>
                            <p className="text-gray-500 leading-relaxed">
                                With over 15 years of experience in drilling tools manufacturing and field applications.
                            </p>
                        </motion.div>
                    </motion.div>

                </div>
            </section>

            {/* VALUES */}
            <section className="py-24 bg-gray-950 text-white relative overflow-hidden">
                {/* Giant watermark */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-black text-white/[0.02] pointer-events-none select-none tracking-tighter w-full text-center">
                    VALUES
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={containerVariants}
                    >
                        <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
                            <div className="h-px w-12 bg-blue-500" />
                            <span className="text-sm uppercase tracking-widest text-blue-400 font-bold">
                                What Defines Us
                            </span>
                        </motion.div>
                        <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-black mb-16 tracking-tight">
                            OUR CORE PRINCIPLES
                        </motion.h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "Engineering Discipline",
                                    desc: "Precision-driven manufacturing backed by controlled processes.",
                                    icon: Settings
                                },
                                {
                                    title: "Quality Without Compromise",
                                    desc: "Inspection and verification at every critical stage.",
                                    icon: ShieldCheck
                                },
                                {
                                    title: "Field-Oriented Design",
                                    desc: "Products built for real drilling conditions, not just specifications.",
                                    icon: Wrench
                                },
                            ].map((item, i) => {
                                const Icon = item.icon;
                                return (
                                    <motion.div
                                        key={i}
                                        variants={itemVariants}
                                        className="group relative p-10 bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 hover:bg-white/10 transition-all duration-500 overflow-hidden"
                                    >
                                        <div className="absolute -top-4 -right-4 text-[100px] font-black text-white/[0.03] group-hover:text-blue-400/10 transition-colors duration-500 select-none pointer-events-none z-0">
                                            0{i + 1}
                                        </div>
                                        <div className="relative z-10">
                                            <div className="w-16 h-16 rounded-2xl bg-blue-600/20 text-blue-400 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-500 shadow-lg">
                                                <Icon className="w-8 h-8" strokeWidth={1.5} />
                                            </div>
                                            <h3 className="text-2xl font-bold mb-4">
                                                {item.title}
                                            </h3>
                                            <p className="text-gray-400 leading-relaxed">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-gray-100 text-center border-t border-gray-200">
                <div className="max-w-4xl mx-auto px-6">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={containerVariants}
                    >
                        <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-black text-black mb-6 tracking-tight">
                            BUILD WITH A TRUSTED PARTNER
                        </motion.h2>
                        <motion.p variants={itemVariants} className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
                            Let&apos;s discuss how Spenta Engineers can support your drilling
                            requirements with precision-engineered solutions.
                        </motion.p>
                        <motion.div variants={itemVariants}>
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-3 bg-blue-600 text-white hover:bg-blue-500 px-10 py-5 rounded-full font-bold text-lg transition-all hover:scale-105 shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] group"
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
