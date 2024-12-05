'use client';
import React from 'react';
import { SectionDiv } from './styles';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Container } from '../../styles/commonStyles';

function HighlightSection({ data }) {
  return (
    <Container>
      <SectionDiv>{documentToReactComponents(data)}</SectionDiv>
    </Container>
  );
}

export default HighlightSection;
