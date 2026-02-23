"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

interface Stat {
  value: string;
  label: string;
}

interface CustomerStoryCardProps {
  /** Company logo — pass an <Image /> or <svg> */
  logo?: React.ReactNode;
  /** Headline / customer story title */
  headline: string;
  /** 2–4 key metrics */
  stats?: Stat[];
  /** Optional customer photo */
  image?: {
    src: string;
    alt: string;
  };
  /** Card layout variant */
  variant?: "large" | "horizontal" | "compact";
  /** Show the stats row */
  showStats?: boolean;
  /** Optional link href */
  href?: string;
  className?: string;
}

function StatItem({ value, label }: Stat) {
  return (
    <div className="flex flex-col gap-1">
      <span
        className="text-xl font-semibold sm:text-2xl"
        style={{
          color: "var(--swatch-1)",
          letterSpacing: "-0.03em",
          lineHeight: 1.1,
        }}
      >
        {value}
      </span>
      <span
        className="text-xs sm:text-sm"
        style={{
          color: "var(--swatch-4)",
          fontWeight: 500,
          letterSpacing: "-0.01em",
        }}
      >
        {label}
      </span>
    </div>
  );
}

function StatsRow({ stats }: { stats: Stat[] }) {
  return (
    <div className="flex items-start gap-6 sm:gap-8">
      {stats.map((stat, i) => (
        <StatItem key={i} value={stat.value} label={stat.label} />
      ))}
    </div>
  );
}

/** Large vertical card — hero image on top, content below */
function LargeVariant({
  logo,
  headline,
  stats,
  image,
  showStats,
  href,
  className,
}: Omit<CustomerStoryCardProps, "variant">) {
  return (
    <motion.div
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card/50",
        "transition-[border-color,background-color,box-shadow] duration-150 ease-out",
        "hover:border-border-hover hover:bg-card/80 hover:shadow-xl hover:shadow-black/20",
        className
      )}
      whileHover={{ y: -4 }}
      transition={{ type: "tween", duration: 0.15, ease: "easeOut" }}
    >
      {/* Image */}
      {image && (
        <div className="relative aspect-[16/10] w-full overflow-hidden">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />
        </div>
      )}

      {/* Content */}
      <div className="flex flex-1 flex-col gap-5 p-5 sm:p-6">
        {/* Logo + arrow */}
        <div className="flex items-center justify-between">
          {logo && <div className="flex items-center">{logo}</div>}
          {href && (
            <div
              className="flex h-7 w-7 items-center justify-center rounded-full transition-colors"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.06)" }}
            >
              <ArrowUpRight
                className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                style={{ color: "var(--swatch-3)" }}
              />
            </div>
          )}
        </div>

        {/* Headline */}
        <h3
          className="text-base font-semibold leading-snug sm:text-lg"
          style={{
            color: "var(--swatch-1)",
            letterSpacing: "-0.02em",
            lineHeight: 1.25,
          }}
        >
          {headline}
        </h3>

        {/* Stats */}
        {showStats && stats && stats.length > 0 && (
          <div className="mt-auto pt-2">
            <StatsRow stats={stats} />
          </div>
        )}
      </div>
    </motion.div>
  );
}

