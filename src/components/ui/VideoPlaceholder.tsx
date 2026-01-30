"use client";

import { cn } from "@/lib/utils";
import { PlayCircle } from "lucide-react";

interface VideoPlaceholderProps {
  label?: string;
  className?: string;
}

export function VideoPlaceholder({
  label = "Video",
  className,
}: VideoPlaceholderProps) {
  return (
    <div
      className={cn(
        "relative flex aspect-video w-full items-center justify-center rounded-xl border border-zinc-700 bg-zinc-800/50",
        className
      )}
    >
      <div className="flex flex-col items-center gap-4 text-zinc-400">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-zinc-700/50 transition-colors hover:bg-zinc-700">
          <PlayCircle className="h-12 w-12" />
        </div>
        <span className="text-sm font-medium">{label}</span>
      </div>
      {/* YouTube-style UI decoration */}
      <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2">
        <div className="h-1 flex-1 rounded-full bg-zinc-700">
          <div className="h-full w-0 rounded-full bg-red-500" />
        </div>
        <span className="text-xs text-zinc-500">0:00</span>
      </div>
    </div>
  );
}
