"use client";

import { useState, useEffect, useRef } from "react";

export default function ManufacturingQuality() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  const features = [
    {
      icon: "⚙️",
      title: "Controlled Manufacturing Processes",
      description: "Precision machining, controlled workflows, and skilled workmanship ensure dimensional accuracy and consistent product quality.",
      stats: "99.9% Accuracy"
    },
    {
      icon: "🔍",
      title: "Material Selection & Inspection",
      description: "Careful selection of raw materials combined with inspection at critical stages helps maintain durability and performance reliability.",
      stats: "100% Tested"
    },
    {
      icon: "✓",
      title: "Field-Oriented Quality Focus",
      description: "Products are developed with real drilling conditions in mind, ensuring they perform reliably in demanding environments.",
      stats: "Field-Proven"
    }
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

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setActiveTab((prev) => (prev + 1) % features.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isVisible, features.length]);

  return (
    <section 
      ref={sectionRef}
      className="py-24 bg-gray-50 border-t border-gray-200 relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, #000 0, #000 1px, transparent 0, transparent 50%)`,
          backgroundSize: '10px 10px'
        }} />
      </div>

      {/* Floating shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-40 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gray-200 rounded-full blur-3xl opacity-50 animate-pulse" style={{ animationDelay: '2s' }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div 
          className={`mb-16 max-w-3xl transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-sm uppercase tracking-widest text-blue-600 mb-3 font-semibold">
            Manufacturing & Quality
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
            Built with Precision.
          </h2>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Tested for Reliability.
          </h2>
          <div className="h-1 w-24 bg-blue-600 rounded-full mb-6" />
          <p className="text-lg text-gray-600">
            Our manufacturing processes and quality practices are focused on delivering
            drilling tools that perform consistently in demanding field conditions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image with overlay */}
          <div 
            className={`relative transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <div className="relative group">
              {/* Decorative border */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-gray-600 rounded-2xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity" />
              
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-gray-200">
                <img
                  src="/manufacturing-quality.jpg"
                  alt="Manufacturing and Quality Control"
                  className="w-full h-[420px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Quality badge */}
                <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="font-bold text-gray-900 text-sm">Quality Assured</span>
                </div>

                {/* Bottom info card */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-xl transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="font-bold text-gray-900 mb-1">ISO Certified Facility</p>
                  <p className="text-sm text-gray-600">State-of-the-art manufacturing infrastructure</p>
                </div>
              </div>
            </div>
          </div>

          {/* Features tabs */}
          <div 
            className={`space-y-6 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            {features.map((feature, index) => (
              <div
                key={index}
                onClick={() => setActiveTab(index)}
                className={`relative p-6 rounded-2xl cursor-pointer transition-all duration-500 ${
                  activeTab === index 
                    ? 'bg-white shadow-2xl border-2 border-blue-600 scale-[1.02]' 
                    : 'bg-white/50 shadow-md border-2 border-gray-200 hover:border-blue-300'
                }`}
              >
                {/* Active indicator */}
                <div className={`absolute left-0 top-0 bottom-0 w-1 bg-blue-600 rounded-r-full transition-all duration-500 ${
                  activeTab === index ? 'opacity-100' : 'opacity-0'
                }`} />

                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className={`flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br flex items-center justify-center shadow-lg transition-all duration-500 ${
                    activeTab === index 
                      ? 'from-blue-600 to-blue-700 scale-110 rotate-6' 
                      : 'from-gray-600 to-gray-700 scale-100'
                  }`}>
                    <span className="text-2xl">{feature.icon}</span>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className={`text-xl font-bold transition-colors ${
                        activeTab === index ? 'text-blue-600' : 'text-gray-900'
                      }`}>
                        {feature.title}
                      </h3>
                      <span className={`text-xs font-bold px-3 py-1 rounded-full transition-all ${
                        activeTab === index 
                          ? 'bg-blue-100 text-blue-700' 
                          : 'bg-gray-100 text-gray-600'
                      }`}>
                        {feature.stats}
                      </span>
                    </div>
                    <p className={`text-gray-600 leading-relaxed transition-all duration-500 ${
                      activeTab === index ? 'max-h-40 opacity-100' : 'max-h-20 opacity-70'
                    }`}>
                      {feature.description}
                    </p>
                  </div>
                </div>

                {/* Progress bar */}
                {activeTab === index && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-100 rounded-b-2xl overflow-hidden">
                    <div className="h-full bg-blue-600 animate-progress" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Stats bar */}
        <div 
          className={`mt-16 grid grid-cols-1 md:grid-cols-4 gap-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '400ms' }}
        >
          {[
            { label: "Quality Control Points", value: "50+", icon: "✓" },
            { label: "Years of Experience", value: "20+", icon: "⏱" },
            { label: "Manufacturing Precision", value: "±0.01mm", icon: "📏" },
            { label: "Customer Satisfaction", value: "100%", icon: "⭐" }
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:border-blue-600 transition-all hover:scale-105 text-center group"
            >
              <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">{stat.icon}</div>
              <div className="text-3xl font-bold text-blue-600 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes progress {
          from { width: 0%; }
          to { width: 100%; }
        }
        .animate-progress {
          animation: progress 4s linear;
        }
      `}</style>
    </section>
  );
}