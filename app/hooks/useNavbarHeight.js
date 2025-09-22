import { useState, useEffect } from 'react';

/**
 * Custom hook to calculate navbar and topbar heights dynamically
 * @returns {Object} Object containing topbarHeight, navbarHeight, and totalHeight
 */
export default function useNavbarHeight() {
  const [heights, setHeights] = useState({
    topbarHeight: 0,
    navbarHeight: 0,
    totalHeight: 0
  });

  useEffect(() => {
    const calculateHeights = () => {
      // Get topbar element
      const topbarElement = document.querySelector('[data-topbar="true"]');
      // Get navbar element
      const navbarElement = document.querySelector('[data-navbar="true"]');

      let topbarHeight = 0;
      let navbarHeight = 0;

      if (topbarElement) {
        topbarHeight = topbarElement.offsetHeight;
      }

      if (navbarElement) {
        navbarHeight = navbarElement.offsetHeight;
      }

      const totalHeight = topbarHeight + navbarHeight;

      setHeights({
        topbarHeight,
        navbarHeight,
        totalHeight
      });

      // Set CSS custom properties for global use
      document.documentElement.style.setProperty('--topbar-height', `${topbarHeight}px`);
      document.documentElement.style.setProperty('--navbar-height', `${navbarHeight}px`);
      document.documentElement.style.setProperty('--total-header-height', `${totalHeight}px`);
    };

    // Calculate heights on mount
    calculateHeights();

    // Recalculate on window resize
    const handleResize = () => {
      calculateHeights();
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return heights;
}
