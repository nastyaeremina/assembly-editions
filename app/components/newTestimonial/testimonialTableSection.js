import React from 'react';
import { Container } from '../../styles/commonStyles';
import SubHeroComponent from '../Hero/subHero';
import { TestimonialSection } from './styles';
import TestimonialTable from './TestimonialTable';

export default function TestimonialTableSection({ title, description, tableData }) {
  return (
    <div>
      <Container>
        <TestimonialSection>
          <SubHeroComponent data={{ heroTitle: title, heroDescription: description }} />
          <TestimonialTable tableData={tableData} />
        </TestimonialSection>
      </Container>
    </div>
  );
}
