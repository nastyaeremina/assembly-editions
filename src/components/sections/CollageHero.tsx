"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Play, Pause } from "lucide-react";
import { LightBeam } from "@/components/ui";

/* ────────────────────────────────────────────────────────────
   HERO SECTION
   Centered title + subtitle + demo video placeholder.
   Clean, editorial approach with staggered entrance.
   ──────────────────────────────────────────────────────────── */

export function CollageHero() {
  const ref = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section
      ref={ref}
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: "#101010" }}
      aria-label="Assembly 2.0 hero"
    >
      {/* Vertical light beam background — fades in with content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1.2, delay: 0.1, ease: "easeOut" }}
        style={{ position: "absolute", inset: 0 }}
      >
        <LightBeam />
      </motion.div>

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
        }}
      >
        {/* ── Title ── */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontFamily: "'PP Mori', var(--font-sans)",
            fontWeight: 600,
            fontSize: "clamp(2.4rem, 5.5vw, 4.2rem)",
            lineHeight: 1.08,
            letterSpacing: "-0.035em",
            color: "var(--swatch-2, #f5f5f5)",
            margin: 0,
            textAlign: "center",
            maxWidth: "800px",
          }}
        >
          The biggest update in Assembly&nbsp;history.
        </motion.h1>

        {/* ── Subtitle ── */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontFamily: "'PP Mori', var(--font-sans)",
            fontWeight: 400,
            fontSize: "clamp(1rem, 1.6vw, 1.2rem)",
            lineHeight: 1.5,
            letterSpacing: "-0.01em",
            color: "var(--swatch-3, #999)",
            margin: 0,
            marginTop: "1.5rem",
            textAlign: "center",
            maxWidth: "580px",
          }}
        >
          This release touches nearly every part of the platform — how clients
          experience your portal, how you manage tasks and billing, and how
          developers build on&nbsp;Assembly.
        </motion.p>

        {/* ── Video placeholder with subtle glow ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          style={{
            width: "100%",
            maxWidth: "960px",
            marginTop: "clamp(3rem, 5vw, 4.5rem)",
            position: "relative",
            zIndex: 1,
          }}
        >
          {/* Glow behind video — fades in with the video */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.6 }}
            style={{
              position: "absolute",
              inset: "-15%",
              background:
                "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(80, 60, 180, 0.15) 0%, transparent 70%)",
              filter: "blur(30px)",
              pointerEvents: "none",
            }}
          />

          <div
            onClick={togglePlay}
            style={{
              width: "100%",
              aspectRatio: "16 / 9",
              borderRadius: "16px",
              overflow: "hidden",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              backgroundColor: "#1a1a1a",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              position: "relative",
            }}
          >
            {/* Video element — hidden until a src is added */}
            <video
              ref={videoRef}
              playsInline
              onEnded={() => setIsPlaying(false)}
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                opacity: isPlaying ? 1 : 0,
                transition: "opacity 0.3s ease",
              }}
            />

            {/* Play / Pause icon overlay */}
            <AnimatePresence mode="wait">
              {!isPlaying ? (
                <motion.div
                  key="play"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                  style={{ position: "relative", zIndex: 1 }}
                >
                  <Play
                    size={32}
                    style={{
                      color: "rgba(255, 255, 255, 0.2)",
                      marginLeft: "3px",
                    }}
                    strokeWidth={0}
                    fill="rgba(255, 255, 255, 0.2)"
                  />
                </motion.div>
              ) : (
                <motion.div
                  key="pause"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 0, scale: 1 }}
                  whileHover={{ opacity: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                  style={{ position: "relative", zIndex: 1 }}
                >
                  <Pause
                    size={32}
                    style={{
                      color: "rgba(255, 255, 255, 0.3)",
                    }}
                    strokeWidth={0}
                    fill="rgba(255, 255, 255, 0.3)"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>

      {/* Bottom fade — dissolves glow before section edge */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "40%",
          background:
            "linear-gradient(to bottom, transparent 0%, #101010 70%, #101010 100%)",
          pointerEvents: "none",
          zIndex: 2,
        }}
      />
    </section>
  );
}
