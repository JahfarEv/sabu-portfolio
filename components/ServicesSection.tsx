"use client";

import ServiceCard from "./ServiceCard";
import {
  FaUserTie,
  FaChalkboardTeacher,
  FaHeart,
  FaLightbulb,
  FaTools,
  FaHandsHelping,
} from "react-icons/fa";

const services = [
  {
    Icon: FaUserTie,
    title: "Staff Selection",
    description:
      "We help you select the right personalities for each role to ensure proper organizational functioning and prevent potential failures.",
  },
  {
    Icon: FaChalkboardTeacher,
    title: "Staff Training",
    description:
      "Train your staff to understand their roles, character, and customer needs. Our approach increases customer satisfaction and business growth.",
  },
  {
    Icon: FaHeart,
    title: "Family Counseling",
    description:
      "Resolve challenging family issues by helping couples recognize personality types and understand each other's traits.",
  },
  {
    Icon: FaLightbulb,
    title: "Business Consulting",
    description:
      "Expert guidance to optimize business processes, manage conflicts, and achieve strategic financial and growth targets.",
  },
  {
    Icon: FaTools,
    title: "Personality Development",
    description:
      "Comprehensive courses and techniques for personal growth, self-discovery, and maximizing individual potential.",
  },
  {
    Icon: FaHandsHelping,
    title: "Career Guidance",
    description:
      "Helping students and professionals identify their strengths and choose a fulfilling and successful career path.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0b2640] font-serif">
            Our Services
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions for personal and professional growth
          </p>
        </div>

        {/* Cards grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, idx) => (
            <ServiceCard
              key={idx}
              Icon={s.Icon}
              title={s.title}
              description={s.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
