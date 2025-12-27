export default function ManufacturingQualityPage() {
    return (
        <section className="py-0 bg-white">
            <div className="mx-auto px-0">

                {/* Hero */}
                <section
                    className="relative py-50 text-white bg-cover bg-center"
                    style={{
                        backgroundImage: "url('/manufacturing.jpg')",
                    }}
                >
                    <div className="absolute inset-0 bg-black/60"></div>

                    <div className="relative max-w-7xl mx-auto px-6">
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-normal">
                            Manufacturing & Quality
                        </h1>

                        <p className="text-xl text-gray-200 max-w-3xl leading-relaxed">
                            At Spenta Engineers, manufacturing excellence and quality control
                            are at the core of every drilling tool we produce.
                        </p>
                    </div>
                </section>

                {/* Manufacturing Philosophy */}
                <section className="py-24 bg-white">
                    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                        {/* Text */}
                        <div>
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">
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
                        <div className="relative">
                            <img
                                src="/manufacturing-detail.webp"
                                alt="Precision Manufacturing Process"
                                className="w-full h-[420px] object-cover rounded-xl border border-gray-200 shadow-lg"
                            />
                        </div>

                    </div>
                </section>

                {/* Manufacturing Process */}
                <section className="py-24 bg-gray-100 border-t border-gray-200">
                    <div className="max-w-7xl mx-auto px-6">

                        <div className="mb-16 max-w-3xl">
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">
                                Controlled Manufacturing Process
                            </h2>
                            <p className="text-lg text-gray-600">
                                A structured process flow ensures repeatable quality and reliable
                                performance across all products.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                            {[
                                {
                                    title: "Material Selection",
                                    desc: "Careful selection of high-grade steels, alloys, and raw materials based on application requirements.",
                                    image: "/material-selection.jpg",
                                },
                                {
                                    title: "Precision Machining",
                                    desc: "CNC machining and controlled fabrication ensure accurate dimensions and tight tolerances.",
                                    image: "/precision-machining.jpg",
                                },
                                {
                                    title: "Assembly & Finishing",
                                    desc: "Components are assembled and finished to ensure smooth operation and durability in field use.",
                                    image: "/assembly-finishing.jpg",
                                },
                            ].map((step, i) => (
                                <div
                                    key={i}
                                    className="bg-white rounded-xl border border-gray-200 shadow-md hover:shadow-xl transition-all overflow-hidden"
                                >
                                    {/* Image */}
                                    <img
                                        src={step.image}
                                        alt={step.title}
                                        className="w-full h-48 object-cover"
                                    />

                                    {/* Content */}
                                    <div className="p-8">
                                        <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                                            {step.title}
                                        </h3>
                                        <p className="text-gray-600 text-lg leading-relaxed">
                                            {step.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </section>


                {/* Quality Assurance */}
                <section className="py-24 bg-white">
                    <div className="max-w-7xl mx-auto px-6">

                        <div className="mb-16 max-w-3xl">
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">
                                Quality Assurance & Inspection
                            </h2>
                            <p className="text-lg text-gray-600">
                                Quality is built into every stage of production — not inspected
                                in at the end.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
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
                                    className="flex items-start p-6 bg-gray-50 border border-gray-200 rounded-lg"
                                >
                                    <span className="text-blue-900 text-xl font-bold mr-4">✓</span>
                                    <p className="text-lg text-gray-700">{point}</p>
                                </div>
                            ))}
                        </div>

                    </div>
                </section>

                {/* Field Reliability */}
                <section className="py-24 bg-gray-100 border-t border-gray-200">
                    <div className="max-w-7xl mx-auto px-6">

                        <div className="mb-16 max-w-3xl">
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">
                                Designed for Field Reliability
                            </h2>
                            <p className="text-lg text-gray-600">
                                Our products are developed with real-world drilling conditions in mind.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            {[
                                "Designed to withstand high torque and impact loads",
                                "Consistent performance across varying ground conditions",
                                "Reduced downtime through reliable tool performance",
                                "Proven compatibility with standard drilling systems",
                            ].map((point, index) => (
                                <div
                                    key={index}
                                    className="bg-white p-8 border border-gray-200 rounded-xl shadow-md"
                                >
                                    <p className="text-lg text-gray-700">{point}</p>
                                </div>
                            ))}
                        </div>

                    </div>
                </section>

                {/* CTA */}
                <div className="bg-gray-900 text-white rounded-xl p-12 text-center">
                    <h3 className="text-3xl font-bold mb-4">
                        Looking for a Reliable Manufacturing Partner?
                    </h3>
                    <p className="text-lg text-gray-300 mb-8">
                        Contact Spenta Engineers to discuss manufacturing capabilities,
                        quality standards, and supply requirements.
                    </p>
                    <a
                        href="/contact"
                        className="inline-block bg-white text-gray-900 px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition"
                    >
                        Contact Us
                    </a>
                </div>

            </div>
        </section>
    );
}