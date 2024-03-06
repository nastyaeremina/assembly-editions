'use client';
import React from 'react';
import Link from 'next/link';
import { isEmpty } from '../../helpers/helpers';
import { AboutSection, Info, InfoDescription, InfoDiv, InfoTitle, Title } from './templateBodyStyle';

export default function AboutComponent({ maker, highlights, industry }) {
  return (
    <AboutSection>
      <Title>About</Title>
      <Info>
        {!isEmpty(maker) && (
          <InfoDiv>
            <InfoTitle>Maker</InfoTitle>
            <InfoDescription>{maker}</InfoDescription>
          </InfoDiv>
        )}
        {!isEmpty(highlights) && (
          <InfoDiv>
            <InfoTitle>Highlights</InfoTitle>
            <InfoDescription>{highlights}</InfoDescription>
          </InfoDiv>
        )}
        {!isEmpty(industry) && (
          <InfoDiv>
            <InfoTitle>Industry</InfoTitle>
            <InfoDescription>
              <Link href={`/solutions/${industry?.slug}`}>{industry?.name}</Link>
            </InfoDescription>
          </InfoDiv>
        )}
      </Info>
    </AboutSection>
  );
}
