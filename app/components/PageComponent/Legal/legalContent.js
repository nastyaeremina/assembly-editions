'use client';

import ReactMarkdown from 'react-markdown';
import { Container, Content } from '../../../styles/commonStyles';
import { MainSection, PostContent, PrivacuHero } from '../../../styles/legalStyles';
import { isEmpty } from '../../../helpers/helpers';

export default function LegalContent({ content, title }) {
  /**
   * Extracts the effective date line from markdown content
   * Returns the line as-is for ReactMarkdown to render
   */
  const extractEffectiveDate = (markdownContent) => {
    if (!markdownContent) return null;

    const lines = markdownContent.split('\n');
    const effectiveLine = lines.find((line) => line.trim().toLowerCase().includes('effective'));

    return effectiveLine ? effectiveLine.trim() : null;
  };

  /**
   * Removes effective date line from content to prevent duplication
   */
  const removeEffectiveDateFromContent = (markdownContent) => {
    if (!markdownContent) return markdownContent;

    return markdownContent
      .split('\n')
      .filter((line) => !line.trim().toLowerCase().includes('effective'))
      .join('\n');
  };

  // Extract effective date and clean content
  const effectiveDateLine = extractEffectiveDate(content);
  const contentWithoutEffectiveDate = removeEffectiveDateFromContent(content);

  return (
    <>
      <Container>
        <MainSection>
          <PrivacuHero>
            {!isEmpty(effectiveDateLine) && (
              <Content>
                <ReactMarkdown>{effectiveDateLine}</ReactMarkdown>
              </Content>
            )}
            <h1>{title}</h1>
          </PrivacuHero>
          <PostContent>
            <Content hasWordBreak>
              <ReactMarkdown>{contentWithoutEffectiveDate}</ReactMarkdown>
            </Content>
          </PostContent>
        </MainSection>
      </Container>
    </>
  );
}
