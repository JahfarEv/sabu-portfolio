"use client";

import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaGlobe,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaCheck,
  FaExclamationTriangle,
} from "react-icons/fa";

// EmailJS configuration - Replace these with your actual IDs
const EMAILJS_CONFIG = {
  SERVICE_ID: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID",
  TEMPLATE_ID:
    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID",
  PUBLIC_KEY: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY",
};

const contactItems = [
  {
    id: "phone",
    title: "Phone",
    subtitle: "+91 9400006000",
    href: "tel:+919400006000",
    Icon: FaPhoneAlt,
  },
  {
    id: "email",
    title: "Email",
    subtitle: "sabukottotty@gmail.com",
    href: "mailto:sabukottotty@gmail.com",
    Icon: FaEnvelope,
  },
  {
    id: "website",
    title: "Website",
    subtitle: "www.sabukottotty.com",
    href: "https://sabukottotty.com",
    Icon: FaGlobe,
  },
  {
    id: "whatsapp",
    title: "WhatsApp",
    subtitle: "+91 9400006000",
    href: "https://wa.me/919400006000",
    Icon: FaWhatsapp,
  },
  {
    id: "address",
    title: "Address",
    subtitle: "Malappuram, Kerala",
    href: "https://maps.google.com?q=Malappuram+Kerala",
    Icon: FaMapMarkerAlt,
  },
];

export default function ContactSection() {
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  // Initialize EmailJS
  React.useEffect(() => {
    emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus("idle");

    try {
      console.log("Sending email with:", {
        serviceId: EMAILJS_CONFIG.SERVICE_ID,
        templateId: EMAILJS_CONFIG.TEMPLATE_ID,
      });

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        service: formData.service,
        message: formData.message,
        to_email: "sabukottotty@gmail.com",
        reply_to: formData.email,
        subject: `New Contact Form Submission from ${formData.name}`,
      };

      const result = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams
      );

      console.log("Email sent successfully:", result);

      if (result.status === 200) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });

        setTimeout(() => {
          setSubmitStatus("idle");
        }, 5000);
      }
    } catch (error) {
      console.error("Failed to send email:", error);
      setSubmitStatus("error");

      setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-[#f5fafc]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-[#0b2640]">
            Contact Us
          </h2>
          <div className="w-24 h-[3px] bg-yellow-400 mx-auto mt-3 rounded" />
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Get in touch for consultation and support
          </p>
        </div>

        {/* Status Messages */}
        {submitStatus === "success" && (
          <div className="max-w-2xl mx-auto mb-8 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg flex items-center gap-3">
            <FaCheck className="text-green-600" />
            <span>Message sent successfully! We'll get back to you soon.</span>
          </div>
        )}

        {submitStatus === "error" && (
          <div className="max-w-2xl mx-auto mb-8 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg flex items-center gap-3">
            <FaExclamationTriangle className="text-red-600" />
            <span>
              Failed to send message. Please try again or contact us directly.
            </span>
          </div>
        )}

        {/* Two column layout */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Left: stacked contact cards */}
          <div className="space-y-6">
            {contactItems.map(({ id, title, subtitle, href, Icon }) => (
              <a
                key={id}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="block transition-transform hover:scale-105"
              >
                <div className="flex items-center gap-6 bg-white rounded-2xl shadow-md border border-gray-100 p-4 hover:shadow-lg transition-all duration-300">
                  <div className="w-14 h-14 rounded-full bg-yellow-400 flex items-center justify-center text-[#0b2640] text-lg shadow-inner">
                    <Icon />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-[#0b2640]">
                      {title}
                    </h4>
                    <p className="text-sm text-gray-500 mt-1">{subtitle}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Right: form card */}
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-8">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-transparent transition-all duration-300"
                  disabled={isLoading}
                />
              </div>

              <div>
                <input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-transparent transition-all duration-300"
                  disabled={isLoading}
                />
              </div>

              <div>
                <input
                  name="phone"
                  type="tel"
                  placeholder="Your Phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-transparent transition-all duration-300"
                  disabled={isLoading}
                />
              </div>

              <div>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-transparent transition-all duration-300"
                  disabled={isLoading}
                >
                  <option value="">Select Service</option>
                  <option value="Family Counseling">Family Counseling</option>
                  <option value="Business Consulting">
                    Business Consulting
                  </option>
                  <option value="Staff Training">Staff Training</option>
                  <option value="Personality Development">
                    Personality Development
                  </option>
                  <option value="Career Guidance">Career Guidance</option>
                </select>
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-transparent resize-none transition-all duration-300"
                  disabled={isLoading}
                />
              </div>

              <div className="mt-4">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="inline-flex items-center gap-3 bg-yellow-400 text-[#0b2640] font-semibold py-3 px-8 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100"
                >
                  {isLoading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-[#0b2640] border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane />
                      Send Message
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
