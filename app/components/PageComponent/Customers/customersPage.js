'use client';
import React, { useMemo } from 'react';
import CustomerTestimonial from '../../customer/testimonials';
import { Container } from '../../../styles/commonStyles';
import { LastSection, CustomerPageWrapper, CaseStudyWrapper } from '../../../styles/customerstyles';
import { isEmpty } from '../../../helpers/helpers';
import NewCTA from '../../cta/newCTA';
import CustomerPageHero from '../../standardHero/customerPageHero/customerPageHero';
import SectionHeader from '../../sectionHeader/sectionHeader';
import CustomerTableSection from './customerTableSection';

export default function CustomerPage({
  casestudiesPosts,
  externalLinks = {},
  caseStudiesData = [],
  designations = [],
  heroSection = {},
  customerCTA = {}
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
          image={heroSection?.banner1?.url}
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
      {/* <CustomerTableSection
        designations={designations}
        caseStudies={caseStudiesData}
        title={CustomerTableSectionData.title}
        description={CustomerTableSectionData.description}
        primaryButtonLink={CustomerTableSectionData.primaryButtonLink}
        primaryButtonText={CustomerTableSectionData.primaryButtonText}
      /> */}
      {!isEmpty(customerCTA) && (
        <NewCTA
          title={customerCTA.title}
          description={customerCTA.description}
          primaryButtonLink={customerCTA.primaryButtonLink}
          primaryButtonText={customerCTA.primaryButtonText}
          secondaryButtonLink={customerCTA.secondaryButtonLink}
          secondaryButtonText={customerCTA.secondaryButtonText}
        />
      )}
    </CustomerPageWrapper>
  );
}
