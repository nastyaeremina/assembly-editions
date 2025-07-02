import { useEffect, useState } from 'react';
import { isEmpty } from '../helpers/helpers';

/**
 * Hook to determine the currently active heading based on scroll position.
 *
 * @param {Object} param
 * @param {string} [param.selector="h2"] - The heading selector to query.
 * @param {string[]} [param.headingIds] - Optional array of heading IDs to track manually.
 * @returns {string} - The ID of the currently active heading.
 */
export default function useActiveHeading({ selector = 'h2', headingIds }) {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    if (typeof window === 'undefined') return;

    let scrollTimeout = null;
    const handleScroll = () => {
      if (scrollTimeout) clearTimeout(scrollTimeout);
      const headings = !isEmpty(headingIds) ? headingIds : document.querySelectorAll(selector);
      scrollTimeout = setTimeout(() => {
        for (const heading of headings) {
          const boundingBox = heading.getBoundingClientRect();

          if (boundingBox.top <= 250 && activeId !== heading.id) {
            setActiveId(heading.id);
          }
        }
      }, 50);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initialize the active item on mount

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return activeId;
}
