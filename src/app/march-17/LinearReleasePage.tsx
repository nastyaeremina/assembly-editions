"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
  AnimatePresence,
} from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const NAV_SECTIONS = [
  { id: "client-experience", label: "Client Experience", number: "01" },
  { id: "project-management", label: "Project Management", number: "02" },
  { id: "client-management", label: "Client Management", number: "03" },
  { id: "payments", label: "Payments", number: "04" },
  { id: "developers", label: "Developers", number: "05" },
  { id: "whats-more", label: "And More", number: "06" },
  { id: "whats-next", label: "What's Next", number: "07" },
] as const;

/* ═══════════════════════════════════════════════════════════════
   HERO — cursor-tracking radial gradient, Linear-style
   ═══════════════════════════════════════════════════════════════ */

function LinearHero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const springX = useSpring(mouseX, { stiffness: 50, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 30 });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      mouseX.set((e.clientX - rect.left) / rect.width);
      mouseY.set((e.clientY - rect.top) / rect.height);
    },
    [mouseX, mouseY]
  );

  // Scroll-driven fade for hero content
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.8], [0, -60]);

  return (
    <motion.section
      ref={heroRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden"
      style={{ opacity: heroOpacity }}
    >
      {/* Cursor-tracking gradient */}
      <motion.div
        className="pointer-events-none absolute inset-0"
        style={{
          background: useTransform(
            [springX, springY],
            ([x, y]: number[]) =>
              `radial-gradient(800px circle at ${x * 100}% ${y * 100}%, rgba(214,249,144,0.07), rgba(91,228,194,0.04) 40%, transparent 70%)`
          ),
        }}
      />

      {/* Static atmospheric orbs */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 h-[50vh] w-[50vh] rounded-full bg-white/[0.012] blur-[120px] animate-float-slow" />
        <div
          className="absolute bottom-1/4 right-1/3 h-[40vh] w-[40vh] rounded-full bg-white/[0.015] blur-[100px] animate-float-medium"
          style={{ animationDelay: "-5s" }}
        />
      </div>

      {/* Dot grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Content */}
      <motion.div
        className="relative z-10 mx-auto max-w-5xl px-6 text-center"
        style={{ y: heroY }}
      >
        {/* Date pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 backdrop-blur-sm"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[#D6F990]" />
          <span
            className="text-sm"
            style={{
              fontFamily: "var(--font-mono)",
              color: "var(--swatch-3)",
              letterSpacing: "0.04em",
            }}
          >
            March 17, 2025
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          style={{
            fontFamily: "'PP Mori', var(--font-sans)",
            fontWeight: 600,
            fontSize: "clamp(2.5rem, 7vw, 5.5rem)",
            lineHeight: 1.0,
            letterSpacing: "-0.04em",
            color: "var(--swatch-1)",
          }}
        >
          Assembly 2.0
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          style={{
            fontFamily: "'PP Mori', var(--font-sans)",
            fontWeight: 400,
            fontSize: "clamp(1.1rem, 2vw, 1.45rem)",
            lineHeight: 1.5,
            color: "var(--swatch-3)",
            maxWidth: "42rem",
            margin: "1.5rem auto 0",
          }}
        >
          This release touches nearly every part of the platform — how clients
          experience your portal, how you manage tasks and billing, how your
          team stays in context, and how developers build on top of Assembly.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mt-10 flex items-center justify-center gap-4"
        >
          <a
            href="https://assembly.com/signup?utm_source=edition&utm_medium=web&utm_campaign=assembly2-launch"
            target="_blank"
            rel="noopener"
            className="group relative inline-flex items-center gap-2 rounded-full bg-white/90 px-6 py-3 text-sm font-semibold text-[#101010] transition-all hover:bg-white hover:shadow-[0_0_30px_rgba(214,249,144,0.2)]"
            style={{ fontFamily: "'PP Mori', var(--font-sans)" }}
          >
            Start free trial
            <svg
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a>
          <button
            onClick={() => {
              document
                .getElementById("client-experience")
                ?.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            className="rounded-full border border-white/15 px-6 py-3 text-sm font-medium transition-all hover:border-white/30 hover:bg-white/[0.04]"
            style={{
              fontFamily: "'PP Mori', var(--font-sans)",
              color: "var(--swatch-2)",
            }}
          >
            See what&apos;s new
          </button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <span
              className="text-xs"
              style={{
                fontFamily: "var(--font-mono)",
                color: "var(--swatch-5)",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
              }}
            >
              Scroll
            </span>
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="rgba(255,255,255,0.25)"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 14l-7 7m0 0l-7-7"
              />
            </svg>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   STICKY NAV — Linear-style horizontal nav with progress bar
   ═══════════════════════════════════════════════════════════════ */

function LinearNav() {
  const [activeSection, setActiveSection] = useState<string>(
    NAV_SECTIONS[0].id
  );
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Show after scrolling past hero (roughly 80vh)
      setIsVisible(scrollY > window.innerHeight * 0.7);

      const triggerPoint = 160;
      for (let i = NAV_SECTIONS.length - 1; i >= 0; i--) {
        const el = document.getElementById(NAV_SECTIONS[i].id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= triggerPoint) {
            setActiveSection(NAV_SECTIONS[i].id);
            return;
          }
        }
      }
      setActiveSection(NAV_SECTIONS[0].id);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  // Progress calculation
  const activeIndex = NAV_SECTIONS.findIndex((s) => s.id === activeSection);
  const progress = ((activeIndex + 1) / NAV_SECTIONS.length) * 100;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -60, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="fixed top-0 left-0 right-0 z-50"
          style={{ backgroundColor: "rgba(16,16,16,0.85)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)" }}
        >
          {/* Progress bar */}
          <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-white/[0.06]">
            <motion.div
              className="h-full bg-[#D6F990]/50"
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
          </div>

          <div className="mx-auto max-w-7xl px-6">
            <div className="flex items-center gap-1 overflow-x-auto py-3 scrollbar-hide">
              {/* Brand mark */}
              <span
                className="mr-4 shrink-0 text-sm font-medium"
                style={{
                  fontFamily: "'PP Mori', var(--font-sans)",
                  color: "var(--swatch-2)",
                }}
              >
                2.0
              </span>

              <div className="h-4 w-px bg-white/10 mr-3 shrink-0" />

              {NAV_SECTIONS.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollTo(section.id)}
                  className="relative whitespace-nowrap rounded-md px-3 py-1.5 text-sm transition-colors shrink-0"
                  style={{
                    fontFamily: "'PP Mori', var(--font-sans)",
                    fontWeight: activeSection === section.id ? 500 : 400,
                    color:
                      activeSection === section.id
                        ? "var(--swatch-1)"
                        : "var(--swatch-4)",
                  }}
                >
                  {activeSection === section.id && (
                    <motion.div
                      layoutId="nav-active"
                      className="absolute inset-0 rounded-md bg-white/[0.07]"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{section.label}</span>
                </button>
              ))}
            </div>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}

/* ═══════════════════════════════════════════════════════════════
   INTRO STATEMENT — scrolls in with parallax
   ═══════════════════════════════════════════════════════════════ */

function IntroStatement() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.6]);
  const y = useTransform(scrollYProgress, [0, 0.3], [40, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity, y }}
      className="mx-auto max-w-4xl px-6 py-32 sm:py-40 text-center"
    >
      <p
        style={{
          fontFamily: "'PP Mori', var(--font-sans)",
          fontWeight: 400,
          fontSize: "clamp(1.15rem, 2.2vw, 1.6rem)",
          lineHeight: 1.55,
          color: "var(--swatch-2)",
          letterSpacing: "-0.01em",
        }}
      >
        Today we&apos;re launching Assembly 2.0. This release touches nearly
        every part of the platform — how clients experience your portal, how
        you manage tasks and billing, how your team stays in context, and how
        developers build on top of Assembly.
      </p>
      <p
        style={{
          fontFamily: "'PP Mori', var(--font-sans)",
          fontWeight: 600,
          fontSize: "clamp(1.15rem, 2.2vw, 1.6rem)",
          lineHeight: 1.55,
          color: "var(--swatch-1)",
          marginTop: "1.5rem",
          letterSpacing: "-0.01em",
        }}
      >
        Here&apos;s what&apos;s new.
      </p>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SECTION HEADER — number + rule + title (reusable)
   ═══════════════════════════════════════════════════════════════ */

