'use client';

import Image from 'next/image';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import {
  BusinessSection,
  BusinessText,
  Functionality,
  TopFunctionWrap,
  BottomFunction,
  Extension,
  AutomateSection,
  AutomateText,
  BottomList,
  CardWrapper,
  CardItem,
  CardTextView,
  HelpSection,
  HelpMain,
  HelpLeft,
  HelpWrap,
  HelpMargin,
  HomeMain,
  HelpImg,
  AnimatedIcon,
  Line1,
  Line,
  Line2,
  Block,
  SliderBlock,
  ButtonGroup,
  ResponsiveButtonGroup
} from '../../../styles/homepageStyles';
import { Container } from '../../../styles/commonStyles';
import Slider from '../../../components/businessSlider/homeSlider';
import ExtensionSlider from '../../../components/extensionslider/extensionslider';
import TabView from '../../../components/tab/tab';
import Button from '../../../components/button/button';
import HomeHeroSection from '../../../components/Home/herosection/hybrid';

import { isEmpty } from '../../../helpers/helpers';
import SupportItem from '../supportSection/support';
import HeadingText from '../../header/headingText';
import BussinessSectionComponent from '../BussinessSection';
import PartnerAppsComponent from '../../partnerApps/partnerApps';
import FeatureSection from '../../featureSection/featureSection';
import { primary, whiteColor } from '../../../styles/color';
import TestimonialTableSection from '../../newTestimonial/testimonialTableSection';

export default function HomePage({ content, testimonialTableData }) {
  return (
    <>
      <HomeMain>
        <HomeHeroSection
          title={content?.heroTitle}
          body={content?.heroBody}
          image1={content?.heroImage1?.url}
          image2={content?.heroImage2?.url}
          leftImageTitle={content?.heroImage1?.title}
          rightImageTitle={content?.heroImage2?.title}
          isLight={true}
        />
        <BussinessSectionComponent
          title={content?.heading1}
          description={content?.body1}
          primaryButtonText={content?.primaryButtonText1}
          PrimaryButtonLink={content?.primaryButtonLink1}
          sliderData={content?.solutionCollection?.items}
        />

        <FeatureSection
          featuresList={content?.featuresCollection?.items}
          heroSectionData={{
            heroTitle: content?.heading2,
            heroDescription: content?.body2,
            primaryButtonText: content?.primaryButtonText2,
            secondaryButtonText: content?.secondaryButtonText2,
            primaryButtonLink: content?.primaryButtonLink2,
            secondaryButtonLink: content?.secondaryButtonLink2
          }}
        />
        <PartnerAppsComponent
          title={content?.heading3}
          description={content?.body3}
          appList={content?.partnerAppsCollection?.items}
        />
        <FeatureSection
          featuresList={content?.section6DataCollection?.items}
          heroSectionData={{
            heroTitle: content?.heading6,
            heroDescription: content?.body6,
            primaryButtonText: content?.primaryButtonText6,
            secondaryButtonText: content?.secondaryButtonText6,
            primaryButtonLink: content?.primaryButtonLink6,
            secondaryButtonLink: content?.secondaryButtonLink6
          }}
        />
        <AutomateSection>
          <Container>
            <AutomateText>
              <HeadingText title={content?.heading4} />
              <ReactMarkdown>{content?.body4}</ReactMarkdown>
              <Button
                bgColor={primary}
                fontColor={whiteColor}
                borderColor={primary}
                text={'See automations'}
                href={'https://www.copilot.com/guide/recommended-workflows'}
                hoverColor={'rgba(255, 255, 255,0.8)'}
                className={'automation-button'}
              />
            </AutomateText>
            <BottomList>
              <CardWrapper>
                <CardItem>
                  <Image src='/images/linkicon.svg' width={35} height={35} alt='link-icon' />
                  <CardTextView>
                    <p>Client activates account</p>
                    <span>Trigger</span>
                  </CardTextView>
                  <AnimatedIcon className={'done card1'} />
                  <Line>
                    <Line1>
                      <p />
                    </Line1>
                    <Line1 isAnimationline2={true}>
                      <p />
                    </Line1>
                    <Line1 isAnimationline3={true}>
                      <p />
                    </Line1>
                  </Line>
                </CardItem>
              </CardWrapper>
              <CardWrapper>
                <CardItem>
                  <Image src='/images/linkicon.svg' width={35} height={35} alt='link-icon' />
                  <CardTextView>
                    <p>Company size &#60; 50</p>
                    <span>Condition</span>
                  </CardTextView>
                  <AnimatedIcon className={'default card2'} />
                  <Line>
                    <Line2>
                      <p />
                    </Line2>
                  </Line>
                </CardItem>
                <CardItem>
                  <Image src='/images/linkicon.svg' width={35} height={35} alt='link-icon' />
                  <CardTextView>
                    <p>Company size &#62; 50</p>
                    <span>Condition</span>
                  </CardTextView>
                  <Line>
                    <Line2>
                      <p />
                    </Line2>
                    <Line2 isAnimationline2={true}>
                      <p />
                    </Line2>
                    <Line2 isAnimationline3={true}>
                      <p />
                    </Line2>
                  </Line>
                  <AnimatedIcon className={'default card2'} />
                </CardItem>
              </CardWrapper>
              <CardWrapper>
                <CardItem>
                  <Image src='/images/action-icon.svg' width={35} height={35} alt='action-icon' />
                  <CardTextView>
                    <p>Assign SMB onboarding form</p>
                    <span>Action</span>
                  </CardTextView>
                  <AnimatedIcon className={'default card3'} />
                </CardItem>
                <CardItem>
                  <Image src='/images/msg-icon2.svg' width={35} height={35} alt='msg-icon' />
                  <CardTextView>
                    <p>Send meeting scheduling link</p>
                    <span>Action</span>
                  </CardTextView>
                  <AnimatedIcon className={'default card3'} />
                </CardItem>
                <CardItem>
                  <Image src='/images/salesforce-icon.svg' width={35} height={35} alt='sales-icon' />
                  <CardTextView>
                    <p>Create lead in Salesforce</p>
                    <span>Action</span>
                  </CardTextView>
                  <AnimatedIcon className={'default card3'} />
                </CardItem>
              </CardWrapper>
            </BottomList>
          </Container>
        </AutomateSection>
        {!isEmpty(testimonialTableData) && (
          <TestimonialTableSection
            title={content?.heading7}
            description={content?.body7}
            tableData={testimonialTableData}
          />
        )}
        <HelpSection>
          <Container>
            <HelpMain>
              <HelpLeft>
                <HeadingText title={content?.heading5} />
                {!isEmpty(content?.supportSectionCollection?.items) &&
                  content?.supportSectionCollection?.items?.length === 4 && (
                    <>
                      <HelpWrap>
                        <SupportItem data={content?.supportSectionCollection?.items?.[0]} />
                        <SupportItem data={content?.supportSectionCollection?.items?.[1]} />
                      </HelpWrap>
                      <HelpMargin>
                        <HelpWrap>
                          <SupportItem data={content?.supportSectionCollection?.items?.[2]} />
                          <SupportItem data={content?.supportSectionCollection?.items?.[3]} />
                        </HelpWrap>
                      </HelpMargin>
                    </>
                  )}
              </HelpLeft>
              {!isEmpty(content?.supportSectionImage?.url) && (
                <HelpImg>
                  <Image src={content?.supportSectionImage?.url} width={447} height={661} alt='right-arrow' />
                </HelpImg>
              )}
            </HelpMain>
          </Container>
        </HelpSection>
      </HomeMain>
    </>
  );
}
