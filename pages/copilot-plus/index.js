import Button from '../../components/button/button';
import FAQ from '../../components/faq/faq';
import Layout from '../../components/layout';
import Navbar from '../../components/navbar/navbar';
import SEO from '../../components/seo';
import { ENTERPRICE_SEO_ID, HEADER_LIST } from '../../constants/constant';
import { getSEOdata } from '../../lib/contentful-seo';
import { Container } from '../../styles/commonStyles';
import {
  EnterPriseHero,
  MainWrap,
  LeftHero,
  TitleSec,
  BtnWrap,
  BenefitsSection,
  BenefitBox,
  BoxView,
  DetailView,
  ComingUp,
  SpanText,
  MovingSection,
  PlusWrap,
  BtnList,
  StepsSection,
  StepWrap,
  LeftStep,
  RightStep,
  DayOne,
  TopView,
  DayLabel,
  Daybox,
  BottomView,
  DaySecond,
  LeftTopView,
  DayCenter,
  LeftBottomView,
  BottomDay,
  LastLabel,
  BottomLast,
  BtnListtwo
} from '../../styles/enterpriseStyles';

export default function Enterprise({ seoData }) {
  return (
    <>
      <SEO seoData={seoData} />
      <Layout isEnterPrice={true}>
        <MainWrap>
          <Navbar isEnterPrice={true} headerIndex={HEADER_LIST.ENTERPRICE} />
          <EnterPriseHero>
            <Container>
              <LeftHero>
                <TitleSec>
                  <h1>Designed for the most ambitious businesses </h1>
                  <p>
                    Copilot Plus is a tailormade solution for businesses with custom requirements, enterprise-level
                    compliance needs, more customizability, and support for white-label native apps.{' '}
                  </p>
                  <BtnWrap>
                    <Button
                      bgColor={'transparent'}
                      fontColor={'#E3FFEE'}
                      borderColor={'#E3FFEE'}
                      text={`Let's talk`}
                      href={'/book-demo'}
                      hoverColor={'rgba(227, 255, 238, 1)'}
                    />
                  </BtnWrap>
                </TitleSec>
              </LeftHero>
            </Container>
          </EnterPriseHero>
          <BenefitsSection>
            <Container>
              <BenefitBox>
                <BoxView>
                  <DetailView>
                    <h2>Custom Features</h2>
                    <p>Work with deployed Copilot engineers to add custom features and integrations.</p>
                  </DetailView>
                </BoxView>
                <BoxView>
                  <DetailView>
                    <h2>Dedicated Support</h2>
                    <p>A dedicated expert will be there to ensure a successful launch.</p>
                  </DetailView>
                </BoxView>
                <BoxView>
                  <DetailView>
                    <h2>Enterprise Compliance</h2>
                    <p>Security audit compliance, payment via PO, custom TOS, and more.</p>
                  </DetailView>
                </BoxView>
                <BoxView className='bordernone'>
                  <DetailView>
                    <h2>Continuous Backup</h2>
                    <p>Continuous backups and retention to Amazon S3 or elsewhere.</p>
                  </DetailView>
                </BoxView>
                <BoxView className='borderbottom'>
                  <DetailView>
                    <h2>99.9% Uptime SLAs</h2>
                    <p>Guaranteed reliable performance with a 99.9% uptime SLA.</p>
                  </DetailView>
                </BoxView>
                <BoxView>
                  <DetailView>
                    <h2>Custom Payment Processing Rates</h2>
                    <p>Custom payment processing rates</p>
                  </DetailView>
                </BoxView>
                <BoxView>
                  <DetailView>
                    <h2>Advanced Reporting</h2>
                    <p>Granular insights about how your team and clients are using Copilot.</p>
                  </DetailView>
                </BoxView>
                <BoxView>
                  <DetailView>
                    <h2>Native Mobile Apps</h2>
                    <p>Get access to white-label native mobile apps.</p>
                  </DetailView>
                </BoxView>
                <ComingUp>
                  <SpanText>Late 2023</SpanText>
                </ComingUp>
              </BenefitBox>
            </Container>
          </BenefitsSection>
          <MovingSection>
            <Container>
              <PlusWrap>
                <h2>Moving to Copilot Plus?</h2>
                <p>95% of customers we work with go from first meeting to full deployment in less than 30 days. </p>
                <BtnList>
                  <Button
                    bgColor={'transparent'}
                    fontColor={'#000000'}
                    borderColor={'#000000'}
                    text={'Lets talk'}
                    hoverColor={'rgba(0, 0, 0, 0.5)'}
                    href={'#'}
                    className='afterline'
                  />
                </BtnList>
                <BtnListtwo></BtnListtwo>
              </PlusWrap>
            </Container>
          </MovingSection>
          <StepsSection>
            <Container>
              <StepWrap>
                <LeftStep>
                  <DayCenter>
                    <LeftTopView>
                      <DayLabel>
                        <Daybox>
                          <span>Day 7</span>
                        </Daybox>
                      </DayLabel>
                    </LeftTopView>
                    <LeftBottomView>
                      <h3>Migration plan</h3>
                      <p>
                        Our team will work with you to create a migration plan that minimizes downtime and ensures a
                        smooth transition for your clients.
                      </p>
                    </LeftBottomView>
                  </DayCenter>
                </LeftStep>
                <RightStep>
                  <DayOne>
                    <TopView>
                      <DayLabel>
                        <Daybox>
                          <span>Day 1</span>
                        </Daybox>
                      </DayLabel>
                    </TopView>
                    <BottomView>
                      <h3>Kickoff call</h3>
                      <p>
                        Meet with a Copilot expert and deployed engineering team so that we can understand requirements
                        a propose a plan.
                      </p>
                    </BottomView>
                  </DayOne>
                  <DaySecond>
                    <TopView>
                      <DayLabel>
                        <Daybox>
                          <span>Day 15</span>
                        </Daybox>
                      </DayLabel>
                    </TopView>
                    <BottomView>
                      <h3>Soft launch</h3>
                      <p>
                        We’ll work with you hand-in-hand to make sure the intial deployment to a subset of beta
                        customers goes well.
                      </p>
                    </BottomView>
                  </DaySecond>
                </RightStep>
              </StepWrap>
              <BottomDay>
                <LastLabel>
                  <span>Day 30</span>
                </LastLabel>
                <BottomLast>
                  <h3>Full deployment</h3>
                  <p>Once we’re past the soft launch phase, we’ll work closely with you team on the full deployment.</p>
                </BottomLast>
              </BottomDay>
            </Container>
          </StepsSection>
          <FAQ enterprise contentID={'69O3U5pBty7DqueKYykMSz'} />
        </MainWrap>
      </Layout>
    </>
  );
}
export async function getStaticProps({ preview = false }) {
  const seoData = (await getSEOdata(ENTERPRICE_SEO_ID)) ?? [];
  seoData.canonical="https://www.copilot.com/copilot-plus";
  return {
    props: {
      seoData
    }
  };
}
