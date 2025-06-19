import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Arrow, SliderButton } from '../../styles/homepageStyles';
import SVGComponent from '../../../public/images/svg/SVGComponent';
import { useWindowDimensions } from '../../hooks/useMobileDevice';
import { WEBSITE_CONTAINER_WIDTH } from '../../constants/constant';

/**
 * SliderButtonSection
 * Handles slider navigation logic and button rendering for any card slider.
 *
 * @param {number} xPos - Current X position of the slider.
 * @param {function} setXpos - Function to update the X position.
 * @param {number} noOfSlide - Total number of slides/cards.
 * @param {number} sliderItemGap - Gap between cards.
 */

export default function SliderButtonSection({ xPos, setXpos, noOfSlide, sliderItemGap = 28 }) {
  const { width } = useWindowDimensions();
  const [isLastSlide, setIsLastSlide] = useState(false);
  const [isFirstSlide, setIsFirstSlide] = useState(true);
  const [slideStep, setSlideStep] = useState(0);
  const [slideWidth, setSliderWidth] = useState(0);

  // useEffect to set the width of the slider based on the first child of the MainBlock
  useEffect(() => {
    // Select the MainBlock element using its class name
    // The class 'slider-main-block' must be added to the parent block of the slider.
    // If this class is not present, the slider functionality will not work correctly, as the width cannot be determined, leading to layout issues.
    const mainBlock = document.getElementsByClassName('slider-main-block')[0];

    // Check if the mainBlock exists to avoid errors when accessing its children
    if (mainBlock) {
      // Update the slideWidth state with the offset width of the first child element
      // This ensures that the slider adapts to the width of its content
      setSliderWidth(mainBlock.children[0].offsetWidth);
    }
  }, []);

  // Calculate positions and states
  useEffect(() => {
    setIsFirstSlide(xPos === 0);
    // Calculate the width of the card based on the screen width
    const cardWidth = slideWidth;
    // set the step size for the slider
    setSlideStep(cardWidth + sliderItemGap);
    // Calculate the width of the container based on the screen width
    const containerWidth = width > WEBSITE_CONTAINER_WIDTH ? WEBSITE_CONTAINER_WIDTH : width;
    // Calculate the number of visible cards based on the container width
    const visibleCards = Math.max(1, Math.floor(containerWidth / (cardWidth + sliderItemGap)));
    // Calculate the maximum position for the slider
    const maxPosition = -((cardWidth + sliderItemGap) * (noOfSlide - visibleCards));
    setIsLastSlide(xPos <= maxPosition);
  }, [width, slideWidth, sliderItemGap, noOfSlide, xPos]);

  const onClickPrev = useCallback(() => {
    if (!isFirstSlide) setXpos(xPos + slideStep);
  }, [isFirstSlide, xPos, slideStep, setXpos]);

  const onClickNext = useCallback(() => {
    if (!isLastSlide) setXpos(xPos - slideStep);
  }, [isLastSlide, xPos, slideStep, setXpos]);

  return (
    <SliderButton>
      <Arrow onClick={onClickPrev} isDisabled={isFirstSlide}>
        <SVGComponent name='left-arrow-icon' width='16' height='16' viewBox='16' />
      </Arrow>
      <Arrow onClick={onClickNext} isDisabled={isLastSlide}>
        <SVGComponent name='right-arrow-icon' width='16' height='16' viewBox='16' />
      </Arrow>
    </SliderButton>
  );
}
