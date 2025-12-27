export default function ManufacturingQuality() {
  return (
    <section className="py-24 bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6">

        <div className="mb-16 max-w-3xl">
          <p className="text-sm uppercase tracking-widest text-gray-500 mb-7">
            Manufacturing & Quality
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
            Built with Precision.
          </h2>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
            Tested for Reliability.
          </h2>
          <p className="mt-6 text-lg text-gray-600">
            Our manufacturing processes and quality practices are focused on delivering
            drilling tools that perform consistently in demanding field conditions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img
              src="/manufacturing-quality.jpeg"
              alt="Manufacturing and Quality Control"
              className="w-full h-[420px] object-cover rounded-lg border border-gray-300 shadow-lg"
            />
          </div>

          <div className="space-y-10">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Controlled Manufacturing Processes
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Precision machining, controlled workflows, and skilled workmanship ensure
                dimensional accuracy and consistent product quality.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Material Selection & Inspection
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Careful selection of raw materials combined with inspection at critical
                stages helps maintain durability and performance reliability.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Field-Oriented Quality Focus
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Products are developed with real drilling conditions in mind.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
