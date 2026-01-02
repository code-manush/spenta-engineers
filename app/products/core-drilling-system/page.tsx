import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Core Drilling System",
  description:
    "Complete core drilling system components including drill rods, core barrels, head assembly, overshot, and couplings. Precision-engineered for mineral exploration and geotechnical drilling applications.",
  alternates: {
    canonical: "/products/core-drilling-system",
  },
  openGraph: {
    title: "Core Drilling System | Spenta Engineers",
    description:
      "Integrated drilling solution with compatible components for efficient mineral exploration and geotechnical drilling.",
    url: "https://www.spentaengineers.com/products/core-drilling-system",
  },
};

import Breadcrumbs from "@/components/Breadcrumbs";

export default function CoreDrillingSystemPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="relative py-50 bg-gray-900 text-white overflow-hidden" style={{ backgroundImage: "url('/products/core-drilling-system-cover.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 ">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-blue-500" />
            <span className="uppercase tracking-widest text-gray-400 text-sm">
              Technical Overview
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Core Drilling System
          </h1>
          <p className="max-w-3xl text-gray-300 text-xl leading-relaxed">
            An integrated drilling solution consisting of drill rods, core barrels,
            and associated drilling components designed to work together designed to work together for efficient mineral
            exploration and geotechnical drilling.
          </p>
        </div>
      </section>

      {/* Breadcrumbs */}
      <section className="bg-gray-50 border-b border-gray-200 py-4">
        <div className="max-w-7xl mx-auto px-6">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Products", href: "/products" },
              { label: "Core Drilling System", href: "/products/core-drilling-system" },
            ]}
          />
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-24 space-y-24">

        {/* What is */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-blue-600" />
            <span className="text-sm uppercase tracking-widest text-blue-600 font-semibold">
              Overview
            </span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            What is a Core Drilling System?
          </h2>
          <p className="max-w-4xl text-lg text-gray-700 leading-relaxed">
            A core drilling system is a coordinated assembly of drilling components
            used to recover continuous core samples from the ground. Each component
            performs a specific function, and correct compatibility between
            components is essential for drilling efficiency, safety, and reliable
            core recovery.
          </p>
        </section>

        {/* Process Flow */}
        <section className="bg-gradient-to-br from-gray-50 to-white p-12 rounded-sm border-2 border-gray-200 mb-20">
          <div className="flex items-center gap-3 mb-8">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <h2 className="text-3xl font-bold text-gray-900">
              Core Drilling Process Flow
            </h2>
          </div>

          <div className="space-y-4">
            {[
              { step: "01", text: "Drilling rig provides rotation and feed force" },
              { step: "02", text: "Drill rods transmit torque to the downhole assembly" },
              { step: "03", text: "Core barrel cuts and retains the core sample" },
              { step: "04", text: "Head assembly connects rods to the core barrel" },
              { step: "05", text: "Overshot retrieves the inner tube during wireline drilling" },
              { step: "06", text: "Couplings ensure secure and compatible connections" }
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-4 p-4 bg-white rounded-sm border border-gray-200 hover:border-blue-600 transition-all group">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-50 border-2 border-blue-600 rounded-sm flex items-center justify-center font-bold text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  {item.step}
                </div>
                <p className="text-lg text-gray-700 pt-2">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* System Components */}
        <section className="relative mb-20">
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-30 -z-10" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gray-100 rounded-full blur-3xl opacity-40 -z-10" />

          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-gradient-to-r from-blue-600 to-blue-400" />
            <span className="text-sm uppercase tracking-widest text-blue-600 font-semibold">
              Components
            </span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            System Components
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-3xl">
            Precision-engineered components designed to work seamlessly together
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Drill Rods",
                desc: "Transmit torque and feed force from the drilling rig to the downhole assembly",
                link: "/products/core-drilling-system/drill-rods",
              },
              {
                name: "Core Barrels",
                desc: "Cut and retain continuous core samples during drilling operations",
                link: "/products/core-drilling-system/core-barrels",
              },
              {
                name: "Head Assembly",
                desc: "Connects drill rods to the core barrel and enables wireline operations",
                link: "/products/core-drilling-system/head-assembly",
              },
              {
                name: "Overshot",
                desc: "Retrieves the inner tube assembly during wireline core drilling",
                link: "/products/core-drilling-system/overshot",
              },
              {
                name: "Locking Coupling",
                desc: "Secures internal drilling assemblies and prevents disengagement",
                link: "/products/core-drilling-system/locking-coupling",
              },
              {
                name: "Adapter Coupling",
                desc: "Provides compatibility between different component sizes or standards",
                link: "/products/core-drilling-system/adapter-coupling",
              },
            ]
              .map((item, idx) => (
                <a
                  key={idx}
                  href={item.link}
                  className="group relative bg-white border border-gray-200 p-8 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-1"
                >
                  {/* Gradient accent on hover */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative">
                    <div className="flex items-start justify-between mb-6">
                      {/* <div className="w-14 h-14 bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 flex items-center justify-center text-blue-600 group-hover:from-blue-600 group-hover:to-blue-700 group-hover:text-white group-hover:border-blue-600 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                        {item.icon}
                      </div> */}
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                      {item.name}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {item.desc}
                    </p>

                    <div className="flex items-center gap-2 text-sm font-semibold text-blue-600 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-2">
                      <span>View Details</span>
                    </div>
                  </div>
                </a>
              ))}
          </div>
        </section>

        {/* Compatibility */}
        <section className="bg-blue-50 p-12 rounded-sm border-2 border-blue-200 mb-20">
          <div className="flex items-center gap-3 mb-6">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <h2 className="text-3xl font-bold text-gray-900">
              Compatibility & Standards
            </h2>
          </div>
          <p className="max-w-4xl text-lg text-gray-700 leading-relaxed">
            All core drilling system components are designed to conform to
            industry-recognized dimensional standards and are manufactured to
            ensure interchangeability within compatible systems. Correct selection
            of components is essential for safe and efficient drilling operations.
          </p>
        </section>

        {/* Key Benefits */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-blue-600" />
            <span className="text-sm uppercase tracking-widest text-blue-600 font-semibold">
              Benefits
            </span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            System Integration Benefits
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Enhanced drilling efficiency through compatible components",
              "Improved core recovery and sample quality",
              "Reduced operational downtime",
              "Simplified component selection and procurement",
              "Reliable performance in demanding field conditions",
              "Conformance to industry standards"
            ].map((benefit, idx) => (
              <div key={idx} className="flex items-start gap-4 p-6 bg-gray-50 border border-gray-200 rounded-sm hover:border-blue-600 hover:shadow-lg transition-all group">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-lg text-gray-700 pt-1">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gray-900 text-white rounded-sm p-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div>
              <h3 className="text-3xl font-bold mb-2">
                Need Help Selecting the Right Drilling System?
              </h3>
              <p className="text-gray-300 text-lg">
                Our technical team can assist with system configuration and compatibility.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-900 rounded-sm font-bold hover:bg-gray-100 transition-all"
              >
                <span>Contact Technical Team</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>
        </section>

      </div>

    </main>
  );
}