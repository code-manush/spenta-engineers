export default function AccessoriesPage() {
  return (
    <section className="py-0 bg-white">
      <div className="mx-auto px-0">

        {/* Hero */}
        <section
          className="relative py-50 text-white bg-cover bg-center"
          style={{
            backgroundImage: "url('/overshot.webp')",
          }}
        >
          <div className="absolute inset-0 bg-black/80"></div>

          <div className="relative max-w-7xl mx-auto px-6">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-normal">
              Overshots & Drilling Accessories
            </h1>

            <p className="text-xl text-gray-200 max-w-3xl leading-relaxed">
              Spenta Engineers supplies a comprehensive range of drilling
              accessories designed to support smooth, safe, and efficient
              drilling operations across exploration and mining projects.
            </p>
          </div>
        </section>

        {/* Engineering Overview */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Text */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Essential Components for Reliable Drilling Operations
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Drilling accessories play a critical role in ensuring operational
                continuity, safety, and equipment compatibility during drilling
                activities.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Our accessories are engineered for precise fitment, durability,
                and ease of use, helping reduce downtime and maintain drilling
                efficiency under challenging field conditions.
              </p>
            </div>

            {/* Image */}
            <div className="relative">
              <img
                src="/accessories-detail.jpg"
                alt="Drilling Accessories Components Detail"
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
                Available Accessories
              </h2>
              <p className="text-lg text-gray-600">
                Our accessory range supports standard wireline drilling systems
                and field requirements.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[
                {
                  title: "Overshots",
                  desc: "Used for retrieval of core barrels during wireline drilling operations.",
                },
                {
                  title: "Couplings & Adapters",
                  desc: "Precision components ensuring secure connections between drilling tools.",
                },
                {
                  title: "Core Lifters & Catchers",
                  desc: "Designed to retain core samples during recovery and minimize core loss.",
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
                Engineering features focused on reliability and system compatibility.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {[
                "Precision machining for accurate fitment",
                "High-strength materials for durability",
                "Compatibility with standard drilling systems",
                "Designed for repeated field use",
                "Improved operational safety",
                "Consistent quality inspection standards",
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
            Need Accessory Specifications or Compatibility Details?
          </h3>
          <p className="text-lg text-gray-300 mb-8">
            Contact our team to confirm accessory selection and compatibility
            with your drilling setup.
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
