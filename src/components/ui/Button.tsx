"use client";

import { cn } from "@/lib/utils";
import { forwardRef, type ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900 disabled:pointer-events-none disabled:opacity-50",
          {
            "bg-[#BCE7F4] text-zinc-900 hover:bg-[#8CD3E8] focus-visible:ring-[#BCE7F4]":
              variant === "primary",
            "border border-zinc-600 bg-transparent text-zinc-100 hover:border-zinc-500 hover:bg-zinc-800 focus-visible:ring-zinc-500":
              variant === "secondary",
            "text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 focus-visible:ring-zinc-500":
              variant === "ghost",
          },
          {
            "h-8 px-3 text-sm": size === "sm",
            "h-10 px-5 text-sm": size === "md",
            "h-12 px-6 text-base": size === "lg",
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
