'use client';

import React, { useMemo, useState } from 'react';
import { SliderMainDiv } from './styles';
import SliderButtons from './sliderButtons';
import CarouselBlock from './carouselBlock';

function CarouselComponent({ carouselData }) {
  const [xPos, setXpos] = useState(0);
  const renderSliderButton = useMemo(() => {
    return <SliderButtons xPos={xPos} setXpos={setXpos} noOfSlide={carouselData.length} />;
  }, [carouselData.length, xPos]);

  return (
    <SliderMainDiv>
      <CarouselBlock xPos={xPos} carouselData={carouselData} />
      {renderSliderButton}
    </SliderMainDiv>
  );
}

export default CarouselComponent;
