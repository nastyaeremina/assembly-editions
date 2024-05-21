'use client';

import Image from 'next/image';
import React from 'react';
import { useHotkeys } from 'react-hotkeys-hook';
import { OverLayDiv } from '../../styles/blogstyles';
import { ZoomImage } from '../../styles/homepageStyles';
import { ArrowIcon, CloseIcon } from '../appsDetail/styles';
import SVGComponent from '../../../public/images/svg/SVGComponent';
import { SliderImageDiv, ZoomImageSection } from './style';

export default function ZoomImageSlider({
  imageUrl,
  goToPreviousImage,
  goToNextImage,
  onCloseModal,
  isSlideButtonHide
}) {
  useHotkeys('ArrowLeft', async (event) => {
    event.preventDefault();
    goToPreviousImage();
  });

  useHotkeys('ArrowRight', async (event) => {
    event.preventDefault();
    goToNextImage();
  });

  return (
    <>
      <ZoomImageSection isHide={isSlideButtonHide}>
        <CloseIcon onClick={onCloseModal}>
          <SVGComponent name='slider-close-icon' width='56' height='56' viewBox='56' />
        </CloseIcon>
        <SliderImageDiv>
          <ArrowIcon className='left-arrow' onClick={goToPreviousImage}>
            <SVGComponent name='left-arrow-icon' width='16' height='16' viewBox='16' />
          </ArrowIcon>
          <Image src={imageUrl} alt='msg-screen' className='onzoom' width={614} height={344} layout='responsive' />
          <ArrowIcon className='right-arrow' onClick={goToNextImage}>
            <SVGComponent name='right-arrow-icon' width='16' height='16' viewBox='16' />
          </ArrowIcon>
        </SliderImageDiv>
        <OverLayDiv onClick={onCloseModal}></OverLayDiv>
      </ZoomImageSection>
    </>
  );
}
