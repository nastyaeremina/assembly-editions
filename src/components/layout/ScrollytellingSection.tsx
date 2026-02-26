"use client";

import { useRef } from "react";
import { useScrollytelling } from "@/hooks/useScrollytelling";
import { EditorialRail } from "./EditorialSplit";

/* ────────────────────────────────────────────────────────────
   SCROLLYTELLING SECTION
   Sticky-stage scroll pattern:
   – The editorial grid pins to the viewport
   – Invisible scroll height drives step progression
   – Right stage crossfades between hero → A → B → …
   ──────────────────────────────────────────────────────────── */

export interface ScrollytellingStep {
  id: string;
  suffix: string; // "A", "B", "C"
  title?: string; // Override rail title for this step
  description?: string; // Override rail description for this step
  content: React.ReactNode;
}

interface ScrollytellingSectionProps {
  sectionId: string;
  title: string;
  description: string;
  sectionNumber: string;
  heroImage: string;
  steps: ScrollytellingStep[];
  heroGradient?: boolean;
}

export function ScrollytellingSection({
  sectionId,
  title,
  description,
  sectionNumber,
  heroImage,
  steps,
  heroGradient = true,
}: ScrollytellingSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const totalSteps = steps.length + 1; // +1 for hero
  const { activeStep } = useScrollytelling(sectionRef, totalSteps);

  return (
    <section
      ref={sectionRef}
      id={sectionId}
      className="relative"
    >
      {/* ── Sticky viewport ── */}
      <div
        className="sticky top-0 grid grid-cols-1 lg:grid-cols-[minmax(300px,30%)_1fr]"
        style={{ height: "100vh", width: "100vw", overflow: "hidden" }}
      >
        {/* Left rail — title/description update based on activeStep */}
        <EditorialRail
          title={activeStep > 0 && steps[activeStep - 1]?.title ? steps[activeStep - 1].title! : title}
          description={activeStep > 0 && steps[activeStep - 1]?.description ? steps[activeStep - 1].description! : description}
          sectionNumber={sectionNumber}
          subsectionSuffix={activeStep > 0 ? steps[activeStep - 1]?.suffix : undefined}
        />

        {/* Right stage — crossfade between steps */}
        <div style={{ position: "relative", backgroundColor: "#101010", overflow: "hidden" }}>
          {/* Step 0: Hero image */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              opacity: activeStep === 0 ? 1 : 0,
              transition: "opacity 0.5s ease",
              pointerEvents: activeStep === 0 ? "auto" : "none",
            }}
          >
            <img
              src={heroImage}
              alt=""
              aria-hidden="true"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center 30%",
                display: "block",
              }}
            />
            {/* Soft gradient fade at top edge for smoother transition */}
            {heroGradient && (
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "15%",
                  background: "linear-gradient(to bottom, #101010 0%, transparent 100%)",
                  pointerEvents: "none",
                }}
              />
            )}
          </div>

          {/* Steps 1..N: subsection content */}
          {steps.map((step, i) => (
            <div
              key={step.id}
              id={step.id}
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                padding: "3rem 2rem",
                opacity: activeStep === i + 1 ? 1 : 0,
                transition: "opacity 0.5s ease",
                pointerEvents: activeStep === i + 1 ? "auto" : "none",
              }}
            >
              {step.content}
            </div>
          ))}
        </div>
      </div>

      {/* ── Scroll spacer — drives step progression ──
           The sticky div already occupies 1×100vh in flow.
           We need (totalSteps - 1) more viewports of scroll distance. */}
      <div style={{ height: `${(totalSteps - 1) * 100}vh` }} aria-hidden="true" />
    </section>
  );
}
