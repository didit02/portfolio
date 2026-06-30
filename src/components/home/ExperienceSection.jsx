import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { experiences, experienceImages } from "@/lib/data";
import { MapPin, Calendar, ArrowRight } from "lucide-react";

/**
 * @param {{
 *   exp: {
 *     id: string | keyof typeof experienceImages;
 *     company: string;
 *     role: string;
 *     description: string;
 *     date: string;
 *     location: string;
 *   };
 *   index: number;
 * }} props
 */
function ExperienceCard({ exp, index }) {
  const imageKey = /** @type {keyof typeof experienceImages} */ (exp.id);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      className="group"
    >
      <div className="grid md:grid-cols-[1fr_auto] gap-5 items-start py-6 border-b border-border/30 hover:border-cyan-500/30 transition-colors duration-500">
        {/* Left - Main Content */}
        <div className="flex gap-4">
          {/* Company Image - NO BORDER, Full Logo Display */}
          <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 flex items-center justify-center bg-gradient-to-br from-white/5 to-white/[0.02] rounded-lg group-hover:from-white/10 group-hover:to-white/5 transition-all duration-500 backdrop-blur-sm">
            <img
              src={experienceImages[imageKey]}
              alt={exp.company}
              className="w-[85%] h-[85%] object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
            />
          </div>

          {/* Info */}
          <div className="flex-1 min-w-0">
            <div className="font-heading font-semibold text-xs text-cyan-500 tracking-[0.15em] uppercase mb-1">
              {exp.company}
            </div>
            <h3 className="text-lg font-heading font-semibold text-foreground mb-2 group-hover:text-cyan-400 transition-colors duration-300">
              {exp.role}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
              {exp.description}
            </p>
          </div>
        </div>

        {/* Right - Date & Location */}
        <div className="flex md:flex-col items-start md:items-end gap-3 md:gap-2 md:text-right flex-shrink-0 pl-5 md:pl-0">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Calendar size={12} className="text-cyan-500/60" />
            <span className="font-mono text-xs tracking-wider">{exp.date}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin size={12} className="text-cyan-500/60" />
            <span className="font-mono text-xs tracking-wider">{exp.location}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function ExperienceSection() {
  return (
    <section className="py-16 lg:py-20 relative">
      {/* Vertical Line */}
      <div className="absolute left-6 lg:left-12 top-0 bottom-0 w-px bg-border/30" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <div className="font-heading font-semibold text-xs text-cyan-500 tracking-[0.2em] uppercase mb-4">
            Career Trajectory
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold tracking-[-0.02em]">
            Experience
          </h2>
        </motion.div>

        <div className="space-y-0">
          {experiences.map((exp, index) => (
            <ExperienceCard key={exp.id} exp={exp} index={index} />
          ))}
        </div>

        {/* View Full Resume Button - Prominent */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 flex justify-center"
        >
          <Link
            to="/resume"
            className="
              group
              inline-flex
              items-center
              gap-3
              px-7
              py-3
              bg-cyan-500/10
              border
              border-cyan-500
              hover:bg-cyan-500
              hover:text-white
              text-cyan-500
              font-mono
              text-xs
              uppercase
              tracking-[0.15em]
              transition-all
              duration-300
              rounded-sm
            "
          >
            <span className="font-heading font-semibold">
              View Full Resume
            </span>

            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform duration-300"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}