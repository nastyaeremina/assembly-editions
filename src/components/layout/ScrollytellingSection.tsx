"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { useMediaQuery } from "@/hooks/useMediaQuery";

/* ────────────────────────────────────────────────────────────
   SCROLLYTELLING SECTION
   Fully native scroll — no sticky rail, no scroll hijacking.
   Each step is a full-width block: editorial text + visual content.
   ChapterBar at the top provides section-level navigation.

   On mobile (<1024px), falls back to stacked cards.
   ──────────────────────────────────────────────────────────── */

export interface ScrollytellingStep {
  id: string;
  suffix: string; // "A", "B", "C"
  title?: string; // Override title for this step
  description?: string; // Override description for this step
  content: React.ReactNode;
  sameAsHero?: boolean; // When true, hero visual repeats (no unique content)
  learnMoreUrl?: string; // Optional "Learn more →" link below description
}

interface ScrollytellingSectionProps {
  sectionId: string;
  title?: string;
  description?: string;
  sectionNumber: string;
  heroImage?: string | React.ReactNode;
  steps: ScrollytellingStep[];
  heroGradient?: boolean;
  ctaContent?: React.ReactNode;
  /** "fullbleed" renders ReactNode as absolute bg (MacOSDock-style).
   *  "contained" renders ReactNode below editorial text with padding.
   *  Defaults to "fullbleed" for ReactNode, always "contained" for strings. */
  heroLayout?: "fullbleed" | "contained";
  /** Override the default minHeight for the fullbleed hero block.
   *  Defaults to "100vh". Use e.g. "70vh" or "clamp(500px, 70vh, 800px)". */
  heroMinHeight?: string;
  /** When true, the hero content extends to the right edge of the viewport
   *  (removes right padding). Useful for content that intentionally overflows. */
  heroFullWidth?: boolean;
  /** Override the default "SECTION XX" label above the title. */
  sectionLabel?: string;
  /** "dark" (default): dark bg (#101010) + white text.
   *  "light": warm off-white bg (#FBFBF5) + dark text. */
  theme?: "dark" | "light";
}

/* ── Editorial text block (section label + title + description) ── */
function EditorialText({
  sectionNumber,
  suffix,
  title,
  description,
  ctaContent,
  hideLabel,
  sectionLabel,
  learnMoreUrl,
  theme = "dark",
}: {
  sectionNumber: string;
  suffix?: string;
  title: string;
  description: string;
  ctaContent?: React.ReactNode;
  hideLabel?: boolean;
  sectionLabel?: string;
  learnMoreUrl?: string;
  theme?: "dark" | "light";
}) {
  const isLight = theme === "light";
  const titleColor = isLight ? "#18181b" : "#fff";
  const bodyColor = isLight ? "#52525b" : "rgba(255, 255, 255, 0.82)";
  const linkColor = isLight ? "rgba(0, 0, 0, 0.5)" : "rgba(255, 255, 255, 0.5)";
  const linkHoverColor = isLight ? "rgba(0, 0, 0, 0.85)" : "rgba(255, 255, 255, 0.85)";

  return (
    <div
      style={{
        maxWidth: "40rem",
        padding: "4rem 2rem 3rem",
      }}
    >
      <h2
        style={{
          fontFamily: "'PP Mori', var(--font-sans)",
          fontWeight: 600,
          fontSize: "clamp(1.6rem, 2.8vw, 2.2rem)",
          lineHeight: 1.15,
          letterSpacing: "-0.025em",
          color: titleColor,
          margin: "0 0 1rem 0",
          whiteSpace: "pre-line",
        }}
      >
        {title}
      </h2>
      <p
        style={{
          fontFamily: "'PP Mori', var(--font-sans)",
          fontWeight: 400,
          fontSize: "0.95rem",
          lineHeight: 1.65,
          color: bodyColor,
          margin: 0,
          maxWidth: "32rem",
        }}
      >
        {description}
      </p>
      {learnMoreUrl && (
        <a
          href={learnMoreUrl}
          target="_blank"
          rel="noopener"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.35rem",
            marginTop: "1.25rem",
            fontFamily: "var(--font-mono, monospace)",
            fontWeight: 400,
            fontSize: "0.75rem",
            letterSpacing: "0.04em",
            textTransform: "uppercase" as const,
            color: linkColor,
            textDecoration: "none",
            transition: "color 0.2s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = linkHoverColor;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = linkColor;
          }}
        >
          Learn more
          <span style={{ fontSize: "0.85rem", transition: "transform 0.2s ease", display: "inline-block" }}>→</span>
        </a>
      )}
      {ctaContent && <div style={{ marginTop: "1.5rem" }}>{ctaContent}</div>}
    </div>
  );
}

