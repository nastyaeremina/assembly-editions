'use client';

import React, { useCallback, useEffect, useState } from 'react';
import { SliderButton } from './styles';
import SVGComponent from '../../../public/images/svg/SVGComponent';
import { useWindowDimensions } from '../../hooks/useMobileDevice';
import { CAROUSEL_SLIDER, WEBSITE_CONTAINER_WIDTH } from '../../constants/constant';

export default function SliderButtons({ xPos, setXpos, noOfSlide, sliderItemGap = 24 }) {
  // Window width (for responsive behavior)
  const { width } = useWindowDimensions();

  const [isLastSlide, setIsLastSlide] = useState(false);
  const [isFirstSlide, setIsFirstSlide] = useState(true);

  // Movement and layout
  const [slideStep, setSlideStep] = useState(0); // how much to move per click
  const [slideWidth, setSliderWidth] = useState(0); // width of a single card
  const [isScrollable, setIsScrollable] = useState(false); // whether buttons should render at all
  const [maxPosition, setMaxPosition] = useState(0); // maximum negative translateX (furthest right)
  const [containerLeft, setContainerLeft] = useState(0); // container left relative to viewport
  const [viewportWidth, setViewportWidth] = useState(0); // current screen width

  /**
   * Measure card width (using first child) so we can compute step and bounds.
   * Also measure containerLeft and viewportWidth for accurate overflow detection.
   */
  useEffect(() => {
    const updateMeasurements = () => {
      const mainBlock = document.getElementsByClassName(CAROUSEL_SLIDER)[0];
      const firstChild = mainBlock && mainBlock.children && mainBlock.children[0];
      if (firstChild) {
        setSliderWidth(firstChild.offsetWidth);
      }
      const parent = mainBlock?.parentElement || mainBlock;
      if (parent) {
        const rect = parent.getBoundingClientRect();
        setContainerLeft(rect.left);
      }
      setViewportWidth(window.innerWidth || document.documentElement.clientWidth);
    };

    const raf = requestAnimationFrame(updateMeasurements);
    window.addEventListener('resize', updateMeasurements);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', updateMeasurements);
    };
  }, []);

  /**
   * Compute:
   * - start/end states (isFirstSlide / isLastSlide)
   * - per-click movement (slideStep)
   * - scrollability and maxPosition (end boundary)
   */
  useEffect(() => {
    // Start button state
    setIsFirstSlide(xPos === 0);

    // Step is card width + gap
    const cardWidth = slideWidth;
    setSlideStep(cardWidth + sliderItemGap);

    // Container width: clamp to site container max (desktop) or use viewport width
    const wrapper =
      document.querySelector('[class*="SliderMainDiv"]') || document.querySelector(CAROUSEL_SLIDER)?.parentElement;
    const measuredContainerWidth = wrapper?.offsetWidth || width;
    const containerWidth =
      measuredContainerWidth > WEBSITE_CONTAINER_WIDTH ? WEBSITE_CONTAINER_WIDTH : measuredContainerWidth;

    // Total track width (cards + gaps, but no trailing gap after last card)
    const totalWidth = noOfSlide * (cardWidth + sliderItemGap) - sliderItemGap;

    // Determine if the track overflows the SCREEN (viewport) considering container horizontal offset.
    // If right edge of the track exceeds viewport width, show buttons.
    const trackRightInViewport = containerLeft + totalWidth; // when xPos is 0
    const canScrollViewport = trackRightInViewport > (viewportWidth || width);
    setIsScrollable(canScrollViewport);

    // Max negative translate is still computed against the container so the track aligns nicely.
    // Use floor/ceil to avoid off-by-one clipping due to fractional pixels.
    const computedMax = canScrollViewport ? Math.min(0, Math.floor(containerWidth) - Math.ceil(totalWidth)) : 0;
    setMaxPosition(computedMax);

    // End button state (disable when we're effectively at/after end)
    setIsLastSlide(canScrollViewport ? xPos <= computedMax : true);
  }, [width, viewportWidth, containerLeft, slideWidth, sliderItemGap, noOfSlide, xPos]);

  /**
   * Move one step toward the start (to the left visually).
   * Clamp to 0 to avoid overshooting and keep start state consistent.
   */
  const onClickPrev = useCallback(() => {
    if (isFirstSlide) return;
    const nextPos = Math.min(0, xPos + slideStep);
    setXpos(nextPos);
  }, [isFirstSlide, xPos, slideStep, setXpos]);

  /**
   * Move one step toward the end (to the right visually).
   * When within one step of the end, snap exactly to maxPosition to avoid partial clipping.
   */
  const onClickNext = useCallback(() => {
    if (isLastSlide) return;
    const distanceToEnd = xPos - maxPosition; // positive distance remaining
    const shouldSnapToEnd = distanceToEnd <= slideStep;
    const nextPos = shouldSnapToEnd ? maxPosition : Math.max(maxPosition, xPos - slideStep);
    setXpos(nextPos);
  }, [isLastSlide, xPos, slideStep, setXpos, maxPosition]);

  /**
   * Mobile: enable swipe gestures and hide buttons via CSS.
   * We only bind listeners when scrolling is actually possible.
   */
  useEffect(() => {
    const isMobile = width <= 991;
    if (!isMobile || !isScrollable) return;

    const mainBlock = document.getElementsByClassName(CAROUSEL_SLIDER)[0];
    if (!mainBlock) return;

    let touchStartX = 0;
    let touchEndX = 0;

    const onTouchStart = (e) => {
      touchStartX = e.changedTouches[0].clientX;
    };

    const onTouchEnd = (e) => {
      touchEndX = e.changedTouches[0].clientX;
      const deltaX = touchEndX - touchStartX;
      const threshold = 50; // minimal swipe distance to trigger navigation
      if (Math.abs(deltaX) < threshold) return;

      if (deltaX > 0) {
        onClickPrev();
      } else {
        onClickNext();
      }
    };

    mainBlock.addEventListener('touchstart', onTouchStart, { passive: true });
    mainBlock.addEventListener('touchend', onTouchEnd, { passive: true });

    return () => {
      mainBlock.removeEventListener('touchstart', onTouchStart);
      mainBlock.removeEventListener('touchend', onTouchEnd);
    };
  }, [width, isScrollable, onClickPrev, onClickNext]);

  // If nothing to scroll, hide the buttons entirely
  if (!isScrollable) return null;

  return (
    <>
      <SliderButton
        className='left-arrow'
        onClick={onClickPrev}
        isLeftButtonNotShow={isFirstSlide}
        isActive={!isFirstSlide}>
        <SVGComponent name='slider-left-arrow-icon' width='16' height='16' viewBox='0 0 16 16' />
      </SliderButton>

      <SliderButton className='right-arrow' onClick={onClickNext} isDisabled={isLastSlide} isActive={!isLastSlide}>
        <SVGComponent name='slider-right-arrow-icon' width='16' height='16' viewBox='0 0 16 16' />
      </SliderButton>
    </>
  );
}
