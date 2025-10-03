import React, { useRef, useEffect, useState, useCallback } from 'react';
import SVGComponent from '../../../public/images/svg/SVGComponent';
import { Icon, Informative, Line, TooltipSection, TooltipText } from './styles';

/**
 * Tooltip component renders an informative tooltip with an icon trigger.
 * @param {string} message - The text content to display in the tooltip.
 * @param {string} iconSize - Size of the informative icon (default is '13').
 * @param {string} fill - Color of the icon (default is 'var(--body)').
 * @param {object} style - Additional inline styles for the tooltip.
 * @param {object} mainDivStyle - Additional inline styles for the main wrapper div.
 * @param {boolean} isAutoAdjust - Whether to automatically adjust tooltip position based on viewport (default is false).
 * @param {boolean} isAppDetailtooltip - Whether this is a tooltip used in app detail pages (default is false).
 */

function Tooltip({ message, iconSize = '13', fill = 'var(--body)', style, mainDivStyle, isAutoAdjust = false }) {
  const tooltipIconRef = useRef(null);
  const wrapperRef = useRef(null);
  const [tooltipPosition, setTooltipPosition] = useState({ left: '-26px' });
  const [tooltipLinePosition, setTooltipLinePosition] = useState({});
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    setIsTouchDevice(typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0));
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    // Only run auto-adjustment logic when isAutoAdjust is true
    if (!isAutoAdjust || !tooltipIconRef.current) return;

    const adjustTooltipPosition = () => {
      if (typeof window === 'undefined') return;
      if (!tooltipIconRef.current) return;

      const iconRect = tooltipIconRef.current.getBoundingClientRect();
      const viewportWidth = window.innerWidth;
      const tooltipWidth = Math.min(220, viewportWidth - 40); // Responsive tooltip width with margin
      const margin = 22; // Minimum margin from screen edge

      // Calculate available space on both sides
      const availableRightSpace = viewportWidth - iconRect.right;
      const availableLeftSpace = iconRect.left;

      // For mobile screens (768px and below), use different positioning logic
      const isMobile = viewportWidth <= 768;

      // Calculate line position to connect icon center to tooltip edge
      const iconCenterOffset = iconRect.width / 2;
      const arrowOffset = 8; // Distance from tooltip edge to line

      if (isMobile) {
        // Mobile-specific positioning: prefer left side or center
        if (availableLeftSpace >= tooltipWidth + margin) {
          // Position on the left with margin - line should be on right edge of tooltip
          const leftOffset = tooltipWidth - margin;
          setTooltipPosition({ left: `-${leftOffset}px` });
          setTooltipLinePosition({ right: `${arrowOffset}px` });
        } else if (availableRightSpace >= tooltipWidth + margin) {
          // Position on the right with margin - line should be on left edge of tooltip
          setTooltipPosition({ left: '-26px' });
          setTooltipLinePosition({ left: `${arrowOffset}px` });
        } else {
          // Center the tooltip if both sides are constrained - center the line
          const centerOffset = Math.max(0, (tooltipWidth - iconRect.width) / 2);
          const leftPosition = Math.max(-centerOffset, -(availableLeftSpace - margin));
          setTooltipPosition({ left: `${leftPosition}px` });
          setTooltipLinePosition({ left: `${Math.abs(leftPosition) + iconCenterOffset}px` });
        }
      } else {
        // Desktop positioning logic
        if (availableRightSpace < tooltipWidth && availableLeftSpace > tooltipWidth + margin) {
          // Position on the left - line should be on right edge of tooltip
          const leftOffset = tooltipWidth - margin;
          setTooltipPosition({ left: `-${leftOffset}px` });
          setTooltipLinePosition({ right: `${arrowOffset}px` });
        } else if (availableRightSpace < tooltipWidth && availableLeftSpace < tooltipWidth + margin) {
          // Center the tooltip - center the line
          const centerOffset = Math.max(0, (tooltipWidth - iconRect.width) / 2);
          setTooltipPosition({ left: `-${centerOffset}px` });
          setTooltipLinePosition({ left: `${centerOffset + iconCenterOffset}px` });
        } else {
          // Default position when there's enough space on the right - line on left edge
          setTooltipPosition({ left: '-26px' });
          setTooltipLinePosition({ left: `${arrowOffset}px` });
        }
      }
    };

    // Run adjustment on mount and window resize
    adjustTooltipPosition();

    const handleResize = () => {
      adjustTooltipPosition();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isAutoAdjust]);

  // Close tooltip when clicking/tapping outside (only needed for touch toggle)
  useEffect(() => {
    if (!isTouchDevice) return;
    const onDocPointer = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setIsTooltipOpen(false);
      }
    };
    document.addEventListener('pointerdown', onDocPointer);
    return () => document.removeEventListener('pointerdown', onDocPointer);
  }, [isTouchDevice]);

  const stopAll = useCallback((e) => {
    // Stop propagation early (capture-phase handlers will call this)
    e.stopPropagation();
  }, []);

  const onIconClick = useCallback(
    (e) => {
      // For touch devices: prevent navigation + stop bubbling then toggle tooltip
      if (isTouchDevice) {
        e.preventDefault();
        e.stopPropagation();
        setIsTooltipOpen((v) => !v);
      } else {
        // Desktop: still stop propagation to be safe (hover will show tooltip)
        e.stopPropagation();
      }
    },
    [isTouchDevice]
  );

  return (
    <Informative ref={wrapperRef} style={mainDivStyle} isAutoAdjust={isAutoAdjust}>
      <Icon
        ref={tooltipIconRef}
        iconSize={iconSize}
        onPointerDownCapture={stopAll}
        onTouchStartCapture={stopAll}
        onMouseDownCapture={stopAll}
        onClick={onIconClick}
        role='button'
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            e.stopPropagation();
            setIsTooltipOpen((v) => !v);
          }
        }}>
        <SVGComponent name='informative-icon' width={iconSize} height={iconSize} viewBox='0 0 12 12' fill={fill} />
      </Icon>

      <TooltipSection
        className={`tooltiptext ${isTooltipOpen ? 'open' : ''}`}
        style={{
          ...tooltipPosition,
          '--tooltip-left': tooltipPosition.left
        }}
        isAutoAdjust={isAutoAdjust}
        onClick={(e) => e.stopPropagation()}>
        <Line isAutoAdjust={isAutoAdjust} style={{ ...tooltipLinePosition, ...style }}>
          <SVGComponent name='tooltip-arrow-icon' width='14' height='8' viewBox='0 0 14 8' />
        </Line>
        <TooltipText>{message}</TooltipText>
      </TooltipSection>
    </Informative>
  );
}

export default Tooltip;
