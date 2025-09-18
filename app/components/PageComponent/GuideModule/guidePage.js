'use client';
import React from 'react';
import GuideHome from '../../GuideHome/guideHome';
import TableOfContents from '../Blog/TableOfContents';
import { isEmpty, stringToSlugyfy } from '../../../helpers/helpers';
import { Container } from '../../../styles/commonStyles';
import { SectionWrapper, TableOfContentSection } from './styles';

export default function GuidePage({ defaultArticle: article }) {
  function tableContents() {
    const newList = [];
    article?.content?.json?.content?.forEach((item) => {
      if (['heading-2', 'heading-3', 'heading-4'].includes(item?.nodeType) && item?.content?.[0]?.value) {
        newList?.push({ title: item?.content?.[0]?.value, type: item?.nodeType?.replace('heading-', 'h') });
      }
    });
    return newList;
  }

  // Convert the guide content to HTML format that TableOfContents can understand
  function convertToHtmlFormat() {
    const headings = tableContents();
    let htmlContent = '';

    headings.forEach((heading) => {
      const id = stringToSlugyfy(heading.title);
      htmlContent += `<${heading.type} id="${id}">${heading.title}</${heading.type}>`;
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
