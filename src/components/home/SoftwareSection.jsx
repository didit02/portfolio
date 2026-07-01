import React from "react";
import { motion } from "framer-motion";
import { softwareWithImages } from "@/lib/data";

export default function SoftwareSection() {
  // Hanya tampilkan 10 software (hapus 2 placeholder)
  const softwareList = softwareWithImages.slice(0, 10);

  return (
    <section className="py-14 lg:py-16 border-t border-border/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          {/* Label */}
          <div className="font-heading font-semibold text-xs text-primary tracking-[0.2em] uppercase mb-4">
            Technical
          </div>
          {/* Heading */}
          <h2 className="font-heading font-bold text-4xl md:text-5xl tracking-[-0.02em] mb-6">
            Software & Tools
          </h2>
          {/* Description */}
          <p className="text-base leading-relaxed text-muted-foreground max-w-2xl">
            A comprehensive toolkit of design, simulation, and analysis software tailored for power and electrical engineering excellence.
          </p>
        </motion.div>

        {/* Software Grid - 10 items with 5 columns on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8">
          {softwareList.map((software, index) => (
            <motion.div
              key={software.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="group relative"
            >
              {/* Card Container */}
              <div className="
                  relative h-32 md:h-40 rounded-[16px]
                  backdrop-blur-sm
                  bg-white/5
                  border border-white/10
                  p-4
                  flex items-center justify-center
                  overflow-hidden
                  hover:border-white/30
                  hover:bg-white/15
                  transition-all duration-300
                  group-hover:shadow-xl
                  group-hover:shadow-primary/20
                  ">
                {/* Logo Image */}
                <img
                  src={software.image}
                  alt={software.name}
                  className="max-w-[70%] max-h-[70%] object-contain group-hover:scale-110 transition-transform duration-300"
                />

                {/* Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Text Overlay on Hover */}
                <div className="absolute inset-0 flex flex-col items-center justify-end p-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="font-heading font-semibold text-sm text-white text-center leading-tight">
                    {software.name}
                  </p>

                  <p className="mt-1 font-heading text-[11px] font-medium tracking-[0.12em] uppercase text-white/70">
                    {software.proficiency}%
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}