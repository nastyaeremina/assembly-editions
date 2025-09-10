'use client';

import React from 'react';
import { Container } from '../../styles/commonStyles';
import { MainBlock, SectionWrapper, SliderMainDiv } from './styles';
import SectionHeader from '../sectionHeader/sectionHeader';
import CarouselComponent from '../CarouselComponent/carouselComponent';

function CarouselSection({ title, description, primaryButtonLink, primaryButtonText, carouselData }) {
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
            <CarouselComponent carouselData={carouselData} />
          </SliderMainDiv>
        </SectionWrapper>
      </Container>
    </MainBlock>
  );
}

export default CarouselSection;
