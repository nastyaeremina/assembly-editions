import React, { useRef, useEffect, useState } from 'react';
import SVGComponent from 'public/images/svg/SVGComponent';
import { Informative, Line, Tooltip } from './styles';

function AppTooltip({ message, iconSize = '13', fill = 'var(--body)', style, mainDivStyle, isAutoAdjust = false }) {
  const tooltipIconRef = useRef(null);
  const [tooltipPosition, setTooltipPosition] = useState({ left: '-7px' });
  const [tooltipLinePosition, setTooltipLinePosition] = useState({});

  useEffect(() => {
    // Runs after the component mounts to adjust tooltip position based on screen space
    if (tooltipIconRef.current) {
      const iconRect = tooltipIconRef.current.getBoundingClientRect();
      const availableRightSpace = window.innerWidth - iconRect.right; // Calculate space to the right of icon

      // If the available space is less than 220px, adjust tooltip position to prevent overflow
      if (availableRightSpace < 220) {
        setTooltipPosition({ left: '-170px' }); // Shift tooltip left
        setTooltipLinePosition({ right: '42px' }); // Adjust tooltip line's position
      }
    }
  }, []);

  return (
    <Informative style={mainDivStyle} isAutoAdjust={isAutoAdjust}>
      <div ref={tooltipIconRef} style={{ width: `${iconSize}px`, height: `${iconSize}px` }}>
        <SVGComponent name='informative-icon' width={iconSize} height={iconSize} viewBox='0 0 13 13' fill={fill} />
      </div>
      <Tooltip className='tooltiptext' style={{ ...style, ...tooltipPosition }} isAutoAdjust={isAutoAdjust}>
        <Line isAutoAdjust={isAutoAdjust} style={{ ...tooltipLinePosition }}>
          <div className='line' />
        </Line>
        <p>{message}</p>
      </Tooltip>
    </Informative>
  );
}

export default AppTooltip;
