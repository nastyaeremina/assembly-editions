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
          "group grid gap-6 rounded-2xl border border-border bg-card/50 p-6 transition-colors hover:border-border-hover md:grid-cols-2 md:gap-8",
          className
        )}
      >
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-3">
            <h3 className="text-xl font-semibold text-heading">{title}</h3>
            {badge && <Badge variant={badgeVariant}>{badge}</Badge>}
          </div>
          <p className="mt-3 text-muted leading-relaxed">{description}</p>
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
        "group flex flex-col rounded-2xl border border-border bg-card/50 p-6 transition-colors hover:border-border-hover",
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
        <h3 className="text-lg font-semibold text-heading">{title}</h3>
        {badge && <Badge variant={badgeVariant}>{badge}</Badge>}
      </div>
      <p className="mt-2 text-sm text-muted leading-relaxed">{description}</p>
    </div>
  );
}
