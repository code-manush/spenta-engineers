"use client";

import { useState, useEffect, useRef } from "react";

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({ years: 0, clients: 0 });
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const duration = 2000;
      const steps = 60;
      const interval = duration / steps;
      
      const targets = { years: 20, clients: 100 };
      let step = 0;

      const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        
        setCounters({
          years: Math.floor(targets.years * progress),
          clients: Math.floor(targets.clients * progress)
        });

        if (step >= steps) clearInterval(timer);
      }, interval);

      return () => clearInterval(timer);
    }
  }, [isVisible]);

  const features = [
    {
      icon: "🎯",
      title: "Precision Engineering",
      description: "Manufacturing high-quality drilling tools with meticulous attention to detail"
    },
    {
      icon: "⚡",
      title: "Reliable Performance",
      description: "Quality control ensures consistent performance in demanding environments"
    },
    {
      icon: "🤝",
      title: "Industry Partnership",
      description: "Associated with Finerock Industries for comprehensive drilling solutions"
    },
    {
      icon: "🌍",
      title: "Global Reach",
      description: "Years of expertise serving professionals in mineral exploration and mining"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl animate-float-delayed" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header with animation */}
        <div className="mb-16">
          <div className={`inline-block transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-sm uppercase tracking-widest text-blue-600 font-semibold mb-3">
              About Us
            </p>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 tracking-tight">
              SPENTA ENGINEERS
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-blue-600 to-black mt-4 rounded-full" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          
          {/* Text content */}
          <div className="space-y-6">
            {[
              "Spenta Engineers specializes in manufacturing high-quality drilling tools and equipment for industrial applications.",
              "Our focus on precision engineering and quality control ensures reliable performance in demanding environments.",
              "Associated with Finerock Industries, we deliver solutions trusted by professionals in mineral exploration and mining.",
              "With years of expertise, we provide comprehensive support from design to delivery."
            ].map((text, index) => (
              <p 
                key={index}
                className={`text-xl text-gray-700 leading-relaxed transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {text}
              </p>
            ))}

            {/* CTA Button */}
            <div 
              className={`pt-6 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '600ms' }}
            >
              <a 
                href="/about"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-black to-blue-600 hover:from-gray-900 hover:to-blue-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group"
              >
                Learn More About Us
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>

          {/* Image with overlay effects */}
          <div 
            className={`relative transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <div className="relative group">
              {/* Decorative frame */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity" />
              
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/about.jpg"
                  alt="Spenta Engineers Manufacturing Facility"
                  className="w-full h-[420px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Floating badge */}
                <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg flex items-center gap-3 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="font-semibold text-gray-900">Manufacturing Excellence</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats counters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {[
            { value: counters.years, label: "Years Experience", suffix: "+" },
            { value: counters.clients, label: "Quality Assurance", suffix: "%" }
          ].map((stat, index) => (
            <div 
              key={index}
              className={`text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${800 + index * 100}ms` }}
            >
              <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-gray-600 bg-clip-text text-transparent mb-2">
                {stat.value}{stat.suffix}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`group p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${1100 + index * 100}ms` }}
            >
              <div className="text-4xl mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
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
        .animate-float-delayed { animation: float-delayed 8s ease-in-out infinite 2s; }
      `}</style>
    </section>
  );
}