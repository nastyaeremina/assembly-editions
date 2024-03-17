import React, { useCallback } from 'react';
import { Arrow, SliderButton } from '../../styles/homepageStyles';
import SVGComponent from '../../../public/images/svg/SVGComponent';
import { useWindowDimensions } from '../../hooks/useMobileDevice';

//sliderItemWidth represent the hight of single slide
const sliderItemWidth = 530;
export default function SliderButtonSection({ xPos, setXpos, noOfSlide }) {
  // calculate slider position based on the slide item to  prevent the next slide show
  const minimumSlidePosition = (noOfSlide - 2) * -sliderItemWidth;
  const { width } = useWindowDimensions();

  const onClickPrev = useCallback(() => {
    if (width > 450) {
      //set next slide position
      if (xPos > minimumSlidePosition) setXpos(xPos - sliderItemWidth);
    } else {
      if (xPos > -(width * (noOfSlide - 1))) setXpos(xPos - (width + 27));
    }
  }, [minimumSlidePosition, noOfSlide, setXpos, width, xPos]);

  const onClickNext = useCallback(() => {
    if (width > 450) {
      //set previous slide position
      if (xPos !== 0) setXpos(xPos + sliderItemWidth);
    } else {
      //set previous slide  card width + padding size
      if (xPos !== 0) setXpos(xPos + (width + 27));
    }
  }, [width, xPos]);

  return (
    <SliderButton>
      <Arrow onClick={onClickPrev} isDisabled={xPos <= minimumSlidePosition}>
        <SVGComponent name='left-arrow-icon' width='16' height='16' viewBox='16' />
      </Arrow>
      <Arrow onClick={onClickNext} isDisabled={xPos === 0}>
        <SVGComponent name='right-arrow-icon' width='16' height='16' viewBox='16' />
      </Arrow>
    </SliderButton>
  );
}
