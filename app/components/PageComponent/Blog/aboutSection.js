'use client';
import React from 'react';
import { AboutDescription, AboutSectionWrapper, AboutTitle } from '../../../components/blogdetailHero/styles';
import { Container } from '../../../styles/commonStyles';

function AboutSection({ description }) {
  return (
    <Container>
      <AboutSectionWrapper>
        <AboutTitle>About</AboutTitle>
        <AboutDescription dangerouslySetInnerHTML={{ __html: description }} />
      </AboutSectionWrapper>
    </Container>
  );
}

export default AboutSection;