/* ── Desktop step block with fade-in on scroll ── */
function DesktopStepBlock({
  id,
  sectionNumber,
  suffix,
  title,
  description,
  children,
  learnMoreUrl,
  theme = "dark",
}: {
  id: string;
  sectionNumber: string;
  suffix?: string;
  title: string;
  description: string;
  children?: React.ReactNode;
  learnMoreUrl?: string;
  theme?: "dark" | "light";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { margin: "-20% 0px -20% 0px" });
  const bgColor = theme === "light" ? "#FBFBF5" : "#101010";

  return (
    <div
      id={id}
      ref={ref}
      style={{
        backgroundColor: bgColor,
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          opacity: isInView ? 1 : 0.15,
          transform: isInView ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.7s ease, transform 0.7s ease",
        }}
      >
        {/* Editorial text */}
        <EditorialText
          sectionNumber={sectionNumber}
          suffix={suffix}
          title={title}
          description={description}
          hideLabel
          learnMoreUrl={learnMoreUrl}
          theme={theme}
        />

        {/* Visual content */}
        {children && (
          <div style={{ padding: "0 2rem 5rem 2rem" }}>
            {children}
          </div>
        )}
      </div>
    </div>
  );
}

/* ── Hero content renderer ── */
function HeroContent({
  heroImage,
  heroGradient,
  theme = "dark",
}: {
  heroImage: string | React.ReactNode;
  heroGradient: boolean;
  theme?: "dark" | "light";
}) {
  const gradientColor = theme === "light" ? "#FBFBF5" : "#101010";

  if (typeof heroImage === "string") {
    return (
      <div style={{ position: "relative", overflow: "hidden" }}>
        <img
          src={heroImage}
          alt=""
          aria-hidden="true"
          style={{
            width: "100%",
            aspectRatio: "16 / 9",
            objectFit: "cover",
            objectPosition: "center 30%",
            display: "block",
          }}
        />
        {heroGradient && (
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "15%",
              background: `linear-gradient(to bottom, ${gradientColor} 0%, transparent 100%)`,
              pointerEvents: "none",
            }}
          />
        )}
      </div>
    );
  }
  return (
    <div style={{ position: "relative", width: "100%" }}>
      {heroImage}
    </div>
  );
}

/* ── Mobile card — one per step in linear flow ── */
function MobileCard({
  id,
  sectionNumber,
  suffix,
  title,
  description,
  children,
  sectionLabel,
  learnMoreUrl,
  theme = "dark",
}: {
  id?: string;
  sectionNumber: string;
  suffix?: string;
  title: string;
  description: string;
  children?: React.ReactNode;
  sectionLabel?: string;
  learnMoreUrl?: string;
  theme?: "dark" | "light";
}) {
  const isLight = theme === "light";
  const bgColor = isLight ? "#FBFBF5" : "#101010";
  const titleColor = isLight ? "#18181b" : "#fff";
  const bodyColor = isLight ? "#52525b" : "rgba(255, 255, 255, 0.82)";
  const linkColor = isLight ? "rgba(0, 0, 0, 0.5)" : "rgba(255, 255, 255, 0.5)";

  return (
    <div
      id={id}
      style={{
        backgroundColor: bgColor,
        padding: "2.5rem 1.5rem",
      }}
    >
      <h2
        style={{
          fontFamily: "'PP Mori', var(--font-sans)",
          fontWeight: 600,
          fontSize: "1.5rem",
          lineHeight: 1.2,
          letterSpacing: "-0.02em",
          color: titleColor,
          margin: "0 0 0.75rem 0",
          whiteSpace: "pre-line",
        }}
      >
        {title}
      </h2>
      <p
        style={{
          fontFamily: "'PP Mori', var(--font-sans)",
          fontWeight: 400,
          fontSize: "0.95rem",
          lineHeight: 1.65,
          color: bodyColor,
          margin: "0 0 0.5rem 0",
        }}
      >
        {description}
      </p>
      {learnMoreUrl && (
        <a
          href={learnMoreUrl}
          target="_blank"
          rel="noopener"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.35rem",
            marginBottom: "1rem",
            fontFamily: "var(--font-mono, monospace)",
            fontWeight: 400,
            fontSize: "0.75rem",
            letterSpacing: "0.04em",
            textTransform: "uppercase" as const,
            color: linkColor,
            textDecoration: "none",
          }}
        >
          Learn more
          <span style={{ fontSize: "0.85rem", display: "inline-block" }}>→</span>
        </a>
      )}
      {children}
    </div>
  );
}

