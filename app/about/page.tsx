import type { Metadata } from "next";

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
                <div className="absolute inset-0 bg-black/75"></div>

                <div className="relative max-w-7xl mx-auto px-6 pb-24">
                    <p className="uppercase tracking-widest text-gray-300 mb-4">
                        About Us
                    </p>
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

            {/* STORY */}
            <section className="py-28 bg-white">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

                    <div>
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

                    <div>
                        <img
                            src="/about-detail.jpg"
                            alt="Manufacturing Facility"
                            className="w-full h-[480px] object-cover rounded-2xl shadow-xl border"
                        />
                    </div>

                </div>
            </section>

            {/* METRICS */}
            <section className="py-24 bg-gray-100 border-y border-gray-200">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">

                    {[
                        { value: "10+", label: "Years of Experience" },
                        { value: "500+", label: "Projects Supported" },
                        { value: "100%", label: "Quality-Controlled Production" },
                        { value: "Worldwide", label: "Operational Reach" },
                    ].map((item, i) => (
                        <div key={i}>
                            <h3 className="text-5xl font-bold text-blue-900 mb-2">
                                {item.value}
                            </h3>
                            <p className="text-lg text-gray-700">{item.label}</p>
                        </div>
                    ))}

                </div>
            </section>

            {/* FOUNDER */}
            <section className="py-28 bg-white">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

                    {/* Image */}
                    <div>
                        <img
                            src="/f.png"
                            alt="Founder – Spenta Engineers"
                            className="w-full h-[520px] object-cover rounded-2xl shadow-xl"
                        />
                    </div>

                    {/* Text */}
                    <div>
                        <p className="uppercase tracking-widest text-gray-500 mb-4">
                            Leadership
                        </p>
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">
                            Founder’s Message
                        </h2>

                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            “Spenta Engineers was founded with a simple belief — that drilling
                            tools should be engineered with responsibility, precision, and a
                            deep understanding of field realities.
                        </p>

                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            Every product we manufacture reflects our commitment to quality,
                            performance, and long-term partnerships with our clients.”
                        </p>

                        <div className="mt-6">
                            <p className="text-xl font-semibold text-gray-900">
                                — Mr. Rohitkumar Patel
                            </p>
                            <p className="text-lg text-gray-600">
                                Founder & Managing Director, Spenta Engineers
                            </p>
                            <p className="text-md text-gray-500 mt-2">
                                With over 15 years of experience in drilling tools manufacturing and field applications.
                            </p>
                        </div>

                    </div>

                </div>
            </section>

            {/* VALUES */}
            <section className="py-28 bg-gray-900 text-white">
                <div className="max-w-7xl mx-auto px-6">

                    <h2 className="text-4xl font-bold mb-16">
                        What Defines Us
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            {
                                title: "Engineering Discipline",
                                desc: "Precision-driven manufacturing backed by controlled processes.",
                            },
                            {
                                title: "Quality Without Compromise",
                                desc: "Inspection and verification at every critical stage.",
                            },
                            {
                                title: "Field-Oriented Design",
                                desc: "Products built for real drilling conditions, not just specifications.",
                            },
                        ].map((item, i) => (
                            <div key={i}>
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
                        Let’s discuss how Spenta Engineers can support your drilling
                        requirements with precision-engineered solutions.
                    </p>
                    <a
                        href="/contact"
                        className="inline-block bg-blue-900 text-white px-12 py-5 rounded-lg font-bold text-lg hover:bg-blue-800 transition"
                    >
                        Contact Us
                    </a>
                </div>
            </section>

        </section>
    );
}
