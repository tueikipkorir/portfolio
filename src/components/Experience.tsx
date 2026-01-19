"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
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

      <div ref={ref} className="relative pl-20 md:pl-24">
        {/* Timeline line */}
        <div className="absolute left-[30px] md:left-[38px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-cyan via-accent-purple to-accent-magenta" />

        {experience.map((exp, index) => (
          <motion.div
            key={exp.title}
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="relative pb-12 last:pb-0"
          >
            {/* Timeline logos */}
            <div className="absolute left-[-80px] md:left-[-96px] top-0 flex flex-col gap-2">
              {exp.logos && exp.logos.length > 0 ? (
                exp.logos.map((logo, logoIndex) => (
                  <div
                    key={logoIndex}
                    className="relative w-14 h-14 md:w-16 md:h-16 bg-white rounded-full overflow-hidden shadow-[0_0_20px_rgba(0,212,255,0.3)] border-2 border-accent-cyan/50"
                  >
                    <Image
                      src={logo}
                      alt="Company logo"
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                ))
              ) : (
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-accent-cyan shadow-[0_0_20px_rgba(0,212,255,0.5)] flex items-center justify-center">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary" />
                </div>
              )}
            </div>

            <div className="card p-6 md:p-8">
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
