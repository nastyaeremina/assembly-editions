'use client';

import React, { useMemo, useState } from 'react';
import { SliderMainDiv } from './styles';
import SliderButtons from './sliderButtons';
import CarouselBlock from './carouselBlock';
import { isEmpty } from '../../helpers/helpers';

function CarouselComponent({ carouselData }) {
  const [xPos, setXpos] = useState(0);
  const renderSliderButton = useMemo(() => {
    return <SliderButtons xPos={xPos} setXpos={setXpos} noOfSlide={carouselData.length} />;
  }, [carouselData.length, xPos]);

  if (isEmpty(carouselData)) return null;
  return (
    <SliderMainDiv>
      <CarouselBlock xPos={xPos} carouselData={carouselData} />
      {renderSliderButton}
    </SliderMainDiv>
  );
}

export default CarouselComponent;
