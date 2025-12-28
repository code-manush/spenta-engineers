"use client";

import { useState, useEffect, useRef } from "react";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const slides = [
    {
      type: "video",
      eyebrow: "SPENTA ENGINEERS",
      headline: "Innovation with Excellence",
      supporting:
        "Manufacturer and supplier of precision drilling tools for mineral exploration, mining & geotechnical applications",
      video: "/1.mp4",
    },
    {
      type: "image",
      eyebrow: "PRODUCT RANGE",
      headline: "Comprehensive Drilling Solutions",
      supporting:
        "Plastic core trays, drill rods, core barrels, diamond & tungsten carbide tools, and drilling accessories",
      image: "/image1.webp",
    },
    {
      type: "image",
      eyebrow: "MANUFACTURING & QUALITY",
      headline: "Built for Demanding Field Conditions",
      supporting:
        "Controlled manufacturing processes and field-tested designs ensuring reliability and consistent performance",
      image: "/1.webp",
    },
  ];

  useEffect(() => {
    const timer = setTimeout(
      () => setCurrentSlide((p) => (p + 1) % slides.length),
      6000
    );
    return () => clearTimeout(timer);
  }, [currentSlide]);

  useEffect(() => {
    const slide = slides[currentSlide];
    if (slide.type === "video" && videoRef.current) {
      videoRef.current.currentTime = 0;
    }
  }, [currentSlide]);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-500 ${index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
        >
          {slide.type === "video" && (
            <video
              ref={videoRef}
              className="absolute inset-0 w-full h-full object-cover"
              src={slide.video}
              muted
              autoPlay
              playsInline
              preload="metadata"
              poster="hero-poster.jpg"
            />
          )}

          {slide.type === "image" && (
            <img
              src={slide.image}
              className="absolute inset-0 w-full h-full object-cover"
              alt=""
            />
          )}

          <div className="relative z-10 flex items-center h-full px-6 md:px-12">
            <div className="w-full md:w-1/2 text-white">
              <p className="text-sm uppercase tracking-wider mb-4 text-gray-300">
                {slide.eyebrow}
              </p>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                {slide.headline}
              </h1>
              <p className="text-lg mb-8 text-gray-200 max-w-lg">
                {slide.supporting}
              </p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
