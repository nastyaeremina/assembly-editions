import Layout from '/components/layout';
import Image from 'next/image';
import { NextSeo } from 'next-seo';
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
  HelpImg
} from '../styles/homepageStyles';
import BusinessSlider from '../components/businessSlider/businessslider';
import ExtensionSlider from '../components/extensionslider/extensionslider';
import CTA from '../components/cta/cta';
import { HEADER_LIST, MODULE_COLOR_LIST } from '../constants/constant';
import React, { useCallback, useMemo } from 'react';
import classNames from 'classnames';

function TabOverride({ children, ...rest }) {
  return (
    <StyledTab {...rest}>
      <LabelMedium
        overrides={{
          Block: {
            style: { color: 'inherit', ':hover': { color: 'inherit' } }
          }
        }}>
        {children}
      </LabelMedium>
    </StyledTab>
  );
}

const tabBarStyle = ({ $theme }) => ({
  backgroundColor: '#fff',
  'margin-bottom': '20px',
  'padding-left': '0px'
});
const tabContentStyle = ({ $theme }) => ({
  borderLeftWidth: '2px',
  borderRightWidth: '2px',
  borderBottomWidth: '2px',
  borderTopWidth: '0',
  borderLeftColor: $theme.colors.mono600,
  borderRightColor: $theme.colors.mono600,
  borderTopColor: $theme.colors.mono600,
  borderBottomColor: $theme.colors.mono600
});

