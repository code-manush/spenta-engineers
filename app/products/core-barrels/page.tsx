export default function CoreBarrelsPage() {
  return (
    <section className="py-0 bg-white">
      <div className="mx-auto px-0">

        {/* Hero */}
        <section
          className="relative py-50 text-white bg-cover bg-center"
          style={{
            backgroundImage: "url('/core-barrel.jpg')",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/80"></div>

          {/* Content */}
          <div className="relative max-w-7xl mx-auto px-6">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-normal">
              Core Barrels
            </h1>

            <p className="text-xl text-gray-200 max-w-3xl leading-relaxed">
              Spenta Engineers manufactures precision-engineered core barrels
              designed to deliver accurate core recovery across mineral
              exploration, mining, and geotechnical drilling operations.
            </p>
          </div>
        </section>

        {/* Engineering Overview */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Text */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Precision Core Recovery by Design
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our core barrels are designed to maximize core recovery while
                minimizing disturbance, even in fractured or challenging
                formations.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Manufactured with tight tolerances and robust materials, Spenta
                Engineers core barrels ensure smooth operation, consistent
                performance, and long service life in demanding drilling
                environments.
              </p>
            </div>

            {/* Image */}
            <div className="relative">
              <img
                src="/core-barrel-detail.webp"
                alt="Core Barrel Precision Components"
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
                Available Core Barrel Types
              </h2>
              <p className="text-lg text-gray-600">
                Our core barrels are available in standard configurations to
                suit varying ground conditions and drilling objectives.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[
                {
                  title: "Single Tube Core Barrels",
                  desc: "Suitable for competent formations where core disturbance is minimal.",
                },
                {
                  title: "Double Tube Core Barrels",
                  desc: "Designed to reduce core disturbance and improve recovery in broken formations.",
                },
                {
                  title: "Triple Tube Core Barrels",
                  desc: "Ideal for highly fractured formations requiring maximum core preservation.",
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
                Engineered features focused on core quality and operational reliability.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {[
                "Optimized inner and outer tube design",
                "Smooth core entry and retention",
                "Reduced core loss in fractured formations",
                "High-strength materials for durability",
                "Compatible with standard wireline systems",
                "Precision manufacturing and quality inspection",
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
            Need Core Barrel Specifications?
          </h3>
          <p className="text-lg text-gray-300 mb-8">
            Get in touch with our team to receive technical details and confirmation
            of the right core barrel configuration for your application.
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