import React from 'react';
import { LastDroplist, Last } from './styles';

function DropdownFooter({ href, linkName }) {
  return (
    <LastDroplist>
      <Last className='icon-link'>
        <a href={href} className='learn-link mb0'>
          {linkName}
          <svg width='16' height='12' viewBox='0 0 16 12' fill='none' class='HoverArrow'>
            <path
              d='M5.7998 1.37109L10.4283 5.99958L5.7998 10.6281'
              stroke-width='1.92854'
              stroke-linecap='round'
              stroke-linejoin='round'
              class='HoverArrow__tipPath'
            />
            <path
              d='M10.33 5.99951H1.5'
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'
              class='HoverArrow__linePath'
            />
          </svg>
        </a>
      </Last>
    </LastDroplist>
  );
}

export default DropdownFooter;
