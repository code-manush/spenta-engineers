export default function ProductCategoriesGrid() {
  const categories = [
    {
      name: "Plastic Core Trays & Boxes",
      description:
        "Durable plastic solutions for safe storage, handling, and transportation of core samples.",
      image: "/core-tray.webp",
    },
    {
      name: "Drill Rods",
      description:
        "High-strength drill rods engineered for consistent performance in demanding drilling conditions.",
      image: "/drill-rod.jpg",
    },
    {
      name: "Core Barrels",
      description:
        "Precision-manufactured core barrels ensuring accurate and efficient core recovery.",
      image: "/core-barrel.jpg",
    },
    {
      name: "Diamond & Tungsten Carbide Tools",
      description:
        "Advanced cutting tools designed for mineral exploration and mining operations.",
      image: "/diamond.jpg",
    },
    {
      name: "Overshots & Accessories",
      description:
        "Essential drilling accessories supporting smooth and reliable drilling operations.",
      image: "/overshot.webp",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {categories.map((category, index) => (
            <div
              key={index}
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
          ))}
        </div>

      </div>
    </section>
  );
}
