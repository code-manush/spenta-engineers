"use client";

import { ArrowRight, Target, Zap, Handshake, Globe } from 'lucide-react';
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView, Variants, AnimatePresence } from "framer-motion";

export default function AboutSection() {
  const [counters, setCounters] = useState({ years: 0, clients: 0, products: 0 });
  const [activeIdx, setActiveIdx] = useState(0);
  const statsRef = useRef<HTMLDivElement>(null);
  const isStatsInView = useInView(statsRef, { once: true, amount: 0.2 });

  useEffect(() => {
    if (isStatsInView) {
      const duration = 2000;
      const steps = 60;
      const interval = duration / steps;

      const targets = { years: 20, clients: 100, products: 150 };
      let step = 0;

      const timer = setInterval(() => {
        step++;
        const progress = step / steps;

        setCounters({
          years: Math.floor(targets.years * progress),
          clients: Math.floor(targets.clients * progress),
          products: Math.floor(targets.products * progress)
        });

        if (step >= steps) clearInterval(timer);
      }, interval);

      return () => clearInterval(timer);
    }
  }, [isStatsInView]);

  const storyItems = [
    {
      title: "Our Heritage",
      text: "Spenta Engineers specializes in manufacturing high-quality drilling tools and equipment for industrial applications. With years of expertise, we provide comprehensive support from design to delivery.",
      badge: "Manufacturing Excellence",
      image: "/about.jpg"
    },
    {
      title: "Precision Manufacturing",
      text: "Our focus on precision engineering ensures reliable performance in demanding environments. We utilize state-of-the-art machinery to create tools that withstand the toughest conditions.",
      badge: "Advanced Machinery",
      image: "/about.jpg"
    },
    {
      title: "Quality Control",
      text: "Associated with Finerock Industries, we deliver solutions trusted by professionals in mineral exploration. Every tool undergoes rigorous testing to ensure it meets our strict quality standards.",
      badge: "Rigorous Testing",
      image: "/about.jpg"
    }
  ];

  // Auto-advance tabs
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % storyItems.length);
    }, 6000); // 6 seconds per slide
    return () => clearInterval(timer);
  }, [storyItems.length]);

  const features = [
    {
      icon: <Target className="w-10 h-10 text-blue-400" strokeWidth={1.5} />,
      title: "Precision Engineering",
      description: "Manufacturing high-quality drilling tools with meticulous attention to detail"
    },
    {
      icon: <Zap className="w-10 h-10 text-blue-400" strokeWidth={1.5} />,
      title: "Reliable Performance",
      description: "Quality control ensures consistent performance in demanding environments"
    },
    {
      icon: <Handshake className="w-10 h-10 text-blue-400" strokeWidth={1.5} />,
      title: "Industry Partnership",
      description: "Associated with Finerock Industries for comprehensive drilling solutions"
    },
    {
      icon: <Globe className="w-10 h-10 text-blue-400" strokeWidth={1.5} />,
      title: "Global Reach",
      description: "Years of expertise serving professionals in mineral exploration and mining"
    }
  ];

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
    <section className="py-24 bg-white relative overflow-hidden text-gray-900">
      {/* Interactive Global Map Background (Stylized SVG Dotted Map) - Reverted to light map */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.03]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dot-pattern-light" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle fill="black" cx="2" cy="2" r="2"></circle>
            </pattern>
          </defs>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#dot-pattern-light)"></rect>
        </svg>
      </div>

      {/* Restored Animated floating blue/purple background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl animate-float-delayed" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        <motion.div
          className="mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={itemVariants}
        >
          <div className="inline-block">
            <p className="text-sm uppercase tracking-widest text-blue-600 font-bold mb-3 flex items-center gap-2">
              <span className="w-8 h-px bg-blue-600"></span>
              About Us
            </p>
            <h2 className="text-5xl md:text-6xl font-black text-black tracking-tight">
              SPENTA ENGINEERS
            </h2>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">

          {/* Vertical Interactive Story List */}
          <motion.div
            className="space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            <div className="flex flex-col gap-6">
              {storyItems.map((item, idx) => {
                const isActive = activeIdx === idx;
                return (
                  <div
                    key={idx}
                    onClick={() => setActiveIdx(idx)}
                    className={`relative pl-8 cursor-pointer transition-all duration-500 ${isActive ? 'opacity-100' : 'opacity-50 hover:opacity-80'
                      }`}
                  >
                    {/* Animated Progress Line - Restored Blue Accent */}
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gray-200 rounded-full overflow-hidden">
                      {isActive && (
                        <motion.div
                          initial={{ height: "0%" }}
                          animate={{ height: "100%" }}
                          transition={{ duration: 6, ease: "linear" }}
                          className="w-full bg-blue-600"
                        />
                      )}
                    </div>

                    <h3 className={`text-2xl font-bold mb-3 transition-colors duration-300 ${isActive ? 'text-black' : 'text-gray-500'}`}>
                      {item.title}
                    </h3>

                    {/* Collapsible Text */}
                    <motion.div
                      initial={false}
                      animate={{ height: isActive ? "auto" : 0, opacity: isActive ? 1 : 0 }}
                      className="overflow-hidden"
                    >
                      <p className="text-gray-600 leading-relaxed text-lg pb-4">
                        {item.text}
                      </p>
                    </motion.div>
                  </div>
                );
              })}
            </div>

            {/* Founder's Quote & Signature */}
            <motion.div
              variants={itemVariants}
              className="mt-12 pt-12 border-t border-gray-200"
            >
              <p className="text-xl italic text-gray-800 font-serif leading-relaxed">
                &quot;Our commitment to precision is not just a standard, it&apos;s our signature.&quot;
              </p>
              <div className="mt-6 font-serif italic text-3xl font-bold text-black">
                Spenta Engineers
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div variants={itemVariants} className="pt-8">
              <Link
                href="/about"
                className="inline-flex items-center gap-3 bg-black text-white hover:bg-gray-800 px-8 py-4 rounded-full font-semibold shadow-xl transform hover:-translate-y-1 transition-all duration-300 group"
              >
                Discover Our Story
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" strokeWidth={2} />
              </Link>
            </motion.div>
          </motion.div>

          {/* Static Image */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={itemVariants}
            className="relative lg:ml-auto w-full h-[400px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl"
          >
            <div className="absolute inset-0">
              <Image
                src="/about.jpg"
                alt="Spenta Engineers Manufacturing Facility"
                fill
                className="object-cover"
              />

              {/* Sleek Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90" />

              {/* Glassmorphism Badge */}
              <div className="absolute bottom-8 left-8 right-8">
                <div className="inline-flex items-center gap-3 bg-black/60 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/20 text-white shadow-xl">
                  <div className="w-2.5 h-2.5 bg-blue-400 rounded-full animate-pulse shadow-[0_0_10px_rgba(96,165,250,0.8)]" />
                  <span className="font-medium tracking-wide">
                    Manufacturing Excellence
                  </span>
                </div>
              </div>
            </div>

            {/* Accent Corner Brackets */}
            <div className="absolute top-6 left-6 w-8 h-8 border-t-2 border-l-2 border-white/60 rounded-tl-lg pointer-events-none" />
            <div className="absolute bottom-6 right-6 w-8 h-8 border-b-2 border-r-2 border-white/60 rounded-br-lg pointer-events-none" />
          </motion.div>
        </div>

        {/* Stats counters with Blue Accents */}
        <motion.div
          ref={statsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {[
            { value: counters.years, max: 20, label: "Years Experience", suffix: "+" },
            { value: counters.clients, max: 100, label: "Quality Assurance", suffix: "%" },
            { value: counters.products, max: 150, label: "Products Delivered", suffix: "k+" }
          ].map((stat, index) => {
            const radius = 60;
            const circumference = 2 * Math.PI * radius;
            const strokeDashoffset = circumference - (stat.value / stat.max) * circumference;

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative group py-12 px-8 bg-white rounded-3xl border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col items-center justify-center overflow-hidden"
              >
                {/* Background SVG Ring */}
                <div className="absolute inset-0 flex items-center justify-center opacity-5 group-hover:opacity-10 transition-opacity">
                  <svg className="w-48 h-48 -rotate-90">
                    <circle
                      cx="96" cy="96" r={radius}
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="transparent"
                      className="text-gray-300"
                    />
                    <motion.circle
                      cx="96" cy="96" r={radius}
                      stroke="currentColor"
                      strokeWidth="6"
                      fill="transparent"
                      className="text-blue-600"
                      strokeDasharray={circumference}
                      strokeDashoffset={strokeDashoffset}
                      transition={{ duration: 2, ease: "easeOut" }}
                    />
                  </svg>
                </div>

                <div className="relative z-10 text-center">
                  <div className="text-5xl font-black text-black mb-3">
                    {stat.value}<span className="text-blue-600">{stat.suffix}</span>
                  </div>
                  <div className="text-gray-500 font-bold tracking-widest text-xs uppercase">{stat.label}</div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Feature Text Blocks - Minimalist with Watermarks */}
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
              className="group relative p-8 rounded-3xl bg-gray-100 transition-colors duration-500 hover:bg-gray-200/80 overflow-hidden"
            >
              {/* Massive Watermark Number in the Background */}
              <div className="absolute -top-4 -right-4 text-[80px] md:text-[120px] font-black text-gray-200/60 group-hover:text-blue-100/60 transition-colors duration-500 select-none pointer-events-none z-0">
                0{index + 1}
              </div>

              <div className="relative z-10">
                <div className="mb-6 transform group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-500 origin-left inline-block">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-black mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {feature.description}
                </p>
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