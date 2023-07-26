'use client'

import classNames from 'classnames';
import Image from 'next/image';
import React, { useState } from 'react';
import { OverLayDiv } from '../../styles/blogstyles';
import { ImageDiv, ZoomImage } from '../../styles/homepageStyles';

export default function ZoomImg(src, width, height, alt) {
  const [isOpen, setIsOpen] = useState(false);
//   const [isZoom, setIsZoom] = useState(false);

  const onClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Image src={src} width={width} height={height} alt={alt} onClick={onClick} />
      {isOpen ? (
        <>
          <ZoomImage>
            <p onClick={onClick}>Close</p>
            <ImageDiv>
              <Image src={src} alt='msg-screen' className='onzoom' />
            </ImageDiv>
            <OverLayDiv onClick={onClick}></OverLayDiv>
          </ZoomImage>
        </>
      ) : null}
    </>
  );
}
