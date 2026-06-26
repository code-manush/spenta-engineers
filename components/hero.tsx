"use client";

import { ArrowDown } from 'lucide-react';
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useAnimation } from "framer-motion";

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
    image: "/2.png",
    imageClass: "object-contain scale-100 opacity-90", // Prevents cutting off content
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

const SLIDE_DURATION = 6000;
const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 1.1,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9,
    };
  },
};

export default function Hero() {
  const [[page, direction], setPage] = useState([0, 0]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const progressControls = useAnimation();

  // We only have 3 slides, but page can be any integer. 
  // We wrap it around to get the slideIndex.
  const slideIndex = ((page % slides.length) + slides.length) % slides.length;
  const slide = slides[slideIndex];

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  useEffect(() => {
    // Reset progress bar to 0% instantly when slide changes
    progressControls.set({ width: "0%" });

    // Start progress bar animation
    progressControls.start({
      width: "100%",
      transition: { duration: SLIDE_DURATION / 1000, ease: "linear" }
    });

    // Set timeout for next slide
    const timer = setTimeout(() => {
      paginate(1);
    }, SLIDE_DURATION);

    return () => clearTimeout(timer);
  }, [page, progressControls]);

  useEffect(() => {
    if (slide.type === "video" && videoRef.current) {
      videoRef.current.currentTime = 0;
    }
  }, [slideIndex]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 40,
        y: (e.clientY / window.innerHeight - 0.5) * 40,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      className="relative w-full h-screen overflow-hidden bg-black"
    >
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-purple-900/20 animate-gradient-shift z-[1] pointer-events-none" />

      {/* Floating geometric shapes (Parallaxed to mouse) */}
      <div className="absolute inset-0 z-[2] pointer-events-none">
        <div
          className="absolute top-20 left-10 w-32 h-32 border-2 border-white/10 rounded-full animate-float transition-transform duration-700 ease-out"
          style={{ transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)` }}
        />
        <div
          className="absolute bottom-40 right-20 w-24 h-24 border-2 border-blue-400/20 rotate-45 animate-float-delayed transition-transform duration-700 ease-out"
          style={{ transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)` }}
        />
        <div
          className="absolute top-1/2 right-1/4 w-16 h-16 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-lg animate-pulse-slow transition-transform duration-700 ease-out"
          style={{ transform: `translate(${mousePosition.x * 1.5}px, ${mousePosition.y * 1.5}px)` }}
        />
      </div>

      <AnimatePresence initial={false} custom={direction} mode="popLayout">
        <motion.div
          key={page}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.5 },
            scale: { duration: 0.5 }
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);
            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
          className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing z-10"
        >
          {/* Media Parallax wrapper */}
          <motion.div
            className="absolute inset-0 w-full h-full"
            style={{ x: mousePosition.x * -0.5, y: mousePosition.y * -0.5 }}
          >
            {slide.type === "video" && (
              <video
                ref={videoRef}
                className="absolute inset-0 w-full h-full object-cover pointer-events-none scale-110"
                src={slide.video}
                muted
                autoPlay
                playsInline
                preload="metadata"
              />
            )}

            {slide.type === "image" && slide.image && (
              <Image
                src={slide.image}
                fill
                className={`absolute inset-0 w-full h-full pointer-events-none ${slide.imageClass || 'object-cover scale-110'}`}
                alt=""
                priority={slideIndex === 0}
              />
            )}
          </motion.div>

          {/* Dark overlay with gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-[5] pointer-events-none" />

          {/* Slide Content */}
          <div className="relative z-20 flex items-center h-full px-6 md:px-12 pointer-events-none">
            <motion.div
              className="w-full md:w-1/2 text-white space-y-6 pointer-events-auto"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.1, delayChildren: 0.3 }
                }
              }}
            >
              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
                }}
                className="text-sm uppercase tracking-wider text-blue-400 font-semibold"
              >
                {slide.eyebrow}
              </motion.p>

              <motion.h1
                className="text-4xl md:text-6xl font-bold leading-tight flex flex-wrap"
              >
                {slide.headline.split(' ').map((word, i) => (
                  <motion.span
                    key={i}
                    className="mr-3 mb-2"
                    variants={{
                      hidden: { opacity: 0, y: 30, rotateX: -20 },
                      visible: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.8, ease: "easeOut" } }
                    }}
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.h1>

              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
                }}
                className="text-lg text-gray-200 max-w-lg leading-relaxed"
              >
                {slide.supporting}
              </motion.p>

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
                }}
                className="flex gap-4 pt-4"
              >
                <button
                  className="bg-accent hover:bg-blue-700 px-8 py-4 rounded-full font-semibold transition-all hover:scale-105 hover:shadow-xl hover:shadow-blue-500/50 relative overflow-hidden group"
                  onClick={() => window.location.href = '/products/core-trays'}
                >
                  <span className="relative z-10">Explore Products</span>
                  {/* Button shine effect */}
                  <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[150%] skew-x-[-20deg] group-hover:animate-shine z-0" />
                </button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Progress Slide indicators */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-30 flex gap-4 w-full max-w-md px-6">
        {slides.map((_, index) => (
          <div
            key={index}
            className="h-[3px] flex-1 bg-white/20 overflow-hidden cursor-pointer rounded-full relative"
            onClick={() => {
              const dir = index > slideIndex ? 1 : -1;
              if (index !== slideIndex) setPage([page + (index - slideIndex), dir]);
            }}
          >
            {index === slideIndex && (
              <motion.div
                className="absolute top-0 left-0 h-full bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)]"
                animate={progressControls}
                initial={{ width: "0%" }}
              />
            )}
            {/* If the index is "before" the current slide logically, we could fill it, 
                but in an infinite loop carousel it's cleaner to just show progress for the active one */}
          </div>
        ))}
      </div>

      <div className="absolute bottom-10 right-10 z-30 animate-bounce pointer-events-none">
        <ArrowDown className="w-6 h-6 text-white/70" strokeWidth={2} />
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
        @keyframes shine {
          100% { transform: translateX(150%) skewX(-20deg); }
        }
        .animate-gradient-shift { animation: gradient-shift 8s ease-in-out infinite; }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 7s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }
        .animate-shine { animation: shine 1.5s ease-in-out infinite; }
      `}</style>
    </section>
  );
}