"use client";

// import type { Metadata } from "next";
import { useFormState, useFormStatus } from "react-dom";
import { sendContactForm } from "./action";
import { useActionState } from "react";

// export const metadata: Metadata = {
//   title: "Contact Us",
//   description:
//     "Contact Spenta Engineers to discuss drilling tool specifications, manufacturing capabilities, and project requirements.",
// };

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className={`w-full py-4 rounded-lg font-bold text-lg transition
        ${pending
          ? "bg-gray-400 cursor-not-allowed"
          : "bg-blue-900 text-white hover:bg-blue-800"}
      `}
    >
      {pending ? "Sending..." : "Submit Enquiry"}
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
        className="relative py-30 bg-cover bg-center text-white flex items-end justify-start"
        style={{ backgroundImage: "url('/contact-hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/75"></div>

        <div className="relative max-w-4xl mx-auto px-3 pt-10 pb-10 text-left">
          <p className="uppercase tracking-widest text-gray-300 mb-4">
            Contact Us
          </p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Let’s Discuss Your Requirements
          </h1>
          <p className="text-xl text-gray-200 max-w-xl leading-relaxed">
            Reach out to Spenta Engineers to discuss product specifications,
            manufacturing capabilities, or project requirements.
          </p>
        </div>
      </section>

      {/* CONTACT CONTENT */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20">

          {/* LEFT: CONTACT DETAILS */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              Get in Touch
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-10">
              Our team is available to provide technical details, quotations,
              and guidance on selecting the right drilling solutions for your
              application.
            </p>

            <div className="space-y-8 text-lg text-gray-700">

              <div>
                <p className="font-semibold text-gray-900 mb-1">Email</p>
                <p>spentaeng@gmail.com</p>
              </div>

              <div>
                <p className="font-semibold text-gray-900 mb-1">Phone</p>
                <p>+91-9426753291</p>
              </div>

              <div>
                <p className="font-semibold text-gray-900 mb-1">Address</p>
                <p>
                  <br />
                  Vadodara-390024, Gujarat, India
                </p>
              </div>

              <div>
                <p className="font-semibold text-gray-900 mb-1">
                  Business Hours
                </p>
                <p>Monday – Saturday, 9:30 AM – 6:30 PM</p>
              </div>

            </div>
          </div>

          {/* RIGHT: FORM */}
          <div className="bg-gray-100 p-10 rounded-2xl border border-gray-200 shadow-lg">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">
              Send Us a Message
            </h3>

            <form action={formAction} className="space-y-6">

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-900"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-900"
                required
              />

              <input
                type="text"
                name="company"
                placeholder="Company / Organization"
                className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-900"
              />

              <textarea
                placeholder="Your Message / Requirement"
                rows={5}
                name="message"
                className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-900"
                required
              />

              <SubmitButton />

              {state.success && (
                <p className="text-green-700 font-semibold text-center mt-4">
                  ✅ Your message has been sent successfully. We’ll get back to you shortly.
                </p>
              )}

              {state.error && (
                <p className="text-red-600 font-semibold text-center mt-4">
                  ❌ {state.error}
                </p>
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
        </div>
      </section>

    </section>
  );
}