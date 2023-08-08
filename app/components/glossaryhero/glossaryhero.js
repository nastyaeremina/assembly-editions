import React from 'react';
import { Container } from '../../styles/commonStyles';
import { HeroBody, HeroSection, HeroTitle } from './styles';

export default function GlossaryHero() {
  return (
    <Container>
      <HeroSection>
        <HeroTitle>Glossary</HeroTitle>
        <HeroBody>Explore commonly used terms related to Copilot and service businesses</HeroBody>
      </HeroSection>
    </Container>
  );
}
