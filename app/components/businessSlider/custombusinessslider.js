import Image from 'next/image';
import { useEffect, useMemo } from 'react';
import { isEmpty } from '../../helpers/helpers';
import { Animated, HomeSlider } from '../../components/businessSlider/customstyles';
import { LeftBorder, RightBorder, SlideImg, SliderWrap, WrapImage, WrapSlide } from './styles';

/**
 * BusinessSlider Component for Desktop
 * @param {Object} props - Component props
 * @param {Array} props.data - Array of data for the custom business slider
 * @returns {JSX.Element} - JSX markup for the CustomBusinessSlider component
 */
const CustomBusinessSlider = ({ data = [] }) => {
  /**
   * Generates the view for each data item in the slider.
   * @returns {Array} - Array of JSX elements representing each data item in the slider
   */
  const featureContentView = useMemo(() => {
    if (isEmpty(data)) return null;
    return data?.map((item, index) => {
      if (isEmpty(item)) return null;
      return (
        <WrapSlide className='mydiv' key={`slider_index_${index}`}>
          <LeftBorder className='hide'></LeftBorder>
          <WrapImage>
            <SlideImg>
              {/* Image component for each data item */}
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
          <RightBorder className='hide'> </RightBorder>
        </WrapSlide>
      );
    });
  }, [data]);

  // JSX markup for the CustomBusinessSlider component
  return (
    <>
      {/* Animated container for the slider */}
      <Animated>
        <SliderWrap>
          {/* HomeSlider container for styling */}
          <HomeSlider>
            <div id='container' data-animated>
              {/* List container for the slider items */}
              <ul id='list'>
                {/* List item containing the generated view for each data item */}
                <li>{featureContentView}</li>
                {/* Duplicates the items in the list to create a continuous looping effect. */}
                <li aria-hidden='true'>{featureContentView}</li>
                <li aria-hidden='true'>{featureContentView}</li>
              </ul>
            </div>
          </HomeSlider>
        </SliderWrap>
      </Animated>
    </>
  );
};

export default CustomBusinessSlider;
