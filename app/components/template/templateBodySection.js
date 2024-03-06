'use client';
import Link from 'next/link';
import React from 'react';
import { Container } from '../../styles/commonStyles';
import { TemplateBody } from './templateBodyStyle';
import TemplateDetail from './templateDetail';
import TemplateRight from './templateRight';

export default function TemplateBodySection({ bodyContent, appsList, aboutContent }) {
  return (
    <>
      <Container>
        <TemplateBody>
          {/* left content */}
          <TemplateDetail content={bodyContent} />
          {/* right content */}
          <TemplateRight appsList={appsList} aboutContent={aboutContent} />
        </TemplateBody>
      </Container>
    </>
  );
}
