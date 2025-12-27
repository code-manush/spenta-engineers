export default function ProductsCTA() {
  return (
    <section className="py-20 bg-gray-100 border-t border-gray-200">
      <div className="max-w-5xl mx-auto px-6 text-center">

        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Need Detailed Specifications?
        </h2>

        <p className="text-xl text-gray-600 mb-10">
          Contact our team to receive product specifications, pricing details,
          or a customized quotation based on your drilling requirements.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a
            href="/catalogue"
            className="bg-gray-900 text-white px-10 py-5 rounded-lg
                       font-bold text-lg hover:bg-gray-800 transition-all"
          >
            Download Catalogue
          </a>

          <a
            href="/contact"
            className="border-2 border-gray-900 text-gray-900 px-10 py-5
                       rounded-lg font-bold text-lg hover:bg-gray-900
                       hover:text-white transition-all"
          >
            Request a Quote
          </a>
        </div>

      </div>
    </section>
  );
}