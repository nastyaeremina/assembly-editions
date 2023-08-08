'use client';

import React from 'react';
import Link from 'next/link';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Container } from '../../../styles/commonStyles';
import {
  DetailLink,
  GlossaryContainer,
  GlossaryDetailTitle,
  GlossaryDetailcontant,
  GlossaryDetailcontent,
  PageBack
} from '../../../styles/glossaryStyles';

export default function GlossaryDetailsPage({ detail }) {
  return (
    <Container>
      <GlossaryContainer>
        <PageBack>
          <Link href='/glossary'>
            <DetailLink>
              <svg width='12' height='12' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M8.42969 1.37109L3.8012 5.99958L8.42969 10.6281'
                  stroke='#757575'
                  stroke-width='1.92854'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
              </svg>
              <p>Back to Glossary</p>
            </DetailLink>
          </Link>
        </PageBack>
        <GlossaryDetailTitle>{detail?.name}</GlossaryDetailTitle>
        <GlossaryDetailcontent> {documentToReactComponents(detail?.body?.json)} </GlossaryDetailcontent>
      </GlossaryContainer>
    </Container>
  );
}
