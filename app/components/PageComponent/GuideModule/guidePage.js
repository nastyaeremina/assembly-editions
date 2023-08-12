'use client';
import slugify from 'slugify';
import React, { useCallback, useMemo, useState } from 'react';
import GuideNavbar from '../../GuideNavbar/guideNavbar';
import GuideHome from '../../GuideHome/guideHome';
import GuideRightSection from '../../GuideNavbar/guideRightSection';
import { GuidePageSection } from '../../../styles/guideStyles';

export default function GuidePage({ data, defaultArticle }) {
  const [article, setArticle] = useState(defaultArticle);
  const onOpenMenu = useCallback(() => {}, []);
  const onClickArticle = useCallback((data) => {
    setArticle(data);
  }, []);

  const tableContents = useMemo(() => {
    const newList = [];
    article?.content?.json?.content?.forEach((item) => {
      if (item?.nodeType?.includes('heading') && item?.content?.[0]?.value) {
        newList?.push({ title: item?.content?.[0]?.value, type: item?.nodeType?.replace('heading-', 'h') });
      }
    });
    return newList;
  }, [article?.content?.json?.content]);

  function createHierarchy(inputArray) {
    const hierarchy = [];
    const stack = [];

    inputArray.forEach((item) => {
      while (stack.length > 0 && stack[stack.length - 1].type >= item.type) {
        stack.pop();
      }
      const id = `${slugify(item.title?.toLowerCase())}-${item.type}`;

      const newItem = { ...item, items: [], id };

      if (stack.length === 0) {
        hierarchy.push(newItem);
      } else {
        stack[stack.length - 1].items.push(newItem);
      }

      stack.push(newItem);
    });

    return hierarchy;
  }
  return (
    <>
      <GuidePageSection>
        <GuideNavbar data={data} onClickArticle={onClickArticle} selectedArticleId={article?.sys?.id} />
        <GuideHome detail={article} />
        <GuideRightSection data={createHierarchy(tableContents)} />
      </GuidePageSection>
    </>
  );
}
