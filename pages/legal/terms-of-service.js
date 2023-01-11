import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import LegalFooter from '../../components/footer/legalfooter';
import Navbar from '../../components/navbar/navbar';
import SEO from '../../components/seo';
import { HEADER_LIST, TERMS_OF_SERVICE_ID, TERMS_OF_SERVICE_SEO_ID } from '../../constants/constant';
import { getSEOdata } from '../../lib/contentful-seo';
import { getSitemap } from '../../lib/contentful-sitemap';
import { Container } from '../../styles/commonStyles';
import { PrivacuHero, MainSection, SubData } from '../../styles/legalStyles';

export default function TermsOfService({ content, seoData }) {
  return (
    <>
      <SEO seoData={seoData} />
      <Navbar isEnterPrice={true} headerIndex={HEADER_LIST.ENTERPRICE} />
      <MainSection>
        <PrivacuHero>
          <Container>
            <h2>Terms of Service</h2>
          </Container>
        </PrivacuHero>
        <Container>
          <SubData>{<ReactMarkdown>{content}</ReactMarkdown>}</SubData>
        </Container>
      </MainSection>
      <LegalFooter />
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const content = (await getSitemap(TERMS_OF_SERVICE_ID)) ?? '';
  const seoData = (await getSEOdata(TERMS_OF_SERVICE_SEO_ID)) ?? [];

  return {
    props: {
      content: content?.content,
      seoData
    }
  };
}
