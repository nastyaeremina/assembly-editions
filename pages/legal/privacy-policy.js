import { NextSeo } from 'next-seo';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import LegalFooter from '../../components/footer/legalfooter';
import Navbar from '../../components/navbar/navbar';
import { HEADER_LIST, PRIVCY_POLICY_ID } from '../../constants/constant';
import { getSitemap } from '../../lib/contentful-sitemap';
import { BulletImage, Container, PrimaryButton } from '../../styles/commonStyles';
import {
  MainSection,
  PrivacuHero,
  PostContent,
  PrivacyContent,
  PrivacyData,
  FooterSection,
} from '../../styles/resourcesStyles';

export default function PrivacyPolicy({content}) {
  return (
    <>
      <NextSeo
        title='Create your portal, pick a plan later'
        description='Try Copilot free for 14 days, no credit card required'
      />
      <Navbar isEnterPrice={true} headerIndex={HEADER_LIST.ENTERPRICE} />
      <MainSection>
        <PrivacuHero>
          <Container>
            <h2>Privacy Policy</h2>
          </Container>
        </PrivacuHero>
        <PostContent>
        <Container>
        <PrivacyContent>
          <ReactMarkdown>{content}</ReactMarkdown>
          </PrivacyContent>
         </Container>
        </PostContent>
      </MainSection>
      <FooterSection>
        <LegalFooter />
      </FooterSection>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const content = (await getSitemap(PRIVCY_POLICY_ID)) ?? '';
  return {
    props: {
      content: content?.content
    }
  };
}