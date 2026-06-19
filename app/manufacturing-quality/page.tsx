import { ClipboardList, Settings, CheckCircle2, Check, Zap, Building, Clock, Factory, ArrowRight } from 'lucide-react';
import type { Metadata } from "next";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Manufacturing & Quality",
  description:
    "Explore Spenta Engineers' manufacturing processes, quality control systems, and quality assurance practices ensuring consistent performance and reliability in drilling tools.",
  alternates: {
    canonical: "/manufacturing-quality",
  },
  openGraph: {
    title: "Manufacturing & Quality | Spenta Engineers",
    description:
      "Learn about our precision manufacturing processes and rigorous quality control standards.",
    url: "https://www.spentaengineers.com/manufacturing-quality",
  },
};

export default function ManufacturingQualityPage() {
    return (
        <section className="bg-white">
            {/* Breadcrumbs */}
            <section className="bg-gray-50 border-b border-gray-200 py-4 pt-24 sm:pt-28 md:pt-32 lg:pt-36 xl:pt-40">
                <div className="max-w-7xl mx-auto px-6">
                    <Breadcrumbs
                        items={[
                            { label: "Home", href: "/" },
                            { label: "Manufacturing & Quality", href: "/manufacturing-quality" },
                        ]}
                    />
                </div>
            </section>

            {/* Hero */}
            <section
                className="relative py-50 text-white bg-cover bg-center"
                style={{
                    backgroundImage: "url('/manufacturing.jpg')",
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
                        <span className="uppercase tracking-widest text-gray-300">
                            Our Process
                        </span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-normal">
                        Manufacturing & Quality
                    </h1>

                    <p className="text-xl text-gray-200 max-w-3xl leading-relaxed">
                        At Spenta Engineers, manufacturing excellence and quality control
                        are at the core of every drilling tool we produce.
                    </p>
                </div>
            </section>

            {/* Breadcrumbs */}
            <section className="bg-gray-50 border-b border-gray-200 py-4">
                <div className="max-w-7xl mx-auto px-6">
                    <Breadcrumbs
                        items={[
                            { label: "Home", href: "/" },
                            { label: "Manufacturing & Quality", href: "/manufacturing-quality" },
                        ]}
                    />
                </div>
            </section>

            {/* Manufacturing Philosophy */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Text */}
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="h-px w-8 bg-accent" />
                            <span className="text-sm uppercase tracking-widest text-accent font-semibold">
                                Our Approach
                            </span>
                        </div>
                        <h2 className="text-4xl font-bold text-graphite mb-6">
                            Precision Manufacturing Philosophy
                        </h2>

                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            Our manufacturing approach is focused on precision, consistency,
                            and reliability. Every component is produced using controlled
                            processes designed to meet demanding drilling conditions.
                        </p>

                        <p className="text-lg text-gray-700 leading-relaxed">
                            From material selection to final inspection, each stage of
                            production is carefully monitored to ensure dimensional accuracy,
                            strength, and performance consistency.
                        </p>
                    </div>

                    {/* Image */}
                    <div className="relative group">
                        <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 to-gray-600/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <Image
                            src="/manufacturing-detail.webp"
                            alt="Precision Manufacturing Process"
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                        />
                    </div>

                </div>
            </section>

            {/* Manufacturing Process */}
            <section className="py-24 bg-gradient-to-br from-gray-50 to-white border-t border-gray-200">
                <div className="max-w-7xl mx-auto px-6">

                    <div className="mb-16 max-w-3xl">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="h-px w-8 bg-accent" />
                            <span className="text-sm uppercase tracking-widest text-accent font-semibold">
                                Process Flow
                            </span>
                        </div>
                        <h2 className="text-4xl font-bold text-graphite mb-4">
                            Controlled Manufacturing Process
                        </h2>
                        <p className="text-lg text-gray-600">
                            A structured process flow ensures repeatable quality and reliable
                            performance across all products.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Material Selection",
                                desc: "Careful selection of high-grade steels, alloys, and raw materials based on application requirements.",
                                image: "/material-selection.jpg",
                                icon: (
                                    <ClipboardList className="w-6 h-6" strokeWidth={2} />
                                ),
                                number: "01"
                            },
                            {
                                title: "Precision Machining",
                                desc: "CNC machining and controlled fabrication ensure accurate dimensions and tight tolerances.",
                                image: "/precision-machining.jpg",
                                icon: (
                                    <Settings className="w-6 h-6" strokeWidth={2} />
                                ),
                                number: "02"
                            },
                            {
                                title: "Assembly & Finishing",
                                desc: "Components are assembled and finished to ensure smooth operation and durability in field use.",
                                image: "/assembly-finishing.jpg",
                                icon: (
                                    <CheckCircle2 className="w-6 h-6" strokeWidth={2} />
                                ),
                                number: "03"
                            },
                        ].map((step, i) => (
                            <div
                                key={i}
                                className="group bg-white rounded-sm border-2 border-gray-200 shadow-md hover:shadow-2xl hover:border-accent transition-all overflow-hidden"
                            >
                                {/* Image */}
                                <div className="relative h-48 overflow-hidden bg-gray-100">
                                    <Image
                                        src={step.image}
                                        alt={step.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                    
                                    {/* Number badge */}
                                    <div className="absolute top-4 left-4 w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-sm flex items-center justify-center text-white font-bold text-lg">
                                        {step.number}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-10 h-10 bg-blue-50 border border-blue-100 rounded-sm flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white group-hover:border-accent transition-all">
                                            {step.icon}
                                        </div>
                                        <h3 className="text-xl font-bold text-graphite">
                                            {step.title}
                                        </h3>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed">
                                        {step.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* Quality Assurance */}
            <section className="py-24 bg-white border-t border-gray-200">
                <div className="max-w-7xl mx-auto px-6">

                    <div className="mb-16 max-w-3xl">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="h-px w-8 bg-accent" />
                            <span className="text-sm uppercase tracking-widest text-accent font-semibold">
                                Quality Control
                            </span>
                        </div>
                        <h2 className="text-4xl font-bold text-graphite mb-4">
                            Quality Assurance & Inspection
                        </h2>
                        <p className="text-lg text-gray-600">
                            Quality is built into every stage of production — not inspected in at the end.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            "Dimensional inspection at critical stages",
                            "Material verification and hardness testing",
                            "Thread and fitment accuracy checks",
                            "Visual and functional inspection",
                            "Batch-level quality verification",
                            "Traceability across production lots",
                        ].map((point, index) => (
                            <div
                                key={index}
                                className="flex items-start gap-4 p-6 bg-gray-50 border border-gray-200 rounded-sm hover:border-accent hover:shadow-lg transition-all group"
                            >
                                <div className="flex-shrink-0 w-8 h-8 bg-accent rounded-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <Check className="w-5 h-5 text-white" strokeWidth={2} />
                                </div>
                                <p className="text-lg text-gray-700">{point}</p>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* Field Reliability */}
            <section className="py-24 bg-gradient-to-br from-gray-50 to-white border-t border-gray-200">
                <div className="max-w-7xl mx-auto px-6">

                    <div className="mb-16 max-w-3xl">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="h-px w-8 bg-accent" />
                            <span className="text-sm uppercase tracking-widest text-accent font-semibold">
                                Performance
                            </span>
                        </div>
                        <h2 className="text-4xl font-bold text-graphite mb-4">
                            Designed for Field Reliability
                        </h2>
                        <p className="text-lg text-gray-600">
                            Our products are developed with real-world drilling conditions in mind.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            {
                                title: "High Load Capacity",
                                desc: "Designed to withstand high torque and impact loads",
                                icon: (
                                    <Zap className="w-6 h-6" strokeWidth={2} />
                                )
                            },
                            {
                                title: "Consistent Performance",
                                desc: "Reliable operation across varying ground conditions",
                                icon: (
                                    <Building className="w-6 h-6" strokeWidth={2} />
                                )
                            },
                            {
                                title: "Reduced Downtime",
                                desc: "Reliable tool performance minimizes operational interruptions",
                                icon: (
                                    <Clock className="w-6 h-6" strokeWidth={2} />
                                )
                            },
                            {
                                title: "System Compatibility",
                                desc: "Proven compatibility with standard drilling systems",
                                icon: (
                                    <Factory className="w-6 h-6" strokeWidth={2} />
                                )
                            },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="bg-white p-8 border-2 border-gray-200 rounded-sm shadow-md hover:shadow-xl hover:border-accent transition-all group"
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 bg-blue-50 border border-blue-100 rounded-sm flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white group-hover:border-accent transition-all">
                                        {item.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-graphite">
                                        {item.title}
                                    </h3>
                                </div>
                                <p className="text-gray-600 leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-graphite text-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="bg-gradient-to-r from-blue-900/50 to-graphite/50 backdrop-blur-sm border border-white/10 rounded-sm p-12 text-center">
                        <h3 className="text-3xl font-bold mb-4">
                            Looking for a Reliable Manufacturing Partner?
                        </h3>
                        <p className="text-lg text-gray-300 mb-8">
                            Contact Spenta Engineers to discuss manufacturing capabilities,
                            quality standards, and supply requirements.
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