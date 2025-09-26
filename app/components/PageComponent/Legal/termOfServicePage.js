'use client';

import ReactMarkdown from 'react-markdown';
import { Container, Content } from '../../../styles/commonStyles';
import { PrivacuHero, MainSection, PostContent } from '../../../styles/legalStyles';

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
          <PostContent>
            <Content hasWordBreak>
              <ReactMarkdown>{content}</ReactMarkdown>
            </Content>
          </PostContent>
        </Container>
      </MainSection>
    </>
  );
}
