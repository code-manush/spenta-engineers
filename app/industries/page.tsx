import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description:
    "Industries served by Spenta Engineers including mining, mineral exploration, geotechnical drilling, and infrastructure projects.",
};

export default function IndustriesPage() {
  return (
    <section className="bg-white">

      {/* Hero */}
      <section
        className="relative py-50 text-white bg-cover bg-center"
        style={{
          backgroundImage: "url('/industries-hero.jpeg')",
        }}
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

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-blue-500" />
            <span className="uppercase tracking-widest text-white">
              Applications
            </span>
          </div>
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
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-blue-600" />
              <span className="text-sm uppercase tracking-widest text-blue-600 font-semibold">
                Our Expertise
              </span>
            </div>
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
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">

          {[
            {
              title: "Mining",
              image: "/mining.jpg",
              description: "Reliable drilling tools designed to withstand high loads, abrasive formations, and continuous operations in mining environments.",
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              )
            },
            {
              title: "Mineral Exploration",
              image: "/exploration.jpg",
              description: "Precision tools for accurate core recovery, geological logging, and exploration drilling across varied terrains.",
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              )
            },
            {
              title: "Geotechnical Drilling",
              image: "/geotechnical.jpg",
              description: "Tools engineered for soil investigation, foundation analysis, and subsurface assessment in infrastructure projects.",
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              )
            },
            {
              title: "Infrastructure & Construction",
              image: "/infrastructure.jpg",
              description: "Drilling equipment supporting foundation work, site investigations, and construction-related drilling applications.",
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              )
            }
          ].map((industry, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-sm overflow-hidden shadow-lg border-2 border-gray-200 hover:border-blue-600 transition-all hover:shadow-2xl"
            >
              <div className="relative h-64 overflow-hidden bg-gray-100">
                <img
                  src={industry.image}
                  alt={industry.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                
                {/* Icon badge */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-sm flex items-center justify-center text-white group-hover:bg-blue-600 group-hover:border-blue-600 transition-all">
                  {industry.icon}
                </div>

                {/* Title overlay */}
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-2xl font-bold text-white">
                    {industry.title}
                  </h3>
                </div>
              </div>
              
              <div className="p-8">
                <p className="text-gray-700 leading-relaxed">
                  {industry.description}
                </p>
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* Product Link */}
      <section className="py-24 bg-white text-center border-t border-gray-200">
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
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-sm font-bold text-lg transition-all hover:scale-[1.02] shadow-lg group"
          >
            <span>View Products</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-r from-blue-900/50 to-gray-900/50 backdrop-blur-sm border border-white/10 rounded-sm p-12 text-center">
            <h3 className="text-3xl font-bold mb-4">
              Unsure Which Products Suit Your Industry?
            </h3>
            <p className="text-lg text-gray-300 mb-8">
              Contact our team to discuss your application and receive guidance
              on the right drilling solutions.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-gray-900 px-10 py-4 rounded-sm font-bold text-lg transition-all hover:scale-[1.02] shadow-lg"
            >
              <span>Contact Us</span>
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