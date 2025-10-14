'use client';
import React from 'react';
import GuideHome from '../../GuideHome/guideHome';
import TableOfContents from '../Blog/TableOfContents';
import { isEmpty, extractHeadingsFromContent, generateUniqueHeadingIds } from '../../../helpers/helpers';
import { Container } from '../../../styles/commonStyles';
import { SectionWrapper, TableOfContentSection } from './styles';

export default function GuidePage({ defaultArticle: article }) {
  // Convert the guide content to HTML format that TableOfContents can understand
  function convertToHtmlFormat() {
    // Use the common helper to extract headings from content
    const headings = extractHeadingsFromContent(article?.content?.json?.content);

    // Use the common helper to generate unique IDs by tracking all heading levels
    const headingsWithUniqueIds = generateUniqueHeadingIds(headings);
    let htmlContent = '';

    headingsWithUniqueIds.forEach((heading) => {
      htmlContent += `<${heading.type} id="${heading.uniqueId}">${heading.title}</${heading.type}>`;
    });
    return htmlContent;
  }

  return (
    <Container>
      <SectionWrapper>
        <GuideHome detail={article} />
        <TableOfContentSection>
          <TableOfContents
            htmlData={convertToHtmlFormat()}
            isFAQs={!isEmpty(article?.faQsCollection?.items)}
            isShowH3={true}
            isShowH4={true}
          />
        </TableOfContentSection>
      </SectionWrapper>
    </Container>
  );
}
