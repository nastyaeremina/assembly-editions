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
} from "../styles/homepageStyles";
import BusinessSlider from "../components/business-slider/businessslider";

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
      </Layout>
    </>
  );
}
