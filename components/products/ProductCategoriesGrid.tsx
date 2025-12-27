"use client";

import Link from "next/link";

export default function ProductCategoriesGrid() {
  const categories = [
    {
      name: "Drill Rods",
      slug: "drill-rods",
      description: "High-strength drill rods engineered for demanding drilling operations.",
      image: "/drill-rod.jpg",
    },
    {
      name: "Core Barrels",
      slug: "core-barrels",
      description: "Precision-engineered core barrels for efficient core recovery.",
      image: "/core-barrel.jpg",
    },
    {
      name: "Plastic Core Trays & Boxes",
      slug: "plastic-core-trays",
      description: "Durable storage and transport solutions for core samples.",
      image: "/core-tray.webp",
    },
    {
      name: "Diamond & Tungsten Carbide Tools",
      slug: "diamond-tools",
      description: "Advanced cutting tools for mineral exploration and mining.",
      image: "/diamond.jpg",
    },
    {
      name: "Overshots & Accessories",
      slug: "accessories",
      description: "Essential drilling accessories supporting smooth operations.",
      image: "/overshot.webp",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {categories.map((category, index) => (
            <Link
              key={index} // ✅ key belongs here
              href={`/products/${category.slug}`}
              className="block cursor-pointer"
            >
              <div
                className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-xl
                           border border-gray-200 shadow-lg hover:shadow-2xl
                           transition-all duration-300 transform hover:-translate-y-2"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-44 object-cover rounded-md mb-6 border"
                />

                <h3 className="text-2xl font-bold text-blue-900 mb-4">
                  {category.name}
                </h3>

                <p className="text-gray-700 text-lg leading-relaxed">
                  {category.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
