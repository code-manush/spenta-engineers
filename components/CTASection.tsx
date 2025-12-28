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
          <a
              href="/spenta-engineers-catalogue.pdf"
              target="_blank"
              className="inline-block bg-blue-900 text-white px-10 py-5 rounded-lg font-bold text-lg hover:bg-blue-800 transition tracking-wide text-center"
            >
              Download PDF
            </a>
        </div>
      </div>
    </section>
  );
}
