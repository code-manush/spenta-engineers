"use client";

import {
  ClipboardList,
  CheckCircle2,
  Check,
  Zap,
  Factory,
  ArrowRight,
  Droplets,
  Gauge,
  Shield,
  Layers,
  Settings,
} from "lucide-react";
import RequestQuoteModal from "@/app/products/RequestQuoteModal";
import AddToCartButton from "@/components/products/AddToCartButton";
import Image from "next/image";
import { useState } from "react";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function DosingSkidSystemPage() {
  const [activeImage, setActiveImage] = useState(0);

  const images = [
    { src: "/dosing-skid.png", alt: "Dosing Skid System Overview" },
    { src: "/dosing-skid-2.png", alt: "Precision Dosing Pumps" },
    { src: "/dosing-skid-3.png", alt: "Storage and Mixing Tank" }
  ];

  return (
    <main className="bg-white">
      {/* ── HERO ── */}
      <section className="relative py-50 bg-graphite text-white overflow-hidden">
        {/* Subtle grid overlay */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-blue-500" />
            <span className="uppercase tracking-widest text-gray-400 text-sm">
              Products
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Dosing Skid System
          </h1>
          <p className="max-w-3xl text-gray-300 text-xl leading-relaxed">
            Fully integrated, pre-assembled chemical dosing packages engineered
            for precise, safe, and uninterrupted chemical injection across
            demanding industrial applications.
          </p>
        </div>
      </section>

      {/* ── BREADCRUMBS ── */}
      <section className="bg-gray-50 border-b border-gray-200 py-4">
        <div className="max-w-7xl mx-auto px-6">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Products", href: "/products" },
              {
                label: "Dosing Skid System",
                href: "/products/dosing-skid-system",
              },
            ]}
          />
        </div>
      </section>

      {/* ── PRODUCT IMAGES GALLERY ── */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          {/* Main Image */}
          <div className="relative h-[500px] bg-gray-100 rounded-sm overflow-hidden shadow-2xl border-2 border-gray-200 mb-6">
            <Image
              src={images[activeImage].src}
              alt={images[activeImage].alt}
              fill
              className="object-cover"
            />
          </div>

          {/* Thumbnail Navigation */}
          <div className="grid grid-cols-3 gap-4 max-w-3xl">
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImage(idx)}
                className={`relative h-32 bg-gray-100 rounded-sm overflow-hidden transition-all ${activeImage === idx
                  ? 'ring-4 ring-accent scale-105'
                  : 'opacity-60 hover:opacity-100'
                  }`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── THREE KEY VALUE PROPS ── */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-accent" />
            <span className="text-sm uppercase tracking-widest text-accent font-semibold">
              Why Choose Our Skids
            </span>
          </div>
          <h2 className="text-4xl font-bold text-graphite mb-12">
            Built for Industrial Reliability
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Layers className="w-7 h-7 text-white" strokeWidth={2} />,
                title: "Turnkey Engineering",
                desc: "Fully integrated and pre-assembled industrial chemical feed skids — delivered ready to connect and commission, eliminating on-site fabrication risk.",
                highlight: "Pre-Assembled",
              },
              {
                icon: <Gauge className="w-7 h-7 text-white" strokeWidth={2} />,
                title: "Continuous Performance",
                desc: "Configured with duty and standby pump arrangements to guarantee uninterrupted dosing operations even during maintenance or pump failure.",
                highlight: "Duty / Standby",
              },
              {
                icon: (
                  <Shield className="w-7 h-7 text-white" strokeWidth={2} />
                ),
                title: "Safe Handling",
                desc: "Double-contained chemical skid design maximises operator protection against leaks and spills, meeting stringent industrial safety standards.",
                highlight: "Double Contained",
              },
            ].map((card, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-sm border-2 border-gray-200 shadow-lg hover:border-accent hover:shadow-2xl transition-all group"
              >
                {/* Icon badge */}
                <div className="w-14 h-14 bg-accent rounded-sm flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  {card.icon}
                </div>

                {/* Highlight tag */}
                <span className="inline-block text-xs font-bold uppercase tracking-widest bg-blue-50 text-accent px-3 py-1 rounded-full mb-4 border border-blue-100">
                  {card.highlight}
                </span>

                <h3 className="text-xl font-bold text-graphite mb-3">
                  {card.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-24 space-y-24">
        {/* ── WHAT IS A DOSING SKID ── */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-accent" />
            <span className="text-sm uppercase tracking-widest text-accent font-semibold">
              Overview
            </span>
          </div>
          <h2 className="text-4xl font-bold text-graphite mb-6">
            What is a Dosing Skid System?
          </h2>
          <p className="max-w-4xl text-lg text-gray-700 leading-relaxed mb-4">
            A Dosing Skid System (also referred to as a Chemical Injection
            System or Chemical Feed Skid) is a factory-assembled,
            self-contained unit designed to store, condition, and precisely
            inject chemicals into industrial processes at controlled flow rates.
          </p>
          <p className="max-w-4xl text-lg text-gray-700 leading-relaxed">
            Spenta Engineers designs and supplies complete dosing skid packages
            — integrating storage tanks, metering pumps, instrumentation, and
            safety accessories on a single structural skid frame. Each system
            arrives pre-piped, pre-wired, and factory-tested, ready for fast
            site installation and immediate commissioning.
          </p>
        </section>

        {/* ── SYSTEM COMPONENTS ── */}
        <section className="bg-gradient-to-br from-gray-50 to-white p-12 rounded-sm border-2 border-gray-200 shadow-lg">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-accent" />
            <span className="text-sm uppercase tracking-widest text-accent font-semibold">
              System Components
            </span>
          </div>
          <h2 className="text-4xl font-bold text-graphite mb-10">
            What's Inside the Skid
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <Droplets
                    className="w-6 h-6 text-accent"
                    strokeWidth={2}
                  />
                ),
                number: "01",
                title: "Storage & Mixing Tank",
                points: [
                  "Heavy-duty PE / FRP construction for corrosion resistance",
                  "High-performance motorized agitator for solution homogeneity",
                  "Automated high/low level alarms for continuous monitoring",
                  "Available in capacities sized to process demand",
                ],
              },
              {
                icon: (
                  <Gauge className="w-6 h-6 text-accent" strokeWidth={2} />
                ),
                number: "02",
                title: "Precision Dosing Pump",
                points: [
                  "Advanced digital electronic diaphragm dosing pump",
                  "Duty / standby configuration for uninterrupted operation",
                  "Micro-adjustable stroke for exact dosing rates",
                  "Pulsation-free delivery for process stability",
                ],
              },
              {
                icon: (
                  <Settings className="w-6 h-6 text-accent" strokeWidth={2} />
                ),
                number: "03",
                title: "Ancillary Accessories",
                points: [
                  "Pulsation dampener for smooth downstream flow",
                  "Calibration pot for accurate field verification",
                  "Level measurement instruments",
                  "Valves, strainers, and pressure relief valve (PRV)",
                ],
              },
            ].map((comp, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-sm border-2 border-gray-200 shadow-md hover:border-accent hover:shadow-xl transition-all group"
              >
                {/* Number + icon header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 bg-blue-50 border-2 border-blue-100 rounded-sm flex items-center justify-center font-bold text-accent text-sm group-hover:bg-accent group-hover:text-white group-hover:border-accent transition-all">
                    {comp.number}
                  </div>
                  <div className="w-10 h-10 bg-blue-50 border border-blue-100 rounded-sm flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all">
                    {comp.icon}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-graphite mb-4">
                  {comp.title}
                </h3>
                <ul className="space-y-3">
                  {comp.points.map((pt, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-2 text-gray-600"
                    >
                      <CheckCircle2
                        className="w-4 h-4 text-accent flex-shrink-0 mt-0.5"
                        strokeWidth={2}
                      />
                      <span className="text-sm leading-relaxed">{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ── SPECIFICATIONS TABLE ── */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-accent" />
            <span className="text-sm uppercase tracking-widest text-accent font-semibold">
              Technical Data
            </span>
          </div>
          <h2 className="text-4xl font-bold text-graphite mb-8">
            Standard Specifications
          </h2>

          <div className="overflow-hidden rounded-sm border-2 border-gray-200 shadow-lg">
            <table className="w-full">
              <tbody className="text-lg">
                {[
                  {
                    label: "Skid Type",
                    value:
                      "Pre-assembled, factory-tested Chemical Dosing / Feed Skid",
                  },
                  {
                    label: "Tank Material",
                    value: "PE (Polyethylene) / FRP (Fibre-Reinforced Plastic)",
                  },
                  {
                    label: "Pump Type",
                    value: "Electronic Diaphragm Dosing Pump",
                  },
                  {
                    label: "Pump Configuration",
                    value: "Duty / Standby (1+1 or 2+1 as required)",
                  },
                  {
                    label: "Dosing Control",
                    value: "Micro-adjustable stroke frequency & length",
                  },
                  {
                    label: "Containment",
                    value: "Double-contained skid design as standard",
                  },
                  {
                    label: "Level Monitoring",
                    value: "Automated high & low level alarms",
                  },
                  {
                    label: "Accessories",
                    value:
                      "Pulsation dampener, calibration pot, PRV, strainers, instrumentation",
                  },
                  {
                    label: "Skid Frame",
                    value:
                      "Structural steel with corrosion-resistant coating / SS option available",
                  },
                  {
                    label: "Typical Application",
                    value:
                      "Water treatment, Oil & Gas, Chemical & Fertilizer industries",
                  },
                  {
                    label: "Customisation",
                    value:
                      "Tailored to specific chemical properties, flow rates & safety guidelines",
                  },
                ].map((row, idx) => (
                  <tr
                    key={idx}
                    className="border-b border-gray-200 hover:bg-gray-50 transition-colors"
                  >
                    <td className="py-5 px-6 font-semibold text-graphite bg-gray-50 w-1/3">
                      {row.label}
                    </td>
                    <td className="py-5 px-6 text-gray-700">{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── FEATURES GRID ── */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Selection Guidance */}
          <div className="bg-white p-8 rounded-sm border-2 border-gray-200 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <ClipboardList
                className="w-6 h-6 text-accent"
                strokeWidth={2}
              />
              <h3 className="text-2xl font-bold text-graphite">
                Selection Guidance
              </h3>
            </div>
            <ul className="space-y-4">
              {[
                "Select tank capacity and pump capacity based on daily chemical consumption and injection rate requirements",
                "Specify the chemical being dosed — material compatibility of tank, pump diaphragm, valves and seals must match",
                "Choose duty/standby pump configuration for critical processes where zero downtime is required",
                "Double-contained skids are recommended for hazardous or corrosive chemicals",
                "Consult our engineering team for flow rate calculations, installation environment, and safety classification",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-gray-700">
                  <CheckCircle2
                    className="w-5 h-5 text-accent flex-shrink-0 mt-1"
                    strokeWidth={2}
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Key Advantages */}
          <div className="bg-white p-8 rounded-sm border-2 border-gray-200 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <Check className="w-6 h-6 text-accent" strokeWidth={2} />
              <h3 className="text-2xl font-bold text-graphite">
                Key Advantages
              </h3>
            </div>
            <ul className="space-y-4">
              {[
                "Turnkey supply reduces on-site civil and mechanical integration effort",
                "Factory-assembled and tested before dispatch — minimises commissioning time",
                "Pulsation-free diaphragm dosing ensures stable, accurate chemical injection",
                "Duty/standby pump configuration eliminates single-point failure risk",
                "Modular design allows future capacity upgrades without full replacement",
                "Comprehensive skid accessories ensure a compliant, safe and operable system from day one",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-gray-700">
                  <Zap
                    className="w-5 h-5 text-accent flex-shrink-0 mt-1"
                    strokeWidth={2}
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── INDUSTRIES SERVED ── */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-accent" />
            <span className="text-sm uppercase tracking-widest text-accent font-semibold">
              Applications
            </span>
          </div>
          <h2 className="text-4xl font-bold text-graphite mb-8">
            Industries We Serve
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Droplets className="w-6 h-6" strokeWidth={2} />,
                title: "Water & Wastewater Treatment",
                desc: "Dosing of coagulants, flocculants, disinfectants (chlorine, hypochlorite), pH correction chemicals, and scale inhibitors in municipal and industrial water treatment plants.",
              },
              {
                icon: <Factory className="w-6 h-6" strokeWidth={2} />,
                title: "Fertilizer & Chemical Plants",
                desc: "Precise injection of reagents, acids, alkalis, and additives into process streams requiring tight dosing control and chemical-resistant containment.",
              },
              {
                icon: <Layers className="w-6 h-6" strokeWidth={2} />,
                title: "Oil & Gas Industries",
                desc: "Corrosion inhibitor, scale inhibitor, biocide, and methanol injection systems for upstream, midstream, and downstream oil and gas operations.",
              },
              {
                icon: <Settings className="w-6 h-6" strokeWidth={2} />,
                title: "Chemical Industries",
                desc: "Controlled addition of process chemicals, catalysts, and neutralising agents in chemical manufacturing environments demanding reliability and precision.",
              },
              {
                icon: <Shield className="w-6 h-6" strokeWidth={2} />,
                title: "Power Generation",
                desc: "Boiler feed water chemical treatment, cooling tower chemical dosing, and condensate treatment in thermal and combined-cycle power plants.",
              },
              {
                icon: <Gauge className="w-6 h-6" strokeWidth={2} />,
                title: "Customised Applications",
                desc: "Bespoke dosing skid systems tailored to any industrial process — our engineering team designs around your specific chemical, flow, pressure, and safety requirements.",
              },
            ].map((ind, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-6 bg-gray-50 border-2 border-gray-200 rounded-sm hover:border-accent hover:shadow-lg transition-all group"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-white border border-gray-200 rounded-sm flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white group-hover:border-accent transition-all">
                  {ind.icon}
                </div>
                <div>
                  <h3 className="font-bold text-graphite mb-2">{ind.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {ind.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── COMPATIBILITY / CUSTOMISATION NOTE ── */}
        <section className="bg-blue-50 p-12 rounded-sm border-2 border-blue-200 shadow-lg">
          <div className="flex items-center gap-4 mb-4">
            <Factory className="w-6 h-6 text-accent" strokeWidth={2} />
            <h3 className="text-2xl font-bold text-graphite">
              Custom Engineering Capability
            </h3>
          </div>
          <p className="max-w-4xl text-lg text-gray-700 leading-relaxed">
            Every Spenta Engineers dosing skid is engineered to your specific
            industrial application. We account for chemical properties, required
            injection rates, operating pressure and temperature, site
            classification, local safety regulations, and future capacity
            requirements. Standard or fully bespoke configurations are available
            — contact our engineering team with your process data sheet and we
            will size and specify a system tailored for your plant.
          </p>
        </section>

        {/* ── CTA ── */}
        <section className="bg-graphite text-white rounded-sm p-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div>
              <h3 className="text-3xl font-bold mb-2">
                Request a Quote for Dosing Skid System
              </h3>
              <p className="text-gray-300 text-lg">
                Share your application details — chemical type, dosing rate,
                industry — and our engineering team will design the right skid
                for your process.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
              <RequestQuoteModal productName="Dosing Skid System" sizes={[]} />
              <AddToCartButton productName="Dosing Skid System" />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
