'use client';
import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Container } from '../../styles/commonStyles';
import { SectionDiv } from './styles';

function HighlightSection({ data }) {
  return (
    <Container>
      <SectionDiv>{documentToReactComponents(data)}</SectionDiv>
    </Container>
  );
}

export default HighlightSection;
