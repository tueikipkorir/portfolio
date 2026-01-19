"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionHeader from "./SectionHeader";
import { projects } from "@/lib/data";
import { ExternalLink } from "lucide-react";

export default function Projects() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="section-container">
      <SectionHeader
        tag="// MY PROJECTS"
        title="Research & Development Work"
      />

      <div ref={ref} className="flex flex-wrap justify-center gap-6">
        {projects.map((project, index) => (
          <motion.a
            key={project.title}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="card group cursor-pointer overflow-hidden hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)] w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
          >
            {/* Project Image/Icon Area */}
            <div className="h-48 bg-gradient-to-br from-primary-light to-primary-card flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/10 to-accent-magenta/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="text-6xl z-10 group-hover:scale-110 transition-transform duration-500">
                {project.icon}
              </span>
              <ExternalLink
                className="absolute top-4 right-4 text-text-secondary opacity-0 group-hover:opacity-100 transition-opacity"
                size={20}
              />
            </div>

            {/* Project Content */}
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3 group-hover:text-accent-cyan transition-colors">
                {project.title}
              </h3>
              <p className="text-text-secondary mb-6">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="project-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
