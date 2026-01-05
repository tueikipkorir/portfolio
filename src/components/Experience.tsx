"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionHeader from "./SectionHeader";
import { experience } from "@/lib/data";

export default function Experience() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="experience" className="section-container">
      <SectionHeader tag="// MY EXPERIENCE" title="Professional Journey" />

      <div ref={ref} className="relative pl-8 md:pl-12">
        {/* Timeline line */}
        <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-cyan via-accent-purple to-accent-magenta" />

        {experience.map((exp, index) => (
          <motion.div
            key={exp.title}
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="relative pb-12 last:pb-0"
          >
            {/* Timeline dot */}
            <div className="absolute left-[-8px] md:left-[-12px] top-0 w-4 h-4 md:w-6 md:h-6 rounded-full bg-accent-cyan shadow-[0_0_20px_rgba(0,212,255,0.5)]">
              <div className="absolute inset-1 rounded-full bg-primary" />
            </div>

            <div className="card p-6 md:p-8 ml-4 md:ml-8">
              <p className="font-mono text-sm text-accent-magenta mb-2">
                {exp.date}
              </p>
              <h3 className="text-xl font-semibold mb-1">{exp.title}</h3>
              <p className="text-accent-cyan mb-4">{exp.company}</p>
              <p className="text-text-secondary">{exp.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
