"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionHeader from "./SectionHeader";
import { skills } from "@/lib/data";

export default function Skills() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="section-container">
      <SectionHeader tag="// MY SKILLS" title="Technical Expertise" />

      <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skillGroup, index) => (
          <motion.div
            key={skillGroup.category}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="card p-8 hover:border-accent-cyan/20"
          >
            <h3 className="font-mono text-accent-cyan mb-6">
              // {skillGroup.category.toUpperCase()}
            </h3>
            <ul className="space-y-1">
              {skillGroup.items.map((skill) => (
                <li
                  key={skill}
                  className="text-text-secondary py-2 border-b border-white/5 last:border-0 hover:text-text-primary transition-colors"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
