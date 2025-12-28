export default function ProductCategories() {
  const productCategories = [
    {
      name: "Plastic Core Trays & Boxes",
      description: "Durable plastic solutions for core sample storage and transport.",
      image: "/core-tray.webp",
    },
    {
      name: "Drill Rods",
      description: "High-strength rods for various drilling applications.",
      image: "/drill-rod.jpg",
    },
    {
      name: "Core Barrels",
      description: "Precision-engineered barrels for core sampling.",
      image: "/core-barrel.jpg",
    },
    {
      name: "Diamond & Tungsten Carbide Tools",
      description: "Advanced cutting tools for mineral exploration and mining.",
      image: "/diamond.jpg",
    },
    {
      name: "Overshots & Accessories",
      description: "Essential accessories for drilling operations.",
      image: "/overshot.webp",
    },
    {
      name: "Drill Rigs",
      description: "Robust and reliable drill rigs designed for mineral exploration, geotechnical, and water well drilling.",
      image: "/drill-rig.jpg",
    }
  ];

  return (
    <section className="py-20 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-16 text-gray-900 tracking-tight">
          PRODUCT CATEGORIES
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {productCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200"
            >
              <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mb-6">
                <span className="text-white text-2xl font-bold">
                  {index + 1}
                </span>
              </div>

              <div className="mb-6">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-40 object-cover rounded-md border border-gray-300"
                />
              </div>

              <h3 className="text-2xl font-bold mb-4 text-blue-900 leading-tight">
                {category.name}
              </h3>

              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                {category.description}
              </p>

              <a
                href="/products"
                className="inline-flex items-center text-blue-700 hover:text-blue-900 font-semibold text-lg group"
              >
                View Products
                <svg
                  className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
