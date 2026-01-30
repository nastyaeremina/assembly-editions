"use client";

import { cn } from "@/lib/utils";
import { Badge } from "./Badge";
import { MediaPlaceholder } from "./MediaPlaceholder";

interface FeatureCardProps {
  title: string;
  description: string;
  mediaLabel?: string;
  badge?: string;
  badgeVariant?: "default" | "new" | "beta" | "coming-soon";
  className?: string;
  layout?: "vertical" | "horizontal";
}

export function FeatureCard({
  title,
  description,
  mediaLabel,
  badge,
  badgeVariant = "new",
  className,
  layout = "vertical",
}: FeatureCardProps) {
  if (layout === "horizontal") {
    return (
      <div
        className={cn(
          "group grid gap-6 rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 transition-colors hover:border-zinc-700 md:grid-cols-2 md:gap-8",
          className
        )}
      >
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-3">
            <h3 className="text-xl font-semibold text-zinc-100">{title}</h3>
            {badge && <Badge variant={badgeVariant}>{badge}</Badge>}
          </div>
          <p className="mt-3 text-zinc-400 leading-relaxed">{description}</p>
        </div>
        {mediaLabel && (
          <MediaPlaceholder
            label={mediaLabel}
            aspectRatio="16:9"
            className="order-first md:order-last"
          />
        )}
      </div>
    );
  }

  return (
    <div
      className={cn(
        "group flex flex-col rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 transition-colors hover:border-zinc-700",
        className
      )}
    >
      {mediaLabel && (
        <MediaPlaceholder
          label={mediaLabel}
          aspectRatio="16:9"
          className="mb-5"
        />
      )}
      <div className="flex items-center gap-3">
        <h3 className="text-lg font-semibold text-zinc-100">{title}</h3>
        {badge && <Badge variant={badgeVariant}>{badge}</Badge>}
      </div>
      <p className="mt-2 text-sm text-zinc-400 leading-relaxed">{description}</p>
    </div>
  );
}
