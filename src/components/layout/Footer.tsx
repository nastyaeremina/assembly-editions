"use client";

import { cn } from "@/lib/utils";

interface FooterProps {
  className?: string;
}

export function Footer({ className }: FooterProps) {
  return (
    <footer
      className={cn(
        "border-t border-zinc-800 bg-zinc-900/50 py-12",
        className
      )}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="text-lg font-semibold text-zinc-100">Assembly</span>
            <span className="rounded bg-[#BCE7F4] px-1.5 py-0.5 text-xs font-bold text-zinc-900">
              2.0
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm text-zinc-400">
            <a
              href="https://www.assembly.com"
              target="_blank"
              rel="noopener"
              className="transition-colors hover:text-zinc-100"
            >
              Website
            </a>
            <a
              href="https://www.assembly.com/brand"
              target="_blank"
              rel="noopener"
              className="transition-colors hover:text-zinc-100"
            >
              Brand
            </a>
            <a
              href="#"
              className="transition-colors hover:text-zinc-100"
            >
              Documentation
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-zinc-500">
            &copy; {new Date().getFullYear()} Assembly Platforms Inc.
          </p>
        </div>
      </div>
    </footer>
  );
}
