import Image from 'next/image';
import React from 'react';
import { TestimonialBox } from './styles';

export default function TableData({ onClick, logoUrl, isActive, isHideMobile }) {
  return (
    <TestimonialBox className={isActive ? 'active' : ''} onClick={onClick} isHideMobile={isHideMobile}>
      <Image src={logoUrl} alt='logo' width={148} height={52} />
    </TestimonialBox>
  );
}
