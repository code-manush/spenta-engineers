export default function IndustriesPage() {
  return (
    <section className="py-0 bg-white">
      <div className="mx-auto px-0">

        {/* Hero */}
        <section
          className="relative py-50 text-white bg-cover bg-center"
          style={{
            backgroundImage: "url('/industries-hero.jpeg')",
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>

          <div className="relative max-w-7xl mx-auto px-6">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-normal">
              Industries We Serve
            </h1>

            <p className="text-xl text-gray-200 max-w-3xl leading-relaxed">
              Spenta Engineers supports a wide range of industries with reliable
              drilling tools engineered for performance, durability, and
              operational efficiency in demanding environments.
            </p>
          </div>
        </section>

        {/* Overview */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 max-w-4xl">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Application-Focused Engineering
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Different industries present different drilling challenges —
              from hard rock formations to fractured ground conditions and
              varying depth requirements.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              Our product range is designed with application-specific
              requirements in mind, ensuring compatibility, reliability, and
              consistent field performance across diverse projects.
            </p>
          </div>
        </section>

        {/* Industries Grid */}
        <section className="py-24 bg-gray-100 border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16">

            {/* Mining */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg border">
              <img
                src="/mining.jpg"
                alt="Mining Drilling Operations"
                className="w-full h-64 object-cover"
              />
              <div className="p-10">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Mining
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Reliable drilling tools designed to withstand high loads,
                  abrasive formations, and continuous operations in mining
                  environments.
                </p>
              </div>
            </div>

            {/* Mineral Exploration */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg border">
              <img
                src="/exploration.jpg"
                alt="Mineral Exploration Drilling"
                className="w-full h-64 object-cover"
              />
              <div className="p-10">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Mineral Exploration
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Precision tools for accurate core recovery, geological logging,
                  and exploration drilling across varied terrains.
                </p>
              </div>
            </div>

            {/* Geotechnical */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg border">
              <img
                src="/geotechnical.jpg"
                alt="Geotechnical Drilling"
                className="w-full h-64 object-cover"
              />
              <div className="p-10">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Geotechnical Drilling
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Tools engineered for soil investigation, foundation analysis,
                  and subsurface assessment in infrastructure projects.
                </p>
              </div>
            </div>

            {/* Infrastructure */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg border">
              <img
                src="/infrastructure.jpg"
                alt="Infrastructure Drilling"
                className="w-full h-64 object-cover"
              />
              <div className="p-10">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Infrastructure & Construction
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Drilling equipment supporting foundation work, site
                  investigations, and construction-related drilling
                  applications.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* Product Link */}
        <section className="py-24 bg-white text-center">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Products Designed for Real-World Applications
            </h2>
            <p className="text-lg text-gray-600 mb-10">
              Explore our product range to find drilling tools suited to your
              industry requirements.
            </p>
            <a
              href="/products"
              className="inline-block bg-blue-900 text-white px-10 py-5 rounded-lg font-bold text-lg hover:bg-blue-800 transition"
            >
              View Products
            </a>
          </div>
        </section>

        {/* CTA */}
        <div className="bg-gray-900 text-white rounded-xl p-12 text-center">
          <h3 className="text-3xl font-bold mb-4">
            Unsure Which Products Suit Your Industry?
          </h3>
          <p className="text-lg text-gray-300 mb-8">
            Contact our team to discuss your application and receive guidance
            on the right drilling solutions.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-gray-900 px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition"
          >
            Contact Us
          </a>
        </div>

      </div>
    </section>
  );
}