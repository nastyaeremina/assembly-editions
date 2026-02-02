"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";

const editions = [
  {
    id: "assembly-2",
    title: "Assembly 2.0",
    tagline: "The biggest update in Assembly history",
    season: "Winter '25",
    available: true,
    gradient: "from-[#0ea5e9] to-[#0284c7]",
  },
  {
    id: "ai-edition",
    title: "AI Edition",
    tagline: "Intelligence built into every workflow",
    season: "Spring '25",
    available: false,
    gradient: "from-[#a855f7] to-[#7c3aed]",
    comingSoonType: "countdown",
    releaseDate: "2025-04-15T00:00:00",
  },
  {
    id: "scale-ready",
    title: "Scale Ready",
    tagline: "Enterprise-grade infrastructure for growing teams",
    season: "Spring '25",
    available: false,
    gradient: "from-[#f59e0b] to-[#d97706]",
    comingSoonType: "cooking",
  },
];

export default function EditionsPage() {
  const [showCountdown, setShowCountdown] = useState(false);
  const [showCooking, setShowCooking] = useState(false);
  const [hoveredEdition, setHoveredEdition] = useState<string | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  // Track mouse position for glow effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePos({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Get gradient colors based on hovered edition
  const getBackgroundGradient = () => {
    switch (hoveredEdition) {
      case "assembly-2":
        return "radial-gradient(ellipse 80% 50% at 50% 50%, rgba(14, 165, 233, 0.15) 0%, transparent 70%)";
      case "ai-edition":
        return "radial-gradient(ellipse 80% 50% at 50% 50%, rgba(168, 85, 247, 0.15) 0%, transparent 70%)";
      case "scale-ready":
        return "radial-gradient(ellipse 80% 50% at 50% 50%, rgba(245, 158, 11, 0.15) 0%, transparent 70%)";
      default:
        return "radial-gradient(ellipse 80% 50% at 50% 50%, rgba(188, 231, 244, 0.05) 0%, transparent 70%)";
    }
  };

  return (
    <div ref={containerRef} className="relative flex min-h-screen flex-col bg-[#0a0a0a] overflow-hidden">
      {/* Animated background gradient */}
      <div
        className="pointer-events-none fixed inset-0 transition-all duration-700 ease-out"
        style={{ background: getBackgroundGradient() }}
      />

      {/* Mouse follow glow */}
      <div
        className="pointer-events-none fixed h-[500px] w-[500px] rounded-full opacity-30 blur-3xl transition-opacity duration-300"
        style={{
          background: hoveredEdition
            ? hoveredEdition === "assembly-2"
              ? "radial-gradient(circle, rgba(14, 165, 233, 0.4) 0%, transparent 70%)"
              : hoveredEdition === "ai-edition"
              ? "radial-gradient(circle, rgba(168, 85, 247, 0.4) 0%, transparent 70%)"
              : "radial-gradient(circle, rgba(245, 158, 11, 0.4) 0%, transparent 70%)"
            : "radial-gradient(circle, rgba(188, 231, 244, 0.2) 0%, transparent 70%)",
          left: mousePos.x - 250,
          top: mousePos.y - 250,
        }}
      />

      {/* Floating particles */}
      <FloatingParticles />

      {/* Grid pattern overlay */}
      <div
        className="pointer-events-none fixed inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      />
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-800 bg-[#101010]/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-semibold text-zinc-100">Assembly</span>
            <span className="rounded bg-zinc-800 px-1.5 py-0.5 text-xs font-medium text-zinc-400">
              Editions
            </span>
          </Link>
          <div className="flex items-center gap-2 sm:gap-4">
            <a
              href="https://assembly.com"
              target="_blank"
              rel="noopener"
              className="hidden sm:inline-flex h-8 items-center justify-center rounded-lg px-3 text-sm font-medium text-zinc-400 transition-colors hover:bg-zinc-800/50 hover:text-zinc-100"
            >
              Visit Assembly
            </a>
            <a
              href="https://assembly.com/signup?utm_source=editions&utm_medium=web&utm_campaign=editions-page"
              target="_blank"
              rel="noopener"
              className="inline-flex h-8 items-center justify-center rounded-lg bg-[#BCE7F4] px-3 text-sm font-medium text-zinc-900 transition-colors hover:bg-[#8AD4E9]"
            >
              <span className="hidden sm:inline">Start Free Trial</span>
              <span className="sm:hidden">Try Free</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-1 flex-col items-center justify-center px-4 sm:px-6 pt-24 pb-12">
        {/* Headline */}
        <div className="mb-10 sm:mb-16 text-center">
          <p className="mb-3 sm:mb-4 text-xs sm:text-sm font-medium uppercase tracking-widest text-zinc-500">
            Assembly Editions
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white">
            <span className="inline-block animate-shimmer bg-gradient-to-r from-white via-[#BCE7F4] to-white bg-[length:200%_100%] bg-clip-text text-transparent">
              Everything new
            </span>{" "}
            across Assembly.
          </h1>
          <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-semibold text-zinc-500">
            Every three months.
          </h2>
        </div>

        {/* Edition Cards */}
        <div className="grid w-full max-w-5xl gap-4 sm:gap-6 md:grid-cols-3">
          {editions.map((edition) => (
            <EditionCard
              key={edition.id}
              edition={edition}
              onCountdownClick={() => setShowCountdown(true)}
              onCookingClick={() => setShowCooking(true)}
              onHover={(id) => setHoveredEdition(id)}
              onLeave={() => setHoveredEdition(null)}
            />
          ))}
        </div>

        {/* Changelog Link */}
        <div className="mt-10 sm:mt-16 text-center">
          <a
            href="https://assembly.com/updates"
            target="_blank"
            rel="noopener"
            className="group relative inline-flex items-center gap-2 text-sm text-zinc-500 transition-colors hover:text-zinc-300"
          >
            {/* Pulsing dot */}
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#BCE7F4]/40"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#BCE7F4]/60"></span>
            </span>
            <span className="relative">
              View full changelog
              {/* Animated underline */}
              <span className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-[#BCE7F4]/50 to-transparent transition-all duration-300 group-hover:w-full"></span>
            </span>
            <svg
              className="h-4 w-4 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-800/50 py-6 sm:py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <span className="text-sm text-zinc-500">
              © {new Date().getFullYear()} Assembly. All rights reserved.
            </span>
            <div className="flex items-center gap-6">
              <a
                href="https://assembly.com"
                target="_blank"
                rel="noopener"
                className="text-sm text-zinc-500 transition-colors hover:text-white"
              >
                assembly.com
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Countdown Modal */}
      {showCountdown && (
        <CountdownModal onClose={() => setShowCountdown(false)} />
      )}

      {/* Cooking Modal */}
      {showCooking && <CookingModal onClose={() => setShowCooking(false)} />}
    </div>
  );
}

// Floating particles component
function FloatingParticles() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      {/* Large slow-moving orbs */}
      <div className="absolute top-1/4 left-1/4 h-64 w-64 animate-float-slow rounded-full bg-[#BCE7F4]/5 blur-3xl" />
      <div className="absolute top-1/2 right-1/4 h-48 w-48 animate-float-medium rounded-full bg-purple-500/5 blur-3xl" />
      <div className="absolute bottom-1/4 left-1/3 h-56 w-56 animate-float-fast rounded-full bg-amber-500/5 blur-3xl" />

      {/* Small particles */}
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="absolute h-1 w-1 rounded-full bg-white/20"
          style={{
            left: `${10 + (i * 7) % 80}%`,
            top: `${15 + (i * 11) % 70}%`,
            animation: `twinkle ${2 + (i % 3)}s ease-in-out infinite`,
            animationDelay: `${i * 0.3}s`,
          }}
        />
      ))}
    </div>
  );
}

