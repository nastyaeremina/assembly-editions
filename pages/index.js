import React, { useState, useEffect } from 'react';
import Layout from '/components/layout';
import Image from 'next/image';
import Link from 'next/link';

import Cookies from 'js-cookie';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

import { OrganizationJsonLd } from 'next-seo';
import { COOKIE_NAME } from '../lib/constants';
import { useGa } from '../lib/useGa';
import Navbar from '../components/navbar/navbar';
import { Container } from '../styles/commonStyles';
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
  HelpLeftSub,
  HelpLink,
  HelpWrap,
  HelpMargin,
  BtnView,
  HomeMain,
  HelpImg,
  AnimatedIcon,
  Line1,
  Line,
  Line2
} from '../styles/homepageStyles';
import BusinessSlider from '../components/businessSlider/businessslider';
import ExtensionSlider from '../components/extensionslider/extensionslider';
import CTA from '../components/cta/cta';
import { HEADER_LIST, HOME_CLIENT_DARK_ID } from '../constants/constant';
import { getHomeContent } from '../lib/contentful-home';
import TabView from '../components/tab/tab';
import Button from '../components/button/button';
import SEO from '../components/seo';
import { getSEOdata } from '../lib/contentful-seo';

import { BLOG_LINK, COPILOT_JOIN_COMMUNITY_LINK, HELP_CENTER_LINK } from '../constants/externalLinks';
import { separateSpecialChar } from '../helpers/helpers';
import HomeHeroSection from '../components/Home/herosection/hybrid';

