"use client";

import { Loader2, ArrowRight, Mail, Phone, MapPin, Clock, CheckCircle2, AlertCircle, FileDown } from 'lucide-react';
import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { sendContactForm } from "./action";
import Breadcrumbs from "@/components/Breadcrumbs";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className={`w-full py-4 rounded-sm font-bold text-lg transition-all flex items-center justify-center gap-2
        ${pending
          ? "bg-gray-400 cursor-not-allowed"
          : "bg-accent text-white hover:bg-blue-700 hover:scale-[1.02]"}
      `}
    >
      {pending ? (
        <>
          <Loader2 className="animate-spin h-5 w-5" strokeWidth={4} />
          <span>Sending...</span>
        </>
      ) : (
        <>
          <span>Submit Enquiry</span>
          <ArrowRight className="w-5 h-5" strokeWidth={2} />
        </>
      )}
    </button>
  );
}

export default function ContactPage() {
  const initialState = { success: false, error: null };
  const [state, formAction] = useActionState(sendContactForm, initialState);

  return (
    <section className="bg-white">
      {/* HERO */}
      <section
        className="relative py-50 bg-cover bg-center text-white"
        style={{ backgroundImage: "url('/contact-hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/50"></div>

        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>

        <div className="relative max-w-4xl mx-auto px-6 text-left">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-blue-500" />
            <p className="uppercase tracking-widest text-gray-300">
              Contact Us
            </p>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Let&apos;s Discuss Your Requirements
          </h1>
          <p className="text-xl text-gray-200 max-w-xl leading-relaxed">
            Reach out to Spenta Engineers to discuss product specifications,
            manufacturing capabilities, or project requirements.
          </p>
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

      {/* CONTACT CONTENT */}
      <section className="py-28 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20">

          {/* LEFT: CONTACT DETAILS */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-accent" />
              <span className="text-sm uppercase tracking-widest text-accent font-semibold">
                Reach Out
              </span>
            </div>
            <h2 className="text-4xl font-bold text-graphite mb-8">
              Get in Touch
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-10">
              Our team is available to provide technical details, quotations,
              and guidance on selecting the right drilling solutions for your
              application.
            </p>

            <div className="space-y-6">

              {[
                {
                  icon: (
                    <Mail className="w-6 h-6" strokeWidth={2} />
                  ),
                  label: "Email",
                  value: "spentaeng@gmail.com",
                  href: "mailto:spentaeng@gmail.com"
                },
                {
                  icon: (
                    <Phone className="w-6 h-6" strokeWidth={2} />
                  ),
                  label: "Phone",
                  value: "+91-9426753291",
                  href: "tel:+919426753291"
                },
                {
                  icon: (
                    <MapPin className="w-6 h-6" strokeWidth={2} />
                  ),
                  label: "Address",
                  value: "Vadodara-390024, Gujarat, India",
                  href: null
                },
                {
                  icon: (
                    <Clock className="w-6 h-6" strokeWidth={2} />
                  ),
                  label: "Business Hours",
                  value: "Monday – Saturday, 9:30 AM – 6:30 PM",
                  href: null
                }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-50 border border-blue-100 rounded-sm flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all">
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-semibold text-graphite mb-1">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-gray-700 hover:text-accent transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-gray-700">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}

            </div>
          </div>

          {/* RIGHT: FORM */}
          <div className="bg-white p-10 rounded-sm border-2 border-gray-200 shadow-xl">
            <h3 className="text-3xl font-bold text-graphite mb-8">
              Send Us a Message
            </h3>

            <form action={formAction} className="space-y-6">

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  className="w-full p-4 rounded-sm border-2 border-gray-200 focus:outline-none focus:border-accent transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="john@company.com"
                  className="w-full p-4 rounded-sm border-2 border-gray-200 focus:outline-none focus:border-accent transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Company / Organization
                </label>
                <input
                  type="text"
                  name="company"
                  placeholder="Your Company Name"
                  className="w-full p-4 rounded-sm border-2 border-gray-200 focus:outline-none focus:border-accent transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Your Message *
                </label>
                <textarea
                  placeholder="Tell us about your requirements..."
                  rows={5}
                  name="message"
                  className="w-full p-4 rounded-sm border-2 border-gray-200 focus:outline-none focus:border-accent transition-colors resize-none"
                  required
                />
              </div>

              <SubmitButton />

              {state.success && (
                <div className="p-4 bg-green-50 border-2 border-green-200 rounded-sm">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-600" strokeWidth={2} />
                    <p className="text-green-700 font-semibold">
                      Your message has been sent successfully. We&apos;ll get back to you shortly.
                    </p>
                  </div>
                </div>
              )}

              {state.error && (
                <div className="p-4 bg-red-50 border-2 border-red-200 rounded-sm">
                  <div className="flex items-center gap-3">
                    <AlertCircle className="w-6 h-6 text-red-600" strokeWidth={2} />
                    <p className="text-red-600 font-semibold">
                      {state.error}
                    </p>
                  </div>
                </div>
              )}

            </form>
          </div>

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 bg-graphite text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">
            Looking for a Long-Term Manufacturing Partner?
          </h2>
          <p className="text-lg text-gray-300 mb-10">
            Spenta Engineers is committed to reliable supply, consistent quality,
            and strong technical support.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/catalogue"
              className="inline-flex items-center gap-2 bg-white text-graphite px-8 py-4 rounded-sm font-bold transition-all hover:scale-[1.02]"
            >
              <FileDown className="w-5 h-5" strokeWidth={2} />
              <span>Download Catalogue</span>
            </a>
            <a
              href="/products"
              className="inline-flex items-center gap-2 border-2 border-white/30 px-8 py-4 rounded-sm font-bold hover:bg-white/10 transition-all"
            >
              <span>View Products</span>
              <ArrowRight className="w-5 h-5" strokeWidth={2} />
            </a>
          </div>
        </div>
      </section>

    </section>
  );
}