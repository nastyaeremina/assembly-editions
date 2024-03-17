'use client';

import Image from 'next/image';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import {
  Functionality,
  TopFunctionWrap,
  BottomFunction,
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
  Line2
} from '../../../styles/homepageStyles';
import { Container } from '../../../styles/commonStyles';
import TabView from '../../../components/tab/tab';
import Button from '../../../components/button/button';
import HomeHeroSection from '../../../components/Home/herosection/hybrid';
import { isEmpty } from '../../../helpers/helpers';
import SupportItem from '../supportSection/support';
import HeadingText from '../../header/headingText';
import BussinessSectionComponent from '../BussinessSection';
import PartnerAppsComponent from '../../partnerApps/partnerApps';

export default function HomePage({ content }) {
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
        />
        <BussinessSectionComponent
          title={content?.heading1}
          description={content?.body1}
          primaryButtonText={content?.primaryButtonText1}
          PrimaryButtonLink={content?.primaryButtonLink1}
          sliderData={content?.solutionCollection?.items}
        />

        <Functionality>
          <Container>
            <TopFunctionWrap>
              <HeadingText title={content?.heading2} />

              <ReactMarkdown>{content?.body2}</ReactMarkdown>
            </TopFunctionWrap>
            <BottomFunction>
              <TabView isHome={true} tabData={content?.featuresCollection?.items} />
            </BottomFunction>
          </Container>
        </Functionality>
        <PartnerAppsComponent
          title={content?.heading3}
          description={content?.body3}
          appList={content?.partnerAppsCollection?.items}
        />
        <AutomateSection>
          <Container>
            <AutomateText>
              <HeadingText title={content?.heading4} />
              <ReactMarkdown>{content?.body4}</ReactMarkdown>
              <Button
                bgColor={'transparent'}
                fontColor={'#000000'}
                borderColor={'#000000'}
                text={'See automations'}
                href={'/automations'}
                hoverColor={'rgba(0, 0, 0, 0.5)'}
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
