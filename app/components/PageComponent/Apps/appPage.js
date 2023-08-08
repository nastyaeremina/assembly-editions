'use client';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import {
  AutomationButton,
  AutomationHero,
  Caption,
  Featured,
  SetupAutomation,
  Title
} from '../../../styles/automationStyles';
import { Container } from '../../../styles/commonStyles';
import Button from '../../../components/button/button';
import CTA from '../../../components/cta/cta';
import TabView from '../../../components/tab/tab';
import { HOME_MODULE_LIST, MODULE_COLOR_LIST } from '../../../constants/constant';
import AutomationCardSection from '../../../components/automationcard';
import { isEmpty, removeEmptyElement, separateSpecialChar } from '../../../helpers/helpers';
import CustomerTestimonial from '../../../components/customer/testimonials';
import FAQ from '../../../components/faq/faq';
import { TopView } from '../../../components/solution/clienttab/styles';
import AppsSlider from '../../../components/appsSlider';
import { COPILOT_ONBORADING_LINK } from '../../../constants/externalLinks';
import AppsHeroSlider from '../../../components/appsSlider/appsheroSlider';
import { AppSliderSection } from '../../../styles/appsStyles';

export default function AppPage({ details, appsList }) {
  return (
    <>
      <AutomationHero>
        <Container>
          <Title>{details?.header}</Title>
          <Caption>
            {/* <div dangerouslySetInnerHTML={{ __html: separateSpecialChar(heading) }} /> */}
            {details?.body}
          </Caption>
          <AutomationButton className='appsbutton'>
            <Button
              bgColor={'#09AA6C'}
              fontColor={'#fff'}
              borderColor={'#09AA6C'}
              text={'Start Trial'}
              href={COPILOT_ONBORADING_LINK}
              hoverColor={'rgba(255, 255, 255,0.8)'}
            />
            <Button
              bgColor={'transparent'}
              fontColor={'#E3FFEE'}
              borderColor={'#E3FFEE'}
              text={'View all Apps'}
              href={'/apps/directory'}
              hoverColor={'rgba(255, 255, 255,0.8)'}
            />
          </AutomationButton>
        </Container>
        {!isEmpty(appsList) && (
          <AppSliderSection>
            <AppsHeroSlider data={appsList} />
            <div className='drop'></div>
          </AppSliderSection>
        )}
      </AutomationHero>
      <Container>
        <SetupAutomation istitle>
          <div
            dangerouslySetInnerHTML={{
              __html: separateSpecialChar(details?.sectionHeader1)
            }}
          />
        </SetupAutomation>
        {!isEmpty(details?.sectionContent1Collection?.items) && (
          <TabView
            tabData={details?.sectionContent1Collection?.items || []}
            bgColor={MODULE_COLOR_LIST[HOME_MODULE_LIST['Automation']]?.bgColor}
            textColor={MODULE_COLOR_LIST[HOME_MODULE_LIST['Automation']]?.fontColor}
            isAutomation={true}
          />
        )}
        {!isEmpty(details?.sectionContent2Collection?.items) && (
          <AutomationCardSection
            heading={details?.sectionHeader2}
            data={details?.sectionContent2Collection?.items}
            isAppExplore={true}
          />
        )}{' '}
      </Container>
      {/* <ExploreTab
          data={removeEmptyElement(details?.sectionContent3Collection?.items)}
          demoUrl={details?.demoPortalUrl}
        /> */}
      <Container>
        {!isEmpty(details?.sectionCaseStudyContent) && (
          <>
            <SetupAutomation>
              <div
                dangerouslySetInnerHTML={{
                  __html: separateSpecialChar(details?.sectionCaseStudyHeader)
                }}
              />
            </SetupAutomation>

            <CustomerTestimonial
              logo={details?.sectionCaseStudyContent?.customerLogo?.imageAsset?.url}
              banner={details?.sectionCaseStudyContent?.caseStudyImage?.url}
              body={details?.sectionCaseStudyContent?.description}
              highlightsData={details?.sectionCaseStudyContent?.highlights}
              slug={details?.sectionCaseStudyContent?.slug}
            />
          </>
        )}
        <Featured>
          <TopView>
            <h2>
              <div
                dangerouslySetInnerHTML={{
                  __html: separateSpecialChar(details?.sectionFeaturedHeader)
                }}
              />
            </h2>
            {!isEmpty(details?.sectionFeaturedBody?.json) &&
              documentToReactComponents(details?.sectionFeaturedBody?.json)}
            <Button
              bgColor={'transparent'}
              fontColor={'#000000'}
              borderColor={'#000000'}
              text={'View all apps'}
              href={'/apps/directory'}
              hoverColor={'rgba(0, 0, 0, 0.5)'}
            />
          </TopView>
        </Featured>
      </Container>
      {!isEmpty(details?.sectionFeaturedContentCollection?.items) && (
        <AppsSlider data={removeEmptyElement(details?.sectionFeaturedContentCollection?.items)} isDetailSlider={true} />
      )}
      <FAQ contentID={details?.faqGroup?.sys?.id} />
      <CTA />
    </>
  );
}
