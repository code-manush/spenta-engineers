export default function ProductsHero() {
    return (
        <section
            className="relative py-50 text-white bg-cover bg-center "
            style={{
                backgroundImage: "url('/product-cover.png')",
            }}
        >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>

            {/* Content */}
            <div className="relative max-w-7xl mx-auto px-6">
                <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-normal">
                    Our Products
                </h1>

                <p className="text-xl text-gray-200 max-w-3xl leading-relaxed">
                    Spenta Engineers manufactures and supplies a comprehensive range of
                    precision drilling tools designed for mineral exploration, mining,
                    and geotechnical applications.
                </p>
            </div>
        </section>
    );
}
