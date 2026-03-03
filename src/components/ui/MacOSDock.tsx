"use client";

import { useRef, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import { useMediaQuery } from "@/hooks/useMediaQuery";

interface MacOSDockProps {
  className?: string;
}

interface DockIconProps {
  children: React.ReactNode;
  mouseX: ReturnType<typeof useMotionValue<number>>;
  label: string;
  hasIndicator?: boolean;
  showTooltip?: boolean;
}

function DockIcon({ children, mouseX, label, hasIndicator, showTooltip = true }: DockIconProps) {
  const ref = useRef<HTMLDivElement>(null);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const ySync = useTransform(distance, [-180, 0, 180], [0, -14, 0]);
  const y = useSpring(ySync, { mass: 0.1, stiffness: 150, damping: 12 });

  return (
    <motion.div
      ref={ref}
      style={{ width: 72, y }}
      className="group relative aspect-square flex-shrink-0"
    >
      <div className="relative h-full w-full">
        {children}
        {/* Tooltip — only on desktop */}
        {showTooltip && (
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
            <div className="bg-zinc-800/95 backdrop-blur-sm text-white text-[10px] px-2 py-1 rounded-md whitespace-nowrap border border-zinc-700/50 shadow-lg">
              {label}
            </div>
          </div>
        )}
        {/* Active indicator dot */}
        {hasIndicator && (
          <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 h-[3px] w-[3px] rounded-full bg-white/60" />
        )}
      </div>
    </motion.div>
  );
}

/* ── Mobile dock icon — auto-animated via virtual cursor ── */
function MobileAutoIcon({
  children,
  hasIndicator,
  virtualCursorX,
  index,
  iconSize,
}: {
  children: React.ReactNode;
  hasIndicator?: boolean;
  virtualCursorX: ReturnType<typeof useMotionValue<number>>;
  index: number;
  iconSize: number;
}) {
  /* Centre of this icon in the dock's local coordinate space */
  const iconCentre = index * (iconSize + 2) + iconSize / 2 + 12; // 12 = dock padding-left

  const distance = useTransform(virtualCursorX, (val) => val - iconCentre);
  const ySync = useTransform(distance, [-140, 0, 140], [0, -10, 0]);
  const y = useSpring(ySync, { mass: 0.1, stiffness: 150, damping: 12 });

  return (
    <motion.div
      style={{ width: iconSize, y, flexShrink: 0 }}
      className="relative aspect-square"
    >
      {children}
      {hasIndicator && (
        <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 h-[3px] w-[3px] rounded-full bg-white/60" />
      )}
    </motion.div>
  );
}

/* ── Desktop folder icon ── */
function DesktopFolder({
  name,
  style,
}: {
  name?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      style={{
        position: "absolute",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "4px",
        ...style,
      }}
    >
      <svg width="48" height="40" viewBox="0 0 72 60" fill="none">
        {/* Folder back */}
        <rect x="0" y="8" width="72" height="52" rx="6" fill="#3B9FF5" />
        {/* Folder tab */}
        <path d="M0 10C0 6.686 2.686 4 6 4H24L30 12H66C69.314 12 72 14.686 72 18V52C72 55.314 69.314 58 66 58H6C2.686 58 0 55.314 0 52V10Z" fill="#4AB4FF" />
        {/* Folder front highlight */}
        <rect x="0" y="16" width="72" height="44" rx="4" fill="#5AC0FF" opacity="0.3" />
      </svg>
      {name && (
        <span
          style={{
            fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif",
            fontSize: "10px",
            color: "#fff",
            textShadow: "0 1px 3px rgba(0,0,0,0.7)",
            textAlign: "center",
            maxWidth: "80px",
            lineHeight: 1.2,
          }}
        >
          {name}
        </span>
      )}
    </div>
  );
}

/* ── Shared dock icons data ── */
const DOCK_ICONS = [
  { label: "Assembly", hasIndicator: false, src: "/dock-icons/swap.svg", padding: "7px" },
  { label: "Music", hasIndicator: false, src: "/dock-icons/Bitmap.svg" },
  { label: "Podcasts", hasIndicator: false, src: "/dock-icons/_System App Icon-13.svg" },
  { label: "Apple TV", hasIndicator: false, src: "/dock-icons/_System App Icon-12.svg" },
  { label: "Launchpad", hasIndicator: false, src: "/dock-icons/_System App Icon-11.svg" },
  { label: "Safari", hasIndicator: true, src: "/dock-icons/_System App Icon-10.svg" },
  { label: "Messages", hasIndicator: true, src: "/dock-icons/_System App Icon-9.svg" },
  { label: "Mail", hasIndicator: true, src: "/dock-icons/_System App Icon-8.svg" },
  { label: "Calendar", hasIndicator: false, src: "/dock-icons/_System App Icon-7.svg" },
  { label: "Contacts", hasIndicator: false, src: "/dock-icons/_System App Icon-6.svg" },
  { label: "Reminders", hasIndicator: true, src: "/dock-icons/_System App Icon-5.svg" },
  { label: "Notes", hasIndicator: false, src: "/dock-icons/_System App Icon-4.svg" },
  { label: "News", hasIndicator: false, src: "/dock-icons/_System App Icon-3.svg" },
  { label: "System Settings", hasIndicator: false, src: "/dock-icons/_System App Icon-2.svg" },
  { label: "TextEdit", hasIndicator: false, src: "/dock-icons/_System App Icon-1.svg" },
  { label: "Preview", hasIndicator: false, src: "/dock-icons/App Icon.svg" },
  { label: "Trash", hasIndicator: false, src: "/dock-icons/_System App Icon.svg" },
];

const DIVIDER_AFTER = 13;

/* Mobile: 7 hero icons for a fuller dock feel */
const MOBILE_ICONS = [
  DOCK_ICONS[0],  // Assembly
  DOCK_ICONS[5],  // Safari
  DOCK_ICONS[6],  // Messages
  DOCK_ICONS[7],  // Mail
  DOCK_ICONS[8],  // Calendar
  DOCK_ICONS[9],  // Contacts
  DOCK_ICONS[10], // Reminders
];

/**
 * Inline macOS desktop experience.
 * Desktop: hover-interactive dock inside a wallpaper card with scattered folders.
 * Mobile/Tablet: static dock icons, no background, no animation.
 */
export function MacOSDock({ className }: MacOSDockProps) {
  const mouseX = useMotionValue(Infinity);
  const dockRef = useRef<HTMLDivElement>(null);
  const isDesktop = useMediaQuery("(min-width: 1024px)", true);

  /* ── Mobile auto-animation hooks (must be before any conditional return) ── */
  const MOBILE_ICON_SIZE = 56;
  const virtualCursorX = useMotionValue(-200);
  const dockTotalWidth = DOCK_ICONS.length * (MOBILE_ICON_SIZE + 2) + 24; // 24 = padding

  useEffect(() => {
    if (isDesktop) return;
    let cancelled = false;
    let raf: number;

    const wait = (ms: number) =>
      new Promise<void>((resolve) => {
        const t = setTimeout(resolve, ms);
        if (cancelled) clearTimeout(t);
      });

    async function loop() {
      while (!cancelled) {
        /* Sweep right */
        const sweepDuration = 3000;
        const start = -100;
        const end = dockTotalWidth + 100;
        const t0 = performance.now();

        await new Promise<void>((resolve) => {
          function tick() {
            if (cancelled) { resolve(); return; }
            const elapsed = performance.now() - t0;
            const progress = Math.min(elapsed / sweepDuration, 1);
            /* ease-in-out */
            const ease = progress < 0.5
              ? 2 * progress * progress
              : 1 - Math.pow(-2 * progress + 2, 2) / 2;
            virtualCursorX.set(start + (end - start) * ease);
            if (progress < 1) {
              raf = requestAnimationFrame(tick);
            } else {
              resolve();
            }
          }
          raf = requestAnimationFrame(tick);
        });

        /* Park cursor off-screen and pause */
        virtualCursorX.set(-200);
        await wait(1500);
        if (cancelled) break;
      }
    }

    loop();
    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
    };
  }, [isDesktop, virtualCursorX, dockTotalWidth]);

  /* ── Desktop: bold floating dock, overflowing right edge ── */
  if (isDesktop) {
    return (
      <div
        className={cn(className)}
        style={{
          position: "relative",
          width: "100%",
          minHeight: "180px",
          /* clipPath clips the right overflow while keeping top open for tooltips */
          clipPath: "inset(-100px 0px -20px -100px)",
        }}
      >
        {/* Dock — scaled up, anchored left, overflows right */}
        <div
          style={{
            position: "relative",
            paddingTop: "24px",
            paddingBottom: "16px",
          }}
        >
          <motion.div
            ref={dockRef}
            onMouseMove={(e) => mouseX.set(e.pageX)}
            onMouseLeave={() => mouseX.set(Infinity)}
            className="flex items-end rounded-2xl bg-zinc-800 backdrop-blur-xl border border-zinc-600/30"
            style={{ padding: "10px 14px", gap: "2px", width: "max-content", boxShadow: "0 8px 32px rgba(0,0,0,0.25), 0 2px 8px rgba(0,0,0,0.15)" }}
          >
            {DOCK_ICONS.map((icon, i) => (
              <div key={icon.label + i} className="flex items-end">
                <DockIcon mouseX={mouseX} label={icon.label} hasIndicator={icon.hasIndicator} showTooltip={i < 11}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={icon.src} alt={icon.label} className="h-full w-full rounded-[11px] object-contain" style={icon.padding ? { padding: icon.padding } : undefined} draggable={false} />
                </DockIcon>
                {i === DIVIDER_AFTER && (
                  <div style={{ width: "1px", height: "60px", backgroundColor: "rgba(255,255,255,0.15)", margin: "0 6px", flexShrink: 0, alignSelf: "center" }} />
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    );
  }

  /* ── Mobile / Tablet: same full dock with auto-wave animation ── */
  return (
    <div
      className={cn(className)}
      style={{
        position: "relative",
        width: "100%",
        minHeight: "120px",
        /* clip left + right overflow but leave 40px room below for shadow */
        clipPath: "inset(-20px 0px -40px -20px)",
      }}
    >
      {/* Right-edge fade gradient */}
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          width: "120px",
          background: "linear-gradient(to right, rgba(251,251,245,0) 0%, rgba(251,251,245,0.55) 40%, rgba(251,251,245,1) 100%)",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "relative",
          paddingTop: "16px",
          paddingBottom: "12px",
        }}
      >
        <div
          className="flex items-end rounded-2xl bg-zinc-800 backdrop-blur-xl border border-zinc-600/30"
          style={{
            padding: "8px 12px",
            gap: "2px",
            width: "max-content",
            boxShadow: "0 8px 32px rgba(0,0,0,0.25), 0 2px 8px rgba(0,0,0,0.15)",
          }}
        >
          {DOCK_ICONS.map((icon, i) => (
            <div key={icon.label + i} className="flex items-end">
              <MobileAutoIcon
                virtualCursorX={virtualCursorX}
                index={i}
                iconSize={MOBILE_ICON_SIZE}
                hasIndicator={icon.hasIndicator}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={icon.src}
                  alt={icon.label}
                  className="h-full w-full rounded-[11px] object-contain"
                  style={icon.padding ? { padding: icon.padding } : undefined}
                  draggable={false}
                />
              </MobileAutoIcon>
              {i === DIVIDER_AFTER && (
                <div style={{ width: "1px", height: "46px", backgroundColor: "rgba(255,255,255,0.15)", margin: "0 5px", flexShrink: 0, alignSelf: "center" }} />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
