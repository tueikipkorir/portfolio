"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface SectionHeaderProps {
  tag: string;
  title: string;
}

export default function SectionHeader({ tag, title }: SectionHeaderProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="mb-16"
    >
      <p className="font-mono text-xs text-accent-magenta tracking-[3px] mb-4">
        {tag}
      </p>
      <h2 className="text-3xl md:text-4xl font-semibold">{title}</h2>
    </motion.div>
  );
}
