"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "../../lib/utils";
import { useMediaQuery } from "../../hooks/useMediaQuery";

function DockIcon({ children, mouseX, label, hasIndicator, showTooltip = true, onClick, isBouncing, isHero }) {
  const ref = useRef(null);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const ySync = useTransform(distance, [-180, 0, 180], [0, -14, 0]);
  const y = useSpring(ySync, { mass: 0.1, stiffness: 150, damping: 12 });

  const baseY = 0;

  return (
    <motion.div
      ref={ref}
      style={{ width: 72, y, cursor: "pointer" }}
      className="group relative aspect-square flex-shrink-0"
      onClick={onClick}
    >
      <motion.div
        className="relative h-full w-full"
        animate={
          isBouncing
            ? { y: [baseY, baseY - 12, baseY, baseY - 6, baseY] }
            : { y: baseY }
        }
        transition={isBouncing ? { duration: 0.5, ease: "easeInOut" } : { duration: 0.15 }}
      >
        {children}
        {/* Tooltip */}
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
      </motion.div>
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
  isHero,
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
      <div style={{ position: "relative", height: "100%" }}>
        {children}
      </div>
      {hasIndicator && (
        <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 h-[3px] w-[3px] rounded-full bg-white/60" />
      )}
    </motion.div>
  );
}

/* ── Dock icons — 9 icons, Assembly centered ── */
const DOCK_ICONS = [
  { label: "Safari", hasIndicator: true, src: "/edition/dock-icons/_System App Icon-10.svg" },
  { label: "Messages", hasIndicator: true, src: "/edition/dock-icons/_System App Icon-9.svg" },
  { label: "Mail", hasIndicator: true, src: "/edition/dock-icons/_System App Icon-8.svg" },
  { label: "Calendar", hasIndicator: false, src: "/edition/dock-icons/_System App Icon-7.svg" },
  { label: "Assembly", hasIndicator: true, src: "/edition/dock-icons/swap.svg", isHero: true, padding: "3px", badge: 3 },
  { label: "Notes", hasIndicator: false, src: "/edition/dock-icons/_System App Icon-4.svg" },
  { label: "Reminders", hasIndicator: true, src: "/edition/dock-icons/_System App Icon-5.svg" },
  { label: "System Settings", hasIndicator: false, src: "/edition/dock-icons/_System App Icon-2.svg" },
  { label: "Trash", hasIndicator: false, src: "/edition/dock-icons/_System App Icon.svg" },
];

const DIVIDER_AFTER = 7; // Divider before Trash

/* Mobile: 8 icons + divider + trash, matching desktop layout */
const MOBILE_ICONS = [
  DOCK_ICONS[0], // Safari
  DOCK_ICONS[1], // Messages
  DOCK_ICONS[2], // Mail
  DOCK_ICONS[4], // Assembly
  DOCK_ICONS[3], // Calendar
  DOCK_ICONS[5], // Notes
  DOCK_ICONS[6], // Reminders
];
const MOBILE_TRASH = DOCK_ICONS[8]; // Trash

/**
 * macOS dock visual — centered, clean, Assembly as hero.
 * Desktop: 9 icons with hover magnification, Assembly subtly elevated + glow.
 * Mobile/Tablet: 7 icons with auto-wave animation, centered.
 */
