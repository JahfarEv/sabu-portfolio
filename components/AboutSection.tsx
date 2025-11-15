"use client";

import { useEffect, useState, useRef } from "react";

const stats = [
  { count: 25, description: "Years Experience" },
  { count: 1000, description: "Happy Families" },
  { count: 100, description: "Business Consultations" },
];

function AnimatedCounter({
  value,
  duration = 2000,
  startAnimation,
}: {
  value: number;
  duration?: number;
  startAnimation: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (startAnimation) {
      let start = 0;
      const end = value;
      const totalSteps = 60; // Fixed number of steps for all counters
      const stepDuration = duration / totalSteps;
      const increment = value / totalSteps;

      const timer = setInterval(() => {
        start += increment;
        if (start >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, stepDuration);

      return () => clearInterval(timer);
    }
  }, [startAnimation, value, duration]);

  return <span>{count}+</span>;
}

export default function AboutSection() {
  const [startAnimation, setStartAnimation] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartAnimation(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-20 bg-[#f5fafc]" ref={sectionRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-10">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0b2640] font-serif">
            About Us
          </h2>
          <div className="w-24 h-[3px] bg-yellow-400 mx-auto mt-3 rounded-full"></div>
        </div>

        {/* Paragraphs */}
        <div className="max-w-4xl mx-auto text-center text-lg text-[#13304a] leading-relaxed mb-16 space-y-6">
          <p>
            As one of the best family counselors in Kerala, I provide
            comprehensive family counseling and business consulting services. My
            expertise lies in delivering exceptional results in staff selection,
            staff management, and staff training.
          </p>
          <p>
            I conduct various counseling courses and possess deep knowledge and
            hands-on experience with tools and techniques for personality
            development. My approach focuses on providing effective solutions
            for both humanitarian and financial challenges faced by people in
            the business field.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-500 hover:scale-105 py-10 text-center group"
            >
              <h3 className="text-6xl font-bold text-yellow-400 mb-2">
                <AnimatedCounter
                  value={stat.count}
                  duration={2000}
                  startAnimation={startAnimation}
                />
              </h3>
              <p className="text-gray-500 text-xl font-medium group-hover:text-[#0b2640] transition-colors duration-300">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
