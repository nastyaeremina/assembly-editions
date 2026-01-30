"use client";

import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "new" | "beta" | "coming-soon";
  className?: string;
}

const variantClasses = {
  default: "bg-zinc-700 text-zinc-200",
  new: "bg-[#BCE7F4] text-zinc-900",
  beta: "bg-amber-500/20 text-amber-400 border border-amber-500/30",
  "coming-soon": "bg-purple-500/20 text-purple-400 border border-purple-500/30",
};

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
        variantClasses[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
