import Layout from '/components/layout';
import Image from 'next/image';
import Link from 'next/link';
import StarLogo from '../public/images/star5.svg';
import Navbar from '../components/navbar/navbar';
import { StatefulTabs, Tab, StyledTab } from 'baseui/tabs';
import { LabelMedium } from 'baseui/typography';
import { Container, PrimaryButton, SecondryButton } from '../styles/commonStyles';
import {
  HeroSection,
  HeroHeading,
  Para,
  HeroBtnBlock,
  ReviewLogo,
  Reviewimage,
  ReviewRight,
  BusinessSection,
  BusinessText,
  Functionality,
  TopFunctionWrap,
  BottomFunction,
  TabRow,
  IconSvg,
  TabBox,
  ContainWrap,
  LeftDetail,
  RightDetail,
  Extension,
  AutomateSection,
  AutomateText,
  BottomList,
  CardWrapper,
  CardItem,
  CardTextView,
  IconView,
  IconWithoutView,
  LineIcon,
  HelpSection,
  HelpMain,
  HelpLeft,
  HelpLeftSub,
  HelpLink,
  HelpWrap,
  HelpMargin,
  BtnView,
  HomeMain,
  ImageHover,
  HelpImg,
  LeftSvg,
  RightWrap,
  IconWrap
} from '../styles/homepageStyles';
import BusinessSlider from '../components/businessSlider/businessslider';
import ExtensionSlider from '../components/extensionslider/extensionslider';
import CTA from '../components/cta/cta';
import { HEADER_LIST, HOME_FEATURES_TAB_ID, HOME_MODULE_LIST, MODULE_COLOR_LIST } from '../constants/constant';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import classNames from 'classnames';
import { getHomeContent } from '../lib/contentful-home';
import { isEmpty } from '../helpers/helpers';
import TabView from '../components/tab/tab';
import Button from '../components/button/button';
import SEO from '../components/seo';