export default function Home({ content, seoData }) {
  const ga = useGa();
  const [cookie, setCookie] = useState('');
  const removeCookie = () => {
    Cookies.remove(COOKIE_NAME);
    window.location.reload();
  };

  // track amplitude event on a/b test result.
  /*
  useEffect(() => {
    setCookie(Cookies.get(COOKIE_NAME));
    window.analytics?.identify({ ab_home_hero_client: 'Client Focus - Dark' });
  }, []);
*/

  useEffect(() => {
    if (ga && cookie) {
      ga('set', 'exp', cookie);
    }
  }, [ga, cookie]);

  return (
    <>
      <SEO seoData={seoData}></SEO>
      <OrganizationJsonLd
        type={'Organization'}
        name='Copilot'
        url='https://www.copilot.com'
        logo='https://www.copilot.com/_next/static/media/blacklogo.370e156c.svg'
        sameAs={[
          'https://twitter.com/copilot',
          'https://www.linkedin.com/company/copilotplatforms/',
          'https://www.youtube.com/@copilotplatforms',
          'https://www.facebook.com/copilotplatforms',
          'https://www.instagram.com/copilotplatforms/'
        ]}
      />
      <Layout>
        <Navbar headerIndex={HEADER_LIST.ENTERPRICE} isModule={false} isEnterPrice={true} />
        <HomeMain>
          <HomeHeroSection
            title={content?.heroTitle}
            body={content?.heroBody}
            image1={content?.heroImage1?.url}
            image2={content?.heroImage2?.url}
            leftImageTitle={content?.heroImage1?.title}
            rightImageTitle={content?.heroImage2?.title}
          />
          <BusinessSection>
            <Container>
              <BusinessText>
                <h2>
                  <div dangerouslySetInnerHTML={{ __html: separateSpecialChar(content?.heading1) }} />
                </h2>
                <ReactMarkdown>{content?.body1}</ReactMarkdown>
              </BusinessText>
            </Container>
            <BusinessSlider data={content?.testimonialsCollection?.items} />
          </BusinessSection>
          <Functionality>
            <Container>
              <TopFunctionWrap>
                <h2 className='titlewrap'>
                  <div dangerouslySetInnerHTML={{ __html: separateSpecialChar(content?.heading2) }} />
                </h2>
                <ReactMarkdown>{content?.body2}</ReactMarkdown>
              </TopFunctionWrap>
              <BottomFunction>
                <TabView isHome={true} tabData={content?.featuresCollection?.items} />
              </BottomFunction>
            </Container>
          </Functionality>
          <Extension>
            <Container>
              <BusinessText>
                <h2>
                  <div dangerouslySetInnerHTML={{ __html: separateSpecialChar(content?.heading3) }} />
                </h2>
                <div className='app-dec'>
                  <ReactMarkdown>{content?.body3}</ReactMarkdown>
                </div>
                <BtnView>
                  <Button
                    bgColor={'transparent'}
                    fontColor={'#000000'}
                    borderColor={'#000000'}
                    text={'Browse Apps'}
                    href={'/apps'}
                    hoverColor={'rgba(0, 0, 0, 0.5)'}
                  />
                </BtnView>
              </BusinessText>
            </Container>
            <ExtensionSlider data={content?.partnerAppsCollection?.items} />
          </Extension>
          <AutomateSection>
            <Container>
              <AutomateText>
                <h2>
                  <div dangerouslySetInnerHTML={{ __html: separateSpecialChar(content?.heading4) }} />
                </h2>
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
                  <h2>
                    The support you need<span>,</span> when you need it<span>.</span>
                  </h2>
                  <HelpWrap>
                    <HelpLeftSub>
                      <h3>Our Community</h3>
                      <p>Meet our team and a community of businesses that run on Copilot. Requires a Slack account.</p>
                      <HelpLink className='icon-link'>
                        <a href={COPILOT_JOIN_COMMUNITY_LINK} className='learn-link mb0'>
                          Join community
                          <svg width='16' height='12' viewBox='0 0 16 12' fill='none' class='HoverArrow'>
                            <path
                              d='M5.7998 1.37109L10.4283 5.99958L5.7998 10.6281'
                              stroke-width='1.92854'
                              stroke-linecap='round'
                              stroke-linejoin='round'
                              class='HoverArrow__tipPath'
                            />
                            <path
                              d='M10.33 5.99951H1.5'
                              stroke-width='2'
                              stroke-linecap='round'
                              stroke-linejoin='round'
                              class='HoverArrow__linePath'
                            />
                          </svg>
                          <svg width='8' height='14' viewBox='0 0 8 14' fill='none' class='mobilearrow'>
                            <path
                              d='M2 3L6 7L2 11'
                              stroke='#09AA6C'
                              stroke-width='1.85714'
                              stroke-linecap='round'
                              stroke-linejoin='round'
                            />
                          </svg>
                        </a>
                      </HelpLink>
                    </HelpLeftSub>
                    <HelpLeftSub>
                      <h3>Weekly Live Demo</h3>
                      <p>
                        Join our team as we take you on a tour of the Copilot platform in a 20-minute demo followed by a
                        live Q&A.
                      </p>
                      <HelpLink className='icon-link'>
                        <a href='https://copilot.com/weekly-demo' className='learn-link mb0'>
                          Register
                          <svg width='16' height='12' viewBox='0 0 16 12' fill='none' class='HoverArrow'>
                            <path
                              d='M5.7998 1.37109L10.4283 5.99958L5.7998 10.6281'
                              stroke-width='1.92854'
                              stroke-linecap='round'
                              stroke-linejoin='round'
                              class='HoverArrow__tipPath'
                            />
                            <path
                              d='M10.33 5.99951H1.5'
                              stroke-width='2'
                              stroke-linecap='round'
                              stroke-linejoin='round'
                              class='HoverArrow__linePath'
                            />
                          </svg>
                          <svg width='8' height='14' viewBox='0 0 8 14' fill='none' class='mobilearrow'>
                            <path
                              d='M2 3L6 7L2 11'
                              stroke='#09AA6C'
                              stroke-width='1.85714'
                              stroke-linecap='round'
                              stroke-linejoin='round'
                            />
                          </svg>
                        </a>
                      </HelpLink>
                    </HelpLeftSub>
                  </HelpWrap>
                  <HelpMargin>
                    <HelpWrap>
                      <HelpLeftSub>
                        <h3>Copilot University</h3>
                        <p>
                          Watch video tutorials that cover getting set up, configuring your portal, best practices, and
                          more.
                        </p>
                        <HelpLink className='icon-link'>
                          <a href='https://copilot.com/university' className='learn-link mb0'>
                            Watch videos
                            <svg width='16' height='12' viewBox='0 0 16 12' fill='none' class='HoverArrow'>
                              <path
                                d='M5.7998 1.37109L10.4283 5.99958L5.7998 10.6281'
                                stroke-width='1.92854'
                                stroke-linecap='round'
                                stroke-linejoin='round'
                                class='HoverArrow__tipPath'
                              />
                              <path
                                d='M10.33 5.99951H1.5'
                                stroke-width='2'
                                stroke-linecap='round'
                                stroke-linejoin='round'
                                class='HoverArrow__linePath'
                              />
                            </svg>
                            <svg width='8' height='14' viewBox='0 0 8 14' fill='none' class='mobilearrow'>
                              <path
                                d='M2 3L6 7L2 11'
                                stroke='#09AA6C'
                                stroke-width='1.85714'
                                stroke-linecap='round'
                                stroke-linejoin='round'
                              />
                            </svg>
                          </a>
                        </HelpLink>
                      </HelpLeftSub>
                      <HelpLeftSub>
                        <h3>Help Center</h3>
                        <p>Read answers to the most common questions, learn best practices, and contact our team.</p>
                        <HelpLink className='icon-link'>
                          <a href={HELP_CENTER_LINK} className='learn-link mb0'>
                            Get help
                            <svg width='16' height='12' viewBox='0 0 16 12' fill='none' class='HoverArrow'>
                              <path
                                d='M5.7998 1.37109L10.4283 5.99958L5.7998 10.6281'
                                stroke-width='1.92854'
                                stroke-linecap='round'
                                stroke-linejoin='round'
                                class='HoverArrow__tipPath'
                              />
                              <path
                                d='M10.33 5.99951H1.5'
                                stroke-width='2'
                                stroke-linecap='round'
                                stroke-linejoin='round'
                                class='HoverArrow__linePath'
                              />
                            </svg>
                            <svg width='8' height='14' viewBox='0 0 8 14' fill='none' class='mobilearrow'>
                              <path
                                d='M2 3L6 7L2 11'
                                stroke='#09AA6C'
                                stroke-width='1.85714'
                                stroke-linecap='round'
                                stroke-linejoin='round'
                              />
                            </svg>
                          </a>
                        </HelpLink>
                      </HelpLeftSub>
                    </HelpWrap>
                  </HelpMargin>
                </HelpLeft>
                <HelpImg>
                  <Image src='/images/helpimage.png' width={447} height={661} alt='right-arrow' />
                </HelpImg>
              </HelpMain>
            </Container>
          </HelpSection>
        </HomeMain>
        <CTA />
      </Layout>
    </>
  );
}

export async function getStaticProps({ params }) {
  const content = (await getHomeContent(HOME_CLIENT_DARK_ID)) ?? '';
  const seoData = (await getSEOdata(content?.seoMetadata?.sys?.id)) ?? [];
  seoData.canonical = 'https://www.copilot.com/';
  return {
    props: {
      content,
      seoData
    }
  };
}
