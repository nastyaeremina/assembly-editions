import { NextSeo } from "next-seo";
import Image from "next/image";
import Link from "next/link";
import CTA from "../../components/cta/cta";
import FAQ from "../../components/faq/faq";
import Layout from "../../components/layout";
import Navbar from "../../components/navbar/navbar";
import { Container } from "../../styles/commonStyles";
import {
  HeroJobSection,
  JobsWrap,
  UseCaseWrap,
  CareerSection,
  CareerBlock,
  RoleBlock,
  TeamBlock,
  RoleWrap,
  AboutWrap,
  JobDetailWrap,
  JobView,
  RoleList,
  RoleRow,
  LeftRow,
  RightRow,
  Dot,
  TeamView,
  TeamDetail,
  TitleWrap,
  TeamLine,
  NameView,
  ImgWrap,
  ImgBorder,
  TabList,
  TabWrap,
  TabView,
  ActiveTab,
  RegionView,
  BenefitsSection,
  BenefitWrap,
  BenefitBox,
  BoxView,
  ImgIcon,
  DetailView,
  MainWrap,
} from "../../styles/jobsStyles";

export default function Jobs() {
  return (
    <>
      <NextSeo
        title="Create your portal, pick a plan later"
        description="Try Copilot free for 14 days, no credit card required"
      />
      <Layout>
        <Navbar />
        <MainWrap>
          <HeroJobSection>
            <Container>
              <JobsWrap>
                <UseCaseWrap>
                  <h2>Work at Copilot</h2>
                  <p>
                    We are reinventing how service businesses and clients work
                    together. If we succeed, more businesses will be started and
                    those that do will have a way to serve customers directly,
                    under their own brand, without intermediaries in between.
                  </p>
                </UseCaseWrap>
              </JobsWrap>
            </Container>
          </HeroJobSection>
          <CareerSection>
            <Container>
              <CareerBlock>
                <RoleBlock>
                  <RoleWrap>
                    <h3>Roles</h3>
                    <p>
                      We’re committed to an equitable recruiting process and an
                      inclusive culture that welcomes individuals across all
                      races, ages, abilities, sexualities, gender
                      identities/expressions, ethnicities, nationalities, and
                      class backgrounds.
                    </p>
                  </RoleWrap>
                  <JobDetailWrap>
                    <JobView>
                      <h4>Engineering</h4>
                      <RoleList>
                        <RoleRow>
                          <LeftRow>
                            <p>Customer Support Engineer</p>
                          </LeftRow>
                          <RightRow>
                            <p>New York</p>
                          </RightRow>
                        </RoleRow>
                        <RoleRow>
                          <LeftRow>
                            <p>Senior Mobile Engineer</p>
                          </LeftRow>
                          <RightRow>
                            <p>New York</p>
                          </RightRow>
                        </RoleRow>
                        <RoleRow>
                          <LeftRow>
                            <p>Senior Frontend Engineer</p>
                          </LeftRow>
                          <RightRow>
                            <p>New York</p>
                          </RightRow>
                        </RoleRow>
                        <RoleRow>
                          <LeftRow>
                            <p>Lead QA Engineer</p>
                          </LeftRow>
                          <RightRow>
                            <p>Remote</p>
                            <Dot className="bgdot"></Dot>
                            <p>New York</p>
                          </RightRow>
                        </RoleRow>
                      </RoleList>
                    </JobView>
                    <JobView>
                      <h4>Product</h4>
                      <RoleList>
                        <RoleRow>
                          <LeftRow>
                            <p>Senior Designer</p>
                          </LeftRow>
                          <RightRow>
                            <p>Remote</p>
                          </RightRow>
                        </RoleRow>
                        <RoleRow>
                          <LeftRow>
                            <p>Product Manager - Portal Payments</p>
                          </LeftRow>
                          <RightRow>
                            <p>New York</p>
                          </RightRow>
                        </RoleRow>
                        <RoleRow>
                          <LeftRow>
                            <p>Product Manager - Portal Store</p>
                          </LeftRow>
                          <RightRow>
                            <p>New York</p>
                          </RightRow>
                        </RoleRow>
                      </RoleList>
                    </JobView>
                    <JobView>
                      <h4>Marketing</h4>
                      <RoleList>
                        <RoleRow>
                          <LeftRow>
                            <p>Marketing Manager</p>
                          </LeftRow>
                          <RightRow>
                            <p>Remote</p>
                            <Dot className="bgdot"></Dot>
                            <p>New York</p>
                          </RightRow>
                        </RoleRow>
                        <RoleRow>
                          <LeftRow>
                            <p>Social & Community Manager</p>
                          </LeftRow>
                          <RightRow>
                            <p>Remote</p>
                          </RightRow>
                        </RoleRow>
                      </RoleList>
                    </JobView>
                    <JobView>
                      <h4>Sales</h4>
                      <RoleList>
                        <RoleRow>
                          <LeftRow>
                            <p>Technical SDR</p>
                          </LeftRow>
                          <RightRow>
                            <p>Remote</p>
                          </RightRow>
                        </RoleRow>
                        <RoleRow>
                          <LeftRow>
                            <p>Account Executive</p>
                          </LeftRow>
                          <RightRow>
                            <p>Remote</p>
                          </RightRow>
                        </RoleRow>
                      </RoleList>
                    </JobView>
                    <JobView>
                      <h4>Talent</h4>
                      <RoleList>
                        <RoleRow>
                          <LeftRow>
                            <p>Recruiter</p>
                          </LeftRow>
                          <RightRow>
                            <p>Remote</p>
                            <Dot className="bgdot"></Dot>
                            <p>New York</p>
                          </RightRow>
                        </RoleRow>
                        <RoleRow>
                          <LeftRow>
                            <p>Account Executive</p>
                          </LeftRow>
                          <RightRow>
                            <p>Remote</p>
                            <Dot className="bgdot"></Dot>
                            <p>New York</p>
                          </RightRow>
                        </RoleRow>
                      </RoleList>
                    </JobView>
                  </JobDetailWrap>
                </RoleBlock>
                <TeamBlock>
                  <AboutWrap>
                    <h3>About us</h3>
                    <p>
                      Read about our mission, priorities,and investors
                      <a href="#"> on our About page.</a> See what customers say
                      about us <a href="#"> on our G2 page</a> or
                      <a href="#"> join our community on Slack</a>. Go through
                      <a href="#"> our self-serve flow</a> to try out the
                      product or read about recent releases
                      <a href="#">on our changelog</a>. Lastly,
                      <a href="#"> email us</a> if you have any questions!
                    </p>
                  </AboutWrap>
                  <TeamView>
                    <h4>Writing from the team</h4>
                    <TeamDetail>
                      <TitleWrap>
                        <TeamLine>
                          <Link href="#">
                            Engineering Interviews at Copilot
                          </Link>
                          <p>May, 2022</p>
                        </TeamLine>
                        <NameView>
                          <p>Neil Raina</p>
                          <Dot></Dot>
                          <p>Chris Magorian</p>
                        </NameView>
                      </TitleWrap>
                      <TitleWrap>
                        <TeamLine>
                          <Link href="#">
                            Why I Joined Copilot to Lead Infrastructure
                            Engineering
                          </Link>
                          <p>May, 2022</p>
                        </TeamLine>
                        <NameView>
                          <p>Chris Magorian</p>
                        </NameView>
                      </TitleWrap>
                      <TitleWrap>
                        <TeamLine>
                          <Link href="#">
                            How DynamoDB streams saved the world
                          </Link>
                          <p>May, 2022</p>
                        </TeamLine>
                        <NameView>
                          <p>Brian Wilson</p>
                        </NameView>
                      </TitleWrap>
                      <TitleWrap>
                        <TeamLine>
                          <Link href="#">Announcing our $10M Fundraise</Link>
                          <p>May, 2022</p>
                        </TeamLine>
                        <NameView>
                          <p>Marlon Misra</p>
                        </NameView>
                      </TitleWrap>
                      <TitleWrap>
                        <TeamLine>
                          <Link href="#">
                            Why I Joined Copilot to Lead Sales & GTM
                          </Link>
                          <p>May, 2022</p>
                        </TeamLine>
                        <NameView>
                          <p>Neil Raaina</p>
                        </NameView>
                      </TitleWrap>
                      <TitleWrap>
                        <TeamLine>
                          <Link href="#">Introducing Copilot</Link>
                          <p>May, 2022</p>
                        </TeamLine>
                        <NameView>
                          <p>Neil Raina</p>
                          <Dot></Dot>
                          <p>Chris Magorian</p>
                        </NameView>
                      </TitleWrap>
                    </TeamDetail>
                  </TeamView>
                  <ImgWrap>
                    <ImgBorder>
                      <Image
                        src="/images/jobslide.png"
                        alt="red-icon"
                        width={552}
                        height={320}
                      />
                    </ImgBorder>
                    <TabList>
                      <TabWrap>
                        <TabView className="activetab">
                          <span>01</span>
                          <ActiveTab></ActiveTab>
                        </TabView>
                        <TabView>
                          <span>02</span>
                        </TabView>
                        <TabView>
                          <span>03</span>
                        </TabView>
                        <TabView>
                          <span>04</span>
                        </TabView>
                        <TabView>
                          <span>05</span>
                        </TabView>
                        <TabView>
                          <span>06</span>
                        </TabView>
                        <TabView>
                          <span>07</span>
                        </TabView>
                        <TabView>
                          <span>08</span>
                        </TabView>
                        <TabView>
                          <span>09</span>
                        </TabView>
                      </TabWrap>
                    </TabList>
                  </ImgWrap>
                  <RegionView>
                    <p>International offsite in Istanbul</p>
                  </RegionView>
                </TeamBlock>
              </CareerBlock>
            </Container>
          </CareerSection>
          <BenefitsSection>
            <Container>
              <BenefitWrap>
                <h4>Benefits</h4>
              </BenefitWrap>
              <BenefitBox>
                <BoxView>
                  <ImgIcon>
                    <Image
                      src="/images/equity.svg"
                      width={44}
                      height={44}
                      alt="file-icon"
                    />
                  </ImgIcon>
                  <DetailView>
                    <h4>Equity</h4>
                    <p>
                      We want you to reap the benefits of the upside you create
                      in the company.
                    </p>
                  </DetailView>
                </BoxView>
                <BoxView>
                  <ImgIcon>
                    <Image
                      src="/images/health.svg"
                      width={44}
                      height={44}
                      alt="file-icon"
                    />
                  </ImgIcon>
                  <DetailView>
                    <h4>Health insurance</h4>
                    <p>
                      Tier 1 Blue Cross plan with 100% coverage for you and 50%
                      coverage for dependents.
                    </p>
                  </DetailView>
                </BoxView>
                <BoxView>
                  <ImgIcon>
                    <Image
                      src="/images/pto.svg"
                      width={44}
                      height={44}
                      alt="file-icon"
                    />
                  </ImgIcon>
                  <DetailView>
                    <h4>Flexible PTO</h4>
                    <p>
                      We recommend ~20 days of vacation per year. You can take
                      whatever days you want.
                    </p>
                  </DetailView>
                </BoxView>
                <BoxView>
                  <ImgIcon>
                    <Image
                      src="/images/internet.svg"
                      width={44}
                      height={44}
                      alt="file-icon"
                    />
                  </ImgIcon>
                  <DetailView>
                    <h4>International offsites</h4>
                    <p>
                      We do team off-sites twice per year. In July, we met up in
                      Istanbul.
                    </p>
                  </DetailView>
                </BoxView>
                <BoxView>
                  <ImgIcon>
                    <Image
                      src="/images/sickicon.svg"
                      width={44}
                      height={44}
                      alt="file-icon"
                    />
                  </ImgIcon>
                  <DetailView>
                    <h4>Sick leave</h4>
                    <p>
                      Take the time you need to recharge! We want everyone
                      feeling their best at work.
                    </p>
                  </DetailView>
                </BoxView>
                <BoxView>
                  <ImgIcon>
                    <Image
                      src="/images/leaveicon.svg"
                      width={44}
                      height={44}
                      alt="file-icon"
                    />
                  </ImgIcon>
                  <DetailView>
                    <h4>Parental leave</h4>
                    <p>
                      6 weeks of paid and 6 weeks of unpaid leave within the
                      first year after becoming a parent.
                    </p>
                  </DetailView>
                </BoxView>
                <BoxView>
                  <ImgIcon>
                    <Image
                      src="/images/hardware.svg"
                      width={44}
                      height={44}
                      alt="file-icon"
                    />
                  </ImgIcon>
                  <DetailView>
                    <h4>Hardware</h4>
                    <p>
                      We’ll equip you with an M1 MacBook, 4K display, and
                      anything else you need.
                    </p>
                  </DetailView>
                </BoxView>
                <BoxView>
                  <ImgIcon>
                    <Image
                      src="/images/education.svg"
                      width={44}
                      height={44}
                      alt="file-icon"
                    />
                  </ImgIcon>
                  <DetailView>
                    <h4>Education</h4>
                    <p>
                      Get reimbursed for relevant books, conferences, classes,
                      and more.
                    </p>
                  </DetailView>
                </BoxView>
              </BenefitBox>
            </Container>
          </BenefitsSection>
        </MainWrap>
        <FAQ />
      </Layout>
    </>
  );
}
