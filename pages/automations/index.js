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
import {
  AnimatedIcon,
  BottomList,
  CardItem,
  CardTextView,
  CardWrapper,
  Line,
  Line1,
  Line2
} from '../../styles/homepageStyles';

export default function Automation({ details }) {
  return (
    <>
      <SEO seoData={details?.seoMetadata}></SEO>
      <Layout>
        <Navbar isEnterPrice headerIndex={HEADER_LIST.ENTERPRICE} />
        <AutomationHero>
          <Container>
            <Title>{details?.header}</Title>
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
            {/* {!isEmpty(details?.heroImage?.url) && (
              <Image
                src={details?.heroImage?.url}
                alt='automation'
                width={1224}
                height={324}
                className='automation-image'
              />
            )} */}
            <BottomList isAnimated>
              <CardWrapper>
                <CardItem isAnimated>
                  <Image src='/images/linka.svg' width={35} height={35} alt='link-icon' />
                  <CardTextView isAnimated>
                    <p>Trigger</p>
                    <span>New client activated</span>
                  </CardTextView>
                  <AnimatedIcon className={'done card1'} />
                  <Line>
                    <Line1 isAnimated>
                      <p />
                    </Line1>
                    <Line1 isAnimationline2={true} isAnimated>
                      <p />
                    </Line1>
                    <Line1 isAnimationline3={true} isAnimated>
                      <p />
                    </Line1>
                  </Line>
                </CardItem>
              </CardWrapper>
              <CardWrapper>
                <CardItem isAnimated>
                  <Image src='/images/linka.svg' width={35} height={35} alt='link-icon' />
                  <CardTextView isAnimated>
                    <p>Condition</p>
                    <span>Company size &#60;= 50</span>
                  </CardTextView>
                  <AnimatedIcon className={'default card2'} />
                  <Line>
                    <Line2 isAnimated={true}>
                      <p />
                    </Line2>
                  </Line>
                </CardItem>
                <CardItem isAnimated>
                  <Image src='/images/linka.svg' width={35} height={35} alt='link-icon' />
                  <CardTextView isAnimated>
                    <p>Condition</p>
                    <span>Company size &#62; 50</span>
                  </CardTextView>
                  <Line>
                    <Line2 isAnimated={true}>
                      <p />
                    </Line2>
                    <Line2 isAnimationline2={true} isAnimated>
                      <p />
                    </Line2>
                    <Line2 isAnimationline3={true} isAnimated>
                      <p />
                    </Line2>
                  </Line>
                  <AnimatedIcon className={'default card2'} />
                </CardItem>
              </CardWrapper>
              <CardWrapper>
                <CardItem isAnimated>
                  <Image src='/images/action-icon.svg' width={35} height={35} alt='action-icon' />
                  <CardTextView isAnimated>
                    <p>Action</p>
                    <span>Assign small business onboarding form</span>
                  </CardTextView>
                  <AnimatedIcon className={'default card3'} />
                </CardItem>
                <CardItem isAnimated>
                  <Image src='/images/msg-icon2.svg' width={35} height={35} alt='msg-icon' />
                  <CardTextView isAnimated>
                    <p>Action</p>
                    <span>Send message with scheduling link</span>
                  </CardTextView>
                  <AnimatedIcon className={'default card3'} />
                </CardItem>
                <CardItem isAnimated>
                  <Image src='/images/salesforce-icon.svg' width={35} height={35} alt='sales-icon' />
                  <CardTextView isAnimated>
                    <p>Action</p>
                    <span>Create lead in Salesforce</span>
                  </CardTextView>
                  <AnimatedIcon className={'default card3'} />
                </CardItem>
              </CardWrapper>
            </BottomList>
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
            isAutomation={true}
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
              <ExtentionCard isCard={true} data={details?.sectionContent5Collection?.items[1]} />
              <ExtentionCard isCard={true} data={details?.sectionContent5Collection?.items[2]} />
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
