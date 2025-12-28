import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Drill Rigs",
    description:
        "High-performance drill rigs engineered for mineral exploration, geotechnical investigations, and water well drilling applications.",
};

export default function DrillRigsPage() {
    return (
        <section className="bg-white">

            {/* HERO */}
            <section
                className="relative py-48 bg-cover bg-center text-white"
                style={{ backgroundImage: "url('/drill-rig.jpg')" }}
            >
                <div className="absolute inset-0 bg-black/80"></div>

                <div className="relative max-w-7xl mx-auto px-6">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">
                        Drill Rigs
                    </h1>
                    <p className="text-xl text-gray-200 max-w-3xl leading-relaxed">
                        Spenta Engineers offers durable and efficient drill rigs designed
                        to perform reliably across demanding drilling environments.
                    </p>
                </div>
            </section>

            {/* ENGINEERING OVERVIEW */}
            <section className="py-28">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

                    <div>
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">
                            Engineering Overview
                        </h2>
                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            Our drill rigs are engineered with a focus on structural strength,
                            operational stability, and ease of maintenance. Each rig is
                            designed to deliver consistent performance in challenging field
                            conditions.
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            Configurations are available to support multiple drilling methods
                            and site requirements.
                        </p>
                    </div>

                    <img
                        src="/drill-rig-detail.webp"
                        alt="Drill Rig Engineering Detail"
                        className="w-full h-[420px] object-cover rounded-xl border border-gray-200 shadow-lg"
                    />

                </div>
            </section>

            {/* RIG VARIANTS */}
            <section className="py-28 bg-white">
                <div className="max-w-7xl mx-auto px-6">

                    <h2 className="text-4xl font-bold text-gray-900 mb-14">
                        Drill Rig Variants
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

                        {/* CRAWLER RIG */}
                        <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 shadow hover:shadow-lg transition">
                            <img
                                src="/rig-crawler.webp"
                                alt="Crawler Mounted Drill Rig"
                                className="w-full h-48 object-cover rounded-md mb-6"
                            />
                            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                                Crawler Mounted Drill Rigs
                            </h3>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                Designed for rough terrain and remote locations, crawler-mounted rigs
                                provide excellent stability, mobility, and performance in challenging
                                field conditions.
                            </p>
                        </div>

                        {/* TRUCK RIG */}
                        <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 shadow hover:shadow-lg transition">
                            <img
                                src="/rig-truck.jpg"
                                alt="Truck Mounted Drill Rig"
                                className="w-full h-48 object-cover rounded-md mb-6"
                            />
                            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                                Truck Mounted Drill Rigs
                            </h3>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                Truck-mounted drill rigs offer high mobility and fast deployment,
                                making them ideal for infrastructure projects, water well drilling,
                                and locations requiring frequent relocation.
                            </p>
                        </div>

                        {/* PORTABLE RIG */}
                        <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 shadow hover:shadow-lg transition">
                            <img
                                src="/rig-portable.webp"
                                alt="Portable Drill Rig"
                                className="w-full h-48 object-cover rounded-md mb-6"
                            />
                            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                                Portable Drill Rigs
                            </h3>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                Compact and lightweight portable rigs are engineered for easy transport
                                and quick setup, suitable for confined sites and preliminary
                                exploration work.
                            </p>
                        </div>

                    </div>

                </div>
            </section>

            {/* CATALOGUE CTA */}
            <section className="py-20 bg-gray-100 border-t border-gray-200">
                <div className="max-w-7xl mx-auto px-6 text-center">

                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        Download Complete Product Catalogue
                    </h2>

                    <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-10">
                        Access detailed specifications and configurations for our full range
                        of drilling equipment.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <a
                            href="/catalogue/spenta-engineers-catalogue.pdf"
                            target="_blank"
                            className="inline-block bg-blue-900 text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-blue-800 transition"
                        >
                            Download Catalogue (PDF)
                        </a>

                        <a
                            href="/contact"
                            className="inline-block bg-white border-2 border-blue-900 text-blue-900 px-10 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition"
                        >
                            Request Details
                        </a>
                    </div>

                </div>
            </section>

        </section>
    );
}