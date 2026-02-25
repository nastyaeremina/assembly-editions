"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface MacOSDockProps {
  className?: string;
}

interface DockIconProps {
  children: React.ReactNode;
  mouseX: ReturnType<typeof useMotionValue<number>>;
  label: string;
  hasIndicator?: boolean;
}

function DockIcon({ children, mouseX, label, hasIndicator }: DockIconProps) {
  const ref = useRef<HTMLDivElement>(null);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthSync = useTransform(distance, [-200, 0, 200], [96, 124, 96]);
  const width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

  const ySync = useTransform(distance, [-200, 0, 200], [0, -16, 0]);
  const y = useSpring(ySync, { mass: 0.1, stiffness: 150, damping: 12 });

  return (
    <motion.div
      ref={ref}
      style={{ width, y }}
      className="group relative aspect-square"
    >
      <div className="relative h-full w-full">
        {children}
        {/* Tooltip */}
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
          <div className="bg-zinc-800/95 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-md whitespace-nowrap border border-zinc-700/50 shadow-lg">
            {label}
          </div>
        </div>
        {/* Active indicator dot */}
        {hasIndicator && (
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-1 w-1 rounded-full bg-white/60" />
        )}
      </div>
    </motion.div>
  );
}

export function MacOSDock({ className }: MacOSDockProps) {
  const mouseX = useMotionValue(Infinity);

  const icons = [
    {
      label: "Mail",
      hasIndicator: true,
      src: "/Icons/_System App Icon.svg",
    },
    {
      label: "Safari",
      hasIndicator: true,
      src: "/Icons/_System App Icon-1.svg",
    },
    {
      label: "Folder",
      hasIndicator: true,
      src: "/Icons/_System App Icon copy.svg",
    },
    {
      label: "Assembly",
      hasIndicator: true,
      src: "/Icons/_System App Icon-2.svg",
    },
    {
      label: "Notes",
      hasIndicator: false,
      src: "/Icons/_System App Icon-1 copy.svg",
    },
    {
      label: "Music",
      hasIndicator: false,
      src: "/Icons/Bitmap.svg",
    },
    {
      label: "FaceTime",
      hasIndicator: false,
      src: "/Icons/Bitmap copy.svg",
    },
  ];

  return (
    <div className={cn("w-full", className)}>
      {/* Fixed height container to prevent parent expansion on hover */}
      <div className="h-[140px] flex items-end pb-2 w-full">
        <motion.div
          onMouseMove={(e) => mouseX.set(e.pageX)}
          onMouseLeave={() => mouseX.set(Infinity)}
          className="flex items-end gap-3 rounded-2xl bg-zinc-800/90 backdrop-blur-xl px-4 py-3 border border-zinc-700/50 shadow-2xl w-full justify-between"
        >
        {icons.map((icon) => (
          <DockIcon
            key={icon.label}
            mouseX={mouseX}
            label={icon.label}
            hasIndicator={icon.hasIndicator}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={icon.src}
              alt={icon.label}
              className="h-full w-full rounded-[14px] object-cover"
              draggable={false}
            />
          </DockIcon>
        ))}
        </motion.div>
      </div>
    </div>
  );
}
