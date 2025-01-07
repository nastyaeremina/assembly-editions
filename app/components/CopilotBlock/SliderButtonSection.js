import React, { useCallback } from 'react';
import { Arrow, SliderButton } from '../../styles/homepageStyles';
import SVGComponent from '../../../public/images/svg/SVGComponent';
import { useWindowDimensions } from '../../hooks/useMobileDevice';

export default function SliderButtonSection({
  xPos,
  setXpos,
  noOfSlide,
  isComparisonDetails,
  sliderItemWidth = 528,
  padding = 22
}) {
  const { width } = useWindowDimensions();
  // calculate slider position based on the slide item to  prevent the next slide show
  const minimumSlidePosition = width > 1024 ? (noOfSlide - 2) * -sliderItemWidth : (noOfSlide - 1) * -sliderItemWidth;

  const onClickPrev = useCallback(() => {
    if (width > 450) {
      //set next slide position
      if (xPos > minimumSlidePosition) setXpos(xPos - sliderItemWidth);
    } else {
      if (xPos > -(width * (noOfSlide - 1))) setXpos(xPos - width + padding);
    }
  }, [minimumSlidePosition, noOfSlide, setXpos, width, xPos]);

  const onClickNext = useCallback(() => {
    if (width > 450) {
      //set previous slide position
      if (xPos !== 0) setXpos(xPos + sliderItemWidth);
    } else {
      //set previous slide  card width + padding size
      if (xPos !== 0) setXpos(xPos + width - padding);
    }
  }, [setXpos, width, xPos]);

  return (
    <SliderButton isComparisonDetails={isComparisonDetails}>
      <Arrow onClick={onClickNext} isDisabled={xPos === 0}>
        <SVGComponent name='left-arrow-icon' width='16' height='16' viewBox='16' />
      </Arrow>
      <Arrow onClick={onClickPrev} isDisabled={xPos <= minimumSlidePosition}>
        <SVGComponent name='right-arrow-icon' width='16' height='16' viewBox='16' />
      </Arrow>
    </SliderButton>
  );
}
