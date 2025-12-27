export default function CTASection() {
  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-bold mb-8">
          Ready to Source Quality Drilling Equipment?
        </h2>
        <p className="text-2xl mb-12 text-blue-100">
          Contact us today to discuss your requirements and receive a customized quotation.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button className="bg-white text-blue-900 px-10 py-5 rounded-lg font-bold text-xl shadow-lg hover:shadow-xl transition-all">
            Download Product Catalogue
          </button>
          <button className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white px-10 py-5 rounded-lg font-bold text-xl transition-all">
            Request a Quote
          </button>
        </div>
      </div>
    </section>
  );
}
