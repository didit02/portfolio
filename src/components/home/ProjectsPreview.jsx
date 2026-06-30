import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { projects } from "@/lib/data";

/**
 * @typedef {Object} Project
 * @property {string} id
 * @property {string} title
 * @property {string} shortDesc
 * @property {string} category
 * @property {string | number} year
 * @property {string} image
 */

/**
 * @param {{ project: Project, index: number }} props
 */
function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
      }}
    >
      <Link
        to={`/project/${project.id}`}
        className="group relative block overflow-hidden rounded-xl aspect-[16/10] bg-muted shadow-sm"
      >
        <img
           src={project.image}
          alt={project.title}
          className="
            absolute inset-0
            w-full h-full
            object-cover
            transition-all duration-700
            group-hover:scale-110
            group-hover:brightness-50
          "
        />

        <div
          className="
            absolute inset-0
            bg-black/50
            opacity-0
            group-hover:opacity-100
            transition duration-500
          "
        />

        <div
          className="
            absolute inset-0
            flex items-center justify-center
            opacity-0
            group-hover:opacity-100
            transition duration-500
            p-8
          "
        >
          <div className="text-center max-w-[280px] mx-auto">
            <h3
              className="
                font-heading
                font-semibold
                text-xl
                md:text-2xl
                text-white
                leading-tight
                mb-2
              "
            >
              {project.title}
            </h3>

            <p
              className="
                font-heading
                text-sm
                md:text-[15px]
                text-white/75
                leading-relaxed
                max-w-[260px]
                mx-auto
              "
            >
              {project.shortDesc}
            </p>

            <span className="inline-block mt-4 text-xs uppercase tracking-widest text-primary">
              {project.category}
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function ProjectsPreview() {
  // tampilkan 6 project terbaru
  const featuredProjects = [...projects]
    .sort((a, b) => Number(b.year) - Number(a.year))
    .slice(0, 6);

  return (
    <section className="py-14 lg:py-16 px-6 lg:px-12 border-t border-border/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5"
        >
          <div className="max-w-2xl">
            <p className="font-heading font-semibold text-xs uppercase tracking-[0.2em] text-primary mb-3">
              Portfolio
            </p>

            <h2 className="font-heading font-bold text-4xl lg:text-5xl tracking-[-0.02em] mb-4">
              Featured Projects
            </h2>

            <p className="text-base leading-relaxed text-muted-foreground max-w-2xl">
              A selection of engineering, research, internship, and personal projects
              showcasing design, analysis, manufacturing, automation, and embedded
              systems.
            </p>
          </div>

          <Link
            to="/projects"
            className="
              hidden
              lg:block
              font-heading
              font-semibold
              text-xs
              uppercase
              tracking-[0.15em]
              text-muted-foreground
              hover:text-primary
              border-b
              border-muted-foreground/30
              hover:border-primary
              pb-1
              transition-all
              duration-300
              whitespace-nowrap
            "
          >
            View All ({projects.length}) →
          </Link>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>

      </div>
    </section>
  );
}