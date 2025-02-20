'use client';

import React from 'react';
import Link from 'next/link';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Container } from '../../../styles/commonStyles';
import {
  DetailLink,
  GlossaryContainer,
  GlossaryDetailTitle,
  GlossaryDetailcontent,
  PageBack
} from '../../../styles/glossaryStyles';
import { COPILOT_ONBOARDING_LINK } from '../../../constants/externalLinks';
import { isEmpty } from '../../../helpers/helpers';

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
        <GlossaryDetailcontent>
          {!isEmpty(detail?.metaTitle) && <h2>{detail?.metaTitle}</h2>}
          {documentToReactComponents(detail?.body?.json)}
          <h2>Looking for a better way to run your service business?</h2>
          <p>
            Copilot’s product suite gives businesses an all-in-one solution for client management, messaging, payments,
            file-sharing, contracts, forms, help desks, and more. Additionally, Copilot enables businesses to offer
            their clients a unified experience with a branded client portal. To give Copilot a try you can start a free
            14-day trial <Link href={COPILOT_ONBOARDING_LINK}>here</Link>.
          </p>
        </GlossaryDetailcontent>
      </GlossaryContainer>
    </Container>
  );
}
