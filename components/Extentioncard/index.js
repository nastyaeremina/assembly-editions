import React from 'react';
import Image from 'next/image';
import { Cardlink, Extention, Logo, Par, RightDesc } from './styles';

export default function ExtentionCard({ data, isCard }) {
  return (
    <Extention isCard={isCard} href={data?.buttonLink} target='_blank'>
      <Logo>
        <Image src={data?.image?.url} alt='icon' width={140} height={140} className='logo' />
      </Logo>
      <RightDesc>
        <Par>{data?.body}</Par>
        <Cardlink className='icon-link'>
          <a className='learn-link mb0' rel='noreferrer'>
            {data?.buttonName}
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
        </Cardlink>
      </RightDesc>
    </Extention>
  );
}
