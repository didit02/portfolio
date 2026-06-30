import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { projects } from "@/lib/data";

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="pt-28 pb-24 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-heading font-bold mb-4">
            Project Not Found
          </h1>

          <Link
            to="/projects"
            className="text-primary hover:underline font-heading"
          >
            ← Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">

      {/* ================= HERO ================= */}

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative h-[350px] lg:h-[430px] overflow-hidden"
      >
        {/* Background */}
        <img
          src={project.coverImage ?? project.image}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/55" />

        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20" />

        {/* Content */}
        <div className="relative z-10 h-full max-w-7xl mx-auto px-6 lg:px-12 flex flex-col justify-end pb-16">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: .25 }}
            className="max-w-4xl"
          >

            <div className="font-heading font-semibold uppercase tracking-[0.25em] text-primary text-xs mb-4">
              {project.category} • {project.year}
            </div>

            <h1
              className="
              font-heading
              font-bold
              text-white
              text-4xl
              md:text-5xl
              lg:text-6xl
              leading-tight
              tracking-[-0.03em]
              mb-6
              "
            >
              {project.title}
            </h1>

            <p
              className="
              text-lg
              text-white/85
              leading-8
              max-w-3xl
              "
            >
              {project.shortDesc}
            </p>

          </motion.div>

        </div>
      </motion.section>

      {/* ================= CONTENT  ================= */}

      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-14">
          <Link
            to="/projects"
            className="
              inline-flex
              items-center
              gap-2
              font-heading
              font-semibold
              text-sm
              text-muted-foreground
              hover:text-primary
              transition-all
              duration-300
              mb-8
              group
            "
          >
            <ArrowLeft
              size={16}
              className="group-hover:-translate-x-1 transition-transform"
            />

            Back to Projects
          </Link>

          <div className="grid lg:grid-cols-[1.4fr_360px] gap-20">

            {/* LEFT */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: .3 }}
            >

              <p className="text-lg leading-9 text-muted-foreground">
                {project.fullDesc}
              </p>

              <div className="mt-12 rounded-xl overflow-hidden shadow-lg">
                <img
                  src={project.detailImage ?? project.image}
                  alt={project.title}
                  className="w-full h-[500px] object-cover"
                />
              </div>

            </motion.div>

            {/* RIGHT */}

            <motion.aside
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: .45 }}
              className="space-y-8"
            >

              <div className="rounded-2xl border border-border/30 p-8">

                <h3 className="font-heading font-bold text-xl mb-8">
                  Project Information
                </h3>

                <div className="space-y-6">

                  <div>
                    <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-2">
                      Category
                    </p>

                    <p className="font-semibold">
                      {project.category}
                    </p>
                  </div>

                  <div className="border-t border-border/20" />

                  <div>
                    <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-2">
                      Domain
                    </p>

                    <p className="font-semibold">
                      {project.domain}
                    </p>
                  </div>

                  <div className="border-t border-border/20" />

                  <div>
                    <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-2">
                      Year
                    </p>

                    <p className="font-semibold">
                      {project.year}
                    </p>
                  </div>

                </div>

              </div>

              <div className="rounded-2xl border border-border/30 p-8">

                <h3 className="font-heading font-bold text-xl mb-6">
                  Technologies
                </h3>

                <div className="flex flex-wrap gap-2">

                  {project.technologies.map((tech) => (

                    <span
                      key={tech}
                      className="
                        px-3
                        py-2
                        rounded-md
                        bg-secondary
                        text-sm
                        transition
                        hover:bg-primary
                        hover:text-white
                      "
                    >
                      {tech}
                    </span>

                  ))}

                </div>

              </div>

            </motion.aside>

          </div>

        </section>

    </div>
  );
}