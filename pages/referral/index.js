import Link from 'next/link';
import Image from 'next/image';
import { Container, PrimaryButton } from '../../styles/commonStyles';
import { MainSection, HeroWrap, HeroLeft, HeroRight } from './styles';
import Layout from '../../components/layout';
import Navbar from '../../components/navbar/navbar';
import { NextSeo } from 'next-seo';

export default function Referral() {
  return (
    <>
      <NextSeo
        title='Create your portal, pick a plan later'
        description='Try Copilot free for 14 days, no credit card required'
      />
      <Layout>
        <Navbar />
        <MainSection>
          <Container>
            <HeroWrap>
              <HeroLeft>
                <h2>Marlon has gifted you $100 in credit!</h2>
                <p>
                  Start with a 14-day free trial. You will receive your $100 credit once you move over to one of our
                  paid subscription plans.
                </p>
                <PrimaryButton>
                  <a href='#'>Sign up to claim your gift</a>
                </PrimaryButton>
              </HeroLeft>
              <HeroRight>
                <Image src='/images/referral.svg' alt='line-icon' width={393} height={386} layout={'fixed'} />
              </HeroRight>
            </HeroWrap>
          </Container>
        </MainSection>
      </Layout>
    </>
  );
}
