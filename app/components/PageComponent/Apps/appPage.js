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
import TabView from '../../../components/tab/tab';
import { MODULE_COLOR_LIST } from '../../../constants/constant';
import AutomationCardSection from '../../../components/automationcard';
import { isEmpty, removeEmptyElement, separateSpecialChar } from '../../../helpers/helpers';
import CustomerTestimonial from '../../../components/customer/testimonials';
import FAQ from '../../../components/faq/faq';
import { TopView } from '../../../components/solution/clienttab/styles';
import AppsSlider from '../../../components/appsSlider';
import { COPILOT_ONBORADING_LINK } from '../../../constants/externalLinks';
import AppsHeroSlider from '../../../components/appsSlider/appsheroSlider';
import { AppSliderSection } from '../../../styles/appsStyles';

export default function AppPage({ details, appsList, faqList }) {
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
              bgColor={'--primary'}
              fontColor={'--white'}
              borderColor={'--priamry'}
              text={'Start Trial'}
              href={COPILOT_ONBORADING_LINK}
              hoverColor={'--secondary-hover-color'}
            />
            <Button
              bgColor={'transparent'}
              fontColor={'--light-green'}
              borderColor={'--light-green'}
              text={'View all Apps'}
              href={'/apps/directory'}
              hoverColor={'--secondary-hover-color'}
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
            bgColor={MODULE_COLOR_LIST.Automation.bgColor}
            textColor={MODULE_COLOR_LIST.Automation.fontColor}
            isAutomation={true}
          />
        )}
      </Container>
      {!isEmpty(details?.sectionContent2Collection?.items) && (
        <AutomationCardSection
          title={details?.sectionHeader2}
          data={details?.sectionContent2Collection?.items}
          isAppExplore
        />
      )}{' '}
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
              fontColor={'--black'}
              borderColor={'--black'}
              text={'View all apps'}
              href={'/apps/directory'}
              hoverColor={'--hover-color'}
            />
          </TopView>
        </Featured>
      </Container>
      {!isEmpty(details?.sectionFeaturedContentCollection?.items) && (
        <AppsSlider data={removeEmptyElement(details?.sectionFeaturedContentCollection?.items)} isDetailSlider={true} />
      )}
      {!isEmpty(faqList) && <FAQ faqList={faqList} />}
    </>
  );
}
