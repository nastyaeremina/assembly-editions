import Image from 'next/image';
import React from 'react'
import { Last, LastDroplist } from '../../styles/casestudiestyles';

export default function AppCard({ name, applogo }) {
  return (
    <LastDroplist>
      <Image src={applogo} alt='msg-icon' width={20} height={20} />
      <Last className='icon-link'>
        <a href={'#'} className='learn-link mb0'>
          {name}
          <svg width='16' height='12' viewBox='0 0 16 12' fill='none' class='HoverArrow'>
            <path
              d='M5.7998 1.37109L10.4283 5.99958L5.7998 10.6281'
              stroke-width='1'
              stroke-linecap='round'
              stroke-linejoin='round'
              class='HoverArrow__tipPath'
            />
            <path
              d='M10.33 5.99951H1.5'
              stroke-width='1'
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
