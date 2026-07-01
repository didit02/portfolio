import React from "react";
import { Link } from "react-router-dom";
import { Linkedin, ArrowRight, Download } from "lucide-react";
import { motion } from "framer-motion";
import { profileData, profileImage } from "@/lib/data";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(hsl(350 90% 60%) 1px, transparent 1px), linear-gradient(90deg, hsl(350 90% 60%) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
        pointerEvents: "none",
      }} />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full pt-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="order-2 lg:order-1"
          >
            {/* Label */}
            <div className="font-heading font-semibold text-xs text-primary tracking-[0.2em] uppercase mb-6">
              {profileData.subtitle}
            </div>
            
            {/* Main Heading */}
            <h1 className="font-heading font-bold text-5xl md:text-7xl lg:text-8xl tracking-[-0.03em] leading-[0.9] mb-6">
              {profileData.name.split(" ")[0]}
              <br />
              <span className="text-muted-foreground">{profileData.name.split(" ")[1]}</span>
            </h1>

            {/* Description */}
            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg mb-10">
              {profileData.intro}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-6 py-3 border border-muted-foreground/30 text-foreground font-heading font-semibold text-xs uppercase tracking-[0.15em] hover:border-primary hover:text-primary transition-all duration-300"
              >
                <Linkedin size={14} />
                LinkedIn
              </a>
              
              <Link
                to="/projects"
                className="group flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-heading font-semibold text-xs uppercase tracking-[0.15em] hover:bg-primary/90 transition-all duration-300"
              >
                Projects
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                to="/resume"
                className="group flex items-center gap-2 px-6 py-3 border border-border text-muted-foreground font-heading font-semibold text-xs uppercase tracking-[0.15em] hover:border-primary hover:text-primary transition-all duration-300"
              >
                <Download size={14} />
                Resume
              </Link>
            </div>
          </motion.div>

          {/* Right - Portrait */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Corner Decorations */}
              <div className="absolute -top-3 -left-3 w-8 h-8 border-t border-l border-primary/40" />
              <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b border-r border-primary/40" />
              
              {/* Scan Line */}
              <motion.div
                className="absolute left-0 right-0 h-px bg-primary/60 z-10"
                initial={{ top: "0%" }}
                animate={{ top: "100%" }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
              
              <div className="w-72 h-96 md:w-80 md:h-[28rem] overflow-hidden relative">
                <img
                  src={profileImage}
                  alt="Aditya Tri Ananta - Electrical Engineer"
                  className="w-full h-full object-cover grayscale-[30%] contrast-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}