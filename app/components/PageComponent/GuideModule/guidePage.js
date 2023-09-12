import React from 'react';
import slugify from 'slugify';
import GuideHome from '../../GuideHome/guideHome';
import GuideRightSection from '../../GuideNavbar/guideRightSection';

export default function GuidePage({ defaultArticle: article }) {
  function tableContents() {
    const newList = [];
    article?.content?.json?.content?.forEach((item) => {
      if (['heading-3', 'heading-4'].includes(item?.nodeType) && item?.content?.[0]?.value) {
        newList?.push({ title: item?.content?.[0]?.value, type: item?.nodeType?.replace('heading-', 'h') });
      }
    });
    return newList;
  }

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
      {/* <div className='guideSection'>
        <GuideNavbar data={data} selectedArticleId={article?.sys?.id} section={defaultsection} /> */}
      <GuideHome detail={article} />
      <GuideRightSection data={createHierarchy(tableContents())} />
      {/* </div> */}
    </>
  );
}
