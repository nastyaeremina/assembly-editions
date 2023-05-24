import Image from 'next/image';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import SEO from '../../components/seo';
import Navbar from '../../components/navbar/navbar';
import Layout from '../../components/layout';
import {
  AutomationButton,
  AutomationHero,
  Caption,
  CardSec,
  Cards,
  Featured,
  SetupAutomation,
  Title
} from '../../styles/automationStyles';
import { Container } from '../../styles/commonStyles';
import Button from '../../components/button/button';
import { COPILOT_ONBORADING_LINK } from '../../constants/externalLinks';
import CTA from '../../components/cta/cta';
import TabView from '../../components/tab/tab';
import { AUTOMATION_ID, HEADER_LIST, HOME_MODULE_LIST, MODULE_COLOR_LIST } from '../../constants/constant';
import AutomationCardSection from '../../components/automationcard';
import ExploreTab from '../../components/solution/clienttab/exploretab';
import { isEmpty, removeEmptyElement, separateSpecialChar } from '../../helpers/helpers';
import ExtentionCard from '../../components/Extentioncard';
import CustomerTestimonial from '../../components/customer/testimonials';
import FAQ from '../../components/faq/faq';
import { TopView } from '../../components/solution/clienttab/styles';
import FeatureSlider from '../../components/FeatureSlider/featureslider';
import { getPageAutomationDetail } from '../../lib/contentful-automation';
import { RightSection } from '../../styles/casestudiestyles';

export default function Automation({ details }) {
  return (
    <>
      <SEO seoData={details?.seoMetadata}></SEO>
      <Layout>
        <Navbar isEnterPrice headerIndex={HEADER_LIST.ENTERPRICE} />
        <AutomationHero>
          <Container>
            <Title>{details?.header}</Title>,
            <Caption>
              {/* <div dangerouslySetInnerHTML={{ __html: separateSpecialChar(heading) }} /> */}
              {details?.body}
            </Caption>
            <AutomationButton>
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
                text={'View all Automations'}
                href={'automations/directory'}
                hoverColor={'rgba(255, 255, 255,0.8)'}
              />
            </AutomationButton>
            {!isEmpty(details?.heroImage?.url) && (
              <Image
                src={details?.heroImage?.url}
                alt='automation'
                width={1224}
                height={324}
                className='automation-image'
              />
            )}
          </Container>
        </AutomationHero>
        <Container>
          <SetupAutomation istitle>
            <div
              dangerouslySetInnerHTML={{
                __html: separateSpecialChar(details?.sectionHeader1)
              }}
            />
          </SetupAutomation>
          <TabView
            tabData={details?.sectionContent1Collection?.items || []}
            bgColor={MODULE_COLOR_LIST[HOME_MODULE_LIST['Automation']]?.bgColor}
            textColor={MODULE_COLOR_LIST[HOME_MODULE_LIST['Automation']]?.fontColor}
          />
          <AutomationCardSection
            heading={details?.sectionHeader2}
            data={[details?.sectionContent2Collection?.items[0]]}
          />
          <AutomationCardSection heading={details?.sectionHeader3} data={details?.sectionContent3Collection?.items} />
        </Container>
        <ExploreTab
          data={removeEmptyElement(details?.sectionContent4Collection?.items)}
          demoUrl={details?.demoPortalUrl}
        />
        <Container>
          <SetupAutomation>
            <RightSection>{documentToReactComponents(details?.sectionHeader4?.json)}</RightSection>
          </SetupAutomation>
          <CardSec>
            <ExtentionCard data={details?.sectionContent5Collection?.items[0]} />
            <Cards>
              <ExtentionCard isCard={true} data={details?.sectionContent5Collection?.items[0]} />
              <ExtentionCard isCard={true} data={details?.sectionContent5Collection?.items[0]} />
            </Cards>
          </CardSec>
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
              <p>{documentToReactComponents(details?.sectionFeaturedBody?.json)}</p>

              <Button
                bgColor={'transparent'}
                fontColor={'#000000'}
                borderColor={'#000000'}
                text={'View all automations'}
                href={'/automations/directory'}
                hoverColor={'rgba(0, 0, 0, 0.5)'}
              />
            </TopView>
          </Featured>
        </Container>
        <FeatureSlider data={details?.sectionFeaturedContentCollection?.items} />
        <FAQ contentID={details?.faqGroup?.sys?.id} />
        <CTA />
      </Layout>
    </>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const details = (await getPageAutomationDetail(AUTOMATION_ID, preview)) ?? [];

  return {
    props: { details }
  };
}