/* ── Mobile hero image renderer ── */
function MobileHeroImage({ heroImage }: { heroImage: string | React.ReactNode }) {
  if (typeof heroImage === "string") {
    return (
      <img
        src={heroImage}
        alt=""
        style={{
          width: "100%",
          aspectRatio: "16 / 10",
          objectFit: "cover",
          objectPosition: "center 30%",
          display: "block",
          borderRadius: "0.5rem",
        }}
      />
    );
  }
  return <div style={{ padding: "1rem 0" }}>{heroImage}</div>;
}

export function ScrollytellingSection({
  sectionId,
  title,
  description,
  sectionNumber,
  heroImage,
  steps,
  heroGradient = true,
  ctaContent,
  heroLayout,
  heroMinHeight,
  heroFullWidth,
  sectionLabel,
  theme = "dark",
}: ScrollytellingSectionProps) {
  const isDesktop = useMediaQuery("(min-width: 1024px)", true);
  const bgColor = theme === "light" ? "#FBFBF5" : "#101010";
  const isLightTheme = theme === "light";

  /* ── Mobile: stacked cards ── */
  if (!isDesktop) {
    return (
      <section
        id={sectionId}
        className="relative"
        style={isLightTheme ? {
          backgroundColor: bgColor,
          borderRadius: "1.5rem",
        } : undefined}
      >
        {heroImage && (
          <MobileCard
            sectionNumber={sectionNumber}
            title={title || ""}
            description={description || ""}
            sectionLabel={sectionLabel}
            theme={theme}
          >
            <MobileHeroImage heroImage={heroImage} />
          </MobileCard>
        )}

        {steps.map((step) => (
          <MobileCard
            key={step.id}
            id={step.id}
            sectionNumber={sectionNumber}
            suffix={step.suffix}
            title={step.title || title || ""}
            description={step.description || description || ""}
            sectionLabel={sectionLabel}
            learnMoreUrl={step.learnMoreUrl}
            theme={theme}
          >
            {!step.sameAsHero && step.content ? (
              <div style={{ padding: "1.5rem 0 0.5rem" }}>{step.content}</div>
            ) : null}
          </MobileCard>
        ))}
      </section>
    );
  }

  /* Is this a full-bleed ReactNode hero (like MacOSDock)?
     Explicit heroLayout overrides the auto-detection. */
  const isFullBleedHero =
    heroLayout === "fullbleed"
      ? true
      : heroLayout === "contained"
        ? false
        : typeof heroImage !== "string";

  /* ── Desktop: full-width vertical scroll ── */
  return (
    <section
      id={sectionId}
      className="relative"
      style={isLightTheme ? {
        backgroundColor: bgColor,
        borderRadius: "1.5rem",
      } : undefined}
    >
      {/* Hero block — editorial text + hero visual (skip if no heroImage) */}
      {heroImage && (isFullBleedHero ? (
        /* Full-bleed hero: ReactNode renders as absolute background, text overlays */
        <div
          style={{
            position: "relative",
            minHeight: heroMinHeight || "100vh",
            backgroundColor: bgColor,
            overflow: "hidden",
          }}
        >
          {/* Background — fills the entire block */}
          {heroImage}
          {/* Editorial text overlaid on top */}
          <div style={{ position: "relative", zIndex: 1, maxWidth: "1200px", margin: "0 auto" }}>
            <EditorialText
              sectionNumber={sectionNumber}
              title={title || ""}
              description={description || ""}
              ctaContent={ctaContent}
              sectionLabel={sectionLabel}
              theme={theme}
            />
          </div>
        </div>
      ) : (
        /* Image hero: text above, image below */
        <div
          style={{
            backgroundColor: bgColor,
          }}
        >
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <EditorialText
              sectionNumber={sectionNumber}
              title={title || ""}
              description={description || ""}
              ctaContent={ctaContent}
              sectionLabel={sectionLabel}
              theme={theme}
            />
            <div style={{ padding: heroFullWidth ? "0 0 3rem 2rem" : "0 2rem 3rem 2rem" }}>
              <HeroContent heroImage={heroImage} heroGradient={heroGradient} theme={theme} />
            </div>
          </div>
        </div>
      ))}

      {/* Step blocks — each with its own text + content, fade in on scroll */}
      {steps.map((step) => (
        <DesktopStepBlock
          key={step.id}
          id={step.id}
          sectionNumber={sectionNumber}
          suffix={step.suffix}
          title={step.title || title || ""}
          description={step.description || description || ""}
          learnMoreUrl={step.learnMoreUrl}
          theme={theme}
        >
          {step.sameAsHero && heroImage ? (
            /* sameAsHero: repeat the hero visual */
            <HeroContent heroImage={heroImage} heroGradient={heroGradient} theme={theme} />
          ) : (
            step.content
          )}
        </DesktopStepBlock>
      ))}

    </section>
  );
}
