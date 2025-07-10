'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import {
  Bottom,
  CustomerLogo,
  CustomerSection,
  Detail,
  DetailSection,
  Head,
  Left,
  LeftSection,
  RightSection,
  Top
} from '../../../styles/casestudiestyles';
import { Container } from '../../../styles/commonStyles';
import AppCardSection from '../../casestudies/appcardsection';
import HighlightSectionComponents from '../../casestudies/highlightSection';
import { isEmpty } from '../../../helpers/helpers';
import Quote from '../../quote/quote';
import { FEATURE_THEME_LIST, HeroTypes } from '../../../constants/constant';
import StandardHero from '../../standardHero/standardHero';
import RichTextDetail from '../../richTextDetail/richText';

export default function CaseStudiesPage({ details }) {
  if (isEmpty(details)) return;

  return (
    <>
      <div className='standard-page'>
        <StandardHero type={HeroTypes.CENTER} data={details.heroSection} />
      </div>
      {!isEmpty(details.highlights) && <HighlightSectionComponents data={details.highlights} />}
      <Container>
        <CustomerSection>
          <LeftSection>
            <Left>
              <Top>
                {!isEmpty(details.customerLogo?.imageAsset?.url) && (
                  <CustomerLogo>
                    <Image src={details.customerLogo?.imageAsset?.url} alt='company logo' width={218} height={50} />
                  </CustomerLogo>
                )}
                <Head>About</Head>
                <DetailSection>
                  {!isEmpty(details.customerFounded) && (
                    <Detail>
                      <h3>Founded</h3>
                      <p>{details.customerFounded}</p>
                    </Detail>
                  )}
                  {!isEmpty(details.customerSince) && (
                    <Detail>
                      <h3>Running on Copilot since</h3>
                      <p>{details.customerSince}</p>
                    </Detail>
                  )}
                  {!isEmpty(details.customerSince) && (
                    <Detail>
                      <h3>Company URL</h3>
                      <Link
                        href={
                          details.customerCompanyUrl.includes('https://') ||
                          details.customerCompanyUrl.includes('http://')
                            ? details.customerCompanyUrl
                            : `https:\\${details.customerCompanyUrl}`
                        }>
                        {details.customerCompanyUrl}
                      </Link>
                    </Detail>
                  )}
                  {!isEmpty(details.industry) && (
                    <Detail>
                      <h3>Industry</h3>
                      <Link href={`/${details.industry?.slug}`}>{details.industry?.title} </Link>
                    </Detail>
                  )}
                </DetailSection>
              </Top>
              {(!isEmpty(details.appsCollection?.items) || !isEmpty(details.appsCollection?.items)) && (
                <Bottom>
                  <Head>Apps in use</Head>
                  <AppCardSection appsList={details.appsCollection?.items} />
                </Bottom>
              )}
            </Left>
          </LeftSection>
          <RightSection>
            <RichTextDetail data={details.body?.json} assets={details.body?.links} shouldHeadingCopy={false} />
          </RightSection>
        </CustomerSection>
      </Container>
      {!isEmpty(details.testimonial) && (
        <Quote gradientImage={FEATURE_THEME_LIST.Other.imageList} data={details.testimonial} caseStudies />
      )}
    </>
  );
}
