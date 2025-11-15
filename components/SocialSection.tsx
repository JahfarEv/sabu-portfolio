"use client";

import {
  FaYoutube,
  FaFacebookF,
  FaInstagram,
  FaPhone,
  FaMobileAlt,
  FaArrowRight,
} from "react-icons/fa";

type Social = {
  id: string;
  name: string;
  Icon: any;
  url: string;
  tone: "red" | "blue" | "green" | "pink" | "sky" | "indigo";
};

const socialLinks: Social[] = [
  {
    id: "yt-1",
    name: "Different Angles",
    Icon: FaYoutube,
    url: "https://www.youtube.com/@different_angles",
    tone: "red",
  },
  {
    id: "yt-2",
    name: "Village Malayali",
    Icon: FaYoutube,
    url: " https://www.youtube.com/@villagemalayali",
    tone: "red",
  },
  {
    id: "yt-3",
    name: "eN Malayali",
    Icon: FaYoutube,
    url: "https://www.youtube.com/@eNMalayali",
    tone: "red",
  },
  {
    id: "fb-1",
    name: "Different Angles",
    Icon: FaFacebookF,
    url: " https://www.facebook.com/differentanglesofficial",
    tone: "blue",
  },
  {
    id: "fb-2",
    name: "Village Malayali",
    Icon: FaFacebookF,
    url: "https://www.facebook.com/villagemalayali",
    tone: "blue",
  },
  {
    id: "ins-1",
    name: "Instagram",
    Icon: FaInstagram,
    url: "https://www.instagram.com/sabukottotty/",
    tone: "pink",
  },
];

const toneClasses: Record<
  Social["tone"],
  { gradient: string; glow: string; iconBg: string; hoverGlow: string }
> = {
  red: {
    gradient: "from-red-500/20 to-rose-600/20",
    glow: "shadow-red-500/20",
    iconBg: "bg-gradient-to-br from-red-500 to-rose-600",
    hoverGlow: "hover:shadow-red-500/40",
  },
  blue: {
    gradient: "from-blue-500/20 to-indigo-600/20",
    glow: "shadow-blue-500/20",
    iconBg: "bg-gradient-to-br from-blue-500 to-indigo-600",
    hoverGlow: "hover:shadow-blue-500/40",
  },
  green: {
    gradient: "from-green-500/20 to-emerald-600/20",
    glow: "shadow-green-500/20",
    iconBg: "bg-gradient-to-br from-green-500 to-emerald-600",
    hoverGlow: "hover:shadow-green-500/40",
  },
  pink: {
    gradient: "from-pink-500/20 to-fuchsia-600/20",
    glow: "shadow-pink-500/20",
    iconBg: "bg-gradient-to-br from-pink-500 to-fuchsia-600",
    hoverGlow: "hover:shadow-pink-500/40",
  },
  sky: {
    gradient: "from-sky-500/20 to-cyan-600/20",
    glow: "shadow-sky-500/20",
    iconBg: "bg-gradient-to-br from-sky-500 to-cyan-600",
    hoverGlow: "hover:shadow-sky-500/40",
  },
  indigo: {
    gradient: "from-indigo-500/20 to-purple-600/20",
    glow: "shadow-indigo-500/20",
    iconBg: "bg-gradient-to-br from-indigo-500 to-purple-600",
    hoverGlow: "hover:shadow-indigo-500/40",
  },
};

