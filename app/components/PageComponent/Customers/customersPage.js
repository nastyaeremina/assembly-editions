'use client';
import React, { useMemo } from 'react';
import CustomerTestimonial from '../../customer/testimonials';
import { Container } from '../../../styles/commonStyles';
import { LastSection, CustomerPageWrapper, CaseStudyWrapper } from '../../../styles/customerstyles';
import { isEmpty } from '../../../helpers/helpers';
import { EXTERNAL_LINK_KEYS } from '../../../constants/constant';
import NewCTA from '../../cta/newCTA';
import { CTAData, CustomerTableSectionData } from '../../../constants/raw';
import CustomerHeroImage from '../../../../public/images/customer-hero-image.png';
import CustomerPageHero from '../../standardHero/customerPageHero/customerPageHero';
import SectionHeader from '../../sectionHeader/sectionHeader';
import CustomerTableSection from './customerTableSection';

export default function CustomerPage({
  casestudiesPosts,
  externalLinks = {},
  caseStudiesData = [],
  designations = [],
  heroSection = {}
}) {
  const casestudiesView = useMemo(() => {
    if (isEmpty(casestudiesPosts)) return null;
    return casestudiesPosts?.map((item, index) => {
      if (isEmpty(item)) return null;
      return (
        <CustomerTestimonial
          key={`casestudy_index_${index}`}
          logo={item.customerLogo?.imageAsset?.url}
          banner={item.caseStudyImage?.url}
          body={item.heroSection.heroTitle}
          highlightsData={item.highlights}
          slug={item.slug}
          isFullWidth={item.isFullWidth}
        />
      );
    });
  }, [casestudiesPosts]);

  return (
    <CustomerPageWrapper>
      {!isEmpty(heroSection) && (
        <CustomerPageHero
          image={CustomerHeroImage.src}
          title={heroSection?.heroTitle}
          body={heroSection?.heroDescription}
          primaryButtonLink={heroSection?.primaryButtonLink}
          primaryButtonText={heroSection?.primaryButtonText}
        />
      )}
      {!isEmpty(casestudiesPosts) && (
        <CaseStudyWrapper>
          <Container>
            <SectionHeader
              title='From clutter to <br/> client-favorite'
              description='Delight clients with a modern portal to connect, pay, and share files — all in one place.'
            />
            <LastSection>{casestudiesView}</LastSection>
          </Container>
        </CaseStudyWrapper>
      )}
      <CustomerTableSection
        designations={designations}
        caseStudies={caseStudiesData}
        title={CustomerTableSectionData.title}
        description={CustomerTableSectionData.description}
        primaryButtonLink={CustomerTableSectionData.primaryButtonLink}
        primaryButtonText={CustomerTableSectionData.primaryButtonText}
      />
      <NewCTA
        title={CTAData.title}
        description={CTAData.description}
        primaryButtonLink={CTAData.primaryButtonLink}
        primaryButtonText={CTAData.primaryButtonText}
        secondaryButtonLink={CTAData.secondaryButtonLink}
        secondaryButtonText={CTAData.secondaryButtonText}
      />
    </CustomerPageWrapper>
  );
}
