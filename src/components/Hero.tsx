"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-24 px-8 md:px-16 pt-32 lg:pt-48 pb-20 max-w-7xl mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex-1 text-center lg:text-left"
      >
        <p className="font-mono text-sm text-accent-cyan tracking-widest mb-6">
          // TELECOMMUNICATIONS & AI ENGINEER
        </p>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
          Hello, I&apos;m <span className="gradient-text">Kevin Kipkorir</span>.
          <br />
          I build intelligent systems at the intersection of{" "}
          <span className="gradient-text">5G networks</span> and{" "}
          <span className="gradient-text">AI</span>.
        </h1>

        <p className="text-lg md:text-xl text-text-secondary mb-10 max-w-2xl mx-auto lg:mx-0">
          Master of Professional Engineering candidate at UTS, specializing in
          telecommunications and electronics. Currently developing AI-powered
          safety systems using Nokia&apos;s 5G infrastructure and computer vision.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <a href="#contact" className="btn-primary text-center">
            Get in touch
          </a>
          <a href="#projects" className="btn-secondary text-center">
            View my work
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative flex-shrink-0"
      >
        {/* Profile Image Container */}
        <div className="relative w-64 h-64 md:w-80 md:h-80">
          {/* Gradient border */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent-cyan via-accent-purple to-accent-magenta p-1 animate-pulse-glow">
            <div className="w-full h-full rounded-full bg-primary-light flex items-center justify-center overflow-hidden">
              {/* Replace this div with your actual image */}
              {/* <Image
                src="/profile.jpg"
                alt="Kevin Kipkorir"
                fill
                className="object-cover"
                priority
              /> */}
              <span className="text-7xl">📡</span>
            </div>
          </div>

          {/* Signal rings */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] pointer-events-none">
            <div className="absolute inset-0 border border-accent-cyan/20 rounded-full animate-signal-pulse" />
            <div className="absolute inset-[-10%] border border-accent-cyan/20 rounded-full animate-signal-pulse animate-delay-1000" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
