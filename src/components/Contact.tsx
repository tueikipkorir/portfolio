"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionHeader from "./SectionHeader";
import { socialLinks } from "@/lib/data";
import { Mail, Linkedin, Github, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";

const FORMSPREE_FORM_ID = "mzddrgya";

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    // Basic client-side validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus("error");
      setErrorMessage("Please fill in all fields.");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        const data = await response.json();
        throw new Error(data.error || "Something went wrong");
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Failed to send message. Please try again."
      );
    }
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
            innovations, AI applications, or potential opportunities; I&apos;d love to
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

          {/* Status Messages */}
          {status === "success" && (
            <div className="mb-6 p-4 bg-green-500/10 border border-green-500/30 rounded-xl flex items-center gap-3 text-green-400">
              <CheckCircle size={20} />
              <span>Thank you! Your message has been sent successfully.</span>
            </div>
          )}

          {status === "error" && errorMessage && (
            <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-xl flex items-center gap-3 text-red-400">
              <AlertCircle size={20} />
              <span>{errorMessage}</span>
            </div>
          )}

          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === "submitting" ? (
              <>
                <span className="animate-spin rounded-full h-4 w-4 border-2 border-primary border-t-transparent" />
                Sending...
              </>
            ) : status === "success" ? (
              <>
                Message Sent <CheckCircle size={18} />
              </>
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
