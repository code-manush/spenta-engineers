export default function AboutSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-100 to-gray-200">
      <div className="max-w-7xl mx-auto px-6">

        <div className="mb-16 max-w-3xl">
          <h2 className="text-5xl font-bold text-gray-900 tracking-tight">
            ABOUT SPENTA ENGINEERS
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p className="text-xl">
              Spenta Engineers specializes in manufacturing high-quality drilling tools and equipment for industrial applications.
            </p>
            <p className="text-xl">
              Our focus on precision engineering and quality control ensures reliable performance in demanding environments.
            </p>
            <p className="text-xl">
              Associated with Finerock Industries, we deliver solutions trusted by professionals in mineral exploration and mining.
            </p>
            <p className="text-xl">
              With years of expertise, we provide comprehensive support from design to delivery.
            </p>
          </div>

          <div className="relative">
            <img
              src="/about.jpg"
              alt="Spenta Engineers Manufacturing Facility"
              className="w-full h-[420px] object-cover rounded-lg shadow-lg border border-gray-300"
            />
          </div>
        </div>

      </div>
    </section>
  );
}