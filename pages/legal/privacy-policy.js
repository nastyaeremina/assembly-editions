import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import LegalFooter from '../../components/footer/legalfooter';
import Navbar from '../../components/navbar/navbar';
import SEO from '../../components/seo';
import { HEADER_LIST, PRIVACY_POLICY_SEO_ID, PRIVCY_POLICY_ID } from '../../constants/constant';
import { getSEOdata } from '../../lib/contentful-seo';
import { getSitemap } from '../../lib/contentful-sitemap';
import { BulletImage, Container, PrimaryButton } from '../../styles/commonStyles';
import {
  MainSection,
  PrivacuHero,
  PostContent,
  PrivacyContent,
  PrivacyData,
  FooterSection
} from '../../styles/resourcesStyles';

export default function PrivacyPolicy({ content, seoData }) {
  return (
    <>
      <SEO seoData={seoData} />
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
  const seoData = (await getSEOdata(PRIVACY_POLICY_SEO_ID)) ?? [];

  return {
    props: {
      content: content?.content,
      seoData
    }
  };
}
