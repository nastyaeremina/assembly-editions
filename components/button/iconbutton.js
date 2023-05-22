import Image from 'next/image';
import React from 'react';
import { IconButton } from './style';

export default function IconWithButton({ buttonname, img, href }) {
  return (
    <IconButton href={href}>
      <Image src={img} alt='icon' width={20} height={20} />
      {buttonname}
    </IconButton>
  );
}
