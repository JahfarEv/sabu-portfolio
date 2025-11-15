"use client";

import { IconType } from "react-icons";

interface ServiceCardProps {
  Icon: IconType;
  title: string;
  description: string;
}

export default function ServiceCard({
  Icon,
  title,
  description,
}: ServiceCardProps) {
  return (
    <article
      className="group relative bg-white rounded-2xl border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-500 p-8 lg:p-10 min-h-[190px] flex flex-col overflow-hidden"
      role="article"
    >
      {/* Animated top border on hover */}
      <div className="absolute top-0 left-0 w-0 h-1 bg-linear-to-r from-yellow-400 to-orange-500 group-hover:w-full transition-all duration-500 ease-out" />

      {/* Floating animation on hover */}
      <div className="transform group-hover:-translate-y-2 transition-transform duration-500 ease-out">
        {/* Icon with enhanced hover effects */}
        <div className="flex flex-col items-center text-center gap-4">
          <div className="shrink-0 relative">
            {/* Icon background glow effect */}
            <div className="absolute inset-0 w-12 h-12 rounded-full bg-yellow-400 opacity-0 group-hover:opacity-20 group-hover:scale-150 transition-all duration-500 blur-sm" />

            {/* Main icon container */}
            <div className="relative w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center text-white text-lg shadow group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
              <Icon className="group-hover:scale-110 transition-transform duration-300" />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1">
            <h3 className="text-lg lg:text-2xl font-semibold text-gray-800 mb-3 group-hover:text-[#0b2640] transition-colors duration-300">
              {title}
            </h3>
            <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
              {description}
            </p>
          </div>
        </div>

        {/* Subtle background pattern on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none">
          <div className="absolute top-4 right-4 w-20 h-20 bg-yellow-400 rounded-full blur-xl" />
          <div className="absolute bottom-4 left-4 w-16 h-16 bg-blue-400 rounded-full blur-xl" />
        </div>
      </div>

      {/* keep card balanced */}
      <div className="mt-auto" />
    </article>
  );
}
