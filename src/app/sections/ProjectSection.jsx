"use client";

import { projects } from "@/data/portfolio";
import { motion } from "framer-motion";

export default function ProjectsSection() {
  return (
    <section id="projects" className="px-4 py-20" style={{ backgroundColor: "var(--section-alt-bg)" }}>
      <div className="max-w-6xl mx-auto">
        {/* Section Title  */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-4xl font-bold text-center">
          Meine Projekte
        </motion.h2>

        {/* Projects Grid  */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="overflow-hidden transition-all duration-300 border shadow-lg rounded-xl hover:-translate-y-1 hover:shadow-xl hover:border-blue-500 group"
              style={{ backgroundColor: "var(--surface-color)", borderColor: "var(--border-color)" }}>
              {/* Content */}
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold transition-colors group-hover:text-blue-600">
                  {project.title}
                </h3>
                <p className="mb-4" style={{ color: "var(--muted-text)" }}>{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm transition-colors rounded-full"
                      style={{ backgroundColor: "var(--tag-bg)", color: "var(--muted-text)" }}>
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <a
                    href={project.demoUrl}
                    className="flex-1 px-4 py-2 text-center text-white transition-colors rounded-lg bg-blue-600 hover:bg-blue-700">
                    Live Demo
                  </a>
                  <a
                    href={project.codeUrl}
                    className="flex-1 px-4 py-2 text-center transition-all border-2 rounded-lg hover:border-blue-500 hover:text-blue-600"
                    style={{ borderColor: "var(--button-border)", color: "var(--button-text)" }}>
                    Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
