"use client";

import { useState, useEffect, useRef } from "react";

export default function WhyChooseUs() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const whyChoose = [
    {
      title: "Focused manufacturing expertise in drilling tools",
      description: "Specialized knowledge and precision in every component"
    },
    {
      title: "Use of premium quality materials and components",
      description: "Only the finest materials for maximum durability"
    },
    {
      title: "Field-tested designs proven in industrial applications",
      description: "Real-world validation ensures reliability"
    },
    {
      title: "Comprehensive product range for diverse needs",
      description: "Complete solutions for all drilling requirements"
    },
    {
      title: "Capabilities for custom and bulk supply solutions",
      description: "Flexible manufacturing to meet your specifications"
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-24 bg-white border-t border-gray-200 relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, #000 1px, transparent 1px),
                           linear-gradient(to bottom, #000 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Floating shapes */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-30 animate-float" />
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-gray-100 rounded-full blur-3xl opacity-40 animate-float-delayed" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div 
          className={`mb-16 max-w-3xl transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-sm uppercase tracking-widest text-blue-600 font-semibold mb-3">
            Our Strengths
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">
            Why Choose Spenta Engineers
          </h2>
          <div className="h-1 w-24 bg-blue-600 rounded-full mb-6" />
          <p className="text-lg text-gray-600 leading-relaxed">
            Our approach combines engineering expertise, controlled manufacturing,
            and a strong focus on reliability to support demanding drilling operations.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {whyChoose.map((point, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`group relative bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border-2 transition-all duration-500 ${
                hoveredIndex === index 
                  ? 'border-blue-600 shadow-2xl scale-[1.02] -translate-y-1' 
                  : 'border-gray-200 shadow-md hover:border-blue-300'
              } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Animated background effect */}
              <div className={`absolute inset-0 bg-blue-50 rounded-2xl transition-opacity duration-500 ${
                hoveredIndex === index ? 'opacity-100' : 'opacity-0'
              }`} />

              {/* Content */}
              <div className="relative flex items-start gap-6">
                {/* Icon */}
                <div className={`flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center shadow-lg transition-all duration-500 ${
                  hoveredIndex === index ? 'scale-110 rotate-6' : 'scale-100 rotate-0'
                }`}>
                  <span className="text-2xl font-bold text-white">{index + 1}</span>
                </div>

                {/* Text */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-blue-600 transition-colors">
                    {point.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>

              {/* Corner accent */}
              <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-600/10 to-transparent rounded-bl-full transition-opacity duration-500 ${
                hoveredIndex === index ? 'opacity-100' : 'opacity-0'
              }`} />

              {/* Bottom line indicator */}
              <div className={`absolute bottom-0 left-0 h-1 bg-blue-600 rounded-full transition-all duration-500 ${
                hoveredIndex === index ? 'w-full' : 'w-0'
              }`} />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div 
          className={`mt-16 text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '600ms' }}
        >
          <div className="inline-block p-8 bg-gradient-to-r from-gray-900 to-blue-900 rounded-2xl shadow-2xl">
            <p className="text-white text-lg mb-4">
              Ready to experience the Spenta Engineers difference?
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-white hover:bg-blue-50 text-gray-900 px-8 py-4 rounded-full font-bold transition-all hover:scale-105 shadow-lg group"
            >
              Get Started Today
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-20px, -20px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(20px, 20px); }
        }
        .animate-float { animation: float 8s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 10s ease-in-out infinite; }
      `}</style>
    </section>
  );
}