/** Horizontal split — text/stats left, image right */
function HorizontalVariant({
  logo,
  headline,
  stats,
  image,
  showStats,
  href,
  className,
}: Omit<CustomerStoryCardProps, "variant">) {
  return (
    <motion.div
      className={cn(
        "group relative grid overflow-hidden rounded-2xl border border-border bg-card/50",
        "transition-[border-color,background-color,box-shadow] duration-150 ease-out",
        "hover:border-border-hover hover:bg-card/80 hover:shadow-xl hover:shadow-black/20",
        image ? "grid-cols-1 md:grid-cols-[1fr_auto]" : "grid-cols-1",
        className
      )}
      whileHover={{ y: -4 }}
      transition={{ type: "tween", duration: 0.15, ease: "easeOut" }}
    >
      {/* Content — left side */}
      <div className="flex flex-col gap-4 p-5 sm:gap-5 sm:p-6">
        {/* Logo + arrow */}
        <div className="flex items-center justify-between">
          {logo && <div className="flex items-center">{logo}</div>}
          {href && (
            <div
              className="flex h-7 w-7 items-center justify-center rounded-full transition-colors md:hidden"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.06)" }}
            >
              <ArrowUpRight
                className="h-3.5 w-3.5"
                style={{ color: "var(--swatch-3)" }}
              />
            </div>
          )}
        </div>

        {/* Headline */}
        <h3
          className="text-base font-semibold sm:text-lg"
          style={{
            color: "var(--swatch-1)",
            letterSpacing: "-0.02em",
            lineHeight: 1.25,
          }}
        >
          {headline}
        </h3>

        {/* Stats */}
        {showStats && stats && stats.length > 0 && (
          <div className="mt-auto pt-1">
            <StatsRow stats={stats} />
          </div>
        )}
      </div>

      {/* Image — right side */}
      {image && (
        <div className="relative hidden aspect-[3/4] w-48 overflow-hidden md:block lg:w-56">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />
          {/* Arrow overlay on image */}
          {href && (
            <div
              className="absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-full backdrop-blur-sm transition-colors"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
            >
              <ArrowUpRight
                className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                style={{ color: "rgba(255, 255, 255, 0.8)" }}
              />
            </div>
          )}
        </div>
      )}
    </motion.div>
  );
}

/** Compact card — smaller, tighter spacing */
function CompactVariant({
  logo,
  headline,
  stats,
  image,
  showStats,
  href,
  className,
}: Omit<CustomerStoryCardProps, "variant">) {
  return (
    <motion.div
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card/50",
        "transition-[border-color,background-color,box-shadow] duration-150 ease-out",
        "hover:border-border-hover hover:bg-card/80 hover:shadow-xl hover:shadow-black/20",
        className
      )}
      whileHover={{ y: -3 }}
      transition={{ type: "tween", duration: 0.15, ease: "easeOut" }}
    >
      {/* Image — smaller aspect ratio */}
      {image && (
        <div className="relative aspect-[4/3] w-full overflow-hidden">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />
        </div>
      )}

      {/* Content */}
      <div className="flex flex-1 flex-col gap-3 p-4 sm:p-5">
        {/* Logo row */}
        <div className="flex items-center justify-between">
          {logo && <div className="flex items-center">{logo}</div>}
          {href && (
            <div
              className="flex h-6 w-6 items-center justify-center rounded-full transition-colors"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.06)" }}
            >
              <ArrowUpRight
                className="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                style={{ color: "var(--swatch-3)" }}
              />
            </div>
          )}
        </div>

        {/* Headline */}
        <h3
          className="text-sm font-semibold sm:text-base"
          style={{
            color: "var(--swatch-1)",
            letterSpacing: "-0.02em",
            lineHeight: 1.3,
          }}
        >
          {headline}
        </h3>

        {/* Stats — compact sizing */}
        {showStats && stats && stats.length > 0 && (
          <div className="mt-auto flex items-start gap-4 pt-1 sm:gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col gap-0.5">
                <span
                  className="text-lg font-semibold sm:text-xl"
                  style={{
                    color: "var(--swatch-1)",
                    letterSpacing: "-0.03em",
                    lineHeight: 1.1,
                  }}
                >
                  {stat.value}
                </span>
                <span
                  className="text-[11px] sm:text-xs"
                  style={{
                    color: "var(--swatch-4)",
                    fontWeight: 500,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

export function CustomerStoryCard({
  variant = "large",
  showStats = true,
  ...props
}: CustomerStoryCardProps) {
  const Wrapper = props.href ? "a" : "div";
  const wrapperProps = props.href
    ? { href: props.href, target: "_blank" as const, rel: "noopener noreferrer" }
    : {};

  const content = (() => {
    switch (variant) {
      case "horizontal":
        return <HorizontalVariant showStats={showStats} {...props} />;
      case "compact":
        return <CompactVariant showStats={showStats} {...props} />;
      case "large":
      default:
        return <LargeVariant showStats={showStats} {...props} />;
    }
  })();

  if (props.href) {
    return (
      <a
        href={props.href}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        {content}
      </a>
    );
  }

  return content;
}
