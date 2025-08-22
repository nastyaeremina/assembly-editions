'use client';

import { useState, useEffect, useLayoutEffect } from 'react';

const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

const useMobileDevice = () => {
  const [isMobileDevice, setIsMobileDevice] = useState(false);
  useIsomorphicLayoutEffect(() => {
    function updateSize() {
      const width = window.innerWidth;
      if (width <= 991) {
        setIsMobileDevice(true);
      } else {
        setIsMobileDevice(false);
      }
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return isMobileDevice;
};

/**
 * Returns the current window dimensions (width and height).
 * If executed in a non-browser environment (e.g., server-side),
 * it returns an object with both width and height set to 0.
 *
 * @returns {Object} - An object containing the width and height of the window.
 *   - {number} width - The inner width of the window in pixels.
 *   - {number} height - The inner height of the window in pixels.
 */
function getWindowDimensions() {
  if (typeof window !== 'undefined') {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  } else {
    return {
      width: 0,
      height: 0
    };
  }
}

export function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return windowDimensions;
}

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 449);
    handleResize(); // run on mount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isMobile;
}

export default useMobileDevice;
