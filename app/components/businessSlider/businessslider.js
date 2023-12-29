import { useState } from 'react';
import { SliderWrap, MainSliderDiv } from './styles';
import SliderButton from './SliderButton';
import Carousel from './Carousel';

/**
 * BusinessSlider Component for mobile.
 * @param {Object} props - Component props.
 * @param {Function} props.renderSliderView - Function that renders the view for each slider item.
 * @param {number} [props.slide=0] - number of slide item.
 * @returns {JSX.Element} - JSX markup for the business slider component.
 */
const BusinessSlider = ({ renderSliderView, slide = 0 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <>
      <MainSliderDiv>
        <SliderWrap>
          <Carousel currentIndex={currentIndex} setCurrentIndex={setCurrentIndex}>
            {renderSliderView}
          </Carousel>
        </SliderWrap>
        <SliderButton count={slide} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
      </MainSliderDiv>
    </>
  );
};

export default BusinessSlider;
