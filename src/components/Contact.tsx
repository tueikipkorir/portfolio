"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionHeader from "./SectionHeader";
import { socialLinks } from "@/lib/data";
import { Mail, Linkedin, Github, MapPin, Send } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // TODO: Replace with your actual form handler (Formspree, Resend, etc.)
    await new Promise((resolve) => setTimeout(resolve, 1000));
    alert(
      "Thanks for your message! This is a demo - please update with your actual form handler."
    );

    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  const contactLinks = [
    {
      icon: <Mail size={24} />,
      label: socialLinks.email,
      href: `mailto:${socialLinks.email}`,
    },
    {
      icon: <Linkedin size={24} />,
      label: "LinkedIn Profile",
      href: socialLinks.linkedin,
    },
    {
      icon: <Github size={24} />,
      label: "GitHub Portfolio",
      href: socialLinks.github,
    },
    {
      icon: <MapPin size={24} />,
      label: socialLinks.location,
      href: "#",
    },
  ];

  return (
    <section id="contact" className="section-container !min-h-0 pb-16">
      <SectionHeader tag="// GET IN TOUCH" title="Let's Connect" />

      <div ref={ref} className="grid lg:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-text-secondary text-lg mb-8">
            I&apos;m currently open to PhD opportunities, engineering roles, and
            collaborative research projects. Whether you want to discuss 5G
            innovations, AI applications, or potential opportunities—I&apos;d love to
            hear from you.
          </p>

          <div className="space-y-4">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-center gap-4 p-4 card hover:border-accent-cyan hover:translate-x-2 transition-all"
              >
                <span className="text-accent-cyan">{link.icon}</span>
                <span>{link.label}</span>
              </a>
            ))}
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="card p-8"
        >
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block text-text-secondary text-sm mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
              placeholder="Your name"
              className="w-full px-4 py-3 bg-primary-light border border-white/10 rounded-xl text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:border-accent-cyan transition-colors"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-text-secondary text-sm mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
              placeholder="your@email.com"
              className="w-full px-4 py-3 bg-primary-light border border-white/10 rounded-xl text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:border-accent-cyan transition-colors"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-text-secondary text-sm mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              required
              placeholder="Your message..."
              rows={5}
              className="w-full px-4 py-3 bg-primary-light border border-white/10 rounded-xl text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:border-accent-cyan transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              "Sending..."
            ) : (
              <>
                Send Message <Send size={18} />
              </>
            )}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
