'use client';

import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { useHotkeys } from 'react-hotkeys-hook';
import { OverLayDiv } from '../../styles/blogstyles';
import { ArrowIcon, CloseIcon } from '../appsDetail/styles';
import SVGComponent from '../../../public/images/svg/SVGComponent';
import { ResponsiveSection, SliderImageDiv, Wrapperdiv, ZoomImageSection } from './style';
import SliderButton from '../businessSlider/SliderButton';
import useMobileDevice from '../../hooks/useMobileDevice';
import useFocusTrap from '../../hooks/useFocusTrap';

export default function ZoomImageSlider({
  imageUrl,
  goToPreviousImage,
  goToNextImage,
  onCloseModal,
  isSlideButtonHide,
  count,
  currentIndex,
  setCurrentImageIndex
}) {
  const isMobileDevice = useMobileDevice();
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // ref variable
  const modalRef = useRef();
  useFocusTrap(modalRef);

  useHotkeys('ArrowLeft', async (event) => {
    event.preventDefault();
    goToPreviousImage();
  });

  useHotkeys('ArrowRight', async (event) => {
    event.preventDefault();
    goToNextImage();
  });
  // when Modal is open than after page scroll is hidden
  useEffect(() => {
    // Update the body's CSS to set overflow to hidden
    document.body.style.overflow = 'hidden';

    // Clean up function to reset overflow to its original value when the component unmounts
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  // SWIPE HANDLERS
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    if (!isMobileDevice) return;
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    if (!isMobileDevice) return;
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!isMobileDevice || !touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && count > 1) {
      goToNextImage();
    }
    if (isRightSwipe && count > 1) {
      goToPreviousImage();
    }
  };

  return (
    <>
      <ZoomImageSection isHide={isSlideButtonHide} ref={modalRef}>
        <CloseIcon onClick={onCloseModal}>
          <SVGComponent name='modal-close-icon' width='16' height='16' viewBox='0 0 16 16' className='close-icon' />
        </CloseIcon>
        <SliderImageDiv onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
          <ArrowIcon className='left-arrow' onClick={goToPreviousImage} disabled={currentIndex === 0}>
            <SVGComponent name='slider-left-arrow-icon' width='16' height='16' viewBox='0 0 16 16' />
          </ArrowIcon>
          <Wrapperdiv>
            <Image src={imageUrl} alt='msg-screen' className='onzoom' width={1264} height={711} layout='responsive' />
            {!isSlideButtonHide && (
              <ResponsiveSection>
                <SliderButton
                  count={count}
                  currentIndex={currentIndex}
                  setCurrentIndex={(index) => setCurrentImageIndex(index)} // <-- This now works
                />
              </ResponsiveSection>
            )}
          </Wrapperdiv>
          <ArrowIcon className='right-arrow' onClick={goToNextImage} disabled={currentIndex === count - 1}>
            <SVGComponent name='slider-right-arrow-icon' width='16' height='16' viewBox='16' />
          </ArrowIcon>
        </SliderImageDiv>

        <OverLayDiv onClick={onCloseModal}></OverLayDiv>
      </ZoomImageSection>
    </>
  );
}
