"use client";

import { useEffect, useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // scroll spy & header bg
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "services", "social", "contact"];
      const scrollY = window.pageYOffset;
      setScrolled(scrollY > 50);

      sections.forEach((section) => {
        const el = document.getElementById(section);
        if (el) {
          const { offsetTop, offsetHeight } = el;
          if (
            scrollY >= offsetTop - 100 &&
            scrollY < offsetTop + offsetHeight - 100
          ) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // lock body scroll while menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) =>
      e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Utility: immediate close + scroll AFTER unmount
  const closeMenuAndScroll = (sectionId: string) => {
    setMenuOpen(false);

    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        const y = element.getBoundingClientRect().top + window.pageYOffset - 80;
        window.scrollTo({ top: y, behavior: "smooth" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }, 20);
  };

  // Navigate to home
  const navigateToHome = () => {
    setMenuOpen(false);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 20);
  };

  const sections = ["home", "about", "services", "social", "contact"];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? " bg-white/95 backdrop-blur-md shadow-lg"
            : "bg-transparent text-amber-200"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            {/* Logo - Now clickable */}
            <button
              type="button"
              onClick={navigateToHome}
              className={`font-serif font-bold text-xl lg:text-2xl transition-all duration-300 ${
                scrolled
                  ? "text-primary-dark hover:text-yellow-600"
                  : "text-white hover:text-accent-yellow"
              } hover:scale-105 cursor-pointer`}
              aria-label="Go to home"
            >
              Sabu Kottotty
            </button>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center space-x-8">
              <div className="flex items-center space-x-6 lg:space-x-8 ">
                {sections.map((section) => (
                  <button
                    key={section}
                    type="button"
                    onClick={() => closeMenuAndScroll(section)}
                    className={`font-medium transition-all duration-300 hover:text-accent-yellow cursor-pointer ${
                      activeSection === section
                        ? "text-yellow-500 font-semibold"
                        : scrolled
                        ? "text-gray-700"
                        : "text-white/90"
                    }`}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </button>
                ))}
              </div>

              <button
                type="button"
                onClick={() => closeMenuAndScroll("contact")}
                className={`font-semibold py-2 px-6 rounded-full transition-all duration-300 ${
                  scrolled
                    ? "bg-primary-dark text-white hover:bg-gray-800"
                    : "bg-white text-primary-dark hover:bg-gray-100 text-black"
                }`}
              >
                Contact Now
              </button>
            </div>

            {/* Mobile hamburger */}
            <div className="md:hidden flex items-center">
              <button
                type="button"
                onClick={() => setMenuOpen((s) => !s)}
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                className={`p-2 rounded-md transition-colors duration-300 ${
                  scrolled
                    ? "text-gray-700 hover:bg-gray-100"
                    : "text-white hover:bg-white/10"
                }`}
              >
                {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay - backdrop BEHIND menu */}
      {menuOpen && (
        <>
          {/* Backdrop - lower z-index */}
          <div
            className="md:hidden fixed inset-0 bg-black/50 z-40 transition-opacity duration-300"
            onClick={() => setMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Menu panel - higher z-index */}
          <div className="md:hidden fixed inset-y-0 right-0 w-full sm:w-80 bg-white z-50 shadow-2xl overflow-auto">
            {/* Close button in header */}
            <div className="flex justify-between items-center p-4 border-b border-gray-100">
              <button
                type="button"
                onClick={navigateToHome}
                className="font-serif font-bold text-xl text-primary-dark hover:text-yellow-600 transition-colors"
                aria-label="Go to home"
              >
                Sabu Kottotty
              </button>
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
                aria-label="Close menu"
              >
                <FaTimes size={24} />
              </button>
            </div>

            {/* Menu items */}
            <div className="container mx-auto px-6 py-8">
              <div className="flex flex-col gap-2">
                {sections.map((section) => (
                  <button
                    key={section}
                    type="button"
                    onClick={() => closeMenuAndScroll(section)}
                    className={`text-left text-xl font-medium py-4 px-4 rounded-lg transition-all duration-200 ${
                      activeSection === section
                        ? "bg-accent-yellow/10 text-accent-yellow border-l-4 border-accent-yellow"
                        : "text-gray-800 hover:bg-gray-50 hover:border-l-4 hover:border-gray-200"
                    }`}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </button>
                ))}
              </div>

              {/* Contact CTA in mobile menu */}
              <div className="mt-8 px-4">
                <button
                  type="button"
                  onClick={() => closeMenuAndScroll("contact")}
                  className="w-full bg-primary-dark text-white font-semibold py-3 px-6 rounded-full hover:bg-gray-800 transition-all duration-300"
                >
                  Contact Now
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
