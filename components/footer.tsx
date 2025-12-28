export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-6">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-14">

          {/* COMPANY */}
          <div>
            <img
              src="/logo-white.png"
              alt="Spenta Engineers Logo"
              className="h-54 mb-0 object-contain"
            />

            {/* <p className="text-gray-300 text-lg leading-relaxed mb-4">
              Associated with Finerock Industries<br />
              Manufacturing Excellence in Drilling Tools
            </p> */}

            <p className="text-gray-400 text-sm">
              Precision • Quality • Reliability
            </p>
          </div>

          {/* COMPANY LINKS */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-white">
              Company
            </h4>
            <ul className="space-y-3 text-gray-300">
              <li>
                <a href="/about" className="hover:text-blue-400 transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="/manufacturing-quality" className="hover:text-blue-400 transition">
                  Manufacturing & Quality
                </a>
              </li>
              <li>
                <a href="/industries" className="hover:text-blue-400 transition">
                  Industries We Serve
                </a>
              </li>
            </ul>
          </div>

          {/* PRODUCTS */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-white">
              Products
            </h4>
            <ul className="space-y-3 text-gray-300">
              <li>
                <a href="/products/drill-rods" className="hover:text-blue-400 transition">
                  Drill Rods
                </a>
              </li>
              <li>
                <a href="/products/core-barrels" className="hover:text-blue-400 transition">
                  Core Barrels
                </a>
              </li>
              <li>
                <a href="/products/diamond-tools" className="hover:text-blue-400 transition">
                  Diamond Tools
                </a>
              </li>
              <li>
                <a href="/products/plastic-core-trays" className="hover:text-blue-400 transition">
                  Plastic Core Trays
                </a>
              </li>
              <li>
                <a href="/products/accessories" className="hover:text-blue-400 transition">
                  Accessories
                </a>
              </li>
            </ul>
          </div>

          {/* RESOURCES + CONTACT */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-white">
              Resources
            </h4>
            <ul className="space-y-3 text-gray-300 mb-6">
              <li>
                <a href="/catalogue" className="hover:text-blue-400 transition">
                  Product Catalogue
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-blue-400 transition">
                  Contact Us
                </a>
              </li>
            </ul>

            <div className="space-y-2 text-gray-400 text-sm">
              <p>📧 spentaeng@gmail.com</p>
              <p>📞 +91-9426753291</p>
              <p>📍 Vadodara-390024, Gujarat, India</p>
            </div>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-gray-700 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between text-gray-400 text-sm">

          <p>
            © 2025 Spenta Engineers. All rights reserved.
          </p>

          <p className="mt-4 md:mt-0">
            Designed & Manufactured in India
          </p>

        </div>

      </div>
    </footer>
  );
}
