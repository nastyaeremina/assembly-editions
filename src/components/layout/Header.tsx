"use client";

import { cn } from "@/lib/utils";

interface HeaderProps {
  className?: string;
}

export function Header({ className }: HeaderProps) {
  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 border-b border-zinc-800/50 bg-[#101010]/80 backdrop-blur-md",
        className
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <span className="text-xl font-semibold text-zinc-100">Assembly</span>
          <span className="rounded bg-[#BCE7F4] px-1.5 py-0.5 text-xs font-bold text-zinc-900">
            2.0
          </span>
        </a>

        {/* CTA */}
        <div className="flex items-center gap-4">
          <a
            href="https://www.assembly.com"
            target="_blank"
            rel="noopener"
            className="inline-flex h-8 items-center justify-center rounded-lg px-3 text-sm font-medium text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-zinc-100"
          >
            Visit Assembly
          </a>
          <a
            href="https://www.assembly.com"
            target="_blank"
            rel="noopener"
            className="inline-flex h-8 items-center justify-center rounded-lg bg-[#BCE7F4] px-3 text-sm font-medium text-zinc-900 transition-colors hover:bg-[#8CD3E8]"
          >
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
}
