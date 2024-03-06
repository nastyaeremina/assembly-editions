import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ListItem, LableName, ListIcon, ListName } from './templateBodyStyle';

export default function AppItem({ iconUrl, title, link }) {
  return (
    <ListItem>
      <Link href={link}>
        <ListName>
          <Image src={iconUrl} alt='icon' width={24} height={24} />
          <LableName>{title}</LableName>
        </ListName>
        <ListIcon>
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
        </ListIcon>
      </Link>
    </ListItem>
  );
}
