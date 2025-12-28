import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Drill Rods",
  description:
    "High-strength drill rods manufactured for mineral exploration, mining, and geotechnical drilling applications.",
};

export default function DrillRodsPage() {
  return (
    <section className="py-0 bg-white">
      <div className="mx-auto px-0">

        {/* Header */}
        <section
          className="relative py-50 text-white bg-cover bg-center "
          style={{
            backgroundImage: "url('/drill-rod.jpg')",
          }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/80"></div>

          {/* Content */}
          <div className="relative max-w-7xl mx-auto px-6">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-normal">
              Drill Rods
            </h1>

            <p className="text-xl text-gray-200 max-w-3xl leading-relaxed">
              Spenta Engineers manufactures high-strength drill rods designed
              for reliable performance in mineral exploration, mining, and
              geotechnical drilling applications.
            </p>
          </div>
        </section>

        {/* Engineering Overview */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Text */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Engineered for Demanding Drilling Conditions
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Spenta Engineers drill rods are manufactured using high-grade alloy
                steels and precision machining processes to ensure strength,
                durability, and consistent thread performance in field conditions.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Designed for compatibility with standard wireline drilling systems,
                our drill rods deliver reliable torque transmission and reduced wear
                across exploration, mining, and geotechnical applications.
              </p>
            </div>

            {/* Image */}
            <div className="relative">
              <img
                src="/drill-rod-detail.webp"
                alt="Drill Rod Manufacturing Detail"
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
                Available Drill Rod Variants
              </h2>
              <p className="text-lg text-gray-600">
                Our drill rods are available in standard wireline sizes to suit
                different drilling depths and formation conditions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[
                {
                  title: "NQ Drill Rods",
                  desc: "Optimized for mineral exploration with an excellent balance of strength and weight.",
                },
                {
                  title: "HQ Drill Rods",
                  desc: "Heavy-duty rods designed for deeper drilling and higher torque requirements.",
                },
                {
                  title: "PQ Drill Rods",
                  desc: "Large-diameter rods suitable for high-capacity core drilling operations.",
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
                Key engineering features that ensure consistent performance in the field.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {[
                "High-strength alloy steel construction",
                "Precision-machined threads for reduced wear",
                "Excellent torque transmission characteristics",
                "Compatible with standard wireline systems",
                "Designed for repeated make-up and break-out cycles",
                "Strict quality inspection at every stage",
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
            Need Specifications or Pricing?
          </h3>
          <p className="text-lg text-gray-300 mb-8">
            Contact our team to receive detailed specifications and a customized quotation.
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
