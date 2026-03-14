"use client";

import { useRef, useState, useEffect, useLayoutEffect, useCallback } from "react";
import { motion, useInView } from "framer-motion";
import { Play, X } from "lucide-react";
// import { AsciiHeroBackground } from "../ui/AsciiHeroBackground";

/* ────────────────────────────────────────────────────────────
   HERO SECTION
   Large centered title + subtitle + YouTube demo video.
   Click play → video plays large in hero.
   Scroll past hero → video minimizes to a PIP that follows you.

   KEY: A single iframe is rendered once and repositioned via
   direct DOM style mutations. This prevents the iframe from
   remounting (which would restart the video and cause audio
   overlap).
   ──────────────────────────────────────────────────────────── */

const YOUTUBE_ID = "xT0WF1zWUTs";

export function CollageHero() {
  const sectionRef = useRef(null);
  const videoAreaRef = useRef(null);
  const iframeWrapperRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-40px" });
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHeroVisible, setIsHeroVisible] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [hasHover, setHasHover] = useState(true);

  const isPIP = isPlaying && !isHeroVisible;

  const previewContainerRef = useRef(null);

  /* Detect touch devices (no hover) — show play button always on mobile */
  useEffect(() => {
    const mq = window.matchMedia("(hover: none)");
    setHasHover(!mq.matches);
    const handler = (e) => setHasHover(!e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  /* Track hero visibility for PIP mode */
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsHeroVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  /* ── Position the single iframe wrapper ──
     Hero mode: position:fixed overlaying the video placeholder exactly.
     PIP mode:  position:fixed in the bottom-right corner.
     Uses useLayoutEffect for the initial position (no flash),
     then scroll/resize listeners keep it synced in hero mode. */
  useLayoutEffect(() => {
    const wrapper = iframeWrapperRef.current;
    if (!wrapper) return;

    if (isPIP) {
      Object.assign(wrapper.style, {
        top: "auto",
        left: "auto",
        bottom: "24px",
        right: "24px",
        width: "320px",
        height: "180px",
        borderRadius: "10px",
        border: "none",
        boxShadow:
          "0 12px 40px rgba(0, 0, 0, 0.55), 0 0 0 0.5px rgba(255, 255, 255, 0.08)",
        zIndex: "9999",
      });
      return;
    }

    /* Hero mode — overlay the video placeholder */
    let rafId;
    const sync = () => {
      const el = videoAreaRef.current;
      if (!el || !wrapper) return;
      const r = el.getBoundingClientRect();
      Object.assign(wrapper.style, {
        bottom: "auto",
        right: "auto",
        top: `${r.top}px`,
        left: `${r.left}px`,
        width: `${r.width}px`,
        height: `${r.height}px`,
        borderRadius: "16px",
        border: "none",
        boxShadow: "none",
        zIndex: "50",
      });
    };

    sync(); /* position immediately (before paint) */

    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(sync);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", sync);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", sync);
      cancelAnimationFrame(rafId);
    };
  }, [isPlaying, isPIP]);

  return (
    <>
      <section
        ref={sectionRef}
        className="relative w-full"
        style={{ backgroundColor: "#101010", paddingBottom: "clamp(5rem, 6vw, 4.5rem)" }}
        aria-label="Assembly 2.0 hero"
      >
        {/* Gradient removed — flat off-black hero per brand guidelines */}

        {/* ASCII hands background — disabled */}
        {/* <AsciiHeroBackground /> */}

        <div
          style={{
            maxWidth: "1100px",
            position: "relative",
            margin: "0 auto",
            paddingTop: "clamp(8rem, 16vw, 14rem)",
            paddingBottom: "clamp(4rem, 8vw, 6rem)",
            paddingLeft: "1.5rem",
            paddingRight: "1.5rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            zIndex: 2,
          }}
        >
          {/* ── Title (blur-dissolve reveal) ── */}
          <motion.h1
            initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
            animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontFamily: "'PP Mori', var(--font-sans)",
              fontWeight: 600,
              fontSize: "clamp(2rem, 4.5vw, 3.8rem)",
              lineHeight: 1.08,
              letterSpacing: "-0.035em",
              color: "rgba(255, 255, 255, 0.92)",
              margin: 0,
              textAlign: "center",
              maxWidth: "800px",
            }}
          >
            The biggest update in Assembly&nbsp;history
          </motion.h1>

          {/* ── Subtitle (blur-dissolve reveal) ── */}
          <motion.p
            initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
            animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontFamily: "'PP Mori', var(--font-sans)",
              fontWeight: 400,
              fontSize: "clamp(0.95rem, 1.4vw, 1.1rem)",
              lineHeight: 1.55,
              letterSpacing: "-0.01em",
              color: "rgba(255, 255, 255, 0.72)",
              margin: 0,
              marginTop: "1.425rem",
              textAlign: "center",
              maxWidth: "580px",
            }}
          >
            This release touches nearly every part of the platform, including the
            client portal, tasks, billing, and developer&nbsp;tools.
          </motion.p>

          {/* ── Video area (placeholder for layout — iframe overlays this) ── */}
          <div
            ref={videoAreaRef}
            style={{
              width: "100%",
              maxWidth: "960px",
              marginTop: "clamp(3rem, 5vw, 4.5rem)",
              aspectRatio: "16 / 9",
              position: "relative",
              opacity: isInView ? 1 : 0,
              transition: "opacity 0.8s ease-out 0.5s",
            }}
          >
            {/* Video thumbnail + play button */}
            <div
              ref={previewContainerRef}
              onClick={!isPlaying ? () => setIsPlaying(true) : undefined}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              style={{
                position: "absolute",
                inset: 0,
                borderRadius: "clamp(6px, 1vw, 10px)",
                overflow: "hidden",
                cursor: !isPlaying ? "pointer" : "default",
                zIndex: 1,
              }}
            >
              {/* YouTube thumbnail */}
              {!isPlaying && (
                <>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/video thumb desktop.png"
                    alt="Assembly 2.0 Demo"
                    style={{
                      position: "absolute",
                      inset: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />

                  {/* Play button */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      zIndex: 2,
                    }}
                  >
                    <div
                      style={{
                        width: "clamp(52px, 8vw, 64px)",
                        height: "clamp(52px, 8vw, 64px)",
                        borderRadius: "50%",
                        backgroundColor: "rgba(0, 0, 0, 0.45)",
                        backdropFilter: "blur(16px)",
                        WebkitBackdropFilter: "blur(16px)",
                        border: "1px solid rgba(255, 255, 255, 0.12)",
                        boxShadow: "0 4px 24px rgba(0, 0, 0, 0.3)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        opacity: isHovered || !hasHover ? 1 : 0.8,
                        transform: isHovered ? "scale(1.08)" : "scale(1)",
                        transition: "opacity 0.25s ease, transform 0.25s ease",
                      }}
                    >
                      <Play
                        size={20}
                        style={{ color: "#fff", marginLeft: "2px" }}
                        strokeWidth={0}
                        fill="#fff"
                      />
                    </div>
                  </div>
                </>
              )}
            </div>
        </div>
        </div>
      </section>

      {/* ── Single iframe — rendered ONCE, repositioned between hero & PIP ── */}
      {isPlaying && (
        <div
          ref={iframeWrapperRef}
          style={{
            position: "fixed",
            overflow: "hidden",
            backgroundColor: "#000",
          }}
        >
          <iframe
            src={`https://www.youtube.com/embed/${YOUTUBE_ID}?autoplay=1&controls=1&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&playsinline=1`}
            title="Assembly 2.0 Demo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              border: "none",
            }}
          />
          <button
            onClick={() => setIsPlaying(false)}
            style={{
              position: "absolute",
              top: isPIP ? "8px" : "12px",
              right: isPIP ? "8px" : "12px",
              width: isPIP ? "28px" : "36px",
              height: isPIP ? "28px" : "36px",
              borderRadius: "50%",
              backgroundColor: "rgba(0, 0, 0, 0.6)",
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
              border: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              zIndex: 2,
              padding: 0,
              transition: "background-color 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
            }}
            aria-label="Close video"
          >
            <X
              size={isPIP ? 14 : 18}
              style={{ color: "#fff" }}
              strokeWidth={2}
            />
          </button>
        </div>
      )}
    </>
  );
}
