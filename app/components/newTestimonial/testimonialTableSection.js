'use client';
import React from 'react';
import { Container } from '../../styles/commonStyles';
import SubHeroComponent from '../Hero/subHero';
import { TestimonialSection } from './styles';
import TestimonialTable from './TestimonialTable';
import { createArrayWithFixedLength, removeEmptyElement } from '../../helpers/helpers';

export default function TestimonialTableSection({
  title,
  description,
  tableData,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
  isStandardPage
}) {
  //adjust table data
  const testimonialTableData = createArrayWithFixedLength(removeEmptyElement(tableData), 18);
  return (
    <div>
      <Container>
        <TestimonialSection isStandardPage={isStandardPage}>
          <SubHeroComponent
            data={{
              heroTitle: title,
              heroDescription: description,
              primaryButtonText: primaryButtonText,
              primaryButtonLink: primaryButtonLink,
              secondaryButtonText: secondaryButtonText,
              secondaryButtonLink: secondaryButtonLink
            }}
          />
          <TestimonialTable tableData={testimonialTableData} />
        </TestimonialSection>
      </Container>
    </div>
  );
}
