import { Wrench, Search, Map, Building2, ArrowRight } from 'lucide-react';
import type { Metadata } from "next";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description:
    "Spenta Engineers serves multiple industries including mining, mineral exploration, geotechnical drilling, and infrastructure projects with precision drilling tools and equipment.",
  alternates: {
    canonical: "/industries",
  },
  openGraph: {
    title: "Industries We Serve | Spenta Engineers",
    description:
      "Discover how Spenta Engineers supports mining, exploration, geotechnical, and infrastructure industries with reliable drilling solutions.",
    url: "https://www.spentaengineers.com/industries",
  },
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

      {/* Breadcrumbs */}
      <section className="bg-gray-50 border-b border-gray-200 py-4">
        <div className="max-w-7xl mx-auto px-6">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Industries", href: "/industries" },
            ]}
          />
        </div>
      </section>

      {/* Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-accent" />
              <span className="text-sm uppercase tracking-widest text-accent font-semibold">
                Our Expertise
              </span>
            </div>
            <h2 className="text-4xl font-bold text-graphite mb-6">
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
                <Wrench className="w-6 h-6" strokeWidth={2} />
              )
            },
            {
              title: "Mineral Exploration",
              image: "/exploration.jpg",
              description: "Precision tools for accurate core recovery, geological logging, and exploration drilling across varied terrains.",
              icon: (
                <Search className="w-6 h-6" strokeWidth={2} />
              )
            },
            {
              title: "Geotechnical Drilling",
              image: "/geotechnical.jpg",
              description: "Tools engineered for soil investigation, foundation analysis, and subsurface assessment in infrastructure projects.",
              icon: (
                <Map className="w-6 h-6" strokeWidth={2} />
              )
            },
            {
              title: "Infrastructure & Construction",
              image: "/infrastructure.jpg",
              description: "Drilling equipment supporting foundation work, site investigations, and construction-related drilling applications.",
              icon: (
                <Building2 className="w-6 h-6" strokeWidth={2} />
              )
            }
          ].map((industry, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-sm overflow-hidden shadow-lg border-2 border-gray-200 hover:border-accent transition-all hover:shadow-2xl"
            >
              <div className="relative h-64 overflow-hidden bg-gray-100">
                <Image
                  src={industry.image}
                  alt={industry.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                
                {/* Icon badge */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-sm flex items-center justify-center text-white group-hover:bg-accent group-hover:border-accent transition-all">
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
          <h2 className="text-4xl font-bold text-graphite mb-6">
            Products Designed for Real-World Applications
          </h2>
          <p className="text-lg text-gray-600 mb-10">
            Explore our product range to find drilling tools suited to your
            industry requirements.
          </p>
          <a
            href="/products/core-trays"
            className="inline-flex items-center gap-2 bg-accent hover:bg-blue-700 text-white px-10 py-5 rounded-sm font-bold text-lg transition-all hover:scale-[1.02] shadow-lg group"
          >
            <span>View Products</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" strokeWidth={2} />
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-graphite text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-r from-blue-900/50 to-graphite/50 backdrop-blur-sm border border-white/10 rounded-sm p-12 text-center">
            <h3 className="text-3xl font-bold mb-4">
              Unsure Which Products Suit Your Industry?
            </h3>
            <p className="text-lg text-gray-300 mb-8">
              Contact our team to discuss your application and receive guidance
              on the right drilling solutions.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-graphite px-10 py-4 rounded-sm font-bold text-lg transition-all hover:scale-[1.02] shadow-lg"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-5 h-5" strokeWidth={2} />
            </a>
          </div>
        </div>
      </section>

    </section>
  );
}