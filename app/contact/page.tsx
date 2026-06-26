"use client";

import { Loader2, ArrowRight, Mail, Phone, MapPin, Clock, CheckCircle2, AlertCircle, FileDown } from 'lucide-react';
import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { sendContactForm } from "./action";
import Breadcrumbs from "@/components/Breadcrumbs";
import { motion, Variants } from "motion/react";
import Link from "next/link";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className={`w-full py-5 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-3
        ${pending
          ? "bg-gray-400 cursor-not-allowed text-white"
          : "bg-blue-600 text-white hover:bg-blue-500 hover:scale-[1.02] shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)]"}
      `}
    >
      {pending ? (
        <>
          <Loader2 className="animate-spin h-5 w-5" strokeWidth={3} />
          <span>Sending...</span>
        </>
      ) : (
        <>
          <span>Submit Enquiry</span>
          <ArrowRight className="w-5 h-5" strokeWidth={2.5} />
        </>
      )}
    </button>
  );
}

export default function ContactPage() {
  const initialState = { success: false, error: null };
  const [state, formAction] = useActionState(sendContactForm, initialState);

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
      {/* HERO (Traditional Banner) */}
      <section className="relative pt-20 pb-20 lg:pt-28 lg:pb-32 bg-[#020617] text-white overflow-hidden text-center flex flex-col items-center justify-center">
        {/* Abstract Network Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
          <svg width="100%" height="100%" className="absolute inset-0">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="20" cy="20" r="1.5" fill="#3b82f6" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
            
            {/* Animated Connection Lines */}
            <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }}>
              <motion.path 
                d="M 100 100 L 300 250 L 150 400"
                stroke="#60a5fa" strokeWidth="1" fill="none"
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
              />
              <motion.path 
                d="M 600 50 L 400 300 L 700 500"
                stroke="#3b82f6" strokeWidth="1" fill="none" strokeDasharray="4 4"
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
              />
            </motion.g>
          </svg>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_#020617_80%)]" />
        </div>

        <div className="relative max-w-4xl mx-auto px-6 z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="flex flex-col items-center"
          >
            <motion.div variants={itemVariants} className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-12 bg-blue-500" />
              <p className="uppercase tracking-widest text-blue-400 font-bold text-sm">
                Contact Us
              </p>
              <div className="h-px w-12 bg-blue-500" />
            </motion.div>
            <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-black mb-8 leading-tight tracking-tight">
              LET&apos;S DISCUSS YOUR REQUIREMENTS
            </motion.h1>
            <motion.p variants={itemVariants} className="text-xl md:text-2xl text-gray-400 leading-relaxed">
              Reach out to Spenta Engineers to discuss product specifications,
              manufacturing capabilities, or project requirements.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Breadcrumbs */}
      <section className="bg-gray-50 border-b border-gray-200 py-4">
        <div className="max-w-7xl mx-auto px-6">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Contact", href: "/contact" },
            ]}
          />
        </div>
      </section>

      {/* MAIN CONTACT SECTION (Side by Side) */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            
            {/* Left Side: Contact Information */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={containerVariants}
            >
              <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
                <div className="h-px w-8 bg-blue-600" />
                <span className="text-sm uppercase tracking-widest text-blue-600 font-bold">
                  Direct Contact
                </span>
              </motion.div>
              <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-black text-black mb-6 tracking-tight">
                GET IN TOUCH
              </motion.h2>
              <motion.p variants={itemVariants} className="text-lg text-gray-600 leading-relaxed mb-12">
                Our team is available to provide technical details, quotations,
                and guidance on selecting the right drilling solutions for your
                application.
              </motion.p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  {
                    icon: Mail,
                    label: "Email",
                    value: "spentaeng@gmail.com",
                    href: "mailto:spentaeng@gmail.com"
                  },
                  {
                    icon: Phone,
                    label: "Phone",
                    value: "+91-9426753291",
                    href: "tel:+919426753291"
                  },
                  {
                    icon: MapPin,
                    label: "Address",
                    value: "Vadodara-390024, Gujarat, India",
                    href: null
                  },
                  {
                    icon: Clock,
                    label: "Business Hours",
                    value: "Mon – Sat, 9:30 AM – 6:30 PM",
                    href: null
                  }
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <motion.div key={i} variants={itemVariants} className="group p-6 rounded-3xl bg-gray-50 border border-gray-100 hover:border-blue-200 hover:bg-blue-50/50 transition-all duration-500 shadow-sm text-left">
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-blue-600 mb-4 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-sm">
                        <Icon className="w-5 h-5" strokeWidth={2} />
                      </div>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-base font-bold text-black hover:text-blue-600 transition-colors block">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-base font-bold text-black">{item.value}</p>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Right Side: The Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative bg-white p-8 md:p-12 rounded-[3rem] border border-gray-200 shadow-[0_20px_50px_rgba(0,0,0,0.05)]">
                <h3 className="text-3xl font-black text-black mb-8 tracking-tight">
                  SEND A MESSAGE
                </h3>

                <form action={formAction} className="space-y-5">
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      className="w-full p-4 rounded-xl bg-gray-50 border border-gray-200 text-black placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:bg-white transition-colors"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      className="w-full p-4 rounded-xl bg-gray-50 border border-gray-200 text-black placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:bg-white transition-colors"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      name="company"
                      placeholder="Enter your company name"
                      className="w-full p-4 rounded-xl bg-gray-50 border border-gray-200 text-black placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:bg-white transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                      Your Message *
                    </label>
                    <textarea
                      placeholder="Tell us about your requirements..."
                      rows={5}
                      name="message"
                      className="w-full p-4 rounded-xl bg-gray-50 border border-gray-200 text-black placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:bg-white transition-colors resize-none"
                      required
                    />
                  </div>

                  <div className="pt-2">
                    <SubmitButton />
                  </div>

                  {state.success && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-green-50 border border-green-200 rounded-xl mt-4"
                    >
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" strokeWidth={2.5} />
                        <p className="text-green-800 font-bold text-sm">
                          Message sent successfully.
                        </p>
                      </div>
                    </motion.div>
                  )}

                  {state.error && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-red-50 border border-red-200 rounded-xl mt-4"
                    >
                      <div className="flex items-center gap-3">
                        <AlertCircle className="w-5 h-5 text-red-600 shrink-0" strokeWidth={2.5} />
                        <p className="text-red-800 font-bold text-sm">
                          {state.error}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 bg-gray-50 text-center border-t border-gray-200 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-200/40 rounded-full blur-3xl animate-float pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-black text-black mb-6 tracking-tight">
              LOOKING FOR A LONG-TERM PARTNER?
            </motion.h2>
            <motion.p variants={itemVariants} className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Spenta Engineers is committed to reliable supply, consistent quality,
              and strong technical support.
            </motion.p>
            <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4">
              <Link
                href="/catalogue"
                className="inline-flex items-center gap-3 bg-white text-black border border-gray-200 hover:border-blue-600 px-8 py-4 rounded-full font-bold transition-all hover:scale-105 shadow-md hover:shadow-xl group"
              >
                <FileDown className="w-5 h-5 group-hover:text-blue-600 transition-colors" strokeWidth={2.5} />
                <span>Download Catalogue</span>
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center gap-3 bg-black text-white hover:bg-gray-900 px-8 py-4 rounded-full font-bold transition-all hover:scale-105 shadow-xl group"
              >
                <span>View Products</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" strokeWidth={2.5} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}