interface EditionCardProps {
  edition: (typeof editions)[0];
  onCountdownClick: () => void;
  onCookingClick: () => void;
  onHover: (id: string) => void;
  onLeave: () => void;
}

function EditionCard({
  edition,
  onCountdownClick,
  onCookingClick,
  onHover,
  onLeave,
}: EditionCardProps) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: y * 10, y: -x * 10 });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    onHover(edition.id);
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setIsHovered(false);
    onLeave();
  };

  const handleClick = (e: React.MouseEvent) => {
    if (edition.available) {
      // Navigation handled by Link wrapper
      return;
    }
    e.preventDefault();
    e.stopPropagation();
    if (edition.comingSoonType === "countdown") {
      onCountdownClick();
    } else if (edition.comingSoonType === "cooking") {
      onCookingClick();
    }
  };

  const cardContent = (
    <div
      ref={cardRef}
      onClick={handleClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative flex aspect-[4/5] flex-col justify-between overflow-hidden rounded-2xl bg-gradient-to-br ${edition.gradient} p-6 ${
        edition.available
          ? "cursor-pointer"
          : "cursor-pointer opacity-70 hover:opacity-90"
      }`}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(${isHovered ? 1.02 : 1})`,
        transition: isHovered ? "transform 0.1s ease-out" : "transform 0.4s ease-out",
        boxShadow: isHovered ? "0 25px 50px -12px rgba(0, 0, 0, 0.5)" : "none",
      }}
    >
      {/* Assembly 2.0 Custom Visual */}
      {edition.id === "assembly-2" && (
        <div className="absolute inset-0 overflow-hidden">
          {/* Abstract app windows/panels representing the unified platform */}
          <div className="absolute top-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
            {/* Main window */}
            <div className="relative">
              <div className="h-24 w-36 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 shadow-2xl">
                <div className="flex gap-1 p-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-white/40"></div>
                  <div className="h-1.5 w-1.5 rounded-full bg-white/40"></div>
                  <div className="h-1.5 w-1.5 rounded-full bg-white/40"></div>
                </div>
                <div className="px-2 space-y-1.5">
                  <div className="h-2 w-full rounded bg-white/20"></div>
                  <div className="h-2 w-3/4 rounded bg-white/15"></div>
                  <div className="h-2 w-1/2 rounded bg-white/10"></div>
                </div>
              </div>
              {/* Floating accent elements */}
              <div className="absolute -right-4 -top-2 h-8 w-8 rounded-md bg-[#BCE7F4]/30 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                <div className="h-3 w-3 rounded-sm bg-white/40"></div>
              </div>
              <div className="absolute -left-6 top-8 h-10 w-10 rounded-md bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-[#BCE7F4]/40"></div>
              </div>
            </div>
            {/* Secondary windows row */}
            <div className="flex gap-2 -mt-1">
              <div className="h-14 w-16 rounded-md bg-white/10 backdrop-blur-sm border border-white/15 p-1.5">
                <div className="h-full w-full rounded-sm bg-gradient-to-br from-white/20 to-transparent"></div>
              </div>
              <div className="h-14 w-16 rounded-md bg-white/10 backdrop-blur-sm border border-white/15 p-1.5">
                <div className="space-y-1">
                  <div className="h-1.5 w-full rounded bg-white/20"></div>
                  <div className="h-1.5 w-2/3 rounded bg-white/15"></div>
                </div>
              </div>
              <div className="h-14 w-16 rounded-md bg-white/10 backdrop-blur-sm border border-white/15 p-1.5">
                <div className="grid grid-cols-2 gap-1 h-full">
                  <div className="rounded-sm bg-white/15"></div>
                  <div className="rounded-sm bg-white/10"></div>
                  <div className="rounded-sm bg-white/10"></div>
                  <div className="rounded-sm bg-white/15"></div>
                </div>
              </div>
            </div>
          </div>
          {/* Glow effect */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 h-32 w-32 rounded-full bg-white/10 blur-3xl"></div>
        </div>
      )}

      {/* AI Edition Custom Visual */}
      {edition.id === "ai-edition" && (
        <div className="absolute inset-0 overflow-hidden">
          {/* AI brain/neural network visualization */}
          <div className="absolute top-16 left-1/2 -translate-x-1/2 flex flex-col items-center">
            {/* Central AI orb */}
            <div className="relative">
              <div className="h-20 w-20 rounded-full bg-gradient-to-br from-white/30 to-purple-300/20 backdrop-blur-sm border border-white/30 shadow-2xl flex items-center justify-center">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-purple-200/40 to-white/20 flex items-center justify-center">
                  <div className="h-4 w-4 rounded-full bg-white/60"></div>
                </div>
              </div>
              {/* Orbiting elements */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 h-3 w-3 rounded-full bg-purple-300/50"></div>
              <div className="absolute top-1/2 -right-4 -translate-y-1/2 h-2.5 w-2.5 rounded-full bg-white/40"></div>
              <div className="absolute top-1/2 -left-4 -translate-y-1/2 h-2 w-2 rounded-full bg-purple-200/50"></div>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-2.5 w-2.5 rounded-full bg-white/30"></div>
              {/* Connection lines */}
              <div className="absolute top-0 left-1/2 w-px h-8 -translate-x-1/2 -translate-y-full bg-gradient-to-t from-white/30 to-transparent"></div>
              <div className="absolute bottom-0 left-1/2 w-px h-6 -translate-x-1/2 translate-y-full bg-gradient-to-b from-white/30 to-transparent"></div>
            </div>
            {/* Chat/conversation bubbles */}
            <div className="mt-6 flex flex-col gap-2 w-40">
              <div className="self-end rounded-xl rounded-br-sm bg-white/15 backdrop-blur-sm border border-white/20 px-3 py-2">
                <div className="h-1.5 w-16 rounded bg-white/30"></div>
              </div>
              <div className="self-start rounded-xl rounded-bl-sm bg-purple-300/20 backdrop-blur-sm border border-white/15 px-3 py-2">
                <div className="space-y-1">
                  <div className="h-1.5 w-20 rounded bg-white/25"></div>
                  <div className="h-1.5 w-12 rounded bg-white/20"></div>
                </div>
              </div>
            </div>
          </div>
          {/* Glow effect */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 h-40 w-40 rounded-full bg-purple-400/15 blur-3xl"></div>
        </div>
      )}

      {/* Scale Ready Custom Visual */}
      {edition.id === "scale-ready" && (
        <div className="absolute inset-0 overflow-hidden">
          {/* Infrastructure/building blocks visualization */}
          <div className="absolute top-14 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
            {/* Server stack */}
            <div className="relative">
              {/* Top server */}
              <div className="h-8 w-32 rounded-md bg-white/15 backdrop-blur-sm border border-white/20 flex items-center px-2 gap-2">
                <div className="flex gap-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-green-400/70"></div>
                  <div className="h-1.5 w-1.5 rounded-full bg-green-400/70"></div>
                </div>
                <div className="flex-1 h-1 rounded bg-white/20"></div>
              </div>
              {/* Middle server */}
              <div className="h-8 w-32 rounded-md bg-white/12 backdrop-blur-sm border border-white/15 flex items-center px-2 gap-2 -mt-px">
                <div className="flex gap-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-amber-400/70"></div>
                  <div className="h-1.5 w-1.5 rounded-full bg-green-400/70"></div>
                </div>
                <div className="flex-1 h-1 rounded bg-white/15"></div>
              </div>
              {/* Bottom server */}
              <div className="h-8 w-32 rounded-md bg-white/10 backdrop-blur-sm border border-white/12 flex items-center px-2 gap-2 -mt-px">
                <div className="flex gap-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-green-400/70"></div>
                  <div className="h-1.5 w-1.5 rounded-full bg-green-400/70"></div>
                </div>
                <div className="flex-1 h-1 rounded bg-white/12"></div>
              </div>
              {/* Security shield */}
              <div className="absolute -right-6 top-4 h-10 w-8 flex items-center justify-center">
                <svg className="h-6 w-6 text-amber-200/50" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
            </div>
            {/* Metrics row */}
            <div className="flex gap-3 mt-2">
              <div className="h-12 w-14 rounded-md bg-white/10 backdrop-blur-sm border border-white/15 p-1.5 flex flex-col justify-between">
                <div className="h-1 w-6 rounded bg-white/20"></div>
                <div className="text-[10px] font-medium text-white/50">99.9%</div>
              </div>
              <div className="h-12 w-14 rounded-md bg-white/10 backdrop-blur-sm border border-white/15 p-1.5 flex flex-col justify-between">
                <div className="flex gap-0.5 items-end h-4">
                  <div className="w-1 h-1 rounded-sm bg-amber-300/40"></div>
                  <div className="w-1 h-2 rounded-sm bg-amber-300/50"></div>
                  <div className="w-1 h-3 rounded-sm bg-amber-300/60"></div>
                  <div className="w-1 h-4 rounded-sm bg-amber-300/70"></div>
                </div>
                <div className="h-1 w-4 rounded bg-white/15"></div>
              </div>
              <div className="h-12 w-14 rounded-md bg-white/10 backdrop-blur-sm border border-white/15 p-1.5 flex flex-col justify-between">
                <div className="h-1 w-8 rounded bg-white/20"></div>
                <div className="flex gap-0.5">
                  <div className="h-1.5 w-1.5 rounded-full bg-green-400/60"></div>
                  <div className="h-1.5 w-1.5 rounded-full bg-green-400/60"></div>
                  <div className="h-1.5 w-1.5 rounded-full bg-green-400/60"></div>
                </div>
              </div>
            </div>
          </div>
          {/* Glow effect */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 h-32 w-32 rounded-full bg-amber-400/10 blur-3xl"></div>
        </div>
      )}

      {/* Season Badge */}
      <div className="relative z-10 flex items-start justify-between">
        <span className="rounded-full bg-black/20 px-3 py-1.5 text-xs font-medium text-white/90 backdrop-blur-sm">
          {edition.season}
        </span>
        {!edition.available && (
          <span className="rounded-full bg-black/20 px-3 py-1.5 text-xs font-medium text-white/70 backdrop-blur-sm">
            Coming Soon
          </span>
        )}
      </div>

      {/* Bottom Content */}
      <div className="relative z-10">
        <h3 className="text-2xl font-semibold text-white">{edition.title}</h3>
        <p className="mt-2 text-sm text-white/70">{edition.tagline}</p>
        {edition.available && (
          <div className="mt-4 flex items-center gap-2 text-sm font-medium text-white">
            <span>View edition</span>
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        )}
        {!edition.available && (
          <div className="mt-4 flex items-center gap-2 text-sm font-medium text-white/60">
            <span>Tap to peek</span>
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
          </div>
        )}
      </div>
    </div>
  );

  if (edition.available) {
    return (
      <Link href={`/${edition.id}`} className="block">
        {cardContent}
      </Link>
    );
  }

  return cardContent;
}

function CountdownModal({ onClose }: { onClose: () => void }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleEscape);
    // Prevent body scroll while modal is open
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  useEffect(() => {
    const targetDate = new Date("2026-04-15T00:00:00").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full sm:mx-4 sm:max-w-lg overflow-hidden rounded-t-3xl sm:rounded-3xl bg-gradient-to-br from-[#a855f7] to-[#7c3aed] p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 rounded-full bg-black/20 p-2 text-white/70 transition-colors hover:bg-black/30 hover:text-white"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Content */}
        <div className="text-center">
          <div className="mb-2 text-xs sm:text-sm font-medium uppercase tracking-widest text-white/60">
            AI Edition drops in
          </div>

          {/* Countdown */}
          <div className="my-6 sm:my-8 flex justify-center gap-2 sm:gap-4">
            <TimeUnit value={timeLeft.days} label="days" />
            <div className="flex items-center text-xl sm:text-3xl font-bold text-white/30">:</div>
            <TimeUnit value={timeLeft.hours} label="hours" />
            <div className="flex items-center text-xl sm:text-3xl font-bold text-white/30">:</div>
            <TimeUnit value={timeLeft.minutes} label="min" />
            <div className="flex items-center text-xl sm:text-3xl font-bold text-white/30">:</div>
            <TimeUnit value={timeLeft.seconds} label="sec" />
          </div>

          {/* Date */}
          <div className="mb-4 sm:mb-6 text-base sm:text-lg font-medium text-white">
            April 15, 2026
          </div>

          {/* Features preview */}
          <div className="rounded-2xl bg-black/20 p-4 text-left">
            <div className="mb-3 text-xs font-medium uppercase tracking-wider text-white/50">
              What&apos;s coming
            </div>
            <ul className="space-y-2 text-sm text-white/80">
              <li className="flex items-center gap-2">
                <span className="text-purple-300">✦</span> ChatGPT App for Assembly
              </li>
              <li className="flex items-center gap-2">
                <span className="text-purple-300">✦</span> MCP Server integration
              </li>
              <li className="flex items-center gap-2">
                <span className="text-purple-300">✦</span> Ask Assembly AI assistant
              </li>
            </ul>
          </div>

          {/* CTA */}
          <a
            href="https://x.com/assemblyhq"
            target="_blank"
            rel="noopener"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-purple-600 transition-all hover:bg-white/90 hover:scale-105"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
            Stay updated
          </a>
        </div>
      </div>
    </div>
  );
}

function TimeUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-lg sm:rounded-xl bg-black/20 text-xl sm:text-3xl font-bold text-white tabular-nums">
        {value.toString().padStart(2, "0")}
      </div>
      <div className="mt-1 text-[10px] sm:text-xs text-white/50">{label}</div>
    </div>
  );
}

function CookingModal({ onClose }: { onClose: () => void }) {
  const [steam, setSteam] = useState(0);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleEscape);
    // Prevent body scroll while modal is open
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  useEffect(() => {
    const interval = setInterval(() => {
      setSteam((prev) => (prev + 1) % 3);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full sm:mx-4 sm:max-w-lg overflow-hidden rounded-t-3xl sm:rounded-3xl bg-gradient-to-br from-[#f59e0b] to-[#d97706] p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 rounded-full bg-black/20 p-2 text-white/70 transition-colors hover:bg-black/30 hover:text-white"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Content */}
        <div className="text-center">
          {/* Cooking animation */}
          <div className="relative mx-auto mb-4 sm:mb-6 flex h-28 sm:h-32 w-28 sm:w-32 items-center justify-center">
            {/* Pot */}
            <div className="absolute bottom-0 h-20 w-24 rounded-b-3xl bg-zinc-800"></div>
            <div className="absolute bottom-16 h-4 w-28 rounded-full bg-zinc-700"></div>

            {/* Steam */}
            <div className="absolute bottom-20 flex gap-2">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className={`text-2xl transition-all duration-300 ${
                    steam === i ? "translate-y-[-8px] opacity-100" : "opacity-40"
                  }`}
                >
                  ~
                </div>
              ))}
            </div>

            {/* Sparkles */}
            <div className="absolute -top-2 -left-2 text-2xl animate-pulse">✨</div>
            <div className="absolute -top-4 right-0 text-xl animate-pulse delay-300">⭐</div>
          </div>

          <h3 className="mb-2 text-xl sm:text-2xl font-bold text-white">
            Still cooking...
          </h3>
          <p className="mb-4 sm:mb-6 text-sm sm:text-base text-white/70">
            We&apos;re brewing something special. No date yet, but it&apos;ll be worth the wait.
          </p>

          {/* Features preview */}
          <div className="rounded-2xl bg-black/20 p-4 text-left">
            <div className="mb-3 text-xs font-medium uppercase tracking-wider text-white/50">
              On the menu
            </div>
            <ul className="space-y-2 text-sm text-white/80">
              <li className="flex items-center gap-2">
                <span className="text-amber-300">🔐</span> Audit logs & compliance
              </li>
              <li className="flex items-center gap-2">
                <span className="text-amber-300">🔑</span> SSO & advanced security
              </li>
              <li className="flex items-center gap-2">
                <span className="text-amber-300">⚡</span> Performance at scale
              </li>
            </ul>
          </div>

          {/* CTA */}
          <a
            href="https://x.com/assemblyhq"
            target="_blank"
            rel="noopener"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-amber-600 transition-all hover:bg-white/90 hover:scale-105"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
            Stay updated
          </a>
        </div>
      </div>
    </div>
  );
}
