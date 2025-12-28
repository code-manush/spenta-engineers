import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Spenta Engineers to discuss drilling tool specifications, manufacturing capabilities, and project requirements.",
};

export default function ContactPage() {
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
                <p>info@spentaengineers.com</p>
              </div>

              <div>
                <p className="font-semibold text-gray-900 mb-1">Phone</p>
                <p>+91-XXXXXXXXXX</p>
              </div>

              <div>
                <p className="font-semibold text-gray-900 mb-1">Address</p>
                <p>
                  [Company Address Line 1]<br />
                  [City, State, Country]
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

            <form className="space-y-6">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-900"
                required
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-900"
                required
              />

              <input
                type="text"
                placeholder="Company / Organization"
                className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-900"
              />

              <textarea
                placeholder="Your Message / Requirement"
                rows={5}
                className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-900"
                required
              />

              <button
                type="submit"
                className="w-full bg-blue-900 text-white py-4 rounded-lg font-bold text-lg hover:bg-blue-800 transition"
              >
                Submit Enquiry
              </button>

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