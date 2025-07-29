'use client';

import { HomeMain } from '../../../styles/homepageStyles';
import HomeHeroSection from '../../standardHero/hybrid';
import { isEmpty } from '../../../helpers/helpers';
import BusinessSectionComponent from '../businessSection';
import PartnerAppsComponent from '../../partnerApps/partnerApps';
import FeatureSection from '../../featureSection/featureSection';
import TestimonialTableSection from '../../newTestimonial/testimonialTableSection';
import AutomationSection from '../automationSection';
import HelpSection from '../helpSection';
import { SupportSectionData } from '../../../constants/raw';

export default function HomePage({ content, testimonialTableData }) {
  if (isEmpty(content)) return null;
  return (
    <>
      <HomeMain>
        <HomeHeroSection
          title={content.heroTitle}
          body={content.heroBody}
          image1={content.heroImage1?.url}
          image2={content.heroImage2?.url}
          leftImageTitle={content.heroImage1?.title}
          rightImageTitle={content.heroImage2?.title}
          isLight={true}
          primaryButtonText={content.heroPrimaryButtonText}
          primaryButtonLink={content.heroPrimaryButtonLink}
          secondaryButtonText={content.heroSecondaryButtonText}
          secondaryButtonLink={content.heroSecondaryButtonLink}
        />
        <BusinessSectionComponent
          title={content.heading1}
          description={content.body1}
          primaryButtonText={content.primaryButtonText1}
          PrimaryButtonLink={content.primaryButtonLink1}
          sliderData={content.section1Collection?.items}
        />

        <FeatureSection
          featuresList={content.featuresCollection?.items}
          heroSectionData={{
            heroTitle: content.heading2,
            heroDescription: content.body2,
            primaryButtonText: content.primaryButtonText2,
            secondaryButtonText: content.secondaryButtonText2,
            primaryButtonLink: content.primaryButtonLink2,
            secondaryButtonLink: content.secondaryButtonLink2
          }}
        />
        <PartnerAppsComponent
          title={content.heading3}
          description={content.body3}
          appList={content.partnerAppsCollection?.items}
        />
        <FeatureSection
          featuresList={content.section6DataCollection?.items}
          heroSectionData={{
            heroTitle: content.heading6,
            heroDescription: content.body6,
            primaryButtonText: content.primaryButtonText6,
            secondaryButtonText: content.secondaryButtonText6,
            primaryButtonLink: content.primaryButtonLink6,
            secondaryButtonLink: content.secondaryButtonLink6
          }}
        />
        <AutomationSection
          title={content.heading4}
          markdownContent={content.body4}
          primaryButtonLink={content.primaryButtonLink4}
          primaryButtonText={content.primaryButtonText4}
          secondaryButtonLink={content.secondaryButtonLink4}
          secondaryButtonText={content.secondaryButtonText4}
        />
        {!isEmpty(testimonialTableData) && (
          <TestimonialTableSection
            title={content.heading7}
            description={content.body7}
            tableData={testimonialTableData}
          />
        )}
        <HelpSection
          title={content.heading5}
          image={content.supportSectionImage?.url}
          data={SupportSectionData.items}
        />
      </HomeMain>
    </>
  );
}
