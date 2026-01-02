import type { Metadata } from "next";
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
                            <div className="h-px w-8 bg-blue-600" />
                            <span className="text-sm uppercase tracking-widest text-blue-600 font-semibold">
                                Our Journey
                            </span>
                        </div>
                        <h2 className="text-4xl font-bold text-gray-900 mb-8">
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
                        <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-gray-600/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <img
                            src="/about-hero.jpg"
                            alt="Manufacturing Facility"
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
                            <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        )},
                        { value: "500+", label: "Projects Supported", icon: (
                            <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        )},
                        { value: "100%", label: "Quality-Controlled Production", icon: (
                            <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                            </svg>
                        )},
                        { value: "Worldwide", label: "Operational Reach", icon: (
                            <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        )},
                    ].map((item, i) => (
                        <div key={i} className="text-center group">
                            <div className="flex justify-center mb-4">
                                <div className="p-4 bg-blue-50 rounded-sm group-hover:bg-blue-100 transition-colors">
                                    {item.icon}
                                </div>
                            </div>
                            <h3 className="text-5xl font-bold text-gray-900 mb-2">
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
                        <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-gray-600/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <img
                            src="/f.png"
                            alt="Founder – Spenta Engineers"
                            className="relative w-full h-[520px] object-cover rounded-sm shadow-2xl border border-gray-200 transition-transform duration-500 group-hover:scale-[1.02]"
                        />
                    </div>

                    {/* Text */}
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="h-px w-8 bg-blue-600" />
                            <p className="uppercase tracking-widest text-blue-600 font-semibold text-sm">
                                Leadership
                            </p>
                        </div>
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">
                            Founder's Message
                        </h2>

                        <div className="space-y-6 text-lg text-gray-700 leading-relaxed mb-8">
                            <p className="pl-6 border-l-4 border-blue-600">
                                "Spenta Engineers was founded with a simple belief — that drilling
                                tools should be engineered with responsibility, precision, and a
                                deep understanding of field realities.
                            </p>

                            <p className="pl-6 border-l-4 border-gray-300">
                                Every product we manufacture reflects our commitment to quality,
                                performance, and long-term partnerships with our clients."
                            </p>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-sm border border-gray-200">
                            <p className="text-xl font-bold text-gray-900 mb-1">
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
            <section className="py-28 bg-gray-900 text-white">
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
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                )
                            },
                            {
                                title: "Quality Without Compromise",
                                desc: "Inspection and verification at every critical stage.",
                                icon: (
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                )
                            },
                            {
                                title: "Field-Oriented Design",
                                desc: "Products built for real drilling conditions, not just specifications.",
                                icon: (
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                    </svg>
                                )
                            },
                        ].map((item, i) => (
                            <div key={i} className="group">
                                <div className="mb-4 inline-block p-4 bg-white/5 border border-white/10 rounded-sm group-hover:bg-blue-600 group-hover:border-blue-600 transition-all">
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
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">
                        Build With a Trusted Manufacturing Partner
                    </h2>
                    <p className="text-lg text-gray-600 mb-10">
                        Let's discuss how Spenta Engineers can support your drilling
                        requirements with precision-engineered solutions.
                    </p>
                    <a
                        href="/contact"
                        className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-12 py-5 rounded-sm font-bold text-lg transition-all hover:scale-[1.02] shadow-lg group"
                    >
                        <span>Contact Us</span>
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </a>
                </div>
            </section>

        </section>
    );
}