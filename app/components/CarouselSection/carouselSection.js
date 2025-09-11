'use client';

import React from 'react';
import { Container } from '../../styles/commonStyles';
import { MainBlock, SectionWrapper, SliderMainDiv } from './styles';
import SectionHeader from '../sectionHeader/sectionHeader';
import CarouselComponent from '../CarouselComponent/carouselComponent';
import { isEmpty } from '../../helpers/helpers';

function CarouselSection({ title, description, primaryButtonLink, primaryButtonText, carouselData }) {
  // make sure carouselData data every item have image.url is not null or image is not null
  const filteredCarouselData = carouselData.filter((item) => item?.image?.url || item?.image?.url !== null);

  if(isEmpty(filteredCarouselData)) return null;
  return (
    <MainBlock>
      <Container>
        <SectionWrapper>
          {/* title section */}
          <SectionHeader
            title={title}
            description={description}
            primaryButtonLink={primaryButtonLink}
            primaryButtonText={primaryButtonText}
          />
          {/* carousel section */}
          <SliderMainDiv>
            <CarouselComponent carouselData={filteredCarouselData} />
          </SliderMainDiv>
        </SectionWrapper>
      </Container>
    </MainBlock>
  );
}

export default CarouselSection;
