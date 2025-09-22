import { useEffect } from 'react';

/**
 * Custom React hook to trap keyboard focus inside a specified element (e.g., modal).
 * It ensures that when tabbing through elements, focus cycles within the element,
 * preventing focus from moving outside.
 *
 * @param {Object} modalRef - React ref object pointing to the DOM element to trap focus in.
 */

export default function useFocusTrap(modalRef) {
  useEffect(() => {
    if (!modalRef.current) return;

    const focusableSelectors = [
      'a[href]',
      'button:not([disabled])',
      'textarea:not([disabled])',
      'input:not([disabled])',
      'select:not([disabled])',
      '[tabindex]:not([tabindex="-1"])'
    ];
    const focusableEls = modalRef.current.querySelectorAll(focusableSelectors.join(','));
    const first = focusableEls[0];
    const last = focusableEls[focusableEls.length - 1];

    function handleTab(e) {
      if (e.key !== 'Tab') return; // Only handle Tab key
      if (e.shiftKey) {
        // Shift + Tab
        if (document.activeElement === first) {
          e.preventDefault(); // Prevent default tab behavior
          last.focus(); // Move focus to last focusable elementst.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus(); // Cycle focus to first element
        }
      }
    }

    // Attach the keydown event listener at the modal element
    modalRef.current.addEventListener('keydown', handleTab);

    // Cleanup event listener on unmount or ref change
    return () => {
      if (modalRef.current) modalRef.current.removeEventListener('keydown', handleTab);
    };
  }, [modalRef]);
}
