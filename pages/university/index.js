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
  ExtensionsSection
} from "../../styles/universityStyles";
import { Container } from "../../styles/commonStyles";
import Image from "next/image";

export default function University() {
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
                    <h4>Partner Apps</h4>
                    <Catagoryitem>
                      <Link href={"#Brief-Section"}>All</Link>
                    </Catagoryitem>
                    <Catagoryitem>
                      <Link href={"#Project-Section"}>Get Started</Link>
                    </Catagoryitem>
                    <Catagoryitem>
                      <Link href={"#data-section"}>Copilot Apps</Link>
                    </Catagoryitem>
                    <Catagoryitem>
                      <Link href={"#Scheduling-Section"}>Partner Apps</Link>
                    </Catagoryitem>
                    <Catagoryitem>
                      <Link href={"#Integrations-Section"}>Advanced</Link>
                    </Catagoryitem>
                    <Catagoryitem>
                      <Link href={"#Integrations-Section"}>
                        Industry Courses
                      </Link>
                    </Catagoryitem>
                    <Catagoryitem>
                      <Link href={"#Integrations-Section"}>Quick Tips</Link>
                    </Catagoryitem>
                  </Catagory>
                </LeftWrap>
              </FeatureLeft>
              <FeatureRight>
                <Featured id="Brief-Section">
                  <h3>Get Started</h3>
                  <FeatureMenu>
                    <FeatureCard>
                      <Image
                        src="/images/video1.png"
                        alt="video"
                        width={270}
                        height={152}
                        layout={"fixed"}
                      /></FeatureCard>
                        <FeatureCard>
                      <Image
                        src="/images/video1.png"
                        alt="video"
                        width={270}
                        height={152}
                        layout={"fixed"}
                      /></FeatureCard>
                         <FeatureCard>
                      <Image
                        src="/images/video1.png"
                        alt="video"
                        width={270}
                        height={152}
                        layout={"fixed"}
                      /></FeatureCard>
                     <FeatureCard>
                      <Image
                        src="/images/video1.png"
                        alt="video"
                        width={270}
                        height={152}
                        layout={"fixed"}
                      /></FeatureCard>
                        <FeatureCard>
                      <Image
                        src="/images/video1.png"
                        alt="video"
                        width={270}
                        height={152}
                        layout={"fixed"}
                      /></FeatureCard>
                         <FeatureCard>
                      <Image
                        src="/images/video1.png"
                        alt="video"
                        width={270}
                        height={152}
                        layout={"fixed"}
                      /></FeatureCard>
                           <FeatureCard>
                      <Image
                        src="/images/video1.png"
                        alt="video"
                        width={270}
                        height={152}
                        layout={"fixed"}
                      /></FeatureCard>
                     <FeatureCard>
                      <Image
                        src="/images/video1.png"
                        alt="video"
                        width={270}
                        height={152}
                        layout={"fixed"}
                      /></FeatureCard>
                        <FeatureCard>
                      <Image
                        src="/images/video1.png"
                        alt="video"
                        width={270}
                        height={152}
                        layout={"fixed"}
                      /></FeatureCard>
                         <FeatureCard>
                      <Image
                        src="/images/video1.png"
                        alt="video"
                        width={270}
                        height={152}
                        layout={"fixed"}
                      /></FeatureCard>
                  </FeatureMenu>
                </Featured>
                <ExtensionsSection></ExtensionsSection>
              </FeatureRight>
            </FeatureWrap>
          </Container>
        </UniversitySection>
      </Layout>
    </>
  );
}
