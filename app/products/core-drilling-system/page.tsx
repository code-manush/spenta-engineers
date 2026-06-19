import { Zap, ArrowRight, ShieldCheck, Check } from 'lucide-react';
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
import SystemCompatibilityConfigurator from "@/components/products/SystemCompatibilityConfigurator";

export default function CoreDrillingSystemPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="relative py-50 bg-graphite text-white overflow-hidden" style={{ backgroundImage: "url('/products/core-drilling-system-cover.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
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
            <div className="h-px w-8 bg-accent" />
            <span className="text-sm uppercase tracking-widest text-accent font-semibold">
              Overview
            </span>
          </div>
          <h2 className="text-4xl font-bold text-graphite mb-6">
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
            <Zap className="w-6 h-6 text-accent" strokeWidth={2} />
            <h2 className="text-3xl font-bold text-graphite">
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
              <div key={idx} className="flex items-start gap-4 p-4 bg-white rounded-sm border border-gray-200 hover:border-accent transition-all group">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-50 border-2 border-accent rounded-sm flex items-center justify-center font-bold text-accent group-hover:bg-accent group-hover:text-white transition-all">
                  {item.step}
                </div>
                <p className="text-lg text-gray-700 pt-2">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* System Configurator */}
        <SystemCompatibilityConfigurator />

        {/* Compatibility */}
        <section className="bg-blue-50 p-12 rounded-sm border-2 border-blue-200 mb-20">
          <div className="flex items-center gap-3 mb-6">
            <ShieldCheck className="w-6 h-6 text-accent" strokeWidth={2} />
            <h2 className="text-3xl font-bold text-graphite">
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
            <div className="h-px w-8 bg-accent" />
            <span className="text-sm uppercase tracking-widest text-accent font-semibold">
              Benefits
            </span>
          </div>
          <h2 className="text-4xl font-bold text-graphite mb-8">
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
              <div key={idx} className="flex items-start gap-4 p-6 bg-gray-50 border border-gray-200 rounded-sm hover:border-accent hover:shadow-lg transition-all group">
                <div className="flex-shrink-0 w-8 h-8 bg-accent rounded-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Check className="w-5 h-5 text-white" strokeWidth={2} />
                </div>
                <p className="text-lg text-gray-700 pt-1">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-graphite text-white rounded-sm p-12">
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
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-graphite rounded-sm font-bold hover:bg-gray-100 transition-all"
              >
                <span>Contact Technical Team</span>
                <ArrowRight className="w-5 h-5" strokeWidth={2} />
              </a>
            </div>
          </div>
        </section>

      </div>

    </main>
  );
}