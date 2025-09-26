'use client';

import ReactMarkdown from 'react-markdown';
import { Container, Content } from '../../../styles/commonStyles';
import { MainSection, PostContent, PrivacuHero } from '../../../styles/legalStyles';

export default function PrivacyPolicyPage({ content }) {
  return (
    <>
      <MainSection>
        <PrivacuHero>
          <Container>
            <h1>Privacy Policy</h1>
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
