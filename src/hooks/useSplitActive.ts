"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Returns true when the user has scrolled past the hero into
 * the split-content area.
 *
 * Content is always 75% width on desktop (static), so there are
 * no layout/height changes — no locks or compensation needed.
 *
 * Uses #split-content offsetTop for top boundary and
 * #whats-next offsetTop for bottom boundary.
 */
export function useSplitActive() {
  const [active, setActive] = useState(false);
  const activeRef = useRef(false);

  useEffect(() => {
    let ticking = false;

    function check() {
      const splitEl = document.getElementById("split-content");
      const nextEl = document.getElementById("whats-next");
      if (!splitEl) {
        ticking = false;
        return;
      }

      const splitTop = splitEl.offsetTop;
      const scrollY = window.scrollY;
      const vh = window.innerHeight;
      const currentlyActive = activeRef.current;

      const bottomBoundary = nextEl
        ? nextEl.offsetTop
        : splitTop + splitEl.offsetHeight;

      let next: boolean;

      if (!currentlyActive) {
        // Enter: scrolled past top, bottom boundary still well in view
        next = scrollY >= splitTop - 50
            && bottomBoundary - scrollY > vh * 0.3;
      } else {
        // Exit top: scrolled back above the content
        const scrolledBackUp = scrollY < splitTop - 120;
        // Exit bottom: whats-next entering top half of viewport
        const scrolledPastBottom = bottomBoundary - scrollY < vh * 0.5;
        next = !scrolledBackUp && !scrolledPastBottom;
      }

      if (next !== currentlyActive) {
        activeRef.current = next;
        setActive(next);
      }

      ticking = false;
    }

    function onScroll() {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(check);
      }
    }

    check();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return active;
}
