"use client";

import { link } from "fs";
import { useState } from "react";

export default function ProductCategories() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const productCategories = [
    {
      name: "Plastic Core Trays & Boxes",
      description: "Durable plastic solutions for core sample storage and transport.",
      image: "/products/12.png",
      link: "/products/core-trays",
    },
    {
      name: "Core Drilling System & Accessories",
      description: "High-performance drilling systems and essential accessories for core sampling.",
      image: "/products/14.png",
      link: "/products/core-drilling-system",
    },
    {
      name: "Diamond & Tungsten Carbide Tools",
      description: "Advanced cutting tools for mineral exploration and mining.",
      image: "/products/11.png",
      link: "/products/diamond-tungsten-tools",
    },
    {
      name: "Drill Rigs",
      description: "Robust and reliable drill rigs designed for mineral exploration.",
      image: "/products/10.png",
      link: "/products/drill-rigs",
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 border-t border-gray-200 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, gray 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Animated header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block">
            <p className="text-sm uppercase tracking-widest text-blue-600 font-semibold mb-2 animate-fade-in">
              Our Solutions
            </p>
            <h2 className="text-5xl font-bold text-gray-900 tracking-tight animate-slide-up">
              PRODUCT CATEGORIES
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-blue-600 to-blue-900 mx-auto mt-4 rounded-full animate-expand" />
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-fade-in-delayed">
            Comprehensive drilling solutions engineered for precision and reliability
          </p>
        </div>

        {/* Bento grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {productCategories.map((category, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl 
                transition-all duration-500 overflow-hidden border border-gray-100
                ${index === 0 ? 'md:col-span-2 lg:col-span-1' : ''}
                ${hoveredIndex === index ? 'scale-105 -translate-y-2' : 'scale-100'}
                animate-fade-in-up`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Animated gradient border */}
              <div className={`absolute inset-0 bg-gradient-to-br from-black to-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`} />
              
              {/* Card content */}
              <div className="relative bg-white rounded-2xl p-6 h-full">
                {/* Number badge */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br from-black to-gray-600 to-black
                  flex items-center justify-center mb-4 shadow-lg
                  transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                  <span className="text-2xl text-white font-bold">{index+1}</span>
                </div>

                {/* Image with zoom effect */}
                <div className="relative h-48 mb-6 rounded-xl overflow-hidden bg-gray-100">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Text content */}
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-gray-900 leading-tight group-hover:text-blue-600 transition-colors duration-300">
                    {category.name}
                  </h3>

                  <p className="text-gray-600 leading-relaxed line-clamp-2">
                    {category.description}
                  </p>

                  {/* Animated link */}
                  <a
                    href={category.link}
                    className="inline-flex items-center text-blue-700 font-semibold group/link hover:text-blue-900 transition-colors mt-4"
                  >
                    <span className="relative">
                      Explore Products
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover/link:w-full transition-all duration-300" />
                    </span>
                    <svg
                      className="ml-2 w-5 h-5 transform group-hover/link:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </a>
                </div>

                {/* Hover effect particles */}
                {hoveredIndex === index && (
                  <>
                    <div className="absolute top-0 right-0 w-20 h-20 bg-blue-400/20 rounded-full blur-2xl animate-pulse" />
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '500ms' }} />
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes expand {
          from { width: 0; }
          to { width: 8rem; }
        }
        .animate-fade-in { animation: fade-in 0.6s ease-out; }
        .animate-slide-up { animation: slide-up 0.8s ease-out; }
        .animate-fade-in-delayed { animation: fade-in 0.6s ease-out 0.3s both; }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out both; }
        .animate-expand { animation: expand 0.8s ease-out 0.5s both; }
      `}</style>
    </section>
  );
}