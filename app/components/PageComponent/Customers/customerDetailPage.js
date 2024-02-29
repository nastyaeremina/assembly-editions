'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Button from '../../button/button';
import CTA from '../../cta/cta';
import {
  Bottom,
  CustomerLogo,
  CustomerSection,
  Detail,
  DetailSection,
  Head,
  HeroBtnBlock,
  HeroHeading,
  HeroSection,
  Left,
  LeftSection,
  Para,
  RightSection,
  Top
} from '../../../styles/casestudiestyles';
import { Container } from '../../../styles/commonStyles';
import AppCardSection from '../../casestudies/appcardsection';
import HighlightSectionComponents from '../../casestudies/highlightSection';
import { isEmpty } from '../../../helpers/helpers';
import Quote from '../../quote/quote';
import { FEATURE_THEME_LIST } from '../../../constants/constant';
import { COPILOT_ONBORADING_LINK } from '../../../constants/externalLinks';

export default function CaseStudiesPage({ details }) {
  return (
    <>
      <HeroSection>
        <Container>
          {!isEmpty(details?.title) && <HeroHeading>{details?.title}</HeroHeading>}
          {!isEmpty(details?.description) && <Para>{details?.description}</Para>}
          <HeroBtnBlock>
            <Button
              bgColor={'#09AA6C'}
              fontColor={'#FFFFFF'}
              borderColor={'#09AA6C'}
              text={'Start trial'}
              href={COPILOT_ONBORADING_LINK}
              hoverColor={'rgba(0, 0, 0, 0.5)'}
            />
          </HeroBtnBlock>
        </Container>
      </HeroSection>
      {!isEmpty(details?.highlights) && <HighlightSectionComponents data={details?.highlights} />}
      <Container>
        <CustomerSection>
          <LeftSection>
            <Left>
              <Top>
                {!isEmpty(details?.customerLogo?.imageAsset?.url) && (
                  <CustomerLogo>
                    <Image src={details?.customerLogo?.imageAsset?.url} alt='company logo' width={218} height={50} />
                  </CustomerLogo>
                )}
                <Head>About</Head>
                <DetailSection>
                  {!isEmpty(details?.customerFounded) && (
                    <Detail>
                      <h3>Founded</h3>
                      <p>{details?.customerFounded}</p>
                    </Detail>
                  )}
                  {!isEmpty(details?.customerSince) && (
                    <Detail>
                      <h3>Running on Copilot since</h3>
                      <p>{details?.customerSince}</p>
                    </Detail>
                  )}
                  {!isEmpty(details?.customerSince) && (
                    <Detail>
                      <h3>Company URL</h3>
                      <Link
                        href={
                          details?.customerCompanyUrl.includes('https://') ||
                          details?.customerCompanyUrl.includes('http://')
                            ? details?.customerCompanyUrl
                            : `https:\\${details?.customerCompanyUrl}`
                        }>
                        {details?.customerCompanyUrl}
                      </Link>
                    </Detail>
                  )}
                  {!isEmpty(details?.solution) && (
                    <Detail>
                      <h3>Industry</h3>
                      <Link href={`/solutions/${details?.solution?.slug}`}>{details?.solution?.name} </Link>
                    </Detail>
                  )}
                </DetailSection>
              </Top>
              {(!isEmpty(details?.copilotAppsCollection?.items) || !isEmpty(details?.appsCollection?.items)) && (
                <Bottom>
                  <Head>Apps in use</Head>
                  <AppCardSection
                    copilotAppList={details?.copilotAppsCollection?.items}
                    appsList={details?.appsCollection?.items}
                  />
                </Bottom>
              )}
            </Left>
          </LeftSection>
          <RightSection>{documentToReactComponents(details?.body?.json)}</RightSection>
        </CustomerSection>
      </Container>
      {!isEmpty(details?.testimonial) && (
        <Quote gradientImage={FEATURE_THEME_LIST.Other.imageList} data={details?.testimonial} caseStudies />
      )}
    </>
  );
}
