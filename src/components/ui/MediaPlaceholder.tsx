"use client";

import { cn } from "@/lib/utils";
import { ImageIcon } from "lucide-react";

interface MediaPlaceholderProps {
  label: string;
  aspectRatio?: "16:9" | "4:3" | "1:1" | "auto";
  size?: "sm" | "md" | "lg" | "full";
  className?: string;
}

const aspectRatioClasses = {
  "16:9": "aspect-video",
  "4:3": "aspect-[4/3]",
  "1:1": "aspect-square",
  auto: "",
};

const sizeClasses = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-2xl",
  full: "w-full",
};

export function MediaPlaceholder({
  label,
  aspectRatio = "16:9",
  size = "full",
  className,
}: MediaPlaceholderProps) {
  return (
    <div
      className={cn(
        "relative flex items-center justify-center rounded-xl border border-zinc-700 bg-zinc-800/50",
        aspectRatioClasses[aspectRatio],
        sizeClasses[size],
        aspectRatio === "auto" && "min-h-[200px]",
        className
      )}
    >
      <div className="flex flex-col items-center gap-3 text-zinc-500">
        <ImageIcon className="h-10 w-10" />
        <span className="px-4 text-center text-sm font-medium">{label}</span>
      </div>
    </div>
  );
}
