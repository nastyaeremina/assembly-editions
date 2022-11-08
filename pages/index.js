import { useState } from "react";
import Layout from "/components/layout";
import Image from "next/image";
import { NextSeo } from "next-seo";
import Link from "next/link";
import Navbar from "../components/navbar/navbar";
import {
  Container,
  PrimaryButton,
  SecondryButton,
} from "../styles/commonStyles";

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
  IconViewblank,
  HelpSection,
  HelpMain,
  HelpLeft,
  HelpLeftSub,
  HelpLink,
  HelpWrap,
  HelpMargin,
} from "../styles/homepageStyles";
import BusinessSlider from "../components/businessSlider/businessslider";
import ExtensionSlider from "../components/extensionslider/extensionslider";
import CTA from "../components/cta/cta";

export default function Home() {
  return (
    <>
      <NextSeo
        title="Copilot - It’s all about connection"
        description="copilot offers client portal software solution to manage sales reporting, management, marketing, improve customer relationships and more. Get the best free CRM system for your business."
      />
      <Layout>
        <Navbar />
        <HeroSection>
          <Container>
            <HeroHeading>
              It’s all about connection<span>.</span>
            </HeroHeading>
            <Para>
              Give your customers a one-stop shop experience with a client
              portal that streamlines messaging, payments, file-sharing, help
              centers, dashboard access, and more.
            </Para>
            <HeroBtnBlock>
              <PrimaryButton>
                <Link href="/">Start Trial</Link>
              </PrimaryButton>
              <SecondryButton>
                <Link href="/request-demo">Book Demo</Link>
              </SecondryButton>
            </HeroBtnBlock>
            <ReviewLogo>
              <>
                <Image
                  src="/images/g2.svg"
                  alt="hero-feature"
                  height={32}
                  width={33}
                />
              </>
              <ReviewRight>
                <Reviewimage>
                  <Image
                    src="/images/star.svg"
                    alt="hero-feature"
                    height={20}
                    width={20}
                  />
                  <Image
                    src="/images/star.svg"
                    alt="hero-feature"
                    height={20}
                    width={20}
                  />
                  <Image
                    src="/images/star.svg"
                    alt="hero-feature"
                    height={20}
                    width={20}
                  />
                  <Image
                    src="/images/star.svg"
                    alt="hero-feature"
                    height={20}
                    width={20}
                  />
                  <Image
                    src="/images/star.svg"
                    alt="hero-feature"
                    height={20}
                    width={20}
                  />
                </Reviewimage>
                <p>Based on 100+ reviews</p>
              </ReviewRight>
            </ReviewLogo>
          </Container>
        </HeroSection>
        <BusinessSection>
          <Container>
            <BusinessText>
              <h2>
                Discover why thousands of entrepreneurs choose Copilot to start,
                run, and grow their business.
              </h2>
              <p>
                Whether you’re starting a new business, looking to improve
                operations, or want to accelerate growth, our goal to be a
                valuable partner at every stage of the business lifecycle.{" "}
              </p>
            </BusinessText>
          </Container>
          <BusinessSlider />
        </BusinessSection>
        <Functionality>
          <Container>
            <TopFunctionWrap>
              <h3>
                Powerful out-of-the box functionality,
                <br />
                ready to go.
              </h3>
              <p>
                Provide clients a uniform experience with on-brand design,
                combined in-product notifications, and consistent email
                notifications. And with modularily built-in, start with just one
                module and add more when the time is right.
              </p>
            </TopFunctionWrap>
            <BottomFunction>
              <TabRow>
                <TabBox>
                  <Link href={"#"} className="activetab">
                    Messaging
                  </Link>
                </TabBox>
                <TabBox>
                  <Link href={"#"}>File</Link>
                </TabBox>
                <TabBox>
                  <Link href={"#"}>Helpdesk</Link>
                </TabBox>
                <TabBox>
                  <Link href={"#"}>Forms</Link>
                </TabBox>
                <TabBox>
                  <Link href={"#"}>Billing</Link>
                </TabBox>
                <TabBox>
                  <Link href={"#"}>Contracts</Link>
                </TabBox>
              </TabRow>
              <ContainWrap>
                <LeftDetail>
                  <IconSvg>
                    <Image
                      src="/images/msgicon.svg"
                      width={64}
                      height={60}
                      alt="msg-icon"
                    />
                  </IconSvg>
                  <h4>Messaging</h4>
                  <p>
                    Let clients securely and seamlessly message you from your
                    portal. And give your team the ability to centralize client
                    communication and stay organized.{" "}
                  </p>
                  <SecondryButton>
                    <Link href="/request-demo">Learn More</Link>
                  </SecondryButton>
                </LeftDetail>
                <RightDetail>
                  <Image
                    src="/images/msgscreen.png"
                    width={881}
                    height={550}
                    alt="msg-screen"
                  />
                </RightDetail>
              </ContainWrap>
            </BottomFunction>
          </Container>
        </Functionality>
        <Extension>
          <Container>
            <BusinessText>
              <h2>Go even further with Extensions</h2>
              <p>
                Streamline the client experience even more by embedding products
                you already use and surface them in the client experience —
                Calendly for scheduling, Airtable kanban boards, ClickUp forms,
                Google Data Studio dashboards, and thousands more.
              </p>
              <SecondryButton>
                <Link href="/request-demo">See all Extensions</Link>
              </SecondryButton>
            </BusinessText>
          </Container>
          <ExtensionSlider />
        </Extension>
        <AutomateSection>
          <Container>
            <AutomateText>
              <h2>Automate your firm</h2>
              <p>
                Automate workflows inside your portal and connect external tools
                as well. For example, for new clients assign an onboarding form,
                send out a customized welcome message, set up a default folder
                structure, and create a lead in Salesforce. Use
                <span>Zapier</span>for easy setup or our <span>API</span> for
                full control.
              </p>
            </AutomateText>
            <BottomList>
              <CardWrapper>
                <CardItem>
                  <Image
                    src="/images/linkicon.svg"
                    width={35}
                    height={35}
                    alt="link-icon"
                  />
                  <CardTextView>
                    <h5>Condition</h5>
                    <span>Company size &#60;= 50</span>
                  </CardTextView>
                  <IconView>
                    <Image
                      src="/images/true-icon.svg"
                      width={20}
                      height={20}
                      alt="link-icon"
                    />
                  </IconView>
                  <LineIcon>
                    <Image
                      src="/images/left-line.svg"
                      width={65}
                      height={130}
                      alt="link-icon"
                    />
                  </LineIcon>
                </CardItem>
              </CardWrapper>
              <CardWrapper>
                <CardItem>
                  <Image
                    src="/images/linkicon.svg"
                    width={35}
                    height={35}
                    alt="link-icon"
                  />
                  <CardTextView>
                    <h5>Condition</h5>
                    <span>Company size &#60;= 50</span>
                  </CardTextView>
                  <IconView>
                    <Image
                      src="/images/process-icon.svg"
                      width={20}
                      height={20}
                      alt="process-icon"
                    />
                  </IconView>
                  <LineIcon className="hr-icon">
                    <Image
                      src="/images/hr-line.svg"
                      width={65}
                      height={130}
                      alt="hr-icon"
                    />
                  </LineIcon>
                </CardItem>
                <CardItem>
                  <Image
                    src="/images/linkicon.svg"
                    width={35}
                    height={35}
                    alt="link-icon"
                  />
                  <CardTextView>
                    <h5>Condition</h5>
                    <span>Company size &#62; 50</span>
                  </CardTextView>
                  <LineIcon>
                    <Image
                      src="/images/lg2-icon.svg"
                      width={65}
                      height={130}
                      alt="hr-icon"
                    />
                  </LineIcon>
                  <IconWithoutView></IconWithoutView>
                </CardItem>
              </CardWrapper>
              <CardWrapper>
                <CardItem>
                  <Image
                    src="/images/action-icon.svg"
                    width={35}
                    height={35}
                    alt="action-icon"
                  />
                  <CardTextView>
                    <h5>Action</h5>
                    <span>Assign small business onboarding form</span>
                  </CardTextView>
                  <IconWithoutView></IconWithoutView>
                </CardItem>
                <CardItem>
                  <Image
                    src="/images/msg-icon2.svg"
                    width={35}
                    height={35}
                    alt="msg-icon"
                  />
                  <CardTextView>
                    <h5>Action</h5>
                    <span>Send message with scheduling link</span>
                  </CardTextView>
                  <IconWithoutView></IconWithoutView>
                </CardItem>
                <CardItem>
                  <Image
                    src="/images/salesforce-icon.svg"
                    width={35}
                    height={35}
                    alt="sales-icon"
                  />
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
                <h3>The help you need, when you need it</h3>
                <HelpWrap>
                  <HelpLeftSub>
                    <h4>Our Community</h4>
                    <p>
                      Meet our team and a community of businesses that run on
                      Copilot. Requires a Slack account.
                    </p>
                    <HelpLink>
                      <a href="#">Join Community</a>
                      <Image
                        src="/images/rightarrow.svg"
                        width={12}
                        height={12}
                        alt="right-arrow"
                      ></Image>
                    </HelpLink>
                  </HelpLeftSub>
                  <HelpLeftSub>
                    <h4>Our Community</h4>
                    <p>
                      Meet our team and a community of businesses that run on
                      Copilot. Requires a Slack account.
                    </p>
                    <HelpLink>
                      <a href="#">Join Community</a>
                      <Image
                        src="/images/rightarrow.svg"
                        width={12}
                        height={12}
                        alt="right-arrow"
                      ></Image>
                    </HelpLink>
                  </HelpLeftSub>
                </HelpWrap>
                <HelpMargin>
                  <HelpWrap>
                    <HelpLeftSub>
                      <h4>Our Community</h4>
                      <p>
                        Meet our team and a community of businesses that run on
                        Copilot. Requires a Slack account.
                      </p>
                      <HelpLink>
                        <a href="#">Join Community</a>
                        <Image
                          src="/images/rightarrow.svg"
                          width={12}
                          height={12}
                          alt="right-arrow"
                        ></Image>
                      </HelpLink>
                    </HelpLeftSub>
                    <HelpLeftSub>
                      <h4>Our Community</h4>
                      <p>
                        Meet our team and a community of businesses that run on
                        Copilot. Requires a Slack account.
                      </p>
                      <HelpLink>
                        <a href="#">Join Community</a>
                        <Image
                          src="/images/rightarrow.svg"
                          width={12}
                          height={12}
                          alt="right-arrow"
                        ></Image>
                      </HelpLink>
                    </HelpLeftSub>
                  </HelpWrap>
                </HelpMargin>
              </HelpLeft>
              <Image
                src="/images/helpimage.png"
                width={447}
                height={661}
                alt="right-arrow"
                objectFit="cover"
              />
            </HelpMain>
          </Container>
        </HelpSection>
        <CTA />
      </Layout>
    </>
  );
}
