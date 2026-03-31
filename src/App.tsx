/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Menu, Linkedin, Dribbble, Send } from "lucide-react";
import { motion } from "motion/react";
import heroImage from "./assets/images/hero.png";

export default function App() {
  const skills = [
    "UX/UI design",
    "User Research & Analysis",
    "Information Architecture",
    "Prototyping",
    "SaaS & B2B",
    "Modern Visual Interface",
    "Branding & Identity",
    "Graphic Design",
  ];

  return (
    <div className="min-h-screen text-white font-sans selection:bg-orange-500/30">
      {/* Navigation */}
      <header className="fixed top-0 left-0 w-full z-50 px-4 py-6 md:px-6 md:py-8">
        <div className="max-w-7xl mx-auto grid grid-cols-12 items-center">
          {/* Menu Icon */}
          <div className="col-span-6 md:col-span-1">
            <button className="w-[48px] h-[48px] md:w-[56px] md:h-[56px] flex-shrink-0 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
              <Menu className="w-5 h-5 md:w-6 md:h-6" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex md:col-span-10 justify-center gap-2">
            {["Home", "About Me", "Product Cases", "Get in Touch"].map((item) => (
              <button
                key={item}
                className="px-8 h-14 text-[16px] font-normal rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all hover:scale-105"
              >
                {item}
              </button>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="col-span-6 md:col-span-1 flex justify-end gap-2 md:gap-3">
            {[
              { Icon: Linkedin, href: "https://linkedin.com/in/andrii-sadоvyi-41bb34347" },
              { Icon: Dribbble, href: "https://dribbble.com/Montalmo" },
              { Icon: Send, href: "https://t.me/Andrusha_deSad" }
            ].map(({ Icon, href }, idx) => (
              <a
                key={idx}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-[48px] h-[48px] md:w-[56px] md:h-[56px] flex-shrink-0 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all hover:scale-105 group"
              >
                <Icon className="w-5 h-5 md:w-[22px] md:h-[22px] text-white/80 group-hover:text-white transition-colors" />
              </a>
            ))}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="relative h-screen flex flex-col justify-end items-center overflow-hidden">
        {/* Background Layer */}
        <div className="absolute inset-0 z-0 flex justify-center items-end hero-gradient">
          
          {/* Skills Marquee - NOW BEHIND THE IMAGE */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full z-10 border-y border-white/5 py-8 bg-transparent">
            <div className="animate-marquee flex gap-24 items-center">
              {[...skills, ...skills, ...skills].map((skill, idx) => (
                <span
                  key={idx}
                  className="text-[14px] uppercase tracking-[0.4em] text-white/30 font-medium whitespace-nowrap"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Hero Image */}
          <img
            src={heroImage}
            alt="Sadoviy Andrii"
            className="h-[95vh] w-auto max-w-none object-bottom z-20 relative"
            referrerPolicy="no-referrer"
          />
          
          {/* Gradient Overlay for seamless blend */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-30" />
        </div>

        {/* Name and Title - IN FRONT */}
        <div className="relative z-40 w-full max-w-7xl mx-auto px-6 pb-12 md:pb-20 text-center">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-[72px] sm:text-[112px] md:text-[180px] leading-[0.9] md:leading-[0.8] font-bold uppercase tracking-[-0.02em] mb-6 md:mb-8 drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex flex-col md:block"
          >
            <span className="block md:inline">Sadoviy</span>
            <span className="block md:inline md:ml-4">Andrii</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="text-[10px] md:text-sm uppercase tracking-[0.4em] md:tracking-[0.6em] font-medium text-white/50"
          >
            Product Designer
          </motion.p>
        </div>
      </main>

      {/* About Me Section */}
      <section id="about" className="h-screen bg-[#000000]">
        <div className="max-w-7xl mx-auto h-full">
          {/* Content to be added later */}
        </div>
      </section>
    </div>
  );
}
