import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Diamond & Tungsten Carbide Tools",
  description:
    "Diamond and tungsten carbide drilling tools engineered for efficient cutting and long service life.",
};

export default function DiamondToolsPage() {
  return (
    <section className="py-0 bg-white">
      <div className="mx-auto px-0">

        {/* Hero */}
        <section
          className="relative py-50 text-white bg-cover bg-center"
          style={{
            backgroundImage: "url('/diamond.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black/80"></div>

          <div className="relative max-w-7xl mx-auto px-6">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-normal">
              Diamond & Tungsten Carbide Tools
            </h1>

            <p className="text-xl text-gray-200 max-w-3xl leading-relaxed">
              Spenta Engineers manufactures advanced diamond and tungsten carbide
              drilling tools designed for efficient cutting, extended service life,
              and consistent performance in demanding geological conditions.
            </p>
          </div>
        </section>

        {/* Engineering Overview */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Text */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Advanced Cutting Performance by Design
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our diamond and tungsten carbide tools are engineered to deliver
                efficient penetration rates while maintaining dimensional accuracy
                and durability across a wide range of formations.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Careful selection of diamond grades, matrix composition, and
                manufacturing processes ensures optimal cutting performance
                and reduced tool wear in the field.
              </p>
            </div>

            {/* Image */}
            <div className="relative">
              <img
                src="/diamond-tool-detail.webp"
                alt="Diamond Tool Cutting Surface Detail"
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
                Available Tool Types
              </h2>
              <p className="text-lg text-gray-600">
                Our range of diamond and carbide tools supports various drilling
                methods and ground conditions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[
                {
                  title: "Surface Set Diamond Bits",
                  desc: "Designed for softer to medium-hard formations with controlled diamond exposure.",
                },
                {
                  title: "Impregnated Diamond Bits",
                  desc: "Suitable for hard and abrasive formations requiring gradual diamond wear.",
                },
                {
                  title: "Tungsten Carbide Tools",
                  desc: "Robust tools used for casing shoes, reaming, and non-core drilling operations.",
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
                Engineering features focused on cutting efficiency and durability.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {[
                "Optimized diamond grade and distribution",
                "Controlled wear characteristics for longer tool life",
                "High-quality matrix formulation",
                "Precision manufacturing for consistent performance",
                "Reduced vibration and smoother drilling",
                "Compatibility with standard drilling systems",
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
            Need Diamond Tool Specifications?
          </h3>
          <p className="text-lg text-gray-300 mb-8">
            Contact our team to discuss formation conditions and receive the
            right diamond or carbide tool recommendation.
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