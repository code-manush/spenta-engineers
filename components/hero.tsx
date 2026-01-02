"use client";

import { useState, useEffect, useRef } from "react";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
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

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-purple-900/20 animate-gradient-shift z-[1]" />
      
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 z-[2] pointer-events-none">
        <div 
          className="absolute top-20 left-10 w-32 h-32 border-2 border-white/10 rounded-full animate-float"
          style={{ transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)` }}
        />
        <div 
          className="absolute bottom-40 right-20 w-24 h-24 border-2 border-blue-400/20 rotate-45 animate-float-delayed"
          style={{ transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)` }}
        />
        <div 
          className="absolute top-1/2 right-1/4 w-16 h-16 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-lg animate-pulse-slow"
          style={{ transform: `translate(${mousePosition.x * 1.5}px, ${mousePosition.y * 1.5}px)` }}
        />
      </div>

      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ${
            index === currentSlide ? "opacity-100 z-10 scale-100" : "opacity-0 z-0 scale-105"
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
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[8000ms]"
              style={{ transform: index === currentSlide ? 'scale(1.1)' : 'scale(1)' }}
              alt=""
            />
          )}

          {/* Dark overlay with gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent z-[5]" />

          <div className="relative z-20 flex items-center h-full px-6 md:px-12">
            <div className="w-full md:w-1/2 text-white space-y-6">
              <p 
                className={`text-sm uppercase tracking-wider text-blue-400 font-semibold transition-all duration-700 ${
                  index === currentSlide ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: '200ms' }}
              >
                {slide.eyebrow}
              </p>
              <h1 
                className={`text-4xl md:text-6xl font-bold leading-tight transition-all duration-700 ${
                  index === currentSlide ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: '400ms' }}
              >
                {slide.headline.split(' ').map((word, i) => (
                  <span 
                    key={i}
                    className="inline-block animate-fade-in-word mr-4"
                    style={{ animationDelay: `${i * 100}ms` }}
                  >
                    {word}{' '}
                  </span>
                ))}
              </h1>
              <p 
                className={`text-lg text-gray-200 max-w-lg leading-relaxed transition-all duration-700 ${
                  index === currentSlide ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: '600ms' }}
              >
                {slide.supporting}
              </p>
              <div 
                className={`flex gap-4 transition-all duration-700 ${
                  index === currentSlide ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: '800ms' }}
              >
                <button className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-full font-semibold transition-all hover:scale-105 hover:shadow-xl hover:shadow-blue-500/50" onClick={() => window.location.href = '/products/core-trays'}>
                  Explore Products
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Slide indicators */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-30 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide 
                ? 'w-12 h-2 bg-white' 
                : 'w-2 h-2 bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 right-10 z-30 animate-bounce">
        <svg className="w-6 h-6 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>

      <style jsx>{`
        @keyframes gradient-shift {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(45deg); }
          50% { transform: translateY(-30px) rotate(45deg); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.1); }
        }
        @keyframes fade-in-word {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-gradient-shift { animation: gradient-shift 8s ease-in-out infinite; }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 7s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }
        .animate-fade-in-word { animation: fade-in-word 0.6s ease-out forwards; }
      `}</style>
    </section>
  );
}