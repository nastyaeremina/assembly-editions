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
      if (['heading-3', 'heading-4'].includes(item?.nodeType) && item?.content?.[0]?.value) {
        newList?.push({ title: item?.content?.[0]?.value, type: item?.nodeType?.replace('heading-', 'h') });
      }
    });
    return newList;
  }, [article?.content?.json?.content]);

  function createHierarchy(inputArray) {
    const hierarchy = [];
    const stack = [];
    let currentLevel = 1; // Initialize the current level

    inputArray.forEach((item) => {
      while (stack.length > 0 && stack[stack.length - 1].type >= item.type) {
        stack.pop();
        currentLevel--; // Decrease the level when popping
      }
      const id = `${slugify(item.title?.toLowerCase())}-${item.type}`;

      const newItem = { ...item, items: [], id, level: currentLevel };

      if (stack.length === 0) {
        hierarchy.push(newItem);
      } else {
        stack[stack.length - 1].items.push(newItem);
      }

      stack.push(newItem);
      currentLevel++; // Increase the level for the next item
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
