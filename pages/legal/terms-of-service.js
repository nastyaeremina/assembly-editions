import { NextSeo } from 'next-seo';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import LegalFooter from '../../components/footer/legalfooter';
import Navbar from '../../components/navbar/navbar';
import { HEADER_LIST, TERMS_OF_SERVICE_ID } from '../../constants/constant';
import { getSitemap } from '../../lib/contentful-sitemap';
import { Container } from '../../styles/commonStyles';
import { PrivacuHero, MainSection, SubData } from '../../styles/legalStyles';

export default function TermsOfService({ content }) {
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
  return {
    props: {
      content: content?.content
    }
  };
}
