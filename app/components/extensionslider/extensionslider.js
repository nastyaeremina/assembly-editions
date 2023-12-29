'use client';

import Image from 'next/image';
import { useMemo } from 'react';
import { isEmpty } from '../../helpers/helpers';
import CustomBusinessSlider from '../businessSlider/custombusinessslider';
import { SliderWrap, SliderInner, SliderSub, SliderLine } from './styles';

/**
 * ExtensionSlider Component for displaying a slider of extension items.
 * @param {Object} props - Component props.
 * @param {Array} props.data - Array of extension data to be displayed in the slider.
 * @returns {JSX.Element} - JSX markup for the ExtensionSlider component.
 */
const ExtensionSlider = ({ data }) => {
  // Memoizing the rendering of each slide view to improve performance
  const renderSlideView = useMemo(() => {
    // If data is empty, return null (no slides to render)
    if (isEmpty(data)) return null;
    // Map through the extension data and generate JSX for each slide
    return data?.map((item, index) => {
      return (
        <>
          {/* Each slider item is a clickable link to the extension's details */}
          <SliderInner href={'/apps/directory/' + item?.slug}>
            <SliderSub>
              <Image src={item?.icon?.url} alt='red-icon' width={35} height={35} layout={'fixed'} />
              <p>{item?.name}</p>
            </SliderSub>
          </SliderInner>
          {/* Horizontal line to separate slider items */}
          <SliderLine />
        </>
      );
    });
  }, [data]);
  return (
    <>
      <SliderWrap>
        <CustomBusinessSlider renderSliderView={renderSlideView} isPauseOnHover={false} />
      </SliderWrap>
    </>
  );
};

export default ExtensionSlider;
