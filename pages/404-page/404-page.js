import Link from 'next/link';
import Image from 'next/image';
import { Container, PrimaryButton } from '../../styles/commonStyles';
import { MainHeroSection, ErrorMain } from './styles';
import Layout from '../../components/layout';
import Navbar from '../../components/navbar/navbar';
import { NextSeo } from 'next-seo';

export default function ErrorPage() {
  return (
    <>
      <NextSeo
        title='Create your portal, pick a plan later'
        description='Try Copilot free for 14 days, no credit card required'
      />
      <Layout>
        <Navbar />
        <MainHeroSection>
          <Container>
            <ErrorMain>
              <h3>404</h3>
              <p>We can’t seem to find the page you are looking for </p>
              <PrimaryButton>
                <a href='/'>Back to Home</a>
              </PrimaryButton>
            </ErrorMain>
          </Container>
        </MainHeroSection>
      </Layout>
    </>
  );
}
