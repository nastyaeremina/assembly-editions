import React, { useEffect, useMemo } from 'react';
import Image from 'next/image';
import { isEmpty } from '../../helpers/helpers';
import Slider from '../feedback/slider';
import { SliderHeight } from '../../constants/constant';
import { Animated, SliderIcon, SliderInner, SliderLine, SliderSub } from './styles';

export default function FeatureAnimated({ data, isDetailSlider }) {
  const featurecontentView = useMemo(() => {
    if (isEmpty(data)) return null;
    return data?.map((item, index) => {
      return (
        <>
          <SliderInner href={`/automations/directory/${item?.slug}`} key={`slider_index_${index}`}>
            <div className='appsslider-card'>
              <SliderSub>
                <h4>{item?.name}</h4>
                <p>{item?.description}</p>
              </SliderSub>
              <SliderIcon>
                {item?.productLogosCollection?.items?.map((logo, index) => {
                  return (
                    <Image
                      key={`automation_logo_${index}`}
                      src={logo?.url}
                      alt='logo'
                      width={40}
                      height={40}
                      className='logo'
                    />
                  );
                })}
              </SliderIcon>
            </div>
          </SliderInner>
        </>
      );
    });
  }, [data]);

  return (
    <Animated isDetailSlider={isDetailSlider}>
      <Slider speed={6} height={SliderHeight.AUTO} isHoverPause={true} gap={36} responsiveGap={20}>
        {featurecontentView}
      </Slider>
      <SliderLine></SliderLine>
    </Animated>
  );
}
