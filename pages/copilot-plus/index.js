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
                  <h2>Designed for the most ambitious businesses </h2>
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
                      href={'#'}
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
                    <h4>Custom Features</h4>
                    <p>Work with deployed Copilot engineers to add custom features and integrations.</p>
                  </DetailView>
                </BoxView>
                <BoxView>
                  <DetailView>
                    <h4>Dedicated Support</h4>
                    <p>A dedicated expert will be there to ensure a successful launch.</p>
                  </DetailView>
                </BoxView>
                <BoxView>
                  <DetailView>
                    <h4>Enterprise Compliance</h4>
                    <p>Security audit compliance, payment via PO, custom TOS, and more.</p>
                  </DetailView>
                </BoxView>
                <BoxView className='bordernone'>
                  <DetailView>
                    <h4>Continuous Backup</h4>
                    <p>Continuous backups and retention to Amazon S3 or elsewhere.</p>
                  </DetailView>
                </BoxView>
                <BoxView className='borderbottom'>
                  <DetailView>
                    <h4>99.9% Uptime SLAs</h4>
                    <p>Guaranteed reliable performance with a 99.9% uptime SLA.</p>
                  </DetailView>
                </BoxView>
                <BoxView>
                  <DetailView>
                    <h4>Custom Payment Processing Rates</h4>
                    <p>Custom payment processing rates</p>
                  </DetailView>
                </BoxView>
                <BoxView>
                  <DetailView>
                    <h4>Advanced Reporting</h4>
                    <p>Granular insights about how your team and clients are using Portal.</p>
                  </DetailView>
                </BoxView>
                <BoxView>
                  <DetailView>
                    <h4>Native Mobile Apps</h4>
                    <p>Get access to white-label native mobile apps.</p>
                  </DetailView>
                </BoxView>
                <ComingUp>
                  <SpanText>Coming 2023</SpanText>
                </ComingUp>
              </BenefitBox>
            </Container>
          </BenefitsSection>
          <MovingSection>
            <Container>
              <PlusWrap>
                <h3>Moving to Copilot Plus?</h3>
                <p>95% of customer we work with go from first meeting to full deployment in less than 30 days. </p>
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
                      <h4>Migration plan</h4>
                      <p>Our team and our expert network will work with</p>
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
                      <h4>Kickoff call</h4>
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
                      <h4>Soft launch</h4>
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
                  <h4>Full deployment</h4>
                  <p>Once we’ve gone through a beta launch, we’ll have you have a successful full deployment.</p>
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

  return {
    props: {
      seoData
    }
  };
}
