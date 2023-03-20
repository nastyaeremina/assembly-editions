import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Button from '../../components/button/button';
import CTA from '../../components/cta/cta';
import Layout from '../../components/layout';
import Navbar from '../../components/navbar/navbar';
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
  Highlight,
  HighlightSection,
  Last,
  LastDroplist,
  LeftSection,
  Para,
  RightSection,
  Top
} from '../../styles/casestudiestyles';
import { Container } from '../../styles/commonStyles';
import logo from '../../public/images/logo1.png';
import AppCardSection from '../../components/casestudies/appcardsection';
import HighLightsCard from '../../components/casestudies/highlights';
import HighlightSectionComponents from '../../components/casestudies/highlightSection';
import { getCaseStudyDetail, getCaseStudyWithSlug } from '../../lib/contentful-casestudies';
import { isEmpty } from '../../helpers/helpers';
import Quote from '../../components/quote/quote';
import { MODULE_GRADIENT_IMAGE_LIST, MUDULE_LIST } from '../../constants/constant';
import { COPILOT_ONBORADING_LINK } from '../../constants/externalLinks';

export default function CaseStudies({ postDetail: details }) {
  return (
    <>
      <Layout>
        <Navbar />
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
              {!isEmpty(details?.copilotAppsCollection?.items) ||
                (!isEmpty(details?.appsCollection?.items) && (
                  <Bottom>
                    <Head>Apps in use</Head>
                    <AppCardSection
                      copilotAppList={details?.copilotAppsCollection?.items}
                      appsList={details?.appsCollection?.items}
                    />
                  </Bottom>
                ))}
            </LeftSection>
            <RightSection>{documentToReactComponents(details?.body?.json)}</RightSection>
          </CustomerSection>
        </Container>
        {!isEmpty(details?.testimonial) && (
          <Quote
            gradientImage={MODULE_GRADIENT_IMAGE_LIST[MUDULE_LIST.OTHER]}
            data={details?.testimonial}
            caseStudies
          />
        )}
        <CTA />
      </Layout>
    </>
  );
}
export async function getStaticProps({ params, preview = false }) {
  const postDetail = (await getCaseStudyDetail({ slug: params?.slug })) || {};

  return {
    props: { postDetail }
  };
}

export async function getStaticPaths() {
  const allPosts = (await getCaseStudyWithSlug()) ?? [];
  return {
    paths: allPosts?.map(({ slug }) => `/case-studies/${slug}`) ?? [],

    fallback: true
  };
}
