'use client';
import React, { useMemo } from 'react';
import Button from '../../button/button';
import CustomerTestimonial from '../../customer/testimonials';
import { Container } from '../../../styles/commonStyles';
import { Heading, HeroBtnBlock, HeroHeading, HeroSection, Para, LastSection } from '../../../styles/customerstyles';
import { isEmpty } from '../../../helpers/helpers';
import { EXTERNAL_LINK_KEYS } from '../../../constants/constant';
import { Banner } from '../../feedback/banner';

export default function CustomerPage({ testimonialPosts, casestudiesPosts, externalLinks = {} }) {
  const casestudiesView = useMemo(() => {
    if (isEmpty(casestudiesPosts)) return null;
    return casestudiesPosts?.map((item, index) => {
      return (
        <CustomerTestimonial
          key={`casestudy_index_${index}`}
          logo={item?.customerLogo?.imageAsset?.url}
          banner={item?.caseStudyImage?.url}
          body={item?.heroSection.heroDescription}
          highlightsData={item?.highlights}
          slug={item?.slug}
        />
      );
    });
  }, [casestudiesPosts]);

  return (
    <>
      <HeroSection>
        <Container>
          <HeroHeading>Meet our customers</HeroHeading>
          <Para mainpagebody>
            Thousands of tech-enabled service companies – modern accounting firms, consulting businesses, marketing
            agencies – and others use Copilot to streamline their business and grow faster.
          </Para>
          <HeroBtnBlock>
            <Button
              bgColor={'--primary'}
              fontColor={'--white'}
              borderColor={'--primary'}
              text={'Start trial'}
              href={externalLinks?.[EXTERNAL_LINK_KEYS.OnboardingLink]}
              hoverColor={'--hover-color'}
            />
          </HeroBtnBlock>
        </Container>
      </HeroSection>
      {!isEmpty(testimonialPosts) && <Banner speed={25000} data={testimonialPosts} />}
      {!isEmpty(casestudiesPosts) && (
        <>
          <Container>
            <Heading>How Copilot helps businesses succeed</Heading>
          </Container>
          <LastSection>{casestudiesView}</LastSection>
        </>
      )}
    </>
  );
}
