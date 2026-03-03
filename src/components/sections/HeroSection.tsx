"use client";

export function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 120;
      const y = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen pt-24 sm:pt-32 overflow-hidden">
      {/* ── Hero content ── */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        {/* Top bar */}
        <div
          className="hero-fade-up flex items-center justify-between mb-16 sm:mb-24"
          style={{ animationDelay: "0.1s" }}
        >
          <span className="font-mono text-xs uppercase tracking-wider text-muted">
            Assembly Editions
          </span>
          <div className="hidden sm:flex items-center gap-6">
            <button
              onClick={() => scrollToSection("client-experience")}
              className="text-sm text-muted hover:text-foreground transition-colors"
            >
              Clients
            </button>
            <button
              onClick={() => scrollToSection("payments")}
              className="text-sm text-muted hover:text-foreground transition-colors"
            >
              Payments
            </button>
            <button
              onClick={() => scrollToSection("developers")}
              className="text-sm text-muted hover:text-foreground transition-colors"
            >
              Developers
            </button>
          </div>
        </div>

        {/* Editorial content — left-aligned */}
        <div className="max-w-4xl pb-24 sm:pb-32">
          <h1
            className="hero-fade-up text-5xl font-semibold tracking-tighter leading-[0.95] text-white sm:text-6xl lg:text-7xl 2xl:text-8xl"
            style={{ animationDelay: "0.25s" }}
          >
            Assembly 2.0
            <br />
            is here
          </h1>

          <p
            className="hero-fade-up mt-6 text-xl italic text-muted sm:mt-8 sm:text-2xl"
            style={{ animationDelay: "0.4s" }}
          >
            A major upgrade across client experience, tasks, payments, and the
            developer platform.
          </p>

          <p
            className="hero-fade-up mt-6 max-w-2xl text-base text-muted-foreground leading-relaxed"
            style={{ animationDelay: "0.55s" }}
          >
            Today we&apos;re launching Assembly 2.0 — a release that improves
            nearly every part of the platform. New client portals, better task
            management, consolidated payments, and a rebuilt developer
            foundation.
          </p>
        </div>
      </div>
    </section>
  );
}