export function MacOSDock({ className }) {
  const mouseX = useMotionValue(Infinity);
  const dockRef = useRef(null);
  const isDesktop = useMediaQuery("(min-width: 1024px)", true);
  const isTablet = useMediaQuery("(min-width: 768px)", false);
  const [bouncingIcon, setBouncingIcon] = useState(null);

  const handleIconClick = useCallback((label) => {
    if (bouncingIcon) return;
    setBouncingIcon(label);
    setTimeout(() => { setBouncingIcon(null); }, 500);
  }, [bouncingIcon]);

  /* ── Mobile auto-animation hooks (must be before any conditional return) ── */
  const MOBILE_ICON_SIZE = isTablet ? 72 : 64;
  const virtualCursorX = useMotionValue(-200);
  const mobileDockWidth = MOBILE_ICONS.length * (MOBILE_ICON_SIZE + 2) + 24;

  useEffect(() => {
    if (isDesktop) return;
    let cancelled = false;
    let raf;

    const wait = (ms) =>
      new Promise((resolve) => {
        const t = setTimeout(resolve, ms);
        if (cancelled) clearTimeout(t);
      });

    async function loop() {
      while (!cancelled) {
        const sweepDuration = 3000;
        const start = -100;
        const end = mobileDockWidth + 100;
        const t0 = performance.now();

        await new Promise((resolve) => {
          function tick() {
            if (cancelled) { resolve(); return; }
            const elapsed = performance.now() - t0;
            const progress = Math.min(elapsed / sweepDuration, 1);
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
  }, [isDesktop, virtualCursorX, mobileDockWidth]);

  /* ── Desktop: centered dock with Assembly hero ── */
  if (isDesktop) {
    return (
      <div
        className={cn(className)}
        style={{
          position: "relative",
          width: "100%",
          minHeight: "180px",
        }}
      >
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
                <DockIcon
                  mouseX={mouseX}
                  label={icon.label}
                  hasIndicator={icon.hasIndicator}
                  showTooltip
                  onClick={() => handleIconClick(icon.label)}
                  isBouncing={bouncingIcon === icon.label}
                  isHero={icon.isHero}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={icon.src} alt={icon.label} className="h-full w-full rounded-[11px] object-contain" style={icon.padding ? { padding: icon.padding } : undefined} draggable={false} />
                  {icon.badge != null && (
                    <div style={{
                      position: "absolute", top: "-5px", right: "-5px",
                      minWidth: "22px", height: "22px",
                      borderRadius: "11px",
                      backgroundColor: "#ff3b30",
                      color: "#fff",
                      fontSize: "13px",
                      fontWeight: 500,
                      fontFamily: "-apple-system, 'SF Pro Text', system-ui, sans-serif",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      padding: "0 5px",
                      lineHeight: 1,
                      pointerEvents: "none",
                    }}>
                      {icon.badge}
                    </div>
                  )}
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

  /* ── Mobile / Tablet: centered dock with auto-wave ── */
  return (
    <div
      className={cn(className)}
      style={{
        position: "relative",
        width: "100%",
        minHeight: isTablet ? "180px" : "120px",
        display: "flex",
        justifyContent: "flex-start",
      }}
    >
      <div
        style={{
          position: "relative",
          paddingTop: isTablet ? "24px" : "16px",
          paddingBottom: isTablet ? "16px" : "12px",
        }}
      >
        <div
          className="flex items-end rounded-2xl bg-zinc-800 backdrop-blur-xl border border-zinc-600/30"
          style={{
            padding: isTablet ? "10px 14px" : "8px 12px",
            gap: "2px",
            width: "max-content",
            boxShadow: "0 8px 32px rgba(0,0,0,0.25), 0 2px 8px rgba(0,0,0,0.15)",
          }}
        >
          {MOBILE_ICONS.map((icon, i) => (
            <div key={icon.label + i} className="flex items-end" style={{ position: "relative", width: MOBILE_ICON_SIZE, height: MOBILE_ICON_SIZE, flexShrink: 0 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={icon.src}
                alt={icon.label}
                width={MOBILE_ICON_SIZE * 2}
                height={MOBILE_ICON_SIZE * 2}
                className="rounded-[11px] object-contain"
                style={{ width: "100%", height: "100%", ...(icon.padding ? { padding: icon.padding } : {}) }}
                draggable={false}
              />
              {icon.badge != null && (
                <div style={{
                  position: "absolute", top: "-4px", right: "-4px",
                  minWidth: "20px", height: "20px",
                  borderRadius: "10px",
                  backgroundColor: "#ff3b30",
                  color: "#fff",
                  fontSize: "12px",
                  fontWeight: 500,
                  fontFamily: "-apple-system, 'SF Pro Text', system-ui, sans-serif",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  padding: "0 5px",
                  lineHeight: 1,
                  pointerEvents: "none",
                }}>
                  {icon.badge}
                </div>
              )}
              {icon.hasIndicator && (
                <div style={{
                  position: "absolute", bottom: "-6px", left: "50%", transform: "translateX(-50%)",
                  width: "4px", height: "4px", borderRadius: "50%",
                  backgroundColor: "rgba(255,255,255,0.5)",
                }} />
              )}
            </div>
          ))}
          {/* Divider */}
          <div style={{ width: "1px", height: MOBILE_ICON_SIZE * 0.65, backgroundColor: "rgba(255,255,255,0.2)", flexShrink: 0, alignSelf: "center", margin: "0 4px" }} />
          {/* Trash */}
          <div className="flex items-end" style={{ position: "relative", width: MOBILE_ICON_SIZE, height: MOBILE_ICON_SIZE, flexShrink: 0 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={MOBILE_TRASH.src}
              alt={MOBILE_TRASH.label}
              width={MOBILE_ICON_SIZE * 2}
              height={MOBILE_ICON_SIZE * 2}
              className="rounded-[11px] object-contain"
              style={{ width: "100%", height: "100%" }}
              draggable={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
