import React from 'react';
import SVGComponent from 'public/images/svg/SVGComponent';
import { Informative, Line, Tooltip } from './styles';

function AppTooltip({ message }) {
  return (
    <Informative>
      <SVGComponent name='informative-icon' width='13' height='13' viewBox='13' />
      <Tooltip className='tooltiptext'>
        <Line>
          <svg width='2' height='16' viewBox='0 0 2 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <line x1='1' y1='4.37114e-08' x2='0.999997' y2='57' stroke='#00160E' stroke-width='2' />
          </svg>
        </Line>
        <p>{message}</p>
      </Tooltip>
    </Informative>
  );
}

export default AppTooltip;
