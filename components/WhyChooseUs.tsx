export default function WhyChooseUs() {
  const whyChoose = [
    "Focused manufacturing expertise in drilling tools",
    "Use of premium quality materials and components",
    "Field-tested designs proven in industrial applications",
    "Comprehensive product range for diverse needs",
    "Capabilities for custom and bulk supply solutions",
  ];

  return (
    <section className="py-24 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6">

        <div className="mb-16 max-w-3xl">
          <p className="text-sm uppercase tracking-widest text-gray-500 mb-3">
            Our Strengths
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
            Why Choose Spenta Engineers
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Our approach combines engineering expertise, controlled manufacturing,
            and a strong focus on reliability to support demanding drilling operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {whyChoose.map((point, index) => (
            <div
              key={index}
              className="flex items-start p-8 bg-gray-50 border border-gray-200 rounded-lg"
            >
              <div className="w-10 h-10 bg-blue-900 rounded-full flex items-center justify-center mr-5 flex-shrink-0 mt-1">
                <span className="text-white font-bold text-lg">✓</span>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed font-medium">
                {point}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
