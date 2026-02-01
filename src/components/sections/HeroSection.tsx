"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { VideoPlaceholder } from "@/components/ui";
import { BRAND } from "@/lib/constants";

export function HeroSection() {
  const scrollToContent = () => {
    const firstSection = document.getElementById("client-experience");
    if (firstSection) {
      const offset = 120;
      const y = firstSection.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-4 sm:px-6 pt-16">
      {/* Background gradient */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-zinc-900/50 via-transparent to-[#101010]" />

      <div className="relative z-10 mx-auto max-w-5xl text-center 2xl:max-w-6xl">
        {/* Version badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center rounded-full border border-zinc-700 bg-zinc-800/50 px-4 py-1.5 text-sm text-zinc-300">
            Introducing Assembly 2.0
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-8 text-5xl font-bold tracking-tight text-zinc-100 sm:text-6xl lg:text-7xl 2xl:text-8xl"
        >
          <span className="text-[#BCE7F4]">{BRAND.name}</span> {BRAND.version}
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mt-4 sm:mt-6 max-w-2xl text-lg sm:text-xl text-zinc-400 2xl:text-2xl 2xl:max-w-3xl"
        >
          {BRAND.tagline}
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mx-auto mt-3 sm:mt-4 max-w-3xl text-sm sm:text-base text-zinc-500 2xl:text-lg 2xl:max-w-4xl"
        >
          {BRAND.description}
        </motion.p>

        {/* Video placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 2xl:mt-16"
        >
          <VideoPlaceholder label="Product Demo Video" className="2xl:max-w-5xl 2xl:mx-auto" />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToContent}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-zinc-500 transition-colors hover:text-zinc-300"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="h-8 w-8" />
        </motion.div>
      </motion.button>
    </section>
  );
}
