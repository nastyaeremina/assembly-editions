"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ScreenshotDisplayProps {
  src: string;
  alt: string;
  className?: string;
}

export function ScreenshotDisplay({
  src,
  alt,
  className,
}: ScreenshotDisplayProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      className={cn(
        "relative overflow-hidden rounded-xl border border-zinc-700 bg-zinc-800 shadow-lg",
        className
      )}
    >
      {/* Browser chrome */}
      <div className="flex items-center gap-2 border-b border-zinc-700 bg-zinc-800 px-4 py-3">
        <div className="flex gap-1.5">
          <div className="h-3 w-3 rounded-full bg-zinc-600" />
          <div className="h-3 w-3 rounded-full bg-zinc-600" />
          <div className="h-3 w-3 rounded-full bg-zinc-600" />
        </div>
        <div className="ml-4 flex-1">
          <div className="mx-auto max-w-md rounded-md bg-zinc-900 px-3 py-1 text-xs text-zinc-500 border border-zinc-700">
            dashboard.assembly.com
          </div>
        </div>
      </div>

      {/* Screenshot */}
      <div className="relative">
        <Image
          src={src}
          alt={alt}
          width={1200}
          height={800}
          className="w-full h-auto"
          priority
        />
      </div>
    </motion.div>
  );
}
