"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionHeader from "./SectionHeader";

const stats = [
  { number: "94%", label: "mAP50 Detection Accuracy" },
  { number: "4-6cm", label: "Water Level Sensing Accuracy" },
  { number: "2", label: "Bachelor's Degrees (JKUAT)" },
  { number: "5G", label: "Network Specialization" },
];

const techStack = [
  "5G Networks",
  "RF Engineering",
  "Computer Vision",
  "Python",
  "MATLAB",
  "HFSS",
];

export default function About() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="section-container">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        <div>
          <SectionHeader
            tag="// ABOUT ME"
            title="Engineering the Future of Connected Systems"
          />

          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 text-text-secondary text-lg"
          >
            <p>
              I&apos;m completing my Master of Professional Engineering in
              Telecommunications & Electronics at UTS, graduating December 2025.
              My passion lies in bridging the gap between telecommunications
              infrastructure and intelligent systems.
            </p>
            <p>
              Currently, I&apos;m undertaking a Nokia 5G internship at UTS TechLab
              through Optik Consultancy, where I&apos;m developing AI-powered mobile
              safety systems using YOLOv11 computer vision, Nokia&apos;s RXRM
              platform, and autonomous Temi robots.
            </p>
            <p>
              My thesis research explores innovative applications of mobile
              network signals for environmental sensing; specifically water level
              monitoring using 4G LTE signals, achieving remarkable 4-6cm
              accuracy for flood monitoring applications.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-6 mt-12"
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="card p-6 text-center hover:-translate-y-1"
              >
                <div className="text-3xl md:text-4xl font-bold gradient-text">
                  {stat.number}
                </div>
                <div className="text-text-secondary text-sm mt-2">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="card p-8 md:p-10 relative overflow-hidden"
        >
          {/* Gradient top border */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-cyan via-accent-purple to-accent-magenta" />

          <h3 className="text-2xl font-semibold mb-2">
            University of Technology Sydney
          </h3>
          <p className="text-accent-cyan text-lg mb-1">
            Master of Professional Engineering
          </p>
          <p className="text-accent-cyan mb-4">
            Telecommunications & Electronics
          </p>
          <p className="text-text-secondary">
            Expected Graduation: December 2025
          </p>

          <div className="flex flex-wrap gap-3 mt-8">
            {techStack.map((tech) => (
              <span key={tech} className="tech-tag">
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-8 pt-8 border-t border-white/10">
            <h4 className="text-lg font-semibold mb-2">Previous Education</h4>
            <p className="text-text-secondary">
              Dual Bachelor&apos;s Degrees from JKUAT Kenya
            </p>
            <p className="text-text-secondary text-sm mt-1">
              • B.Eng Electrical & Electronics Engineering
              <br />• B.Eng Telecommunications & Electronics Engineering
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
