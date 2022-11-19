import Layout from "/components/layout";
import Link from "next/link";
import { NextSeo } from "next-seo";
import { getAllBlogs } from "../../lib/contentful-blogs";
import Navbar from "../../components/navbar/navbar";
import {
  HeroSection,
  FeatureSection,
  FeatureWrap,
  Input,
  Catagory,
  Catagoryitem,
  FeatureLeft,
  LeftWrap,
  InputWrap,
  FeatureRight,
  FeatureMenu,
  FeatureCard,
  CardText,
  CardEnd,
  FeatureImg,
  Featured,
  ExtensionsSection,
  ExtensionCard,
  CardSub,
  CardInfo,
  SchedulingApps,
  AppsTitle,
  BuildWrap,
  BuildAppsDetail,
  OtherWrap,
} from "../../styles/appsStyles";
import {
  Container,
  PrimaryButton,
  SecondryButton,
} from "../../styles/commonStyles";
import CTA from "../../components/cta/cta";
import Image from "next/image";
import FAQ from "../../components/faq/faq";

export default function Extensions({ allPosts }) {
  return (
    <>
      <NextSeo
        title="copilot blogs to keep you up with the  Sales Tactics!"
        description="Sale is a prominent part of any business & nothing can be better than getting tried tactics for it. So get all that you want to know about sales from our Blogs."
      />
      <Layout>
        <Navbar />
        <HeroSection>
          <Container>
            <h2>App Directory</h2>
            <p>Try Copilot free for 14 days, no credit card required</p>
            <PrimaryButton>
              <Link href="https://dashboard.copilot.com/onboarding">
                Start Trial
              </Link>
            </PrimaryButton>
          </Container>
        </HeroSection>
        <FeatureSection>
          <Container>
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
                    <Input placeholder="Find an app" />
                  </InputWrap>
                  <Catagory>
                    <h4>Partner Apps</h4>
                    <Catagoryitem>
                      <Link href={"#Brief-Section"}>All</Link>
                    </Catagoryitem>
                    <Catagoryitem>
                      <Link href={"#Project-Section"}>Project management</Link>
                    </Catagoryitem>
                    <Catagoryitem>
                      <Link href={"#data-section"}>Data visualization</Link>
                    </Catagoryitem>
                    <Catagoryitem>
                      <Link href={"#Scheduling-Section"}>Scheduling</Link>
                    </Catagoryitem>
                    <Catagoryitem>
                      <Link href={"#Integrations-Section"}>Videos</Link>
                    </Catagoryitem>
                  </Catagory>
                  <OtherWrap>
                    <h4>Other</h4>
                    <Catagoryitem>
                      <Link href={"#Brief-Section"}>Custom Apps</Link>
                    </Catagoryitem>
                    <Catagoryitem>
                      <Link href={"#Brief-Section"}>Data Integrations</Link>
                    </Catagoryitem>
                  </OtherWrap>
                </LeftWrap>
              </FeatureLeft>

              <FeatureRight>
                <Featured id="Brief-Section">
                  <h3>Featured</h3>
                  <FeatureMenu>
                    <FeatureCard>
                      <FeatureImg>
                        <Image
                          src="/images/featurelogo1.svg"
                          alt="main-logo"
                          width={236}
                          height={56}
                        />
                      </FeatureImg>
                      <CardText>
                        <h4>Calendly</h4>
                        <p>
                          Let clients schedule meetings with you by surfacing a
                          Calendly scheduling page.
                        </p>
                      </CardText>
                      <CardEnd>
                        <p>Scheduling</p>
                      </CardEnd>
                    </FeatureCard>

                    <FeatureCard>
                      <FeatureImg>
                        <Image
                          src="/images/featurelogo2.svg"
                          alt="main-logo"
                          height={56}
                          width={236}
                        />
                      </FeatureImg>
                      <CardText>
                        <h4>Jotform</h4>
                        <p>
                          Lets clients to submit forms by surfacing a form
                          created in Jotform.
                        </p>
                      </CardText>
                      <CardEnd>
                        <p>Scheduling</p>
                      </CardEnd>
                    </FeatureCard>
                    <FeatureCard>
                      <FeatureImg>
                        <Image
                          src="/images/featurelogo3.svg"
                          alt="main-logo"
                          height={56}
                          width={236}
                        />
                      </FeatureImg>
                      <CardText>
                        <h4>Airtable</h4>
                        <p>
                          Let clients to access grid, kanban, timeline,
                          calendar, form and other views.
                        </p>
                      </CardText>
                      <CardEnd>
                        <p>Project management</p>
                      </CardEnd>
                    </FeatureCard>
                  </FeatureMenu>
                </Featured>
                <ExtensionsSection id="Project-Section">
                  <h3>Project management</h3>
                  <ExtensionCard>
                    <CardSub>
                      <CardInfo>
                        <Image
                          src="/images/Favicon.svg"
                          alt="red-icon"
                          width={35}
                          height={35}
                          layout={"fixed"}
                        />
                        <h4>Calendly</h4>
                      </CardInfo>
                      <p>
                        Calendly is your scheduling automation platform for
                        eliminating the hassle of back...
                      </p>
                    </CardSub>
                    <CardSub>
                      <CardInfo>
                        <Image
                          src="/images/Favicon2.svg"
                          alt="red-icon"
                          width={35}
                          height={35}
                          layout={"fixed"}
                        />
                        <h4>Jotform</h4>
                      </CardInfo>
                      <p>
                        Improve your workflow with powerful online forms
                        designed to meet your every need.
                      </p>
                    </CardSub>
                    <CardSub>
                      <CardInfo>
                        <Image
                          src="/images/Favicon3.svg"
                          alt="red-icon"
                          width={35}
                          height={35}
                          layout={"fixed"}
                        />
                        <h4>Airtable</h4>
                      </CardInfo>
                      <p>
                        Airtable is a low-code platform for building
                        collaborative apps. Customize your workflow, collab...
                      </p>
                    </CardSub>
                  </ExtensionCard>
                </ExtensionsSection>

                <SchedulingApps id="Scheduling-Section">
                  <h3>Scheduling</h3>
                  <ExtensionCard>
                    <CardSub>
                      <CardInfo>
                        <Image
                          src="/images/Favicon.svg"
                          alt="red-icon"
                          width={35}
                          height={35}
                          layout={"fixed"}
                        />
                        <h4>Calendly</h4>
                      </CardInfo>
                      <p>
                        Calendly is your scheduling automation platform for
                        eliminating the hassle of back...
                      </p>
                    </CardSub>
                    <CardSub>
                      <CardInfo>
                        <Image
                          src="/images/Favicon2.svg"
                          alt="red-icon"
                          width={35}
                          height={35}
                          layout={"fixed"}
                        />
                        <h4>Jotform</h4>
                      </CardInfo>
                      <p>
                        Improve your workflow with powerful online forms
                        designed to meet your every need.
                      </p>
                    </CardSub>

                    <CardSub>
                      <CardInfo>
                        <Image
                          src="/images/Favicon3.svg"
                          alt="red-icon"
                          width={35}
                          height={35}
                          layout={"fixed"}
                        />
                        <h4>Airtable</h4>
                      </CardInfo>
                      <p>
                        Airtable is a low-code platform for building
                        collaborative apps. Customize your workflow, collab...
                      </p>
                    </CardSub>
                    <CardSub>
                      <CardInfo>
                        <Image
                          src="/images/Favicon.svg"
                          alt="red-icon"
                          width={35}
                          height={35}
                          layout={"fixed"}
                        />
                        <h4>Calendly</h4>
                      </CardInfo>
                      <p>
                        Calendly is your scheduling automation platform for
                        eliminating the hassle of back...
                      </p>
                    </CardSub>
                    <CardSub>
                      <CardInfo>
                        <Image
                          src="/images/Favicon2.svg"
                          alt="red-icon"
                          width={35}
                          height={35}
                          layout={"fixed"}
                        />
                        <h4>Jotform</h4>
                      </CardInfo>
                      <p>
                        Improve your workflow with powerful online forms
                        designed to meet your every need.
                      </p>
                    </CardSub>

                    <CardSub>
                      <CardInfo>
                        <Image
                          src="/images/Favicon3.svg"
                          alt="red-icon"
                          width={35}
                          height={35}
                          layout={"fixed"}
                        />
                        <h4>Airtable</h4>
                      </CardInfo>
                      <p>
                        Airtable is a low-code platform for building
                        collaborative apps. Customize your workflow, collab...
                      </p>
                    </CardSub>
                  </ExtensionCard>
                </SchedulingApps>
                <ExtensionsSection id="Integrations-Section">
                  <AppsTitle>
                    <h3>Data Integrations</h3>
                    <p>Integrations</p>
                  </AppsTitle>
                  <ExtensionCard>
                    <CardSub>
                      <CardInfo>
                        <Image
                          src="/images/Favicon.svg"
                          alt="red-icon"
                          width={35}
                          height={35}
                          layout={"fixed"}
                        />
                        <h4>Calendly</h4>
                      </CardInfo>
                      <p>
                        Calendly is your scheduling automation platform for
                        eliminating the hassle of back...
                      </p>
                    </CardSub>
                    <CardSub>
                      <CardInfo>
                        <Image
                          src="/images/Favicon2.svg"
                          alt="red-icon"
                          width={35}
                          height={35}
                          layout={"fixed"}
                        />
                        <h4>Jotform</h4>
                      </CardInfo>
                      <p>
                        Improve your workflow with powerful online forms
                        designed to meet your every need.
                      </p>
                    </CardSub>
                    <CardSub>
                      <CardInfo>
                        <Image
                          src="/images/Favicon3.svg"
                          alt="red-icon"
                          width={35}
                          height={35}
                          layout={"fixed"}
                        />
                        <h4>Airtable</h4>
                      </CardInfo>
                      <p>
                        Airtable is a low-code platform for building
                        collaborative apps. Customize your workflow, collab...
                      </p>
                    </CardSub>
                  </ExtensionCard>
                </ExtensionsSection>
                <ExtensionsSection>
                  <AppsTitle>
                    <h3>Custom Apps</h3>
                  </AppsTitle>
                  <BuildWrap>
                    <BuildAppsDetail>
                      <h5>Build your own app</h5>
                      <p>
                        A custom app is a web application that can be embedded
                        into your portal and receives information about the
                        current user or company. With that capability you can
                        render custom content automatically depending on the
                        user that is currently signed in.
                      </p>
                      <SecondryButton>
                        <Link href="/">Read API docs</Link>
                      </SecondryButton>
                    </BuildAppsDetail>
                  </BuildWrap>
                </ExtensionsSection>
              </FeatureRight>
            </FeatureWrap>
          </Container>
        </FeatureSection>
        <FAQ />
        <CTA />
      </Layout>
    </>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const Posts = (await getAllBlogs(preview)) ?? [];

  return {
    props: { preview, Posts },
  };
}
