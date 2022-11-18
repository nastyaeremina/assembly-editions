import Layout from "/components/layout";
import Link from "next/link";
import { NextSeo } from "next-seo";
import Navbar from "../../components/navbar/navbar";
import {
  UniversitySection,
  UniversityHero,
  FeatureWrap,
  FeatureLeft,
  LeftWrap,
  InputWrap,
  Catagoryitem,
  Catagory,
  Input,
  FeatureRight,
  Featured,
  FeatureMenu,
  FeatureCard,
  ExtensionsSection,
  SchedulingApps,
  ExtensionCard,
} from "../../styles/universityStyles";
import { Container } from "../../styles/commonStyles";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

const CATEGORIES = {
  GET_STARTED: "GET_STARTED",
  COPILOT_APPS: "COPILOT_APPS",
  PARTNER_APPS: "PARTNER_APPS",
  ADVANCED: "ADVANCED",
  INDUSTRY_COURSES: "INDUSTRY_COURSES",
  QUICK_TIPS: "QUICK_TIPS",
};
let selected_categry = null;
export default function University() {
  // const [selected_categry, useSelected_categry] = useState(null);
  const handleScroll = useCallback(() => {
    if (!selected_categry) return;
    console.log("selected_categry", selected_categry);
    selected_categry = null;
  }, []);

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, [handleScroll]);

  const onClickCategories = useCallback((name) => {
    selected_categry = name;
    setTimeout(() => {
      selected_categry = null;
    }, 1000);
  }, []);

  return (
    <>
      <NextSeo
        title="copilot blogs to keep you up with the  Sales Tactics!"
        description="Sale is a prominent part of any business & nothing can be better than getting tried tactics for it. So get all that you want to know about sales from our Blogs."
      />
      <Layout>
        <Navbar />
        <UniversitySection>
          <Container>
            <UniversityHero>
              <h2>Copilot University</h2>
              <p>
                Search from our library of lessons covering everything from
                initial setup and customization to Partner Apps and automations.
              </p>
            </UniversityHero>
            <FeatureWrap>
              <FeatureLeft>
                <LeftWrap>
                  <InputWrap>
                    <Image
                      src="/images/searchicon.svg"
                      alt="search-icon"
                      width={20}
                      height={20}
                    />
                    <Input placeholder="Find a video..." />
                  </InputWrap>
                  <Catagory>
                    <h4>Categories</h4>
                    <Catagoryitem>
                      <Link href={"#GetStarted-Section"}>All</Link>
                    </Catagoryitem>
                    <Catagoryitem
                      onClick={() => {
                        onClickCategories(CATEGORIES.GET_STARTED);
                      }}
                    >
                      <Link href={"#GetStarted-Section"}>Get Started</Link>
                    </Catagoryitem>
                    <Catagoryitem
                      onClick={() => {
                        onClickCategories(CATEGORIES.COPILOT_APPS);
                      }}
                    >
                      <Link href={"#CopilotApps-Section"}>Copilot Apps</Link>
                    </Catagoryitem>
                    <Catagoryitem
                      onClick={() => {
                        onClickCategories(CATEGORIES.PARTNER_APPS);
                      }}
                    >
                      <Link href={"#PartnerApps-Section"}>Partner Apps</Link>
                    </Catagoryitem>
                    <Catagoryitem
                      onClick={() => {
                        onClickCategories(CATEGORIES.ADVANCED);
                      }}
                    >
                      <Link href={"#Advanced-Section"}>Advanced</Link>
                    </Catagoryitem>
                    <Catagoryitem>
                      <Link href={"#Industrycourses-Section"}>
                        Industry Courses
                      </Link>
                    </Catagoryitem>
                    <Catagoryitem>
                      <Link href={"#QuickTips-Section"}>Quick Tips</Link>
                    </Catagoryitem>
                  </Catagory>
                </LeftWrap>
              </FeatureLeft>
              <FeatureRight>
                <Featured
                  id="GetStarted-Section"
                  isSelected={CATEGORIES.GET_STARTED === selected_categry}
                >
                  <h3>Get Started</h3>
                  <FeatureMenu>
                    <FeatureCard>
                      <Image
                        src="/images/video1.png"
                        alt="video"
                        width={270}
                        height={152}
                        layout={"fixed"}
                      />
                    </FeatureCard>
                    <FeatureCard>
                      <Image
                        src="/images/video1.png"
                        alt="video"
                        width={270}
                        height={152}
                        layout={"fixed"}
                      />
                    </FeatureCard>
                    <FeatureCard>
                      <Image
                        src="/images/video1.png"
                        alt="video"
                        width={270}
                        height={152}
                        layout={"fixed"}
                      />
                    </FeatureCard>
                    <FeatureCard>
                      <Image
                        src="/images/video1.png"
                        alt="video"
                        width={270}
                        height={152}
                        layout={"fixed"}
                      />
                    </FeatureCard>
                    <FeatureCard>
                      <Image
                        src="/images/video1.png"
                        alt="video"
                        width={270}
                        height={152}
                        layout={"fixed"}
                      />
                    </FeatureCard>
                    <FeatureCard>
                      <Image
                        src="/images/video1.png"
                        alt="video"
                        width={270}
                        height={152}
                        layout={"fixed"}
                      />
                    </FeatureCard>
                    <FeatureCard>
                      <Image
                        src="/images/video1.png"
                        alt="video"
                        width={270}
                        height={152}
                        layout={"fixed"}
                      />
                    </FeatureCard>
                    <FeatureCard>
                      <Image
                        src="/images/video1.png"
                        alt="video"
                        width={270}
                        height={152}
                        layout={"fixed"}
                      />
                    </FeatureCard>
                    <FeatureCard>
                      <Image
                        src="/images/video1.png"
                        alt="video"
                        width={270}
                        height={152}
                        layout={"fixed"}
                      />
                    </FeatureCard>
                    <FeatureCard>
                      <Image
                        src="/images/video1.png"
                        alt="video"
                        width={270}
                        height={152}
                        layout={"fixed"}
                      />
                    </FeatureCard>
                  </FeatureMenu>
                </Featured>
                <ExtensionsSection
                  id="CopilotApps-Section"
                  isSelected={CATEGORIES.COPILOT_APPS === selected_categry}
                >
                  <h3>Project management</h3>
                  <FeatureMenu>
                    <FeatureCard>
                      <Image
                        src="/images/video1.png"
                        alt="video"
                        width={270}
                        height={152}
                        layout={"fixed"}
                      />
                    </FeatureCard>
                    <FeatureCard>
                      <Image
                        src="/images/video1.png"
                        alt="video"
                        width={270}
                        height={152}
                        layout={"fixed"}
                      />
                    </FeatureCard>
                    <FeatureCard>
                      <Image
                        src="/images/video1.png"
                        alt="video"
                        width={270}
                        height={152}
                        layout={"fixed"}
                      />
                    </FeatureCard>
                    <FeatureCard>
                      <Image
                        src="/images/video1.png"
                        alt="video"
                        width={270}
                        height={152}
                        layout={"fixed"}
                      />
                    </FeatureCard>
                    <FeatureCard>
                      <Image
                        src="/images/video1.png"
                        alt="video"
                        width={270}
                        height={152}
                        layout={"fixed"}
                      />
                    </FeatureCard>
                    <FeatureCard>
                      <Image
                        src="/images/video1.png"
                        alt="video"
                        width={270}
                        height={152}
                        layout={"fixed"}
                      />
                    </FeatureCard>
                    <FeatureCard>
                      <Image
                        src="/images/video1.png"
                        alt="video"
                        width={270}
                        height={152}
                        layout={"fixed"}
                      />
                    </FeatureCard>
                  </FeatureMenu>
                </ExtensionsSection>
                <SchedulingApps
                  id="PartnerApps-Section"
                  isSelected={CATEGORIES.PARTNER_APPS === selected_categry}
                >
                  <h3>Partner Apps</h3>
                  <ExtensionCard>
                    <FeatureCard>
                      <Image
                        src="/images/video1.png"
                        alt="video"
                        width={270}
                        height={152}
                        layout={"fixed"}
                      />
                    </FeatureCard>
                    <FeatureCard>
                      <Image
                        src="/images/video1.png"
                        alt="video"
                        width={270}
                        height={152}
                        layout={"fixed"}
                      />
                    </FeatureCard>
                    <FeatureCard>
                      <Image
                        src="/images/video1.png"
                        alt="video"
                        width={270}
                        height={152}
                        layout={"fixed"}
                      />
                    </FeatureCard>
                    <FeatureCard>
                      <Image
                        src="/images/video1.png"
                        alt="video"
                        width={270}
                        height={152}
                        layout={"fixed"}
                      />
                    </FeatureCard>
                    <FeatureCard>
                      <Image
                        src="/images/video1.png"
                        alt="video"
                        width={270}
                        height={152}
                        layout={"fixed"}
                      />
                    </FeatureCard>
                    <FeatureCard>
                      <Image
                        src="/images/video1.png"
                        alt="video"
                        width={270}
                        height={152}
                        layout={"fixed"}
                      />
                    </FeatureCard>
                    <FeatureCard>
                      <Image
                        src="/images/video1.png"
                        alt="video"
                        width={270}
                        height={152}
                        layout={"fixed"}
                      />
                    </FeatureCard>
                    <FeatureCard>
                      <Image
                        src="/images/video1.png"
                        alt="video"
                        width={270}
                        height={152}
                        layout={"fixed"}
                      />
                    </FeatureCard>
                    <FeatureCard>
                      <Image
                        src="/images/video1.png"
                        alt="video"
                        width={270}
                        height={152}
                        layout={"fixed"}
                      />
                    </FeatureCard>
                    <FeatureCard>
                      <Image
                        src="/images/video1.png"
                        alt="video"
                        width={270}
                        height={152}
                        layout={"fixed"}
                      />
                    </FeatureCard>
                    <FeatureCard>
                      <Image
                        src="/images/video1.png"
                        alt="video"
                        width={270}
                        height={152}
                        layout={"fixed"}
                      />
                    </FeatureCard>
                    <FeatureCard>
                      <Image
                        src="/images/video1.png"
                        alt="video"
                        width={270}
                        height={152}
                        layout={"fixed"}
                      />
                    </FeatureCard>
                    <FeatureCard>
                      <Image
                        src="/images/video1.png"
                        alt="video"
                        width={270}
                        height={152}
                        layout={"fixed"}
                      />
                    </FeatureCard>
                    <FeatureCard>
                      <Image
                        src="/images/video1.png"
                        alt="video"
                        width={270}
                        height={152}
                        layout={"fixed"}
                      />
                    </FeatureCard>
                  </ExtensionCard>
                </SchedulingApps>
                <SchedulingApps
                  id="Advanced-Section"
                  isSelected={CATEGORIES.ADVANCED === selected_categry}
                >
                  <h3>Advanced</h3>
                  <ExtensionCard>
                    <FeatureCard>
                      <Image
                        src="/images/video1.png"
                        alt="video"
                        width={270}
                        height={152}
                        layout={"fixed"}
                      />
                    </FeatureCard>
                    <FeatureCard>
                      <Image
                        src="/images/video1.png"
                        alt="video"
                        width={270}
                        height={152}
                        layout={"fixed"}
                      />
                    </FeatureCard>
                    <FeatureCard>
                      <Image
                        src="/images/video1.png"
                        alt="video"
                        width={270}
                        height={152}
                        layout={"fixed"}
                      />
                    </FeatureCard>
                    <FeatureCard>
                      <Image
                        src="/images/video1.png"
                        alt="video"
                        width={270}
                        height={152}
                        layout={"fixed"}
                      />
                    </FeatureCard>
                  </ExtensionCard>
                </SchedulingApps>
                <SchedulingApps
                  id="Industrycourses-Section"
                  isSelected={CATEGORIES.INDUSTRY_COURSES === selected_categry}
                >
                  <h3>Industry courses</h3>
                  <ExtensionCard>
                    <FeatureCard>
                      <Image
                        src="/images/video1.png"
                        alt="video"
                        width={270}
                        height={152}
                        layout={"fixed"}
                      />
                    </FeatureCard>
                    <FeatureCard>
                      <Image
                        src="/images/video1.png"
                        alt="video"
                        width={270}
                        height={152}
                        layout={"fixed"}
                      />
                    </FeatureCard>
                    <FeatureCard>
                      <Image
                        src="/images/video1.png"
                        alt="video"
                        width={270}
                        height={152}
                        layout={"fixed"}
                      />
                    </FeatureCard>
                  </ExtensionCard>
                </SchedulingApps>
                <SchedulingApps
                  id="QuickTips-Section"
                  isSelected={CATEGORIES.QUICK_TIPS === selected_categry}
                >
                  <h3>Quick tips</h3>
                  <ExtensionCard>
                    <FeatureCard>
                      <Image
                        src="/images/video1.png"
                        alt="video"
                        width={270}
                        height={152}
                        layout={"fixed"}
                      />
                    </FeatureCard>
                    <FeatureCard>
                      <Image
                        src="/images/video1.png"
                        alt="video"
                        width={270}
                        height={152}
                        layout={"fixed"}
                      />
                    </FeatureCard>
                  </ExtensionCard>
                </SchedulingApps>
              </FeatureRight>
            </FeatureWrap>
          </Container>
        </UniversitySection>
      </Layout>
    </>
  );
}