export default function Home({ content }) {
  return (
    <>
      <SEO id={content?.seoMetadata?.sys?.id}></SEO>
      <Layout>
        <Navbar headerIndex={HEADER_LIST.HOME} isModule={false} />
        <HomeMain>
          <HeroSection>
            <Container>
              <HeroHeading>
                {content.heroTitle}
                <span>.</span>
              </HeroHeading>
              <Para>{content.heroBody}</Para>
              <HeroBtnBlock>
                <Button
                  bgColor={'#09AA6C'}
                  fontColor={'#fff'}
                  borderColor={'#09AA6C'}
                  text={'Start Trial'}
                  href={'https://dashboard.copilot.com/onboarding'}
                  hoverColor={'rgba(255, 255, 255,0.8)'}
                />
                <Button
                  bgColor={'transparent'}
                  fontColor={'#000000'}
                  borderColor={'#000000'}
                  text={'Book Demo'}
                  href={'/book-demo'}
                  hoverColor={'rgba(0, 0, 0, 0.5)'}
                />
              </HeroBtnBlock>
              <ReviewLogo>
                <ImageHover>
                  {/* <Image src='/images/hover.svg' width={171} height={43} alt='msg-icon' className='show' />
                  <Image src='/images/hoverlogo.svg' width={171} height={43} alt='msg-icon' className='hide' /> */}
                  <LeftSvg>
                    <svg width='33' height='33' viewBox='0 0 33 33' fill='none' xmlns='http://www.w3.org/2000/svg'>
                      <g clip-path='url(#clip0_322_132405)'>
                        <path
                          d='M23.3501 22.85C24.4741 24.8245 25.5856 26.7766 26.6963 28.7266C21.7781 32.5381 14.1263 32.9987 8.46188 28.6094C1.94333 23.5543 0.871947 14.9288 4.36188 8.71981C8.3758 1.57813 15.8872 -0.0012911 20.7234 1.15684C20.5926 1.44447 17.6961 7.52741 17.6961 7.52741C17.6961 7.52741 17.4671 7.54264 17.3375 7.54518C15.9081 7.60651 14.8434 7.94321 13.7022 8.54046C12.4502 9.20179 11.3772 10.1635 10.5772 11.3415C9.77707 12.5195 9.27419 13.8779 9.11248 15.2981C8.94374 16.7383 9.14048 18.1983 9.6841 19.5402C10.1437 20.6746 10.7939 21.6822 11.6656 22.5328C13.0027 23.839 14.5939 24.6477 16.4383 24.9155C18.185 25.1693 19.8647 24.918 21.4388 24.1173C22.0292 23.8174 22.5315 23.4862 23.1186 23.0319C23.1934 22.9829 23.2598 22.9207 23.3501 22.85Z'
                          fill='#00160E'
                        />
                        <path
                          d='M23.3617 5.53252C23.0763 5.24828 22.8118 4.98603 22.5486 4.72209C22.3914 4.56474 22.2402 4.40104 22.0793 4.2475C22.0216 4.19209 21.9539 4.11637 21.9539 4.11637C21.9539 4.11637 22.0087 3.99878 22.0321 3.95056C22.34 3.32497 22.8227 2.86772 23.3951 2.50395C24.0282 2.09865 24.7657 1.89242 25.5145 1.91135C26.4726 1.93039 27.3635 2.17191 28.1152 2.82246C28.6701 3.30255 28.9547 3.91165 29.0048 4.63876C29.0884 5.86541 28.587 6.80486 27.5912 7.46049C27.0062 7.84625 26.3753 8.14446 25.7426 8.49765C25.3937 8.69264 25.0954 8.86395 24.7544 9.21672C24.4544 9.57076 24.4398 9.90449 24.4398 9.90449L28.9722 9.89857V11.942H21.9761V11.7445C21.9493 10.7403 22.0651 9.79536 22.5193 8.88341C22.9372 8.04675 23.5865 7.43426 24.3666 6.96264C24.9675 6.59929 25.6002 6.29009 26.2023 5.92844C26.5738 5.70553 26.8362 5.37856 26.8341 4.90439C26.8341 4.49748 26.5416 4.13583 26.1237 4.02289C25.1384 3.75387 24.1356 4.1832 23.6141 5.096C23.538 5.22924 23.4603 5.36164 23.3617 5.53252ZM32.1287 20.6771L28.3091 13.9998H20.7505L16.9062 20.746H24.5204L28.2778 27.3915L32.1287 20.6771Z'
                          fill='#00160E'
                        />
                      </g>
                      <defs>
                        <clipPath id='clip0_322_132405'>
                          <rect width='32' height='33' fill='white' transform='translate(0.5)' />
                        </clipPath>
                      </defs>
                    </svg>
                  </LeftSvg>
                  <RightWrap>
                    <svg width='112' height='20' viewBox='0 0 112 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
                      <path
                        d='M10.5 0L12.7451 6.90983H20.0106L14.1327 11.1803L16.3779 18.0902L10.5 13.8197L4.62215 18.0902L6.86729 11.1803L0.989435 6.90983H8.25486L10.5 0Z'
                        fill='#00160E'
                      />
                      <path
                        d='M33.5 0L35.7451 6.90983H43.0106L37.1327 11.1803L39.3779 18.0902L33.5 13.8197L27.6221 18.0902L29.8673 11.1803L23.9894 6.90983H31.2549L33.5 0Z'
                        fill='#00160E'
                      />
                      <path
                        d='M55.5 0L57.7451 6.90983H65.0106L59.1327 11.1803L61.3779 18.0902L55.5 13.8197L49.6221 18.0902L51.8673 11.1803L45.9894 6.90983H53.2549L55.5 0Z'
                        fill='#00160E'
                      />
                      <path
                        d='M78.5 0L80.7451 6.90983H88.0106L82.1327 11.1803L84.3779 18.0902L78.5 13.8197L72.6221 18.0902L74.8673 11.1803L68.9894 6.90983H76.2549L78.5 0Z'
                        fill='#00160E'
                      />
                      <path
                        d='M101.5 0L103.745 6.90983H111.011L105.133 11.1803L107.378 18.0902L101.5 13.8197L95.6221 18.0902L97.8673 11.1803L91.9894 6.90983H99.2549L101.5 0Z'
                        fill='#00160E'
                      />
                    </svg>
                    <p>Based on 100+ reviews</p>
                  </RightWrap>
                </ImageHover>
              </ReviewLogo>
            </Container>
          </HeroSection>
          <BusinessSection>
            <Container>
              <BusinessText>
                <h2>
                  Discover why thousands of entrepreneurs choose Copilot to start
                  <span>, </span>
                  run<span>,</span> and grow their business<span>.</span>
                </h2>
                <p>
                  Tech-enabled service businesses of all types — marketing agencies, accounting firms, law firms, and
                  100s of others — run on Copilot to provide clients a branded, unified, and delightful experience on
                  web and mobile.
                </p>
              </BusinessText>
            </Container>
            <BusinessSlider data={content?.testimonialsCollection?.items} />
          </BusinessSection>
          <Functionality>
            <Container>
              <TopFunctionWrap>
                <h3 className='titlewrap'>
                  Powerful out-of-the box functionality<span>, </span>
                  ready to go<span>.</span>
                </h3>
                <p>
                  Provide clients a uniform experience with on-brand design, combined in-product notifications, and
                  consistent email notifications. And with modularily built-in, start with just one module and add more
                  when the time is right.
                </p>
              </TopFunctionWrap>
              <BottomFunction>
                <TabView tabId={HOME_FEATURES_TAB_ID} isHome={true} />
              </BottomFunction>
            </Container>
          </Functionality>
          <Extension>
            <Container>
              <BusinessText>
                <h2>
                  Go even further with Partner Apps<span>.</span>
                </h2>
                <p className='app-dec'>
                  Streamline the client experience even more by connecting products you already use and surface them in
                  the client experience — Calendly for scheduling, Airtable project trackers, Google Data Studio
                  dashboards, and thousands more.
                </p>
                <BtnView>
                  <Button
                    bgColor={'transparent'}
                    fontColor={'#000000'}
                    borderColor={'#000000'}
                    text={'Browse Apps'}
                    href={'https://copilot-release.vercel.app/apps'}
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
                  Automate your firm<span>.</span>
                </h2>
                <p>
                  Automate workflows inside your portal and connect external tools as well. For example, for new clients
                  assign an onboarding form, send out a customized welcome message, set up a default folder structure,
                  and create a lead in Salesforce. Use{' '}
                  <Link href='https://zapier.com/apps/portal/integrations'> Zapier </Link> for easy setup or our{' '}
                  <Link href='https://docs.copilot.com/reference/introduction'>API</Link> for full control.
                </p>
              </AutomateText>
              <BottomList>
                <CardWrapper>
                  <CardItem>
                    <Image src='/images/linkicon.svg' width={35} height={35} alt='link-icon' />
                    <CardTextView>
                      <h5>New client activated</h5>
                      <span>Company size &#60;= 50</span>
                    </CardTextView>
                    <IconView>
                      <Image src='/images/true-icon.svg' width={20} height={20} alt='link-icon' />
                    </IconView>
                    <LineIcon>
                      <Image src='/images/left-line.svg' width={65} height={130} alt='link-icon' />
                    </LineIcon>
                  </CardItem>
                </CardWrapper>
                <CardWrapper>
                  <CardItem>
                    <Image src='/images/linkicon.svg' width={35} height={35} alt='link-icon' />
                    <CardTextView>
                      <h5>Condition</h5>
                      <span>Company size &#60;= 50</span>
                    </CardTextView>
                    <IconView>
                      <Image src='/images/process-icon.svg' width={20} height={20} alt='process-icon' />
                    </IconView>
                    <LineIcon className='hr-icon'>
                      <Image src='/images/hr-line.svg' width={65} height={130} alt='hr-icon' />
                    </LineIcon>
                  </CardItem>
                  <CardItem>
                    <Image src='/images/linkicon.svg' width={35} height={35} alt='link-icon' />
                    <CardTextView>
                      <h5>Condition</h5>
                      <span>Company size &#62; 50</span>
                    </CardTextView>
                    <LineIcon>
                      <Image src='/images/lg2-icon.svg' width={65} height={130} alt='hr-icon' />
                    </LineIcon>
                    <IconWithoutView></IconWithoutView>
                  </CardItem>
                </CardWrapper>
                <CardWrapper>
                  <CardItem>
                    <Image src='/images/action-icon.svg' width={35} height={35} alt='action-icon' />
                    <CardTextView>
                      <h5>Action</h5>
                      <span>Assign small business onboarding form</span>
                    </CardTextView>
                    <IconWithoutView></IconWithoutView>
                  </CardItem>
                  <CardItem>
                    <Image src='/images/msg-icon2.svg' width={35} height={35} alt='msg-icon' />
                    <CardTextView>
                      <h5>Action</h5>
                      <span>Send message with scheduling link</span>
                    </CardTextView>
                    <IconWithoutView></IconWithoutView>
                  </CardItem>
                  <CardItem>
                    <Image src='/images/salesforce-icon.svg' width={35} height={35} alt='sales-icon' />
                    <CardTextView>
                      <h5>Action</h5>
                      <span>Create lead in Salesforce</span>
                    </CardTextView>
                    <IconWithoutView></IconWithoutView>
                  </CardItem>
                </CardWrapper>
              </BottomList>
            </Container>
          </AutomateSection>
          <HelpSection>
            <Container>
              <HelpMain>
                <HelpLeft>
                  <h3>
                    The support you need<span>,</span> when you need it
                  </h3>
                  <HelpWrap>
                    <HelpLeftSub>
                      <h4>Our Community</h4>
                      <p>Meet our team and a community of businesses that run on Copilot. Requires a Slack account.</p>
                      <HelpLink className='icon-link'>
                        <a href='https://copilot-release.vercel.app/jobs' className='learn-link mb0'>
                          Join Community
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
                      <h4>Copilot Blog</h4>
                      <p>Read about company announcements, new features, customer spotlights, and more.</p>
                      <HelpLink className='icon-link'>
                        <a href='http://copilot.com/blog' className='learn-link mb0'>
                          Read Blog
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
                        <h4>Copilot University</h4>
                        <p>
                          Watch video tutorials that cover getting set up, configuring your portal, best practices, and
                          more.
                        </p>
                        <HelpLink className='icon-link'>
                          <a href='https://copilot-release.vercel.app/university' className='learn-link mb0'>
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
                        <h4>Help Center</h4>
                        <p>Read answers to the most common questions, learn best practices, and contact our team.</p>
                        <HelpLink className='icon-link'>
                          <a href='https://support.copilot.com/hc/en-us' className='learn-link mb0'>
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

export async function getStaticProps({ preview = false }) {
  const content = (await getHomeContent()) ?? '';
  return {
    props: {
      content
    }
  };
}
