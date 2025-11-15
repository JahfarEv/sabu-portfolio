"use client";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowUp,
} from "react-icons/fa";
import { useState, useEffect } from "react";

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <footer className="bg-[#06121E] text-white py-12 relative">
        <div className="container mx-auto px-6 lg:px-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: About */}
          <div>
            <h2 className="text-xl font-bold mb-4">Sabu Kottotty</h2>
            <p className="text-gray-400 leading-relaxed">
              Business & Family Counsellor dedicated to guiding families and
              businesses toward growth and harmony.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#home" className="hover:text-yellow-400 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-yellow-400 transition">
                  About
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-yellow-400 transition"
                >
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-yellow-400 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Family Counseling</li>
              <li>Business Consulting</li>
              <li>Staff Training</li>
              <li>Personality Development</li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center gap-2">
                <FaPhoneAlt className="text-yellow-400" />
                +91 9400006000
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope className="text-yellow-400" />
                sabukottotty@gmail.com
              </li>
              <li className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-yellow-400" />
                Malappuram, Kerala
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500 text-sm">
          © 2025 Sabu Kottotty. All rights reserved.
        </div>
      </footer>

      {/* Sticky Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 bg-yellow-400 text-black p-3 rounded-full shadow-lg hover:bg-yellow-500 transition-all duration-300 z-50 ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10 pointer-events-none"
        }`}
        aria-label="Scroll to top"
      >
        <FaArrowUp size={18} />
      </button>
    </>
  );
}
