'use client';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { AutomationHero, Caption, Featured, Title } from '../../../styles/automationStyles';
import { Container } from '../../../styles/commonStyles';
import Button from '../../../components/button/button';
import TabView from '../../../components/tab/tab';
import { MODULE_COLOR_LIST, SecondaryButtonVariant, EXTERNAL_LINK_KEYS } from '../../../constants/constant';
import AutomationCardSection from '../../../components/automationcard';
import { isEmpty, removeEmptyElement, separateSpecialChar } from '../../../helpers/helpers';
import CustomerTestimonial from '../../../components/customer/testimonials';
import FAQ from '../../../components/faq/faq';
import { TopView } from '../../../components/solution/clienttab/styles';
import AppsSlider from '../../../components/appsSlider';
import AppsHeroSlider from '../../../components/appsSlider/appsheroSlider';
import { AppSliderSection } from '../../../styles/appsStyles';
import ButtonGroup from '../../ButtonGroup/buttonGroup';
import SectionHeading from './sectionHeading';

export default function AppPage({ details, appsList, faqList, externalLinks = {} }) {
  if (isEmpty(details)) return null;
  return (
    <>
      <AutomationHero>
        <Container>
          <Title>{details.header}</Title>
          <Caption>{details.body}</Caption>
          <ButtonGroup
            primaryButtonText={'Start Trial'}
            primaryButtonLink={externalLinks?.[EXTERNAL_LINK_KEYS.OnboardingLink] || '#'}
            secondaryButtonText={'View all Apps'}
            secondaryButtonLink={'/apps/directory'}
            secondaryButtonVariant={SecondaryButtonVariant.WHITE}
            className={'button-group'}
          />
        </Container>
        {!isEmpty(appsList) && (
          <AppSliderSection>
            <AppsHeroSlider data={appsList} />
            <div className='drop'></div>
          </AppSliderSection>
        )}
      </AutomationHero>
      {!isEmpty(details.sectionHeader1) && (
        <Container>
          <SectionHeading details={details.sectionHeader1} isTitle />
          {!isEmpty(details.sectionContent1Collection?.items) && (
            <TabView
              tabData={details.sectionContent1Collection?.items || []}
              bgColor={MODULE_COLOR_LIST.Automation.bgColor}
              textColor={MODULE_COLOR_LIST.Automation.fontColor}
              isAutomation={true}
            />
          )}
        </Container>
      )}
      {!isEmpty(details.sectionContent2Collection?.items) && (
        <AutomationCardSection
          title={details.sectionHeader2}
          data={details.sectionContent2Collection?.items}
          isAppExplore
        />
      )}
      {!isEmpty(details.sectionCaseStudyHeader) && (
        <Container>
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
              {!isEmpty(details.sectionFeaturedBody?.json) &&
                documentToReactComponents(details.sectionFeaturedBody?.json)}
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
      )}
      {!isEmpty(details.sectionFeaturedContentCollection?.items) && (
        <AppsSlider data={removeEmptyElement(details.sectionFeaturedContentCollection?.items)} isDetailSlider={true} />
      )}
      {!isEmpty(faqList) && <FAQ faqList={faqList} />}
    </>
  );
}