export default function SocialSection() {
  const open = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="social" className="relative py-24 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-linear-to-br from-gray-900 via-slate-900 to-gray-900">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-yellow/20 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header with Animation */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <h2 className="text-4xl lg:text-6xl font-serif font-bold text-transparent bg-clip-text bg-linear-to-br from-white via-accent-yellow to-white mb-4">
              Connect With Us
            </h2>
            <div className="w-32 h-1.5 bg-linear-to-br from-transparent via-accent-yellow to-transparent mx-auto rounded-full"></div>
          </div>
          <p className="text-gray-400 text-lg mt-6 max-w-2xl mx-auto">
            Follow our channels for the latest updates, stories, and exclusive
            content
          </p>
        </div>

        {/* Social Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
          {socialLinks.map((s) => {
            const tone = toneClasses[s.tone];
            return (
              <button
                key={s.id}
                onClick={() => open(s.url)}
                className={`group relative overflow-hidden rounded-2xl bg-linear-to-br ${tone.gradient} backdrop-blur-xl border border-white/10 p-6 shadow-xl ${tone.glow} ${tone.hoverGlow} hover:scale-[1.02] hover:border-white/20 transition-all duration-300 cursor-pointer`}
                aria-label={s.name}
                type="button"
              >
                {/* Shine effect on hover */}
                <div className="absolute inset-0 bg-linear-to-br from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>

                <div className="relative flex items-center gap-4">
                  <div
                    className={`w-14 h-14 rounded-xl ${tone.iconBg} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <s.Icon size={28} />
                  </div>
                  <div className="flex-1 text-left">
                    <h3 className="text-xl font-bold text-white group-hover:text-accent-yellow transition-colors">
                      {s.name}
                    </h3>
                  </div>
                  <div className="text-white/40 group-hover:text-white/60 group-hover:translate-x-1 transition-all duration-300">
                    <FaArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Contact Card with Glassmorphism */}
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden">
            {/* Gradient border effect */}
            <div className="absolute inset-0 bg-linear-to-br from-accent-yellow via-blue-500 to-accent-yellow p-0.5 rounded-3xl">
              <div className="h-full w-full bg-gray-900/90 backdrop-blur-2xl rounded-3xl"></div>
            </div>

            <div className="relative p-8 lg:p-12">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-accent-yellow/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>

              <div className="relative">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-yellow/10 border border-accent-yellow/20 mb-4 text-white">
                    <span className="w-2 h-2 bg-accent-yellow rounded-full animate-pulse"></span>
                    <span className="text-accent-yellow font-semibold text-sm">
                      Available 24/7
                    </span>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                    For News, Promotions & Advertisements
                  </h3>
                  <p className="text-gray-400">
                    Reach out to us anytime for business inquiries
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button
                    type="button"
                    onClick={() => open("tel:04942494000")}
                    className="group w-full sm:w-auto flex items-center gap-4 px-8 py-4 rounded-xl bg-linear-to-br from-white/5 to-white/10 border border-white/20 hover:border-accent-yellow/50 hover:from-accent-yellow/10 hover:to-accent-yellow/5 transition-all duration-300 shadow-lg hover:shadow-accent-yellow/20 cursor-pointer"
                  >
                    <div className="w-12 h-12 rounded-lg bg-linear-to-br from-accent-yellow to-yellow-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <FaPhone className="text-black" size={24} />
                    </div>
                    <div className="text-left">
                      <div className="text-xs text-gray-400 mb-1">
                        Office Line
                      </div>
                      <div className="text-xl font-bold text-white tracking-wide">
                        04942494000
                      </div>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => open("tel:9400006000")}
                    className="group w-full sm:w-auto flex items-center gap-4 px-8 py-4 rounded-xl bg-linear-to-br from-white/5 to-white/10 border border-white/20 hover:border-accent-yellow/50 hover:from-accent-yellow/10 hover:to-accent-yellow/5 transition-all duration-300 shadow-lg hover:shadow-accent-yellow/20 cursor-pointer"
                  >
                    <div className="w-12 h-12 rounded-lg bg-linear-to-br from-accent-yellow to-yellow-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <FaMobileAlt className="text-black" size={24} />
                    </div>
                    <div className="text-left">
                      <div className="text-xs text-gray-400 mb-1">Mobile</div>
                      <div className="text-xl font-bold text-white tracking-wide">
                        9400006000
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
