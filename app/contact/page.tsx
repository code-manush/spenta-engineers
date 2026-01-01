"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { sendContactForm } from "./action";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className={`w-full py-4 rounded-sm font-bold text-lg transition-all flex items-center justify-center gap-2
        ${pending
          ? "bg-gray-400 cursor-not-allowed"
          : "bg-blue-600 text-white hover:bg-blue-700 hover:scale-[1.02]"}
      `}
    >
      {pending ? (
        <>
          <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span>Sending...</span>
        </>
      ) : (
        <>
          <span>Submit Enquiry</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
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
            Let's Discuss Your Requirements
          </h1>
          <p className="text-xl text-gray-200 max-w-xl leading-relaxed">
            Reach out to Spenta Engineers to discuss product specifications,
            manufacturing capabilities, or project requirements.
          </p>
        </div>
      </section>

      {/* CONTACT CONTENT */}
      <section className="py-28 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20">

          {/* LEFT: CONTACT DETAILS */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-blue-600" />
              <span className="text-sm uppercase tracking-widest text-blue-600 font-semibold">
                Reach Out
              </span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
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
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  ),
                  label: "Email",
                  value: "spentaeng@gmail.com",
                  href: "mailto:spentaeng@gmail.com"
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  ),
                  label: "Phone",
                  value: "+91-9426753291",
                  href: "tel:+919426753291"
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  ),
                  label: "Address",
                  value: "Vadodara-390024, Gujarat, India",
                  href: null
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  label: "Business Hours",
                  value: "Monday – Saturday, 9:30 AM – 6:30 PM",
                  href: null
                }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-50 border border-blue-100 rounded-sm flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-gray-700 hover:text-blue-600 transition-colors">
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
            <h3 className="text-3xl font-bold text-gray-900 mb-8">
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
                  className="w-full p-4 rounded-sm border-2 border-gray-200 focus:outline-none focus:border-blue-600 transition-colors"
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
                  className="w-full p-4 rounded-sm border-2 border-gray-200 focus:outline-none focus:border-blue-600 transition-colors"
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
                  className="w-full p-4 rounded-sm border-2 border-gray-200 focus:outline-none focus:border-blue-600 transition-colors"
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
                  className="w-full p-4 rounded-sm border-2 border-gray-200 focus:outline-none focus:border-blue-600 transition-colors resize-none"
                  required
                />
              </div>

              <SubmitButton />

              {state.success && (
                <div className="p-4 bg-green-50 border-2 border-green-200 rounded-sm">
                  <div className="flex items-center gap-3">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-green-700 font-semibold">
                      Your message has been sent successfully. We'll get back to you shortly.
                    </p>
                  </div>
                </div>
              )}

              {state.error && (
                <div className="p-4 bg-red-50 border-2 border-red-200 rounded-sm">
                  <div className="flex items-center gap-3">
                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
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
      <section className="py-24 bg-gray-900 text-white text-center">
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
              className="inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-sm font-bold transition-all hover:scale-[1.02]"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>Download Catalogue</span>
            </a>
            <a
              href="/products"
              className="inline-flex items-center gap-2 border-2 border-white/30 px-8 py-4 rounded-sm font-bold hover:bg-white/10 transition-all"
            >
              <span>View Products</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </section>

    </section>
  );
}