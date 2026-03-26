"use client";

import { personalInfo, socialLinks } from "@/data/portfolio";
import { motion } from "framer-motion";
import { IoLogoGithub, IoLogoLinkedin, IoMail } from "react-icons/io5";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="flex items-center justify-center min-h-screen"
      style={{ backgroundColor: "var(--surface-color)" }}>
      <div className="max-w-4xl px-4 mx-auto text-center">
        {/* Avatar  */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center w-32 h-32 mx-auto mb-8 text-5xl rounded-full bg-linear-to-br from-blue-500 to-teal-600">
          {personalInfo.avatar}
        </motion.div>

        {/* Name & Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-4 text-5xl font-bold md:text-6xl">
          {personalInfo.name}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-8 text-2xl"
          style={{ color: "var(--muted-text)" }}>
          {personalInfo.title}
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-2xl mx-auto mb-10 text-lg"
          style={{ color: "var(--muted-text)" }}>
          {personalInfo.description}
        </motion.p>

        {/* Buttons  */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex justify-center gap-4">
          <a
            href="#projects"
            className="px-8 py-3 text-white transition rounded-lg bg-blue-500 hover:bg-blue-700">
            Projekte Anzeigen
          </a>
          <a
            href="#contact"
            className="px-8 py-3 transition border-2 rounded-lg hover:border-blue-500"
            style={{ borderColor: "var(--button-border)", color: "var(--button-text)" }}>
            Kontactieren Sie Mich
          </a>
        </motion.div>

        {/* Social Links */}
        <div className="flex justify-center gap-4 mt-10">
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-black"
            style={{ color: "var(--muted-text)" }}>
            <IoLogoGithub className="w-8 h-8" />
          </a>
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-blue-600"
            style={{ color: "var(--muted-text)" }}>
            <IoLogoLinkedin className="w-8 h-8" />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="transition-colors hover:text-red-600"
            style={{ color: "var(--muted-text)" }}>
            <IoMail className="w-8 h-8" />
          </a>
        </div>
      </div>
    </section>
  );
}
