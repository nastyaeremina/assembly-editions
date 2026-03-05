"use client";

import { useEffect, useRef, useState } from "react";

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

      let next;

      if (!currentlyActive) {
        next = scrollY >= splitTop - vh * 0.15
            && bottomBoundary - scrollY > vh * 0.3;
      } else {
        const scrolledBackUp = scrollY < splitTop - vh * 0.25;
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
