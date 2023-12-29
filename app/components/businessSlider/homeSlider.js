import React, { useCallback, useMemo } from 'react';
import Image from 'next/image';
import { Desktop, Responsive } from '../../styles/homepageStyles';
import { isEmpty, removeEmptyElement } from '../../helpers/helpers';
import BusinessSlider from './businessslider';
import CustomBusinessSlider from './custombusinessslider';
import { LeftBorder, RightBorder, SlideImg, WrapImage, WrapSlide } from './styles';

/**
 * Slider Component
 * @param {Object} props - Component props
 * @param {Array} props.data - Array of data to be passed to both slider components
 * @returns {JSX.Element} - JSX markup for the Slider component
 */
const Slider = ({ data }) => {
  /**
   * Render the Slider View
   * @function
   * @param {boolean} isDesktop - Flag indicating whether the view is for desktop
   * @returns {JSX.Element | null} - JSX markup for the Slider View or null if data is empty
   */
  const renderSliderView = useCallback(
    (isDesktop = false) => {
      if (isEmpty(data)) return null;
      const sliderViewData = data?.map((item, index) => {
        // Check if the data is empty, if so, return null
        if (isEmpty(item)) return null;
        return (
          <WrapSlide className='mydiv' key={`slider_index_${index}`}>
            {/* Conditionally render left border for desktop view */}
            {isDesktop && <LeftBorder className='hide'></LeftBorder>}
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
            {/* Conditionally render right border for desktop view */}
            {isDesktop && <RightBorder className='hide'> </RightBorder>}{' '}
          </WrapSlide>
        );
      });

      // Remove any null elements from the slider view data
      return removeEmptyElement(sliderViewData);
    },
    [data]
  );

  return (
    <>
      {/* For mobile device*/}
      <Responsive>
        <BusinessSlider renderSliderView={renderSliderView()} slide={data.length} />
      </Responsive>
      {/* For Desktop and tablet */}
      <Desktop>
        <CustomBusinessSlider renderSliderView={renderSliderView(true)} isPauseOnHover={true} />
      </Desktop>
    </>
  );
};

export default Slider;
