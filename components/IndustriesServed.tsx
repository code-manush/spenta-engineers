export default function IndustriesServed() {
  const industries = [
    { title: "Mining", image: "/mining.jpg" },
    { title: "Mineral Exploration", image: "/exploration.jpg" },
    { title: "Geotechnical Drilling", image: "/geotechnical.jpg" },
    { title: "Infrastructure & Construction", image: "/infrastructure.jpg" },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-100 to-gray-200 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6">

        <div className="mb-16 max-w-3xl">
          <p className="text-sm uppercase tracking-widest text-gray-500 mb-3">
            APPLICATIONS
          </p>
          <h2 className="text-5xl font-bold text-gray-900">
            INDUSTRIES WE SERVE
          </h2>
          <p className="mt-4 text-gray-600">
            Our drilling tools are trusted across a wide range of industrial and
            exploration applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((item, index) => (
            <div key={index} className="relative h-64 overflow-hidden border">
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/45" />
              <div className="relative z-10 h-full flex items-end p-6">
                <h3 className="text-xl font-semibold text-white">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
