"use client";

import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  compact?: boolean;
  className?: string;
}

export function SectionHeading({
  title,
  subtitle,
  align = "left",
  compact = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        compact ? "mb-8 sm:mb-12" : "mb-10 sm:mb-16",
        align === "center" && "text-center",
        className
      )}
    >
      <h2
        className={cn(
          compact
            ? "text-2xl sm:text-3xl lg:text-[2rem]"
            : "text-3xl sm:text-4xl lg:text-5xl"
        )}
        style={{
          fontWeight: 600,
          lineHeight: 1.15,
          letterSpacing: "-0.03em",
          color: "var(--swatch-1)",
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "max-w-3xl",
            compact
              ? "mt-2 sm:mt-3 text-sm sm:text-base"
              : "mt-3 sm:mt-4 text-base sm:text-lg"
          )}
          style={{
            fontWeight: 600,
            lineHeight: 1.2,
            color: "var(--swatch-2)",
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
