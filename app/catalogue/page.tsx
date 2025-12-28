import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product Catalogue",
  description:
    "Download the complete Spenta Engineers product catalogue covering drill rods, core barrels, diamond tools, plastic core trays, and drilling accessories.",
};

export default function CataloguePage() {
  return (
    <section className="bg-white">

      {/* HERO */}
      <section
        className="relative h-[60vh] bg-cover bg-center text-white flex items-end justify-start"
        style={{ backgroundImage: "url('/catalogue-hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/75"></div>

        <div className="relative max-w-7xl mx-auto px-6 pb-20 text-left">
          <p className="uppercase tracking-widest text-gray-300 mb-4">
            Catalogue
          </p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Product Catalogue
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl leading-relaxed">
            Access the complete range of Spenta Engineers drilling tools and
            accessories in a single, detailed product catalogue.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* LEFT */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
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

            <ul className="space-y-4 text-lg text-gray-700">
              <li>✓ Drill Rods</li>
              <li>✓ Core Barrels</li>
              <li>✓ Diamond & Tungsten Carbide Tools</li>
              <li>✓ Plastic Core Trays & Boxes</li>
              <li>✓ Overshots & Drilling Accessories</li>
            </ul>
          </div>

          {/* RIGHT */}
          <div className="bg-gray-100 p-12 rounded-2xl border border-gray-200 shadow-xl text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Download Catalogue
            </h3>

            <p className="text-lg text-gray-600 mb-8">
              Get the complete product catalogue in PDF format.
            </p>

            <a
              href="/spenta-engineers-catalogue.pdf"
              target="_blank"
              className="inline-block bg-blue-900 text-white px-10 py-5 rounded-lg font-bold text-lg hover:bg-blue-800 transition"
            >
              Download PDF
            </a>

            <p className="text-sm text-gray-500 mt-6">
              File size: ~10–15 MB | PDF format
            </p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gray-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">
            Need Custom Specifications or Pricing?
          </h2>
          <p className="text-lg text-gray-300 mb-10">
            Contact our team to receive tailored recommendations based on your
            drilling application.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-gray-900 px-12 py-5 rounded-lg font-bold text-lg hover:bg-gray-100 transition"
          >
            Contact Us
          </a>
        </div>
      </section>

    </section>
  );
}
