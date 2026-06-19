import { CheckCircle2, FileDown, Download, FileText, Folder, ClipboardList, Server, ArrowRight } from 'lucide-react';
import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Product Catalogue",
  description:
    "Download the complete Spenta Engineers product catalogue covering drill rods, core barrels, diamond tools, plastic core trays, and drilling accessories. PDF download available.",
  alternates: {
    canonical: "/catalogue",
  },
  openGraph: {
    title: "Product Catalogue | Spenta Engineers",
    description:
      "Complete product catalogue with specifications for all drilling tools and accessories.",
    url: "https://www.spentaengineers.com/catalogue",
  },
};

export default function CataloguePage() {
  return (
    <section className="bg-white">
      {/* HERO */}
      <section
        className="relative bg-cover bg-center text-white flex items-end justify-start py-50"
        style={{ backgroundImage: "url('/catalogue-hero.jpg')" }}
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

        <div className="relative max-w-7xl mx-auto px-6 pb-20 text-left">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-blue-500" />
            <p className="uppercase tracking-widest text-gray-300">
              Catalogue
            </p>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Product Catalogue
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl leading-relaxed">
            Access the complete range of Spenta Engineers drilling tools and
            accessories in a single, detailed product catalogue.
          </p>
        </div>
      </section>

      {/* Breadcrumbs */}
      <section className="bg-gray-50 border-b border-gray-200 py-4">
        <div className="max-w-7xl mx-auto px-6">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Catalogue", href: "/catalogue" },
            ]}
          />
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-28 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* LEFT */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-accent" />
              <span className="text-sm uppercase tracking-widest text-accent font-semibold">
                Complete Overview
              </span>
            </div>
            <h2 className="text-4xl font-bold text-graphite mb-6">
              Complete Product Overview
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Our catalogue provides detailed information about our drilling
              tools, specifications, configurations, and supported applications.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-10">
              It is designed to help engineers, procurement teams, and project
              managers quickly evaluate the right tools for their drilling
              requirements.
            </p>

            <div className="space-y-4">
              {[
                { 
                  name: "Drill Rods",
                  icon: (
                    <CheckCircle2 className="w-5 h-5" strokeWidth={2} />
                  )
                },
                { 
                  name: "Core Barrels",
                  icon: (
                    <CheckCircle2 className="w-5 h-5" strokeWidth={2} />
                  )
                },
                { 
                  name: "Diamond & Tungsten Carbide Tools",
                  icon: (
                    <CheckCircle2 className="w-5 h-5" strokeWidth={2} />
                  )
                },
                { 
                  name: "Plastic Core Trays & Boxes",
                  icon: (
                    <CheckCircle2 className="w-5 h-5" strokeWidth={2} />
                  )
                },
                { 
                  name: "Overshots & Drilling Accessories",
                  icon: (
                    <CheckCircle2 className="w-5 h-5" strokeWidth={2} />
                  )
                }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-lg text-gray-700">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-50 border border-blue-100 rounded-sm flex items-center justify-center text-accent">
                    {item.icon}
                  </div>
                  <span>{item.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT - Download Card */}
          <div className="bg-white p-12 rounded-sm border-2 border-gray-200 shadow-2xl text-center relative overflow-hidden group">
            
            {/* Background accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-100 transition-colors" />
            
            <div className="relative z-10">
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-20 h-20 bg-accent rounded-sm mb-6 group-hover:scale-110 transition-transform">
                <FileDown className="w-10 h-10 text-white" strokeWidth={2} />
              </div>

              <h3 className="text-3xl font-bold text-graphite mb-4">
                Download Catalogue
              </h3>

              <p className="text-lg text-gray-600 mb-8">
                Get the complete product catalogue in PDF format.
              </p>

              <a
                href="/spenta-engineers-catalogue.pdf"
                target="_blank"
                className="inline-flex items-center gap-2 bg-accent hover:bg-blue-700 text-white px-10 py-5 rounded-sm font-bold text-lg transition-all hover:scale-[1.02] shadow-lg group/btn"
              >
                <Download className="w-6 h-6" strokeWidth={2} />
                <span>Download PDF</span>
              </a>

              <div className="mt-6 flex items-center justify-center gap-6 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4" strokeWidth={2} />
                  <span>PDF Format</span>
                </div>
                <div className="flex items-center gap-2">
                  <Folder className="w-4 h-4" strokeWidth={2} />
                  <span>~10-15 MB</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-graphite mb-4">
              What&apos;s Inside the Catalogue
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive product information for informed decision-making
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <ClipboardList className="w-6 h-6" strokeWidth={2} />
                ),
                title: "Technical Specifications",
                description: "Detailed dimensions, materials, and performance data"
              },
              {
                icon: (
                  <Server className="w-6 h-6" strokeWidth={2} />
                ),
                title: "Product Configurations",
                description: "Available sizes, variants, and compatibility information"
              },
              {
                icon: (
                  <FileText className="w-6 h-6" strokeWidth={2} />
                ),
                title: "Application Guidelines",
                description: "Recommended use cases and industry applications"
              }
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 p-8 rounded-sm border border-gray-200 hover:border-accent transition-all hover:shadow-lg group">
                <div className="w-12 h-12 bg-white border border-gray-200 rounded-sm flex items-center justify-center text-accent mb-4 group-hover:bg-accent group-hover:text-white group-hover:border-accent transition-all">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-graphite mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-graphite text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">
            Need Custom Specifications or Pricing?
          </h2>
          <p className="text-lg text-gray-300 mb-10">
            Contact our team to receive tailored recommendations based on your
            drilling application.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-graphite px-12 py-5 rounded-sm font-bold text-lg transition-all hover:scale-[1.02] shadow-lg"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-5 h-5" strokeWidth={2} />
            </a>
            <a
              href="/products"
              className="inline-flex items-center gap-2 border-2 border-white/30 px-12 py-5 rounded-sm font-bold text-lg hover:bg-white/10 transition-all"
            >
              <span>Browse Products</span>
              <ArrowRight className="w-5 h-5" strokeWidth={2} />
            </a>
          </div>
        </div>
      </section>

    </section>
  );
}