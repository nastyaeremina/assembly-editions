'use client';
import React from 'react';
import Link from 'next/link';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Container, Content } from '../../../styles/commonStyles';
import {
  BottomSection,
  DetailHeroSection,
  GlossaryContainer,
  GlossaryDetailTitle,
  ImageSection,
  PageBack
} from '../../../styles/glossaryStyles';
import { isEmpty } from '../../../helpers/helpers';
import { EXTERNAL_LINK_KEYS } from '../../../constants/constant';
import Breadcrumbs from '../../Breadcrumbs/breadcrumbs';
import Image from 'next/image';

export default function GlossaryDetailsPage({ detail, externalLinks = {} }) {
  const BreadcrumbItem = [{ label: 'Glossary', href: '/definitions' }];

  return (
    <Container>
      <GlossaryContainer>
        <DetailHeroSection>
          <PageBack>
            <Breadcrumbs breadcrumbs={BreadcrumbItem} currentLabel={detail?.name} />
            <GlossaryDetailTitle>{detail?.name}</GlossaryDetailTitle>
          </PageBack>
          {!isEmpty(detail?.image) && (
            <ImageSection>
              <Image src={detail.image.url} alt={detail?.image.title} width={1224} height={688} className='image' />
            </ImageSection>
          )}
        </DetailHeroSection>
        <BottomSection>
          <Content>
            {!isEmpty(detail?.metaTitle) && <h2>{detail?.metaTitle}</h2>}
            {documentToReactComponents(detail?.body?.json)}
            <h2>Looking for a better way to run your service business?</h2>
            <p>
              Assembly's product suite gives businesses an all-in-one solution for client management, messaging,
              payments, file-sharing, contracts, forms, help desks, and more. Additionally, Assembly enables businesses
              to offer their clients a unified experience with a branded client portal. To give Assembly a try you can
              start a free 14-day trial {''}
              <Link href={externalLinks?.[EXTERNAL_LINK_KEYS.OnboardingLink] || '#'}>here</Link>.
            </p>
          </Content>
        </BottomSection>
      </GlossaryContainer>
    </Container>
  );
}
