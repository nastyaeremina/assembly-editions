'use client';

import ReactMarkdown from 'react-markdown';
import { Container } from '../../../styles/commonStyles';
import { MainSection, PrivacuHero, PostContent, PrivacyContent } from '../../../styles/resourcesStyles';

export default function PrivacyPolicyPage({ content }) {
  return (
    <>
      <MainSection>
        <PrivacuHero>
          <Container>
            <h1>Privacy Policy</h1>
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
    </>
  );
}
