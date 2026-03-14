"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { useMediaQuery } from "../../hooks/useMediaQuery";

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
}) {
  const isLight = theme === "light";
  const titleColor = isLight ? "#101010" : "#fff";
  const bodyColor = isLight ? "#404040" : "rgba(255, 255, 255, 0.82)";
  const linkColor = isLight ? "#101010" : "rgba(255, 255, 255, 0.85)";
  const linkHoverColor = isLight ? "#101010" : "#fff";

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
          fontSize: "clamp(1.5rem, 2.5vw, 1.9rem)",
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
            gap: "0.4rem",
            marginTop: "0.95rem",
            paddingBottom: "0.3rem",
            borderBottom: `2px solid ${linkColor}`,
            fontFamily: "'PP Mori', var(--font-sans, system-ui, sans-serif)",
            fontWeight: 600,
            fontSize: "0.95rem",
            letterSpacing: "0",
            textTransform: "none",
            color: linkColor,
            textDecoration: "none",
            transition: "color 0.2s ease, border-color 0.2s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = linkHoverColor;
            e.currentTarget.style.borderBottomColor = linkHoverColor;
            const arrow = e.currentTarget.querySelector(".learn-more-arrow");
            if (arrow) arrow.style.transform = "translateX(3px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = linkColor;
            e.currentTarget.style.borderBottomColor = linkColor;
            const arrow = e.currentTarget.querySelector(".learn-more-arrow");
            if (arrow) arrow.style.transform = "translateX(0)";
          }}
        >
          Learn more
          <span
            className="learn-more-arrow"
            style={{
              display: "inline-block",
              transition: "transform 0.25s cubic-bezier(0.25, 0.1, 0.25, 1)",
            }}
          >
            →
          </span>
        </a>
      )}
      {ctaContent && <div style={{ marginTop: "1.5rem" }}>{ctaContent}</div>}
    </div>
  );
}

function DesktopStepBlock({
  id,
  sectionNumber,
  suffix,
  title,
  description,
  children,
  learnMoreUrl,
  theme = "dark",
}) {
  const ref = useRef(null);
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
        <EditorialText
          sectionNumber={sectionNumber}
          suffix={suffix}
          title={title}
          description={description}
          hideLabel
          learnMoreUrl={learnMoreUrl}
          theme={theme}
        />

        {children && (
          <div style={{ padding: "0 2rem 5rem 2rem" }}>
            {children}
          </div>
        )}
      </div>
    </div>
  );
}

function HeroContent({ heroImage, heroGradient, theme = "dark" }) {
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

function MobileCard({
  id,
  sectionNumber,
  suffix,
  title,
  description,
  children,
  sectionLabel,
  learnMoreUrl,
  learnMoreText,
  theme = "dark",
}) {
  const isLight = theme === "light";
  const bgColor = isLight ? "#FBFBF5" : "#101010";
  const titleColor = isLight ? "#101010" : "#fff";
  const bodyColor = isLight ? "#404040" : "rgba(255, 255, 255, 0.82)";
  const linkColor = isLight ? "#101010" : "rgba(255, 255, 255, 0.85)";

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
          fontSize: "1.425rem",
          lineHeight: 1.2,
          letterSpacing: "-0.02em",
          color: titleColor,
          margin: "0 0 0.95rem 0",
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
          margin: "0 0 0.95rem 0",
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
            gap: "0.4rem",
            marginBottom: "1rem",
            paddingBottom: "0.3rem",
            borderBottom: `2px solid ${linkColor}`,
            fontFamily: "'PP Mori', var(--font-sans, system-ui, sans-serif)",
            fontWeight: 600,
            fontSize: "0.95rem",
            letterSpacing: "0",
            textTransform: "none",
            color: linkColor,
            textDecoration: "none",
            transition: "color 0.2s ease, border-color 0.2s ease",
          }}
          onMouseEnter={(e) => {
            const hoverColor = isLight ? "#101010" : "#fff";
            e.currentTarget.style.color = hoverColor;
            e.currentTarget.style.borderBottomColor = hoverColor;
            const arrow = e.currentTarget.querySelector(".learn-more-arrow");
            if (arrow) arrow.style.transform = "translateX(3px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = linkColor;
            e.currentTarget.style.borderBottomColor = linkColor;
            const arrow = e.currentTarget.querySelector(".learn-more-arrow");
            if (arrow) arrow.style.transform = "translateX(0)";
          }}
        >
          {learnMoreText || "Learn more"}
          <span
            className="learn-more-arrow"
            style={{
              display: "inline-block",
              transition: "transform 0.25s cubic-bezier(0.25, 0.1, 0.25, 1)",
            }}
          >
            →
          </span>
        </a>
      )}
      {children}
    </div>
  );
}

function MobileHeroImage({ heroImage }) {
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
  ctaUrl,
  ctaText,
  heroLayout,
  heroMinHeight,
  heroFullWidth,
  sectionLabel,
  theme = "dark",
}) {
  const isDesktop = useMediaQuery("(min-width: 1024px)", true);
  const bgColor = theme === "light" ? "#FBFBF5" : "#101010";
  const isLightTheme = theme === "light";

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
            learnMoreUrl={ctaUrl}
            learnMoreText={ctaText}
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

  const isFullBleedHero =
    heroLayout === "fullbleed"
      ? true
      : heroLayout === "contained"
        ? false
        : typeof heroImage !== "string";

  return (
    <section
      id={sectionId}
      className="relative"
      style={isLightTheme ? {
        backgroundColor: bgColor,
        borderRadius: "1.5rem",
      } : undefined}
    >
      {heroImage && (isFullBleedHero ? (
        <div
          style={{
            position: "relative",
            minHeight: heroMinHeight || "100vh",
            backgroundColor: bgColor,
            overflow: "hidden",
          }}
        >
          {heroImage}
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
            <HeroContent heroImage={heroImage} heroGradient={heroGradient} theme={theme} />
          ) : (
            step.content
          )}
        </DesktopStepBlock>
      ))}
    </section>
  );
}
