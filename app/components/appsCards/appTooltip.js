import React from 'react';
import SVGComponent from 'public/images/svg/SVGComponent';
import { Informative, Line, Tooltip } from './styles';

function AppTooltip({ message, iconSize = '13', fill = 'var(--body)', style, mainDivStyle, isAutoAdjust = false }) {
  return (
    <Informative style={mainDivStyle} isAutoAdjust={isAutoAdjust}>
      <SVGComponent name='informative-icon' width={iconSize} height={iconSize} viewBox={'0 0 13 13'} fill={fill} />
      <Tooltip className='tooltiptext' style={style} isAutoAdjust={isAutoAdjust}>
        <Line isAutoAdjust={isAutoAdjust}>
          <div className='line' />
        </Line>
        <p>{message}</p>
      </Tooltip>
    </Informative>
  );
}

export default AppTooltip;
