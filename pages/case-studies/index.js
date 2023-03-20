import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Button from '../../components/button/button';
import CTA from '../../components/cta/cta';
import Layout from '../../components/layout';
import Navbar from '../../components/navbar/navbar';
import {
  Bottom,
  CustomerLogo,
  CustomerSection,
  Detail,
  DetailSection,
  Head,
  HeroBtnBlock,
  HeroHeading,
  HeroSection,
  Highlight,
  HighlightSection,
  Last,
  LastDroplist,
  LeftSection,
  Para,
  RightSection,
  Top
} from '../../styles/casestudiestyles';
import { Container } from '../../styles/commonStyles';
import logo from '../../public/images/logo1.png';
import AppCardSection from '../../components/casestudies/appcardsection';
import HighLightsCard from '../../components/casestudies/highlights';
import HighlightSectionComponents from '../../components/casestudies/highlightSection';

export default function CaseStudies() {
  return (
    <>
      <Layout>
        <Navbar />
        <HeroSection>
          <Container>
            <HeroHeading>Provantage sees increased customer retention with Copilot</HeroHeading>
            <Para>
              See how Acme Corp improved retention by x% and grew like x% and woah theyre doing so well because of
              copilot pls buy our product plsour product plsour product plsour product pls
            </Para>
            <HeroBtnBlock>
              <Button
                bgColor={'#09AA6C'}
                fontColor={'#FFFFFF'}
                borderColor={'#09AA6C'}
                text={'Start trial'}
                href={'#'}
                hoverColor={'rgba(0, 0, 0, 0.5)'}
              />
            </HeroBtnBlock>
          </Container>
        </HeroSection>
        <HighlightSection>
          <HighlightSectionComponents />
        </HighlightSection>
        <Container>
          <CustomerSection>
            <LeftSection>
              <Top>
                <CustomerLogo>
                  <Image src={logo} alt='company logo' width={218} height={50} />
                </CustomerLogo>
                <Head>About</Head>
                <DetailSection>
                  <Detail>
                    <h3>Founded</h3>
                    <p>San Francisco, 2015</p>
                  </Detail>
                  <Detail>
                    <h3>Running on Copilot since</h3>
                    <p>September 2021</p>
                  </Detail>
                  <Detail>
                    <h3>Company URL</h3>
                    <Link href={'#'}>www.provantagecapital.com</Link>
                  </Detail>
                  <Detail>
                    <h3>Industry</h3>
                    <Link href={'#'}>Accounting & Bookkeeping </Link>
                  </Detail>
                </DetailSection>
              </Top>
              <Bottom>
                <Head>Apps in use</Head>
                <AppCardSection />
              </Bottom>
            </LeftSection>
            <RightSection>
              <h2>Challenge</h2>
              <p>
                See how Acme Corp improved retention by x% and grew like x% and woah theyre doing so well because of
                copilot pls buy our product plsSee how Acme Corp improved retention by x% and grew like x% and woah
                theyre doing so well because of copilot pls buy our product plsSee how Acme Corp improved retention by
                x% and grew like x% and woah theyre doing so well because of copilot pls buy our product pls
              </p>
            </RightSection>
          </CustomerSection>
        </Container>
        <CTA />
      </Layout>
    </>
  );
}
