'use client';

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { CardSec, Cards, Featured, SetupAutomation } from '../../../styles/automationStyles';
import { Container } from '../../../styles/commonStyles';
import Button from '../../button/button';
import TabView from '../../tab/tab';
import { MODULE_COLOR_LIST } from '../../../constants/constant';
import AutomationCardSection from '../../automationcard';
import ExploreTab from '../../solution/clienttab/exploretab';
import { isEmpty, removeEmptyElement } from '../../../helpers/helpers';
import ExtentionCard from '../../Extentioncard';
import CustomerTestimonial from '../../customer/testimonials';
import { TopView } from '../../solution/clienttab/styles';
import { RightSection } from '../../../styles/casestudiestyles';
import FeatureAnimated from '../../FeatureSlider/featureanimated';
import SectionHeading from '../Apps/sectionHeading';
import { COPILOT_ONBOARDING_LINK } from '../../../constants/externalLinks';
import AutomationHeroSection from './automationHeroSection';

export default function AutomationPage({ details }) {
  if (isEmpty(details)) return null;

  return (
    <>
      <AutomationHeroSection
        title={details.header}
        description={details.body}
        primaryButtonLink={COPILOT_ONBOARDING_LINK}
        primaryButtonText={'Start Trial'}
        secondaryButtonLink={'automations/directory'}
        secondaryButtonText={'View all Automations'}
      />
      <Container>
        <SectionHeading details={details.sectionHeader1} isTitle />
        <TabView
          tabData={details.sectionContent1Collection?.items || []}
          bgColor={MODULE_COLOR_LIST.Automation.bgColor}
          textColor={MODULE_COLOR_LIST.Automation.fontColor}
          isAutomation={true}
        />
      </Container>
      <AutomationCardSection title={details.sectionHeader2} data={[details.sectionContent2Collection?.items[0]]} />
      <AutomationCardSection title={details.sectionHeader3} data={details.sectionContent3Collection?.items} />
      <ExploreTab
        title={details.sectionHeader4}
        description={details.sectionBody4?.json}
        isRichText={true}
        data={removeEmptyElement(details.sectionContent4Collection?.items)}
        secondaryButtonLink={details.demoPortalUrl}
      />
      <Container>
        <SetupAutomation>
          <RightSection>{documentToReactComponents(details.sectionHeader4?.json)}</RightSection>
        </SetupAutomation>
        <CardSec>
          <ExtentionCard data={details.sectionContent5Collection?.items[0]} />
          <Cards>
            <ExtentionCard isCard={true} data={details.sectionContent5Collection?.items[1]} />
            <ExtentionCard isCard={true} data={details.sectionContent5Collection?.items[2]} />
          </Cards>
        </CardSec>
        {!isEmpty(details.sectionCaseStudyContent) && (
          <>
            <SectionHeading details={details.sectionCaseStudyHeader} />
            <CustomerTestimonial
              logo={details.sectionCaseStudyContent?.customerLogo?.imageAsset?.url}
              banner={details.sectionCaseStudyContent?.caseStudyImage?.url}
              body={details.sectionCaseStudyContent?.heroSection?.heroDescription}
              highlightsData={details.sectionCaseStudyContent?.highlights}
              slug={details.sectionCaseStudyContent?.slug}
            />
          </>
        )}
        <Featured>
          <TopView>
            <SectionHeading details={details.sectionFeaturedHeader} isRemovePadding />
            <p>{documentToReactComponents(details.sectionFeaturedBody?.json)}</p>
            <Button
              bgColor={'transparent'}
              fontColor={'--black'}
              borderColor={'--black'}
              text={'View all automations'}
              href={'/automations/directory'}
              hoverColor={'--hover-color'}
            />
          </TopView>
        </Featured>
      </Container>
      {!isEmpty(removeEmptyElement(details.sectionFeaturedContentCollection?.items)) && (
        <FeatureAnimated data={details.sectionFeaturedContentCollection?.items} isDetailSlider={true} />
      )}
    </>
  );
}
