import Layout from "/components/layout";
import Link from "next/link";
import { NextSeo } from "next-seo";
import Navbar from "../../components/navbar/navbar";
import {
  DetailLink,
  AppsDetailMain,
  AppDetailCard,
  DetailWrap,
  DetailMain,
  DetailRight,
  RightWrap,
  DetailTxt,
  HelpWrap,
  RightTxt,
  AppWrap,
  CardSection,
  FeatureImg,
  CardText,
  CardEnd,
  FeatureCard
} from "../../styles/appsStyles";
import { Container, PrimaryButton } from "../../styles/commonStyles";
import CTA from "../../components/cta/cta";
import Image from "next/image";

export default function AppsDetail() {
  return (
    <>
      <NextSeo
        title="copilot blogs to keep you up with the  Sales Tactics!"
        description="Sale is a prominent part of any business & nothing can be better than getting tried tactics for it. So get all that you want to know about sales from our Blogs."
      />
      <Layout>
        <Navbar />
        <AppsDetailMain>
          <Container>
            <DetailLink>
              <Link href="#">
                <Image
                  src="/images/leftarrow.svg"
                  alt="bill-icon"
                  width={12}
                  height={12}
                  layout={"fixed"}
                />
              </Link>
              <p>Back to all Apps</p>
            </DetailLink>
          </Container>
          <AppDetailCard>
            <Container>
              <Image
                src="/images/airtablebig.svg"
                alt="bill-icon"
                width={350}
                height={68}
                layout={"fixed"}
              />
              <p>
                Airtable is a popular Extension that can be used for many use
                cases. For example, you can embed an intake form or you can
                embed a project tracking kanban board for each client.{" "}
              </p>
              <PrimaryButton>
                <Link href="#">Setup instructions</Link>
              </PrimaryButton>
            </Container>
          </AppDetailCard>
          <Container>
            <DetailMain>
              <DetailWrap>
                <Image
                  src="/images/appdetail.png"
                  alt="bill-icon"
                  width={869}
                  height={543}
                  layout={"fixed"}
                />
                {/* <LinePostion>
<Image src='/images/linesmall.svg' alt='bill-icon' width={45} height={1} layout={'fixed'}/>
<Image src='/images/linesmall.svg' alt='bill-icon' width={45} height={1} layout={'fixed'}  className="imagepostion"/>
<Image src='/images/linesmall.svg' alt='bill-icon' width={45} height={1} layout={'fixed'}  className="imagepostion2"/>
</LinePostion> */}
              </DetailWrap>
              <DetailRight>
                <RightWrap>
                  <Image
                    src="/images/linesmall.svg"
                    alt="bill-icon"
                    width={45}
                    height={1}
                    layout={"fixed"}
                    className="mr10"
                  />
                  <DetailTxt>
                    <p>Type</p>
                    <HelpWrap>
                      <span>App</span>
                      
                      <Image
                        src="/images/help.svg"
                        alt="bill-icon"
                        width={20}
                        height={20}
                        layout={"fixed"}
                      />
                    </HelpWrap>
                  </DetailTxt>
                </RightWrap>
                <RightWrap>
           
                  <Image
                    src="/images/linesmall.svg"
                    alt="bill-icon"
                    width={45}
                    height={1}
                    layout={"fixed"}
                    className="mr10"
                  />
                  <DetailTxt>
                    <p>Website</p>

                    <Link href="#">www.airtable.com</Link>
                  </DetailTxt>
                </RightWrap>
                <RightWrap>
                
                  <Image
                    src="/images/linesmall.svg"
                    alt="bill-icon"
                    width={45}
                    height={1}
                    layout={"fixed"}
                    className="mr10"
                  />
             
                  <DetailTxt>
                    <p>Categories</p>
                  <RightTxt>
                    <h4>Project management</h4>
                  </RightTxt>
                  <RightTxt>
                    <h4>Forms</h4>
                  </RightTxt>
                  <RightTxt>
                    <h4>Knowledge base</h4>
                  </RightTxt>
                  </DetailTxt>
                </RightWrap>
              </DetailRight>
            </DetailMain>
            <AppWrap>
    <h3>Related apps</h3>
    <CardSection>
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

    </CardSection>
            </AppWrap>
          </Container>
        </AppsDetailMain>

        <CTA />
      </Layout>
    </>
  );
}
