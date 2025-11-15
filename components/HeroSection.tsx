"use client";

import { FaArrowRight, FaStar, FaPlay } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [displayName, setDisplayName] = useState("");
  const fullName = "Sabu Kottotty";

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    let currentIndex = 0;
    const timer = setInterval(() => {
      if (currentIndex <= fullName.length) {
        setDisplayName(fullName.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(timer);
      }
    }, 100); // Adjust speed here (milliseconds per letter)

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative bg-[#2a6da4] text-white min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        {/* Main gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-br from-[#0a1c2b] via-[#0a1c2b] to-blue-900/20"></div>

        {/* Animated floating elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent-yellow/5 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-float-medium"></div>
        <div
          className="absolute bottom-40 left-20 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-float-slow"
          style={{ animationDelay: "2s" }}
        ></div>

        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px),
                           linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        ></div>

        {/* Animated lines */}
        <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-br from-transparent via-accent-yellow/30 to-transparent animate-shine"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Heading */}
        <div className="mb-8">
          <h1 className="text-6xl sm:text-7xl font-serif font-bold mb-6">
            <span className="block text-transparent bg-clip-text bg-linear-to-br from-white via-accent-yellow to-white">
              {displayName}
              <span className="inline-block w-2 h-16 bg-accent-yellow ml-1 animate-pulse"></span>
            </span>
          </h1>
        </div>

        {/* Professional Title */}
        <div className="mb-12">
          <div className="flex items-center justify-center gap-6 mb-4">
            <div className="w-16 h-px bg-linear-to-br from-transparent to-accent-yellow/50"></div>
            <p className="text-xl md:text-2xl font-light text-gray-300 tracking-wider">
              Business & Family Counsellor
            </p>
            <div className="w-16 h-px bg-linear-to-br from-accent-yellow/50 to-transparent"></div>
          </div>
        </div>

        {/* Core Message */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl mb-8 mx-auto leading-tight font-serif font-light">
            Guiding Families and Businesses Toward
            <span className="relative inline-block">
              <span className="relative z-10 text-accent-yellow font-medium">
                Growth & Harmony
              </span>
              <span className="absolute bottom-1 left-0 w-full h-3 bg-accent-yellow/20 -rotate-1 z-0"></span>
            </span>{" "}
          </h2>

          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            One of the best family counselors in Kerala who provides family
            counseling and business consulting, delivering exceptional results
            in staff selection, management, and training.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-16">
          <button
            onClick={() => scrollToSection("services")}
            className="group relative w-full sm:w-auto bg-linear-to-br from-accent-yellow to-yellow-500 text-[#0a1c2b] font-bold py-5 px-12 rounded-2xl shadow-2xl hover:shadow-accent-yellow/40 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
          >
            <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-yellow-400 to-accent-yellow opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative z-10 flex items-center justify-center gap-3 text-lg">
              Explore Services
              <FaArrowRight
                className="group-hover:translate-x-1 transition-transform duration-200"
                size={18}
              />
            </span>
          </button>

          <button
            onClick={() => scrollToSection("contact")}
            className="group relative w-full sm:w-auto border-2 border-white/20 bg-white/5 backdrop-blur-md text-white font-bold py-5 px-12 rounded-2xl hover:border-accent-yellow/50 hover:bg-accent-yellow/5 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
          >
            <span className="flex items-center justify-center gap-3 text-lg">
              <FaPlay size={14} />
              Start Journey
            </span>
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-gray-400 font-medium tracking-wider">
            SCROLL
          </span>
          <div className="w-5 h-8 border-2 border-gray-400/30 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-accent-yellow rounded-full mt-2 animate-scroll"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
