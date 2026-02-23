"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface NarrativeStep {
  /** Scroll progress range [start, end] where this step is visible (0–1) */
  range: [number, number];
  title: string;
  description: string;
}

interface SplitScreenWrapperProps {
  /** Narrative steps shown on the sticky left panel (desktop only) */
  narrativeSteps: NarrativeStep[];
  /** The scrollable content (feature cards) */
  children: React.ReactNode;
  className?: string;
}

function NarrativePanel({
  step,
  scrollYProgress,
}: {
  step: NarrativeStep;
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const opacity = useTransform(
    scrollYProgress,
    [
      Math.max(0, step.range[0] - 0.05),
      step.range[0],
      step.range[1],
      Math.min(1, step.range[1] + 0.05),
    ],
    [0, 1, 1, 0]
  );

  const y = useTransform(
    scrollYProgress,
    [
      Math.max(0, step.range[0] - 0.05),
      step.range[0],
      step.range[1],
      Math.min(1, step.range[1] + 0.05),
    ],
    [8, 0, 0, -8]
  );

  return (
    <motion.div
      className="absolute inset-0 flex flex-col justify-center"
      style={{ opacity, y }}
    >
      <h3 className="text-2xl font-semibold text-zinc-100 sm:text-3xl">
        {step.title}
      </h3>
      <p className="mt-4 text-zinc-400 leading-relaxed text-lg">
        {step.description}
      </p>
    </motion.div>
  );
}

/**
 * SplitScreenWrapper adds a sticky narrative sidebar on the LEFT of its
 * children on `lg+` screens. On smaller screens, only the children render
 * (narrative is hidden). The children are rendered once — no duplication.
 *
 * Usage:
 *   <SplitScreenWrapper narrativeSteps={[...]}>
 *     <ClientExperienceSection />
 *   </SplitScreenWrapper>
 */
export function SplitScreenWrapper({
  narrativeSteps,
  children,
  className,
}: SplitScreenWrapperProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={containerRef} className={`relative ${className ?? ""}`}>
      {/* Narrative sidebar — only visible on lg+ */}
      <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-[28%] z-10 pointer-events-none">
        <div className="sticky top-32 h-[60vh] px-6 xl:pl-[max(1.5rem,calc((100vw-80rem)/2+1.5rem))]">
          <div className="relative h-full">
            {narrativeSteps.map((step, i) => (
              <NarrativePanel
                key={i}
                step={step}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Main content — full width */}
      <div>
        {children}
      </div>
    </div>
  );
}
