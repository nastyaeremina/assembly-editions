'use client';

import ReactMarkdown from 'react-markdown';
import LegalFooter from '../../footer/legalfooter';
import { Container } from '../../../styles/commonStyles';
import { PrivacuHero, MainSection, SubData } from '../../../styles/legalStyles';

export default function TermsOfServicePage({ content }) {
  return (
    <>
      <MainSection>
        <PrivacuHero>
          <Container>
            <h1>Terms of Service</h1>
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
