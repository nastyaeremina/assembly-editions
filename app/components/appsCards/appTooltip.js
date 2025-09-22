import React, { useRef, useEffect, useState } from 'react';
import SVGComponent from '../../../public/images/svg/SVGComponent';
import { Icon, Informative, Line, Tooltip, TooltipText } from './styles';

function AppTooltip({
  message,
  iconSize = '13',
  fill = 'var(--body)',
  style,
  mainDivStyle,
  isAutoAdjust = false,
  isAppDetailtooltip = false
}) {
  const tooltipIconRef = useRef(null);
  const [tooltipPosition, setTooltipPosition] = useState({ left: '-6px' });
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
      <Icon ref={tooltipIconRef} iconSize={iconSize}>
        <SVGComponent name='informative-icon' width={iconSize} height={iconSize} viewBox='0 0 14 14' fill={fill} />
      </Icon>
      <Tooltip
        className='tooltiptext'
        style={{ ...style, ...tooltipPosition }}
        isAutoAdjust={isAutoAdjust}
        isAppDetailtooltip={isAppDetailtooltip}>
        <Line isAutoAdjust={isAutoAdjust} style={{ ...tooltipLinePosition }}>
          <div className='line' />
        </Line>
        <TooltipText>{message}</TooltipText>
      </Tooltip>
    </Informative>
  );
}

export default AppTooltip;
