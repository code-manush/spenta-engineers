export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Company */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-blue-400">
              Spenta Engineers
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              Associated with Finerock Industries<br />
              Manufacturing Excellence in Drilling Tools
            </p>
            <p className="text-gray-400 text-sm">
              Precision • Quality • Reliability
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-blue-400">
              Contact Information
            </h3>
            <div className="space-y-3 text-gray-300">
              <p className="flex items-center">
                <span className="mr-3">📧</span>
                info@spentaengineers.com
              </p>
              <p className="flex items-center">
                <span className="mr-3">📞</span>
                +91-XXXXXXXXXX
              </p>
              <p className="flex items-center">
                <span className="mr-3">📍</span>
                [Company Address]
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-blue-400">
              Quick Links
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li>
                <a href="/products" className="hover:text-blue-400 transition-colors text-lg">
                  Products
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-blue-400 transition-colors text-lg">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-blue-400 transition-colors text-lg">
                  Contact
                </a>
              </li>
              <li>
                <a href="/catalogue" className="hover:text-blue-400 transition-colors text-lg">
                  Download Catalogue
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-lg">
            &copy; 2025 Spenta Engineers. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}