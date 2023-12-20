import { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import { SliderWrap, WrapImage, WrapSlide, SlideImg, MainSliderDiv } from './styles';
import SliderButton from './SliderButton';
import Carousel from './Carousel';
import { isEmpty } from '../../helpers/helpers';
/**
 * BusinessSlider Component for mobile
 * @param {Object} props - Component props
 * @param {Array} props.data - Array of data for the business slider
 * @returns {JSX.Element} - JSX markup for the slider component
 */
const BusinessSlider = ({ data = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const renderSliderView = useMemo(() => {
    if (isEmpty(data)) return null;
    return data.map((item, index) => {
      if (isEmpty(item)) return null;
      return (
        <WrapSlide key={`slider_index_${index}`}>
          <WrapImage>
            <SlideImg>
              <Image
                src={`${item?.image?.url}?w=800&h=800&fit=thumb`}
                alt='red-icon'
                className='zoom'
                width={354}
                height={354}
              />
            </SlideImg>
            <h4>{item?.industry}</h4>
            <p className='hide'>{item?.quote}</p>
          </WrapImage>
        </WrapSlide>
      );
    });
  }, [data]);

  return (
    <>
      <MainSliderDiv>
        <SliderWrap>
          <Carousel currentIndex={currentIndex} setCurrentIndex={setCurrentIndex}>
            {renderSliderView}
          </Carousel>
        </SliderWrap>
        <SliderButton count={data.length} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
      </MainSliderDiv>
    </>
  );
};

export default BusinessSlider;