function SectionHeader({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div className="flex items-center mb-6">
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.8rem",
            letterSpacing: "-0.04em",
            color: "var(--swatch-4)",
            whiteSpace: "nowrap",
            paddingRight: "1.5rem",
          }}
        >
          {number}
        </span>
        <div className="flex-1 h-px bg-white/[0.08]" />
      </div>

      <h2
        style={{
          fontFamily: "'PP Mori', var(--font-sans)",
          fontWeight: 600,
          fontSize: "clamp(1.75rem, 3.5vw, 2.8rem)",
          lineHeight: 1.1,
          letterSpacing: "-0.03em",
          color: "var(--swatch-1)",
          margin: 0,
        }}
      >
        {title}
      </h2>

      {description && (
        <p
          style={{
            fontFamily: "'PP Mori', var(--font-sans)",
            fontWeight: 400,
            fontSize: "1.1rem",
            lineHeight: 1.5,
            color: "var(--swatch-3)",
            maxWidth: "36rem",
            marginTop: "1.25rem",
          }}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   FEATURE CARD — Linear-style with hover glow
   ═══════════════════════════════════════════════════════════════ */

function FeatureBlock({
  title,
  description,
  screenshotSrc,
  screenshotAlt,
  delay = 0,
}: {
  title: string;
  description: string;
  screenshotSrc?: string;
  screenshotAlt?: string;
  delay?: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const glowX = useMotionValue(0.5);
  const glowY = useMotionValue(0.5);

  const handleMouse = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    glowX.set((e.clientX - rect.left) / rect.width);
    glowY.set((e.clientY - rect.top) / rect.height);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouse}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className="group relative rounded-xl border border-white/[0.06] bg-white/[0.02] overflow-hidden transition-colors hover:border-white/[0.12]"
    >
      {/* Hover glow */}
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: useTransform(
            [glowX, glowY],
            ([x, y]: number[]) =>
              `radial-gradient(400px circle at ${x * 100}% ${y * 100}%, rgba(214,249,144,0.06), transparent 60%)`
          ),
        }}
      />

      {/* Screenshot */}
      {screenshotSrc && (
        <div className="relative border-b border-white/[0.06]">
          {/* Browser chrome dots */}
          <div className="flex items-center gap-1.5 px-4 py-3 bg-white/[0.02]">
            <div className="h-2.5 w-2.5 rounded-full bg-white/[0.08]" />
            <div className="h-2.5 w-2.5 rounded-full bg-white/[0.08]" />
            <div className="h-2.5 w-2.5 rounded-full bg-white/[0.08]" />
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={screenshotSrc}
            alt={screenshotAlt || title}
            className="w-full h-auto"
            loading="lazy"
          />
        </div>
      )}

      {/* Text */}
      <div className="relative p-6 sm:p-8">
        <h3
          style={{
            fontFamily: "'PP Mori', var(--font-sans)",
            fontWeight: 600,
            fontSize: "1.15rem",
            lineHeight: 1.3,
            letterSpacing: "-0.015em",
            color: "var(--swatch-1)",
            margin: 0,
          }}
        >
          {title}
        </h3>
        <p
          style={{
            fontFamily: "'PP Mori', var(--font-sans)",
            fontWeight: 400,
            fontSize: "0.95rem",
            lineHeight: 1.6,
            color: "var(--swatch-3)",
            marginTop: "0.75rem",
          }}
        >
          {description}
        </p>
      </div>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   INLINE FEATURE — no card, just title + description in grid
   ═══════════════════════════════════════════════════════════════ */

function InlineFeature({
  title,
  description,
  delay = 0,
}: {
  title: string;
  description: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className="grid gap-4 lg:grid-cols-12"
    >
      <div className="lg:col-span-4">
        <h3
          style={{
            fontFamily: "'PP Mori', var(--font-sans)",
            fontWeight: 600,
            fontSize: "1.05rem",
            lineHeight: 1.3,
            letterSpacing: "-0.015em",
            color: "var(--swatch-1)",
            margin: 0,
          }}
        >
          {title}
        </h3>
      </div>
      <div className="lg:col-span-8">
        <p
          style={{
            fontFamily: "'PP Mori', var(--font-sans)",
            fontWeight: 400,
            fontSize: "0.95rem",
            lineHeight: 1.6,
            color: "var(--swatch-3)",
            margin: 0,
          }}
        >
          {description}
        </p>
      </div>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   DIVIDER
   ═══════════════════════════════════════════════════════════════ */

function Divider() {
  return (
    <hr className="border-none h-px bg-white/[0.06] my-12 sm:my-16" />
  );
}

/* ═══════════════════════════════════════════════════════════════
   SECTION: CLIENT EXPERIENCE
   ═══════════════════════════════════════════════════════════════ */

function ClientExperienceSection() {
  return (
    <section id="client-experience" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeader
          number="01"
          title="Create remarkable experiences for clients"
          description="A reimagined client portal with better organization, drag-and-drop folders, and personalized homepages that adapt to each client automatically."
        />

        <div className="mt-12 sm:mt-16 grid gap-6 lg:grid-cols-2">
          <FeatureBlock
            title="App Folders"
            description="Drag and drop apps and embeds into folders. Group reports into an &quot;Analytics&quot; folder, or create a &quot;Helpful links&quot; folder for clients with all external resources. Unpin apps from your internal dashboard without affecting the client view — your workspace stays focused on what you actually use day-to-day."
            screenshotSrc="/screenshots/app_folders.jpg"
            screenshotAlt="App Folders"
          />
          <FeatureBlock
            title="Your client homepage, reimagined"
            description="Create up to five different homepage variants and automatically show the right one to each client based on custom field tags. Running a tiered service model? Show premium clients dedicated resources while basic clients see standard onboarding. The Home App itself has been completely refreshed with updated banners, a curated image gallery, improved responsive loading, and a cleaner layout."
            screenshotSrc="/screenshots/home.jpg"
            screenshotAlt="Client Homepage"
            delay={0.1}
          />
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SECTION: PROJECT MANAGEMENT
   ═══════════════════════════════════════════════════════════════ */

function ProjectManagementSection() {
  return (
    <section
      id="project-management"
      className="relative py-24 sm:py-32"
      style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
    >
      {/* Ambient gradient */}
      <div
        className="pointer-events-none absolute top-0 left-0 w-3/5 h-3/5"
        style={{
          background:
            "radial-gradient(ellipse at top left, rgba(91,228,194,0.03), transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-5xl px-6">
        <SectionHeader
          number="02"
          title="Project management that actually fits how you work"
          description="Associate tasks with clients and automate recurring workflows with time-based triggers."
        />

        <div className="mt-12 sm:mt-16 grid gap-6 lg:grid-cols-2">
          <FeatureBlock
            title="Tasks now associate with clients"
            description="Create a task, associate it to a client, and it shows up on that client's profile — but only your team sees it. When you're ready, you can optionally share it with the client by turning on client access. A single view of everything happening with a client, without cluttering the client's task list."
            screenshotSrc="/screenshots/task_creation.jpg"
            screenshotAlt="Task creation with client association"
          />
          <FeatureBlock
            title="Time-based automations"
            description="Set up tasks that reoccur monthly, quarterly, or on a custom schedule. Send recurring messages, trigger forms at regular intervals, or create quarterly check-in tasks for every active client. Target internal users, all clients, or all companies — the system handles the rest."
            screenshotSrc="/screenshots/automations_scheduled_trigger.jpg"
            screenshotAlt="Time-based automations"
            delay={0.1}
          />
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SECTION: CLIENT MANAGEMENT
   ═══════════════════════════════════════════════════════════════ */

function ClientManagementSection() {
  return (
    <section
      id="client-management"
      className="relative py-24 sm:py-32"
      style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
    >
      {/* Ambient gradient */}
      <div
        className="pointer-events-none absolute bottom-0 right-0 w-3/5 h-3/5"
        style={{
          background:
            "radial-gradient(ellipse at bottom right, rgba(197,179,255,0.03), transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-5xl px-6">
        <SectionHeader
          number="03"
          title="For client management"
          description="Stay connected with clients through a native desktop experience and contextual information at your fingertips."
        />

        <div className="mt-12 sm:mt-16 space-y-10">
          <FeatureBlock
            title="Native desktop app"
            description="Assembly now has a desktop app for Mac and Windows with real desktop notifications. No more browser tab hunting or missing client messages because Chrome was buried. Get notified the moment something needs your attention."
          />

          <Divider />

          <InlineFeature
            title="Context Bar"
            description="We've renamed and redesigned the right sidebar on CRM pages — and brought it to more surfaces. Now when you're in Messages, Files, Notifications, or other apps looking at client-specific content, you can pull up the Context Bar to see client details, edit custom fields, add internal notes, or chat with your team — without navigating away. The goal: show you the right context at the moment you need it."
          />
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SECTION: PAYMENTS
   ═══════════════════════════════════════════════════════════════ */

function PaymentsSection() {
  return (
    <section
      id="payments"
      className="relative py-24 sm:py-32"
      style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
    >
      {/* Ambient gradient */}
      <div
        className="pointer-events-none absolute top-0 right-0 w-3/5 h-3/5"
        style={{
          background:
            "radial-gradient(ellipse at top right, rgba(214,249,144,0.03), transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-5xl px-6">
        <SectionHeader
          number="04"
          title="Payments, consolidated"
          description="Invoices, subscriptions, payment links, and storefronts — all brought together in one place."
        />

        <div className="mt-12 sm:mt-16 grid gap-6 lg:grid-cols-2">
          <FeatureBlock
            title="One Payments home"
            description="We've consolidated all billing surfaces into a single page with tabs: Overview, Invoices, Subscriptions, Payment Links, Stores, and Services. The new Overview tab shows first-time users a clear path to their first payment, while active users see their balance, upcoming payouts, and payment activity at a glance."
            screenshotSrc="/screenshots/Payments.jpg"
            screenshotAlt="Payments overview"
          />
          <FeatureBlock
            title="QuickBooks and Xero integrations"
            description="Our accounting integrations are now fully out of beta. Map Assembly products directly to your existing items, sync invoice statuses, invoice numbers, and tax information, and track absorbed fees to an automatically created Assembly Processing Fees expense account. One-way sync from Assembly to your accounting system — your books stay clean."
            screenshotSrc="/screenshots/quickbooks.jpg"
            screenshotAlt="QuickBooks integration"
            delay={0.1}
          />
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SECTION: DEVELOPERS
   ═══════════════════════════════════════════════════════════════ */

function DevelopersSection() {
  return (
    <section
      id="developers"
      className="relative py-24 sm:py-32"
      style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
    >
      {/* Ambient gradient */}
      <div
        className="pointer-events-none absolute top-0 left-0 w-3/5 h-3/5"
        style={{
          background:
            "radial-gradient(ellipse at top left, rgba(125,164,255,0.03), transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-5xl px-6">
        <SectionHeader number="05" title="For developers" />

        <div className="mt-12 sm:mt-16 space-y-10">
          <FeatureBlock
            title="New custom app base"
            description="We've rebuilt the foundation for Custom Apps from the ground up. The new base includes live examples for server-side rendering, client-side API requests, and AppBridge configuration — breadcrumbs, action menus, header controls — all with real feedback so you can see exactly how things work. There's also a preview of our design system pointing to the latest Storybook. If you're building on Assembly, this is your new starting point."
          />

          <Divider />

          <InlineFeature
            title="Secure app sessions"
            description="App session tokens now expire after 5 minutes instead of lasting indefinitely. A new @assembly-js/app-bridge package handles token refresh automatically in the background, so users won't notice anything — but shared URLs no longer grant permanent access to app data. If you're maintaining a Custom App, check our migration guide for the updated SDK packages."
          />

          <Divider />

          <InlineFeature
            title="Tasks API: comments and attachments"
            description="The Tasks API now exposes comments and attachments. Fetch all comments on a task, access threaded replies via parentCommentId, and pull attachment metadata including secure download URLs. There's also a new comment.created webhook so you can trigger workflows when clients respond. If you're building integrations that track client activity or sync task data externally, this unlocks a lot."
            delay={0.05}
          />
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SECTION: AND SO MUCH MORE
   ═══════════════════════════════════════════════════════════════ */

function WhatsMoreSection() {
  const items = [
    "Use the new formatting bar in the Messages App and elsewhere to better structure text.",
    "Use our new icon picker to select from over 100 new icons.",
  ];

  return (
    <section
      id="whats-more"
      className="relative py-24 sm:py-32"
      style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
    >
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeader
          number="06"
          title="And so much more"
          description="A few more favorites from this release."
        />

        <div className="mt-10">
          <ul className="space-y-4">
            {items.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{
                  duration: 0.4,
                  delay: i * 0.08,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className="flex items-start gap-3"
              >
                <span
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                  style={{ backgroundColor: "var(--swatch-4)" }}
                />
                <span
                  style={{
                    fontFamily: "'PP Mori', var(--font-sans)",
                    fontWeight: 400,
                    fontSize: "1rem",
                    lineHeight: 1.6,
                    color: "var(--swatch-3)",
                  }}
                >
                  {item}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SECTION: WHAT'S NEXT — roadmap + CTA
   ═══════════════════════════════════════════════════════════════ */

const ROADMAP = [
  {
    label: "Up next",
    title: "AI Edition",
    description:
      "We're bringing Assembly to where you already work — a ChatGPT App so you can ask questions about your clients from anywhere, an MCP server for AI-native workflows, and a deeper Ask Assembly experience inside the platform.",
    color: "#D6F990",
  },
  {
    label: "Coming soon",
    title: "Scale Ready Edition",
    description:
      "Audit logs, SSO, and performance improvements for teams who need enterprise-grade infrastructure.",
    color: "#7DA4FF",
  },
];

function WhatsNextSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end end"],
  });
  const ctaOpacity = useTransform(scrollYProgress, [0.5, 0.8], [0, 1]);
  const ctaY = useTransform(scrollYProgress, [0.5, 0.8], [30, 0]);

  return (
    <section
      ref={sectionRef}
      id="whats-next"
      className="relative py-24 sm:py-32"
      style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
    >
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeader
          number="07"
          title="What's next"
          description="Assembly 2.0 is live — but we're just getting started. Two more major releases are shipping in the next eight weeks."
        />

        {/* Roadmap cards */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {ROADMAP.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.5,
                delay: i * 0.1,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="group relative rounded-xl border border-white/[0.06] p-6 sm:p-8 transition-colors hover:border-white/[0.12] overflow-hidden"
            >
              {/* Subtle color accent line at top */}
              <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{
                  background: `linear-gradient(90deg, transparent, ${item.color}40, transparent)`,
                }}
              />

              <span
                className="inline-block text-xs rounded-full border px-2.5 py-0.5 mb-4"
                style={{
                  fontFamily: "var(--font-mono)",
                  color: item.color,
                  borderColor: `${item.color}30`,
                  backgroundColor: `${item.color}08`,
                  letterSpacing: "0.04em",
                }}
              >
                {item.label}
              </span>

              <h3
                style={{
                  fontFamily: "'PP Mori', var(--font-sans)",
                  fontWeight: 600,
                  fontSize: "1.25rem",
                  lineHeight: 1.3,
                  color: "var(--swatch-1)",
                  margin: 0,
                }}
              >
                {item.title}
              </h3>
              <p
                style={{
                  fontFamily: "'PP Mori', var(--font-sans)",
                  fontWeight: 400,
                  fontSize: "0.95rem",
                  lineHeight: 1.6,
                  color: "var(--swatch-3)",
                  marginTop: "0.75rem",
                }}
              >
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          style={{ opacity: ctaOpacity, y: ctaY }}
          className="mt-24 sm:mt-32 text-center"
        >
          <h2
            style={{
              fontFamily: "'PP Mori', var(--font-sans)",
              fontWeight: 600,
              fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              color: "var(--swatch-1)",
            }}
          >
            Try Assembly 2.0
          </h2>

          <p
            style={{
              fontFamily: "'PP Mori', var(--font-sans)",
              fontWeight: 400,
              fontSize: "1.1rem",
              lineHeight: 1.5,
              color: "var(--swatch-3)",
              maxWidth: "32rem",
              margin: "1rem auto 0",
            }}
          >
            Preview a fully branded client portal with your company&apos;s look and
            feel before you even sign up. And if you want early access to
            what&apos;s coming next, let us know — we&apos;d love your input.
          </p>

          <div className="mt-8 flex items-center justify-center gap-4 flex-wrap">
            <a
              href="https://assembly.com/signup?utm_source=edition&utm_medium=web&utm_campaign=assembly2-launch"
              target="_blank"
              rel="noopener"
              className="group inline-flex items-center gap-2 rounded-full bg-white/90 px-7 py-3 text-sm font-semibold text-[#101010] transition-all hover:bg-white hover:shadow-[0_0_30px_rgba(214,249,144,0.15)]"
              style={{ fontFamily: "'PP Mori', var(--font-sans)" }}
            >
              Start free trial
              <svg
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </a>
            <a
              href="https://assembly.com"
              target="_blank"
              rel="noopener"
              className="rounded-full border border-white/15 px-7 py-3 text-sm font-medium transition-all hover:border-white/30 hover:bg-white/[0.04]"
              style={{
                fontFamily: "'PP Mori', var(--font-sans)",
                color: "var(--swatch-2)",
                textDecoration: "none",
              }}
            >
              Log in
            </a>
          </div>

          <p
            className="mt-6"
            style={{
              fontFamily: "'PP Mori', var(--font-sans)",
              fontWeight: 400,
              fontSize: "0.9rem",
              color: "var(--swatch-4)",
            }}
          >
            Thanks for building your business on Assembly.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   MAIN PAGE COMPOSITION
   ═══════════════════════════════════════════════════════════════ */

export function LinearReleasePage() {
  return (
    <div className="min-h-screen bg-[#101010]">
      <Header />
      <LinearNav />

      <main>
        <LinearHero />
        <IntroStatement />
        <ClientExperienceSection />
        <ProjectManagementSection />
        <ClientManagementSection />
        <PaymentsSection />
        <DevelopersSection />
        <WhatsMoreSection />
        <WhatsNextSection />
      </main>

      <Footer />
    </div>
  );
}
