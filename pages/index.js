import Layout from "/components/layout";
import Image from "next/image";
import { NextSeo } from "next-seo";
import Link from "next/link";
import StarLogo from "../public/images/star5.svg";
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
        <HomeMain>
          <HeroSection>
            <Container>
              <HeroHeading>
                It’s all about connection<span>.</span>
              </HeroHeading>
              <Para>
                Give your customers a one-stop shop experience with a customer
                portal that streamlines messaging, payments, file-sharing, help
                centers, custom app access, and more.
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
                <ImageHover>
                  <Image
                    src="/images/hover.svg"
                    width={171}
                    height={43}
                    alt="msg-icon"
                    className="show"
                  />
                  <Image
                    src="/images/hoverlogo.svg"
                    width={171}
                    height={43}
                    alt="msg-icon"
                    className="hide"
                  />
                </ImageHover>
                {/* <svg
                    width="33"
                    height="33"
                    viewBox="0 0 33 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_322_132405)">
                      <path
                        d="M23.3501 22.85C24.4741 24.8245 25.5856 26.7766 26.6963 28.7266C21.7781 32.5381 14.1263 32.9987 8.46188 28.6094C1.94333 23.5543 0.871947 14.9288 4.36188 8.71981C8.3758 1.57813 15.8872 -0.0012911 20.7234 1.15684C20.5926 1.44447 17.6961 7.52741 17.6961 7.52741C17.6961 7.52741 17.4671 7.54264 17.3375 7.54518C15.9081 7.60651 14.8434 7.94321 13.7022 8.54046C12.4502 9.20179 11.3772 10.1635 10.5772 11.3415C9.77707 12.5195 9.27419 13.8779 9.11248 15.2981C8.94374 16.7383 9.14048 18.1983 9.6841 19.5402C10.1437 20.6746 10.7939 21.6822 11.6656 22.5328C13.0027 23.839 14.5939 24.6477 16.4383 24.9155C18.185 25.1693 19.8647 24.918 21.4388 24.1173C22.0292 23.8174 22.5315 23.4862 23.1186 23.0319C23.1934 22.9829 23.2598 22.9207 23.3501 22.85Z"
                        fill="#00160E"
                      />
                      <path
                        d="M23.3617 5.53252C23.0763 5.24828 22.8118 4.98603 22.5486 4.72209C22.3914 4.56474 22.2402 4.40104 22.0793 4.2475C22.0216 4.19209 21.9539 4.11637 21.9539 4.11637C21.9539 4.11637 22.0087 3.99878 22.0321 3.95056C22.34 3.32497 22.8227 2.86772 23.3951 2.50395C24.0282 2.09865 24.7657 1.89242 25.5145 1.91135C26.4726 1.93039 27.3635 2.17191 28.1152 2.82246C28.6701 3.30255 28.9547 3.91165 29.0048 4.63876C29.0884 5.86541 28.587 6.80486 27.5912 7.46049C27.0062 7.84625 26.3753 8.14446 25.7426 8.49765C25.3937 8.69264 25.0954 8.86395 24.7544 9.21672C24.4544 9.57076 24.4398 9.90449 24.4398 9.90449L28.9722 9.89857V11.942H21.9761V11.7445C21.9493 10.7403 22.0651 9.79536 22.5193 8.88341C22.9372 8.04675 23.5865 7.43426 24.3666 6.96264C24.9675 6.59929 25.6002 6.29009 26.2023 5.92844C26.5738 5.70553 26.8362 5.37856 26.8341 4.90439C26.8341 4.49748 26.5416 4.13583 26.1237 4.02289C25.1384 3.75387 24.1356 4.1832 23.6141 5.096C23.538 5.22924 23.4603 5.36164 23.3617 5.53252ZM32.1287 20.6771L28.3091 13.9998H20.7505L16.9062 20.746H24.5204L28.2778 27.3915L32.1287 20.6771Z"
                        fill="#00160E"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_322_132405">
                        <rect
                          width="32"
                          height="33"
                          fill="white"
                          transform="translate(0.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </>
                <ReviewRight>
                  <Reviewimage>
                    <svg
                      width="111"
                      height="20"
                      viewBox="0 0 111 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z"
                        fill="black"
                      />
                      <path
                        d="M33 0L35.2451 6.90983H42.5106L36.6327 11.1803L38.8779 18.0902L33 13.8197L27.1221 18.0902L29.3673 11.1803L23.4894 6.90983H30.7549L33 0Z"
                        fill="black"
                      />
                      <path
                        d="M55 0L57.2451 6.90983H64.5106L58.6327 11.1803L60.8779 18.0902L55 13.8197L49.1221 18.0902L51.3673 11.1803L45.4894 6.90983H52.7549L55 0Z"
                        fill="black"
                      />
                      <path
                        d="M78 0L80.2451 6.90983H87.5106L81.6327 11.1803L83.8779 18.0902L78 13.8197L72.1221 18.0902L74.3673 11.1803L68.4894 6.90983H75.7549L78 0Z"
                        fill="black"
                      />
                      <path
                        d="M101 0L103.245 6.90983H110.511L104.633 11.1803L106.878 18.0902L101 13.8197L95.1221 18.0902L97.3673 11.1803L91.4894 6.90983H98.7549L101 0Z"
                        fill="black"
                      />
                    </svg>
                  </Reviewimage>
                  <p>Based on 100+ reviews</p>
                </ReviewRight> */}
              </ReviewLogo>
            </Container>
          </HeroSection>
          <BusinessSection>
            <Container>
              <BusinessText>
                <h2>
                  Discover why thousands of entrepreneurs choose Copilot to
                  start
                  <span>, </span>
                  run<span>,</span> and grow their business<span>.</span>
                </h2>
                <p>
                  Tech-enabled service businesses of all types — marketing
                  agencies, accounting firms, law firms, and 100s of others —
                  run on Copilot to provide clients a branded, unified, and
                  delightful experience on web and mobile.
                </p>
              </BusinessText>
            </Container>
            <BusinessSlider />
          </BusinessSection>
          <Functionality>
            <Container>
              <TopFunctionWrap>
                <h3>
                  Powerful out-of-the box functionality<span>,</span>
                  <br />
                  ready to go<span>.</span>
                </h3>
                <p>
                  Provide clients a uniform experience with on-brand design,
                  combined in-product notifications, and consistent email
                  notifications. And with modularily built-in, start with just
                  one module and add more when the time is right.
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
                      portal. And give your team the ability to centralize
                      client communication and stay organized.{" "}
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
                <h2>
                  Go even further with Partner Apps<span>.</span>
                </h2>
                <p className="app-dec">
                  Streamline the client experience even more by connecting
                  products you already use and surface them in the client
                  experience — Calendly for scheduling, Airtable project
                  trackers, Google Data Studio dashboards, and thousands more.
                </p>
                <BtnView>
                  <SecondryButton>
                    <Link href="/request-demo">See all Extensions</Link>
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
                  Automate workflows inside your portal and connect external
                  tools as well. For example, for new clients assign an
                  onboarding form, send out a customized welcome message, set up
                  a default folder structure, and create a lead in Salesforce.
                  Use
                  <span> Zapier </span>for easy setup or our <span>API</span>{" "}
                  for full control.
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
                  <h3>The support you need, when you need it</h3>
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
                      <h4>Copilot Blog</h4>
                      <p>
                        Read about company announcements, new features, customer
                        spotlights, and more.
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
                        <h4>Copilot University</h4>
                        <p>
                          Watch video tutorials that cover getting set up,
                          configuring your portal, best practices, and more.
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
                        <h4>Help Center</h4>
                        <p>
                          Read answers to the most common questions, learn best
                          practices, and contact our team.
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
        </HomeMain>
        <CTA />
      </Layout>
    </>
  );
}
