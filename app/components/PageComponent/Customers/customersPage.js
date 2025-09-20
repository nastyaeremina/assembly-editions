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

export default function CustomerPage({ casestudiesPosts, externalLinks = {} }) {
  const casestudiesView = useMemo(() => {
    if (isEmpty(casestudiesPosts)) return null;
    return casestudiesPosts?.map((item, index) => {
      if (isEmpty(item)) return null;
      return (
        <CustomerTestimonial
          key={`casestudy_index_${index}`}
          logo={item.customerLogo?.imageAsset?.url}
          banner={item.caseStudyImage?.url}
          body={item.heroSection.heroDescription}
          highlightsData={item.highlights}
          slug={item.slug}
          isFullWidth={item.isFullWidth}
        />
      );
    });
  }, [casestudiesPosts]);

  const fallbackCompanies = [
    {
      name: 'Bob Smith',
      designation: 'Finance',
      customerLogo: casestudiesPosts[0].customerLogo.imageAsset.url,
      visitLink: 'https://heritagelawpartners.com'
    },
    {
      name: 'Alice Johnson',
      designation: 'Technology',
      customerLogo: casestudiesPosts[1].customerLogo.imageAsset.url,
      slug: casestudiesPosts[1].slug
    },
    {
      name: 'Catherine Lee',
      designation: 'Healthcare',
      customerLogo: casestudiesPosts[2].customerLogo.imageAsset.url,
      slug: `/customers/${casestudiesPosts[2].slug}`
    },
    {
      name: 'David Brown',
      designation: 'Education',
      customerLogo: casestudiesPosts[3].customerLogo.imageAsset.url,
      slug: `/customers/${casestudiesPosts[3].slug}`
    },
    {
      name: 'Eva Green',
      designation: 'Marketing',
      customerLogo: casestudiesPosts[3].customerLogo.imageAsset.url,
      slug: `/customers/${casestudiesPosts[3].slug}`
    },
    {
      name: 'Frank White',
      designation: 'Real Estate',
      customerLogo: casestudiesPosts[4].customerLogo.imageAsset.url,
      slug: `/customers/${casestudiesPosts[4].slug}`
    },
    {
      name: 'Grace Black',
      designation: 'Retail',
      customerLogo: casestudiesPosts[5].customerLogo.imageAsset.url,
      slug: `/customers/${casestudiesPosts[5].slug}`
    },
    {
      name: 'Grace Black',
      designation: 'Retail',
      customerLogo: casestudiesPosts[5].customerLogo.imageAsset.url,
      slug: `/customers/${casestudiesPosts[5].slug}`
    },
    {
      name: 'Grace',
      designation: 'Retail',
      customerLogo: casestudiesPosts[5].customerLogo.imageAsset.url
    }
  ];

  const caseStudiesData = useMemo(() => {
    if (isEmpty(fallbackCompanies)) return null;

    return fallbackCompanies.map((item) => ({
      customerLogo: item.customerLogo,
      customerName: item.name,
      designation: item.designation,
      slug: item.slug,
      visitLink: item.visitLink
    }));
  }, [casestudiesPosts]);

  return (
    <CustomerPageWrapper>
      <CustomerPageHero
        image={CustomerHeroImage.src}
        title={'Made for tech-enabled professional service firms '}
        body={
          'Trusted by consulting, accounting, real estate, law, marketing, and tech firms with 1M+ clients and counting.'
        }
        primaryButtonLink={externalLinks?.[EXTERNAL_LINK_KEYS.OnboardingLink]}
        primaryButtonText={'Start trial'}
      />
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
        designations={CustomerTableSectionData.designations}
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
