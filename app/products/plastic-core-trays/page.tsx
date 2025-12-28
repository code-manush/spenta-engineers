import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plastic Core Trays & Boxes",
  description:
    "Durable plastic core trays and boxes designed for safe storage and transport of core samples.",
};

export default function PlasticCoreTraysPage() {
  return (
    <section className="py-0 bg-white">
      <div className="mx-auto px-0">

        {/* Hero */}
        <section
          className="relative py-50 text-white bg-cover bg-center"
          style={{
            backgroundImage: "url('/core-tray.webp')",
          }}
        >
          <div className="absolute inset-0 bg-black/80"></div>

          <div className="relative max-w-7xl mx-auto px-6">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-normal">
              Plastic Core Trays & Boxes
            </h1>

            <p className="text-xl text-gray-200 max-w-3xl leading-relaxed">
              Spenta Engineers supplies durable plastic core trays and boxes
              designed to ensure safe handling, organized storage, and secure
              transportation of drilled core samples.
            </p>
          </div>
        </section>

        {/* Engineering Overview */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Text */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Designed to Protect Valuable Core Samples
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Proper core handling and storage are critical to maintaining
                geological data integrity. Our plastic core trays are designed
                to securely hold core samples while minimizing damage during
                transport and field handling.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Manufactured using high-quality plastic materials, these trays
                offer excellent impact resistance, dimensional stability, and
                long service life under demanding site conditions.
              </p>
            </div>

            {/* Image */}
            <div className="relative">
              <img
                src="/core-tray-detail.jpg"
                alt="Plastic Core Tray Construction Detail"
                className="w-full h-[420px] object-cover rounded-xl border border-gray-200 shadow-lg"
              />
            </div>

          </div>
        </section>

        {/* Variants */}
        <section className="py-24 bg-gray-100 border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-6">

            <div className="mb-16 max-w-3xl">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Available Core Tray Types
              </h2>
              <p className="text-lg text-gray-600">
                Our plastic core trays are available in standard sizes to
                accommodate different core diameters and storage requirements.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[
                {
                  title: "BQ Core Trays",
                  desc: "Designed for compact core samples used in shallow and exploratory drilling.",
                },
                {
                  title: "NQ Core Trays",
                  desc: "Standard trays suitable for most mineral exploration applications.",
                },
                {
                  title: "HQ / PQ Core Trays",
                  desc: "Larger trays designed for high-capacity core storage and handling.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white p-10 rounded-xl border border-gray-200 shadow-md hover:shadow-xl transition-all"
                >
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Technical Highlights */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">

            <div className="mb-16 max-w-3xl">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Technical Highlights
              </h2>
              <p className="text-lg text-gray-600">
                Features designed for durability, organization, and ease of handling.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {[
                "High-impact, durable plastic construction",
                "Consistent dimensions for organized core logging",
                "Lightweight yet robust design",
                "Stackable for efficient storage and transport",
                "Weather-resistant for field conditions",
                "Easy cleaning and reuse",
              ].map((point, index) => (
                <div
                  key={index}
                  className="flex items-start p-6 bg-gray-50 border border-gray-200 rounded-lg"
                >
                  <span className="text-blue-900 text-xl font-bold mr-4">✓</span>
                  <p className="text-lg text-gray-700">{point}</p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* CTA */}
        <div className="bg-gray-900 text-white rounded-xl p-12 text-center">
          <h3 className="text-3xl font-bold mb-4">
            Need Core Tray Specifications or Bulk Supply?
          </h3>
          <p className="text-lg text-gray-300 mb-8">
            Contact our team to confirm sizes, quantities, and delivery options
            for your project.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-gray-900 px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition"
          >
            Request a Quote
          </a>
        </div>

      </div>
    </section>
  );
}