let activeKey = 0;
const tabStyle = ({ $active, $disabled, $theme, $textColor }) => ({
  // outlineColor: $theme.colors.white,
  // color: $active ? '#fff' : '#757575',
  backgroundColor: $active ? MODULE_COLOR_LIST[activeKey]?.bgColor : 'inherit',
  color: $active ? MODULE_COLOR_LIST[activeKey]?.fontColor : '#757575',
  // eslint-disable-next-line no-dupe-keys
  backgroundColor: $active ? '#120800' : 'inherit',
  'border-radius': '40px',
  padding: '7px 20px'
  // ':hover': $active
  //   ? {
  //       color: '#fff',
  //       backgroundColor: '#333'
  //     }
  //   : {
  //       color: '#000'
  //     }
});
export default function Home() {
  // const [activeKey, setActiveKey] = React.useState(0);
  const setActiveKey = useCallback((value) => {
    activeKey = value;
  }, []);
  // console.log(
  //   " Keys.MESSAGING === activeKey",
  //   activeKey,
  //   Keys.MESSAGING,
  //   Keys.BILLING,
  //   Keys.MESSAGING === activeKey,
  //   Keys.BILLING === activeKey
  // );

  return (
    <>
      <NextSeo
        title='Copilot - It’s all about connection'
        description='copilot offers client portal software solution to manage sales reporting, management, marketing, improve customer relationships and more. Get the best free CRM system for your business.'
      />
      <Layout>
        <Navbar headerIndex={HEADER_LIST.HOME} isModule={false} />
        <HomeMain>
          <HeroSection>
            <Container>
              <HeroHeading>
                It’s all about connection<span>.</span>
              </HeroHeading>
              <Para>
                Give your customers a one-stop shop experience with a customer portal that streamlines messaging,
                payments, file-sharing, help centers, custom app access, and more.
              </Para>
              <HeroBtnBlock>
                <PrimaryButton>
                  <Link href='https://dashboard.copilot.com/onboarding'>Start Trial</Link>
                </PrimaryButton>
                <SecondryButton>
                  <Link href='/book-demo'>Book Demo</Link>
                </SecondryButton>
              </HeroBtnBlock>
              <ReviewLogo>
                <ImageHover>
                  <Image src='/images/hover.svg' width={171} height={43} alt='msg-icon' className='show' />
                  <Image src='/images/hoverlogo.svg' width={171} height={43} alt='msg-icon' className='hide' />
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
            <BusinessSlider />
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
                <TabRow>
                  <StatefulTabs
                    initialState={{
                      activeKey: activeKey
                    }}
                    overrides={{
                      TabBar: {
                        style: tabBarStyle
                      },
                      TabContent: {
                        style: tabContentStyle
                      },
                      Tab: { component: TabOverride, style: tabStyle }
                    }}>
                    <Tab title='Messaging' className='ml0'>
                      <ContainWrap>
                        <LeftDetail>
                          <IconSvg>
                            <Image src='/images/msgicon.svg' width={64} height={60} alt='msg-icon' />
                          </IconSvg>
                          <h4>Messaging</h4>
                          <p>
                            Let clients securely and seamlessly message you from your portal. And give your team the
                            ability to centralize client communication and stay organized.{' '}
                          </p>
                          <SecondryButton>
                            <Link href='https://copilot-release.vercel.app/modules/message'>Learn More</Link>
                          </SecondryButton>
                        </LeftDetail>
                        <RightDetail>
                          <Image src='/images/msgscreen.png' width={881.76} height={550.63} alt='msg-screen' />
                        </RightDetail>
                      </ContainWrap>
                    </Tab>
                    <Tab title='Billing'>
                      {/* <div>{content[Number(activeKey)]}</div> */}
                      <ContainWrap>
                        <LeftDetail>
                          <IconSvg>
                            <Image src='/images/billicon.svg' width={64} height={60} alt='bill-icon' />
                          </IconSvg>
                          <h4>Billing </h4>
                          <p>
                            Let clients securely and seamlessly message you from your portal. And give your team the
                            ability to centralize client communication and stay organized.
                          </p>
                          <SecondryButton>
                            <Link href='https://copilot-release.vercel.app/modules/billing'>Learn More</Link>
                          </SecondryButton>
                        </LeftDetail>
                        <RightDetail>
                          <Image src='/images/billscreen.png' width={881} height={550} alt='msg-screen' />
                        </RightDetail>
                      </ContainWrap>
                    </Tab>
                    <Tab title='Files'>
                      {/* <div>{content[Number(activeKey)]}</div>
                       */}
                      <ContainWrap>
                        <LeftDetail>
                          <IconSvg>
                            <Image src='/images/fileicon.svg' width={64} height={60} alt='bill-icon' />
                          </IconSvg>
                          <h4>Files</h4>
                          <p>
                            Let clients securely and seamlessly message you from your portal. And give your team the
                            ability to centralize client communication and stay organized.
                          </p>
                          <SecondryButton>
                            <Link href='https://copilot-release.vercel.app/modules/file'>Learn More</Link>
                          </SecondryButton>
                        </LeftDetail>
                        <RightDetail>
                          <Image src='/images/filescreen.png' width={881} height={550} alt='msg-screen' />
                        </RightDetail>
                      </ContainWrap>
                    </Tab>
                    <Tab title='Forms'>
                      {/* <div>{content[Number(activeKey)]}</div>
                       */}
                      <ContainWrap>
                        <LeftDetail>
                          <IconSvg>
                            <Image src='/images/formicon.svg' width={64} height={60} alt='bill-icon' />
                          </IconSvg>
                          <h4>Forms</h4>
                          <p>
                            Let clients securely and seamlessly message you from your portal. And give your team the
                            ability to centralize client communication and stay organized.
                          </p>
                          <SecondryButton>
                            <Link href='https://copilot-release.vercel.app/modules/form'>Learn More</Link>
                          </SecondryButton>
                        </LeftDetail>
                        <RightDetail>
                          <Image src='/images/formscreen.png' width={881} height={550} alt='msg-screen' />
                        </RightDetail>
                      </ContainWrap>
                    </Tab>
                    <Tab title='Helpdesk'>
                      {/* <div>{content[Number(activeKey)]}</div> */}
                      <ContainWrap>
                        <LeftDetail>
                          <IconSvg>
                            <Image src='/images/clientsvg.svg' width={64} height={60} alt='bill-icon' />
                          </IconSvg>
                          <h4>Helpdesk</h4>
                          <p>
                            Let clients securely and seamlessly message you from your portal. And give your team the
                            ability to centralize client communication and stay organized.
                          </p>
                          <SecondryButton>
                            <Link href='https://copilot-release.vercel.app/modules/knowledge'>Learn More</Link>
                          </SecondryButton>
                        </LeftDetail>
                        <RightDetail>
                          <Image src='/images/clientscreen.png' width={881} height={550} alt='form-screen' />
                        </RightDetail>
                      </ContainWrap>
                    </Tab>
                  </StatefulTabs>
                </TabRow>
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
                  <SecondryButton>
                    <Link href='https://copilot-release.vercel.app/apps'>Browse Apps</Link>
                  </SecondryButton>
                </BtnView>
              </BusinessText>
            </Container>
            <ExtensionSlider />
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
