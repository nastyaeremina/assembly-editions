import React from 'react';
import Button from '../../components/button/button';
import CustomerTestimonial from '../../components/customer/testimonials';
import CustomerFeedBack from '../../components/feedback/customerfeedback';
import Layout from '../../components/layout';
import Navbar from '../../components/navbar/navbar';
import { Container } from '../../styles/commonStyles';
import { Heading, HeroBtnBlock, HeroHeading, HeroSection, Para, LastSection } from '../../styles/customerstyles';
import logo1 from '../../public/images/logo1.png';
import logo2 from '../../public/images/logo2.png';

export default function Customer() {
  return (
    <>
      <Layout>
        <Navbar />
        <HeroSection>
          <Container>
            <HeroHeading>Meet our customers</HeroHeading>
            <Para>
              Thousands of tech-enabled service companies – modern accounting firms, consulting businesses, marketing
              agencies – and others use Copilot to streamline their business and grow faster.
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
        <CustomerFeedBack />
        <Container>
          <Heading>How Copilot helps businesses succeed</Heading>
        </Container>
        <LastSection>
          <CustomerTestimonial
            logo={logo1}
            body={
              'With Copilot, Provantage Capital was able to grow lol obviously. We did them good. Case study case study lorem ipsum dolor sit amet.'
            }
            satisfaction={'+25%'}
            rate={'-10%'}
            retention={'+25%'}
          />
          <CustomerTestimonial
            logo={logo2}
            body={
              'With Copilot, Tangent Capital was able to grow lol obviously. We did them good. Case study Nullam eu ligula felis. Donec quam leo, ultricies eget posuere vitae, hendrerit eu sapien. In vestibulum posuere dolor, in commodo eros finibus sed.'
            }
            satisfaction={'+250%'}
            rate={'-1000%'}
            retention={'+2500%'}
          />
        </LastSection>
      </Layout>
    </>
  );
}
