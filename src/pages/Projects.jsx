import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/lib/data";
const categories = ["All", "Professional", "Internship", "Student Team", "Personal"];

/**
 * @typedef {Object} Project
 * @property {string} id
 * @property {string} title
 * @property {string} domain
 * @property {string} category
 * @property {string} year
 * @property {string} shortDesc
 * @property {string} [image]
 */

/**
 * @param {{ project: Project, index: number }} props
 */
function ProjectCard({ project, index }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
      }}
    >
      <Link
        to={`/project/${project.id}`}
        className="group relative block overflow-hidden rounded-xl aspect-[16/10] bg-muted"
      >
        {/* Image */}
        <img
          src={project.image || ""}
          alt={project.title}
          className="
            w-full
            h-full
            object-cover
            transition-all
            duration-700
            ease-out
            group-hover:scale-110
            group-hover:brightness-50
          "
        />

        {/* Overlay */}
        <div
          className="
            absolute
            inset-0
            bg-black/60
            opacity-0
            group-hover:opacity-100
            transition-all
            duration-500
            flex
            items-center
            justify-center
        "
        >
          <div className="max-w-[300px] px-6 text-center">
            <h3
              className="
                font-heading
                font-semibold
                text-xl
                md:text-2xl
                text-white
                leading-tight
                mb-3
              "
            >
              {project.title}
            </h3>

            <p
              className="
                font-heading
                text-sm
                md:text-[15px]
                text-white/80
                leading-relaxed
              "
            >
              {project.shortDesc}
            </p>

            <span
              className="
                inline-block
                mt-5
                text-[11px]
                uppercase
                tracking-[0.2em]
                text-primary
              "
            >
              {project.category}
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All"
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <div className="pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="font-heading font-semibold text-xs text-primary tracking-[0.2em] uppercase mb-4">
            Project Matrix
          </div>
          <h1 className="text-5xl md:text-6xl font-heading font-bold tracking-[-0.02em]">
            Projects
          </h1>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-2 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`
                px-4 py-2 font-heading font-semibold text-[11px] uppercase tracking-[0.15em] border transition-all duration-300
                ${activeFilter === cat
                  ? "border-primary text-primary bg-primary/5"
                  : "border-border/30 text-muted-foreground hover:border-muted-foreground/50 hover:text-foreground"
                }
              `}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
>
          <AnimatePresence mode="popLayout">
            {filtered.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}