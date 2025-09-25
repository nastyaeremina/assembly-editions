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
  const isSmallScreen = width <= 991; // tablet & mobile only

  // Movement and layout
  const [slideStep, setSlideStep] = useState(0); // how much to move per click
  const [slideWidth, setSliderWidth] = useState(0); // width of a single card
  const [isScrollable, setIsScrollable] = useState(false); // whether buttons should render at all
  const [maxPosition, setMaxPosition] = useState(0); // maximum negative translateX (furthest right)
  const [containerLeft, setContainerLeft] = useState(0); // container left relative to viewport
  const [viewportWidth, setViewportWidth] = useState(0); // current screen width
  const [isInitialized, setIsInitialized] = useState(false); // track initialization state

  /**
   * Measure card width (using first child) so we can compute step and bounds.
   * Also measure containerLeft and viewportWidth for accurate overflow detection.
   * Enhanced with better error handling and retry logic for production.
   */
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const updateMeasurements = () => {
      try {
        const mainBlock = document.getElementsByClassName(CAROUSEL_SLIDER)[0];
        if (!mainBlock) {
          console.warn('Carousel slider element not found, retrying...');
          return;
        }

        const firstChild = mainBlock.children && mainBlock.children[0];
        if (firstChild && firstChild.offsetWidth > 0) {
          setSliderWidth(firstChild.offsetWidth);
        } else {
          console.warn('First child not found or has no width, retrying...');
          return;
        }

        const parent = mainBlock?.parentElement || mainBlock;
        if (parent) {
          const rect = parent.getBoundingClientRect();
          setContainerLeft(rect.left);
        }

        setViewportWidth(window.innerWidth || document.documentElement.clientWidth);
        setIsInitialized(true);
      } catch (error) {
        console.error('Error in updateMeasurements:', error);
      }
    };

    // Retry mechanism for production environments
    const retryMeasurements = () => {
      let retries = 0;
      const maxRetries = 5;

      const attemptMeasurement = () => {
        updateMeasurements();
        retries++;

        // If measurements failed and we haven't exceeded max retries, try again
        if (retries < maxRetries) {
          setTimeout(attemptMeasurement, 100 * retries); // Exponential backoff
        }
      };

      attemptMeasurement();
    };

    // Use multiple strategies to ensure measurements happen
    const raf = requestAnimationFrame(retryMeasurements);

    // Also try after a short delay for slower loading environments
    const timeoutId = setTimeout(retryMeasurements, 100);

    window.addEventListener('resize', updateMeasurements);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(timeoutId);
      window.removeEventListener('resize', updateMeasurements);
    };
  }, []);

  /**
   * Purpose: Derive carousel navigation state and movement from current measurements.
   *
   * This effect translates DOM/viewport measurements into the values the arrows and swiping
   * logic need in order to behave correctly across breakpoints:
   * - isFirstSlide / isLastSlide: enable/disable arrows and snap at the edges
   * - slideStep: distance to move per click (card width + gap)
   * - isScrollable: whether content actually overflows the visible area (should we show arrows?)
   * - maxPosition: the furthest negative translateX allowed so the last cards are fully visible
   *
   * Inputs considered:
   * - slideWidth, noOfSlide, sliderItemGap → physical track width
   * - width, viewportWidth, containerLeft → viewport size and container offset within it
   * - xPos → current translateX which determines edge states
   *
   * Implementation details:
   * - We compare the track's right edge (containerLeft + totalWidth) against the viewport to decide
   *   if there is horizontal overflow; only then do we allow scrolling and show controls.
   * - On tablet/mobile (≤991px) we clamp against the container's width, not the full viewport,
   *   so we snap cleanly to the last fully visible card without partial clipping.
   * - Defensive guards ensure we don't compute with invalid measurements; if something is missing,
   *   we fall back to safe defaults so the UI doesn't break in production.
   */
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Validate required measurements before proceeding
    if (slideWidth <= 0 || noOfSlide <= 0) {
      console.warn('Invalid measurements, skipping calculation:', { slideWidth, noOfSlide });
      return;
    }

    try {
      // Start button state
      setIsFirstSlide(xPos === 0);

      // Step is card width + gap
      const cardWidth = slideWidth;
      setSlideStep(cardWidth + sliderItemGap);

      // measure container width with fallbacks
      const wrapper =
        document.querySelector('[class*="SliderMainDiv"]') ||
        document.querySelector(CAROUSEL_SLIDER)?.parentElement ||
        document.querySelector('.carousel-slider')?.parentElement;

      const measuredContainerWidth = wrapper?.offsetWidth || width;
      const containerWidth =
        measuredContainerWidth > WEBSITE_CONTAINER_WIDTH ? WEBSITE_CONTAINER_WIDTH : measuredContainerWidth;

      // total track width (all cards + gaps)
      const totalWidth = noOfSlide * (cardWidth + sliderItemGap) - sliderItemGap;

      // Determine if the track overflows the SCREEN (viewport) considering container horizontal offset.
      // If right edge of the track exceeds viewport width, show buttons.
      const trackRightInViewport = containerLeft + totalWidth; // when xPos is 0
      const canScrollViewport = trackRightInViewport > (viewportWidth || width);
      setIsScrollable(canScrollViewport);

      // Tablet/Mobile should clamp at the container's right edge exactly, not the viewport.
      const isTabletOrMobile = (viewportWidth || width) <= 991;
      const effectiveVisibleWidth = isTabletOrMobile
        ? Math.min(containerWidth, viewportWidth || width)
        : containerWidth;
      const computedMaxPosition = canScrollViewport ? -(totalWidth - effectiveVisibleWidth) : 0;

      setMaxPosition(computedMaxPosition);
      setIsLastSlide(canScrollViewport ? xPos <= computedMaxPosition : true);
    } catch (error) {
      console.error('Error in scrollability calculation:', error);
      // Fallback: assume scrollable if we have multiple slides
      setIsScrollable(noOfSlide > 1);
      setIsLastSlide(false);
      setIsFirstSlide(xPos === 0);
    }
  }, [width, slideWidth, sliderItemGap, noOfSlide, xPos, viewportWidth, containerLeft]);

  /**
   * Move one step toward the start (to the left visually).
   * Clamp to 0 to avoid overshooting and keep start state consistent.
   */
  const onClickPrev = useCallback(() => {
    if (isFirstSlide) return;
    if (isSmallScreen) {
      const nextPos = xPos + slideStep;
      setXpos(nextPos > 0 ? 0 : nextPos);
    } else {
      setXpos(xPos + slideStep);
    }
  }, [isFirstSlide, xPos, slideStep, setXpos, isSmallScreen]);

  /**
   * Move one step toward the end (to the right visually).
   * When within one step of the end, snap exactly to maxPosition to avoid partial clipping.
   */
  const onClickNext = useCallback(() => {
    if (isLastSlide) return;
    if (isSmallScreen) {
      const nextPos = xPos - slideStep;
      setXpos(nextPos < maxPosition ? maxPosition : nextPos);
    } else {
      setXpos(xPos - slideStep);
    }
  }, [isLastSlide, xPos, slideStep, maxPosition, setXpos, isSmallScreen]);

  // Ensure xPos always stays within bounds when measurements change (e.g., resize)
  useEffect(() => {
    if (!isSmallScreen) return;
    if (xPos > 0) {
      setXpos(0);
    } else if (xPos < maxPosition) {
      setXpos(maxPosition);
    }
  }, [maxPosition, isSmallScreen]);

  /**
   * Mobile: enable swipe gestures and hide buttons via CSS.
   * We only bind listeners when scrolling is actually possible.
   * Enhanced with better error handling for production.
   */
  useEffect(() => {
    const isMobile = width <= 991;
    if (!isMobile || !isScrollable) return;

    try {
      const mainBlock = document.getElementsByClassName(CAROUSEL_SLIDER)[0];
      if (!mainBlock) {
        console.warn('Carousel slider element not found for touch events');
        return;
      }

      let touchStartX = 0;
      let touchEndX = 0;

      const onTouchStart = (e) => {
        try {
          touchStartX = e.changedTouches[0].clientX;
        } catch (error) {
          console.error('Error in touch start:', error);
        }
      };

      const onTouchEnd = (e) => {
        try {
          touchEndX = e.changedTouches[0].clientX;
          const deltaX = touchEndX - touchStartX;
          const threshold = 50; // minimal swipe distance to trigger navigation
          if (Math.abs(deltaX) < threshold) return;

          if (deltaX > 0) {
            onClickPrev();
          } else {
            onClickNext();
          }
        } catch (error) {
          console.error('Error in touch end:', error);
        }
      };

      mainBlock.addEventListener('touchstart', onTouchStart, { passive: true });
      mainBlock.addEventListener('touchend', onTouchEnd, { passive: true });

      return () => {
        try {
          mainBlock.removeEventListener('touchstart', onTouchStart);
          mainBlock.removeEventListener('touchend', onTouchEnd);
        } catch (error) {
          console.error('Error removing touch event listeners:', error);
        }
      };
    } catch (error) {
      console.error('Error setting up touch events:', error);
    }
  }, [width, isScrollable, onClickPrev, onClickNext]);

  // If nothing to scroll, hide the buttons entirely
  // Also add a fallback for production environments where initialization might fail
  if (!isScrollable && isInitialized) return null;

  // Show buttons as fallback if we have multiple slides but initialization failed
  if (!isInitialized && noOfSlide > 1) {
    return (
      <>
        <SliderButton
          className='left-arrow'
          onClick={() => setXpos(Math.min(0, xPos + 300))}
          isLeftButtonNotShow={xPos === 0}
          isActive={xPos !== 0}>
          <SVGComponent name='slider-left-arrow-icon' width='16' height='16' viewBox='0 0 16 16' />
        </SliderButton>

        <SliderButton
          className='right-arrow'
          onClick={() => setXpos(Math.max(-300 * (noOfSlide - 1), xPos - 300))}
          isDisabled={false}
          isActive={true}>
          <SVGComponent name='slider-right-arrow-icon' width='16' height='16' viewBox='0 0 16 16' />
        </SliderButton>
      </>
    );
  }

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
