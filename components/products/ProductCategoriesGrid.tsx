"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Wrench, Cpu, Box, Star, Settings, Building2, ArrowRight, Droplets } from 'lucide-react';

export default function ProductCategoriesGrid() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const categories = [
    {
      name: "Drill Rods",
      slug: "drill-rods-casings",
      description: "High-strength drill rods engineered for demanding drilling operations.",
      image: "/drill-rod.jpg",
      icon: (
        <Wrench className="w-6 h-6" strokeWidth={2} />
      )
    },
    {
      name: "Core Barrels",
      slug: "core-barrels",
      description: "Precision-engineered core barrels for efficient core recovery.",
      image: "/core-barrel.jpg",
      icon: (
        <Cpu className="w-6 h-6" strokeWidth={2} />
      )
    },
    {
      name: "Plastic Core Trays & Boxes",
      slug: "plastic-core-trays",
      description: "Durable storage and transport solutions for core samples.",
      image: "/core-tray.webp",
      icon: (
        <Box className="w-6 h-6" strokeWidth={2} />
      )
    },
    {
      name: "Diamond & Tungsten Carbide Tools",
      slug: "diamond-tools",
      description: "Advanced cutting tools for mineral exploration and mining.",
      image: "/diamond.jpg",
      icon: (
        <Star className="w-6 h-6" strokeWidth={2} />
      )
    },
    {
      name: "Overshots & Accessories",
      slug: "accessories",
      description: "Essential drilling accessories supporting smooth operations.",
      image: "/overshot.webp",
      icon: (
        <Settings className="w-6 h-6" strokeWidth={2} />
      )
    },
    {
      name: "Drill Rigs",
      slug: "drill-rigs",
      description: "Robust and reliable drill rigs designed for mineral exploration, geotechnical, and water well drilling.",
      image: "/drill-rig.jpg",
      icon: (
        <Building2 className="w-6 h-6" strokeWidth={2} />
      )
    },
    {
      name: "Dosing Skid System",
      slug: "dosing-skid-system",
      description: "Pre-assembled chemical injection skids with precision dosing pumps and full instrumentation.",
      image: "/dosing-skid.jpg",
      icon: (
        <Droplets className="w-6 h-6" strokeWidth={2} />
      )
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden" id="products">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, #000 1px, transparent 1px),
                           linear-gradient(to bottom, #000 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-12 bg-accent" />
              <span className="text-sm uppercase tracking-widest text-accent font-semibold">
                Our Solutions
              </span>
              <div className="h-px w-12 bg-accent" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-graphite mb-4">
              Product Categories
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive drilling solutions engineered for precision and reliability
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Link
              key={index}
              href={`/products/${category.slug}`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group block"
            >
              <div className={`relative bg-white rounded-xl overflow-hidden border-2 transition-all duration-500 h-full ${hoveredIndex === index
                ? 'border-accent shadow-2xl -translate-y-2'
                : 'border-gray-200 shadow-lg hover:border-gray-300'
                }`}>

                {/* Image container */}
                <div className="relative h-56 overflow-hidden bg-gray-100">
                  <Image
                    src={category.image}
                    alt={category.name}
                    width={400}
                    height={224}
                    className={`w-full h-full object-cover transition-transform duration-700 ${hoveredIndex === index ? 'scale-110' : 'scale-100'
                      }`}
                  />

                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-500 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                    }`} />

                  {/* Icon badge */}
                  <div className={`absolute top-4 right-4 w-12 h-12 bg-white rounded-lg shadow-lg flex items-center justify-center transition-all duration-500 ${hoveredIndex === index ? 'scale-110 bg-accent text-white' : 'text-gray-700'
                    }`}>
                    {category.icon}
                  </div>

                  {/* Number indicator */}
                  <div className="absolute top-4 left-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold text-graphite">{index + 1}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-graphite mb-3 group-hover:text-accent transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {category.description}
                  </p>

                  {/* Arrow link */}
                  <div className="flex items-center gap-2 text-accent font-semibold">
                    <span className="relative">
                      View Details
                      <span className={`absolute bottom-0 left-0 h-px bg-accent transition-all duration-300 ${hoveredIndex === index ? 'w-full' : 'w-0'
                        }`} />
                    </span>
                    <ArrowRight
                      className={`w-5 h-5 transition-transform duration-300 ${hoveredIndex === index ? 'translate-x-1' : 'translate-x-0'
                        }`}
                      strokeWidth={2}
                    />
                  </div>
                </div>

                {/* Bottom accent bar */}
                <div className={`absolute bottom-0 left-0 h-1 bg-accent transition-all duration-500 ${hoveredIndex === index ? 'w-full' : 'w-0'
                  }`} />
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Link
            href="/products"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-accent to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105 group"
          >
            <span>View All Products</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" strokeWidth={2} />
          </Link>
        </div>
      </div>
    </section>
  );
}