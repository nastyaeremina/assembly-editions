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

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
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

export default useMobileDevice;
