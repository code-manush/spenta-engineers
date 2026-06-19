import { Clock, CheckCircle2, ClipboardList, Crosshair, Settings, ShieldCheck, Wrench, ArrowRight } from 'lucide-react';
import type { Metadata } from "next";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Spenta Engineers, a manufacturer focused on precision engineering, quality-controlled manufacturing, and reliable drilling solutions.",
};

export default function AboutPage() {
    return (
        <section className="bg-white">
            {/* HERO */}
            <section
                className="relative h-[85vh] text-white bg-cover bg-center flex items-end"
                style={{ backgroundImage: "url('/about-hero.jpg')" }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/50"></div>

                {/* Subtle grid overlay */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                                         linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                        backgroundSize: '50px 50px'
                    }} />
                </div>

                <div className="relative max-w-7xl mx-auto px-6 pb-24">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="h-px w-12 bg-blue-500" />
                        <p className="uppercase tracking-widest text-gray-300">
                            About Us
                        </p>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                        Engineering Trust.<br />Manufacturing Reliability.
                    </h1>
                    <p className="text-xl max-w-3xl text-gray-200 leading-relaxed">
                        Spenta Engineers is a manufacturing-driven company delivering
                        precision drilling tools designed to perform reliably in demanding
                        field conditions.
                    </p>
                </div>
            </section>

            {/* Breadcrumbs */}
            <section className="bg-gray-50 border-b border-gray-200 py-4">
                <div className="max-w-7xl mx-auto px-6">
                    <Breadcrumbs
                        items={[
                            { label: "Home", href: "/" },
                            { label: "About Us", href: "/about" },
                        ]}
                    />
                </div>
            </section>

            {/* STORY */}
            <section className="py-28 bg-white">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="h-px w-8 bg-accent" />
                            <span className="text-sm uppercase tracking-widest text-accent font-semibold">
                                Our Journey
                            </span>
                        </div>
                        <h2 className="text-4xl font-bold text-graphite mb-8">
                            Our Story
                        </h2>

                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            Spenta Engineers was established with a clear focus on
                            manufacturing precision drilling tools that meet the practical
                            demands of mineral exploration, mining, and geotechnical drilling.
                        </p>

                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            We believe that dependable performance in the field comes from
                            disciplined engineering, controlled manufacturing processes, and
                            uncompromising quality standards.
                        </p>

                        <p className="text-lg text-gray-700 leading-relaxed">
                            Our products are built not for catalog appeal, but for real-world
                            drilling environments where reliability matters most.
                        </p>
                    </div>

                    <div className="relative group">
                        <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 to-gray-600/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <Image
                            src="/about-hero.jpg"
                            alt="Manufacturing Facility"
                            width={800}
                            height={480}
                            className="relative w-full h-[480px] object-cover rounded-sm shadow-2xl border border-gray-200 transition-transform duration-500 group-hover:scale-[1.02]"
                        />
                    </div>

                </div>
            </section>

            {/* METRICS */}
            <section className="py-24 bg-gray-50 border-y border-gray-200">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12">

                    {[
                        { value: "10+", label: "Years of Experience", icon: (
                            <Clock className="w-8 h-8 text-accent" strokeWidth={2} />
                        )},
                        { value: "500+", label: "Projects Supported", icon: (
                            <CheckCircle2 className="w-8 h-8 text-accent" strokeWidth={2} />
                        )},
                        { value: "100%", label: "Quality-Controlled Production", icon: (
                            <ClipboardList className="w-8 h-8 text-accent" strokeWidth={2} />
                        )},
                        { value: "Worldwide", label: "Operational Reach", icon: (
                            <Crosshair className="w-8 h-8 text-accent" strokeWidth={2} />
                        )},
                    ].map((item, i) => (
                        <div key={i} className="text-center group">
                            <div className="flex justify-center mb-4">
                                <div className="p-4 bg-blue-50 rounded-sm group-hover:bg-blue-100 transition-colors">
                                    {item.icon}
                                </div>
                            </div>
                            <h3 className="text-5xl font-bold text-graphite mb-2">
                                {item.value}
                            </h3>
                            <p className="text-lg text-gray-600">{item.label}</p>
                        </div>
                    ))}

                </div>
            </section>

            {/* FOUNDER */}
            <section className="py-28 bg-white">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

                    {/* Image */}
                    <div className="relative group">
                        <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 to-gray-600/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <Image
                            src="/f.png"
                            alt="Founder – Spenta Engineers"
                            width={800}
                            height={520}
                            className="relative w-full h-[520px] object-cover rounded-sm shadow-2xl border border-gray-200 transition-transform duration-500 group-hover:scale-[1.02]"
                        />
                    </div>

                    {/* Text */}
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="h-px w-8 bg-accent" />
                            <p className="uppercase tracking-widest text-accent font-semibold text-sm">
                                Leadership
                            </p>
                        </div>
                        <h2 className="text-4xl font-bold text-graphite mb-6">
                            Founder&apos;s Message
                        </h2>

                        <div className="space-y-6 text-lg text-gray-700 leading-relaxed mb-8">
                            <p className="pl-6 border-l-4 border-accent">
                                &quot;Spenta Engineers was founded with a simple belief — that drilling
                                tools should be engineered with responsibility, precision, and a
                                deep understanding of field realities.
                            </p>

                            <p className="pl-6 border-l-4 border-gray-300">
                                Every product we manufacture reflects our commitment to quality,
                                performance, and long-term partnerships with our clients.&quot;
                            </p>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-sm border border-gray-200">
                            <p className="text-xl font-bold text-graphite mb-1">
                                Mr. Rohitkumar Patel
                            </p>
                            <p className="text-lg text-gray-600 mb-2">
                                Founder & Managing Director
                            </p>
                            <p className="text-sm text-gray-500">
                                With over 15 years of experience in drilling tools manufacturing and field applications.
                            </p>
                        </div>

                    </div>

                </div>
            </section>

            {/* VALUES */}
            <section className="py-28 bg-graphite text-white">
                <div className="max-w-7xl mx-auto px-6">

                    <div className="flex items-center gap-3 mb-6">
                        <div className="h-px w-12 bg-blue-500" />
                        <span className="text-sm uppercase tracking-widest text-blue-400 font-semibold">
                            Our Values
                        </span>
                    </div>
                    <h2 className="text-4xl font-bold mb-16">
                        What Defines Us
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            {
                                title: "Engineering Discipline",
                                desc: "Precision-driven manufacturing backed by controlled processes.",
                                icon: (
                                    <Settings className="w-6 h-6" strokeWidth={2} />
                                )
                            },
                            {
                                title: "Quality Without Compromise",
                                desc: "Inspection and verification at every critical stage.",
                                icon: (
                                    <ShieldCheck className="w-6 h-6" strokeWidth={2} />
                                )
                            },
                            {
                                title: "Field-Oriented Design",
                                desc: "Products built for real drilling conditions, not just specifications.",
                                icon: (
                                    <Wrench className="w-6 h-6" strokeWidth={2} />
                                )
                            },
                        ].map((item, i) => (
                            <div key={i} className="group">
                                <div className="mb-4 inline-block p-4 bg-white/5 border border-white/10 rounded-sm group-hover:bg-accent group-hover:border-accent transition-all">
                                    {item.icon}
                                </div>
                                <h3 className="text-2xl font-semibold mb-4">
                                    {item.title}
                                </h3>
                                <p className="text-gray-300 text-lg leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-white text-center">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-4xl font-bold text-graphite mb-6">
                        Build With a Trusted Manufacturing Partner
                    </h2>
                    <p className="text-lg text-gray-600 mb-10">
                        Let&apos;s discuss how Spenta Engineers can support your drilling
                        requirements with precision-engineered solutions.
                    </p>
                    <a
                        href="/contact"
                        className="inline-flex items-center gap-2 bg-accent hover:bg-blue-700 text-white px-12 py-5 rounded-sm font-bold text-lg transition-all hover:scale-[1.02] shadow-lg group"
                    >
                        <span>Contact Us</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" strokeWidth={2} />
                    </a>
                </div>
            </section>

        </section>
    );
}