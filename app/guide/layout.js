import React from 'react';
import GuideNavbar from '../components/GuideNavbar/guideNavbar';
import { getAllArticleFAQ, getAllGuideSectionContent, getGuidePageContent } from '../lib/contentful-guide';
import {
  GUIDE_PAGE_ID,
  PER_API_LIMIT_FOR_GUIDE_ARTICLE_FAQ,
  PER_API_LIMIT_FOR_GUIDE_SECTION
} from '../constants/constant';
import { isEmpty, removeEmptyElement } from '../helpers/helpers';
import { draftMode } from 'next/headers';

function mergeArticlesWithFAQs(articlesArray, faqCollections) {
  // Create a dictionary for faster lookups
  const faqDictionary = faqCollections.reduce((dict, faqItem) => {
    dict[faqItem.sys.id] = faqItem.faQsCollection;
    return dict;
  }, {});

  // Array to store merged articles with FAQs
  const mergedArticles = [];

  // Helper function to recursively merge articles with FAQs
  function mergeHelper(articles) {
    articles?.forEach((article) => {
      // Destructure the article object to separate childArticlesCollection from other properties
      const { childArticlesCollection, ...rest } = article;
      // Retrieve FAQs collection from the faqDictionary using article's sys.id
      const faQsCollection = faqDictionary[article.sys.id];
      // Push the modified article object into the mergedArticles array
      mergedArticles.push({
        ...rest,
        faQsCollection
      });

      // Recursively merge child articles if they exist
      if (article?.childArticlesCollection?.items?.length > 0) {
        mergeHelper(article?.childArticlesCollection?.items);
      }
    });
  }

  // Iterate over each item in the articlesArray
  articlesArray?.forEach((item) => {
    if (!isEmpty(item?.articlesCollection?.items)) {
      // Merge articles with FAQs and add them to mergedArticles
      mergeHelper(item?.articlesCollection?.items);
    }
  });

  return mergedArticles;
}

/**
 * Retrieves all FAQ posts from the API with pagination.
 * @returns {Promise<Array>} An array containing all FAQ posts.
 */
async function getArticleFAQData({ preview }) {
  let allFAQPosts = [];
  let faqdata = [];
  let page = 0;
  // Loop until all FAQ posts are retrieved
  do {
    const skip = page * PER_API_LIMIT_FOR_GUIDE_ARTICLE_FAQ;
    faqdata = (await getAllArticleFAQ({ skip, preview })) || [];
    allFAQPosts = allFAQPosts.concat(faqdata);

    if (faqdata?.length !== PER_API_LIMIT_FOR_GUIDE_ARTICLE_FAQ) break;
    // eslint-disable-next-line no-plusplus
    else page++;
  } while (faqdata?.length !== 0);

  return allFAQPosts;
}
//This will collect allguide content including section and  articles from contentful.
async function getguideContent() {
  const { isEnabled } = await draftMode();
  // get all sections with section name and id
  const guidePageContent = (await getGuidePageContent({ id: GUIDE_PAGE_ID, preview: isEnabled })) ?? {};
  let allSectionContent = [];
  let data = [];
  //remove empty sections
  const sections = removeEmptyElement(guidePageContent?.sectionsCollection?.items);

  //create new array with sections id as sting element
  const sectionIdList = sections?.map((item) => `"${item?.sys?.id}"`) || [];

  //fetch all section section details using pagination
  for (let i = 0; i < sectionIdList.length; i += PER_API_LIMIT_FOR_GUIDE_SECTION) {
    // Slice section IDs for pagination
    const sectionContentBatch = sectionIdList.slice(i, i + PER_API_LIMIT_FOR_GUIDE_SECTION);
    data = (await getAllGuideSectionContent({ idList: `id_in: [${sectionContentBatch}]`, preview: isEnabled })) || [];
    allSectionContent = allSectionContent.concat(data);
  }

  //sorted sectiondata
  const orderedSections = sectionIdList?.map((sectionId, index) => {
    const matchedSection = allSectionContent?.find((dataItem) => dataItem.sys.id === sectionId.replace(/"/g, ''));
    return matchedSection;
  });

  // Remove empty sections
  const filteredSections = removeEmptyElement(orderedSections) || [];

  // Retrieveall article FAQ data
  const articleFAQData = await getArticleFAQData({ preview: isEnabled });

  // Merge sections with FAQ data
  const mergedData = mergeArticlesWithFAQs(filteredSections, articleFAQData, isEnabled);
  return { guideSectionData: filteredSections, articleData: mergedData };
}

export default async function Layout({ children }) {
  const { guideSectionData, articleData } = await getguideContent();
  return (
    <>
      <div className='guideSection'>
        <GuideNavbar sectionData={guideSectionData} articleData={articleData} />
        <div className='guiderightsection'>{children}</div>
      </div>
    </>
  );
}
