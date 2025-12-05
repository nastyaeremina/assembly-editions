import React from 'react';
import Layout from '../components/layout';
import { CURRENT_SITE_URL, GLOSSARY_PAGE_ID } from '../constants/constant';
import GlossaryPage from '../components/PageComponent/Glossary/glossarypage';
import { getAllGlossaryContent, getGlossaryPageContent } from '../lib/contentful-glossary';
import { getSEOData } from '../helpers/helpers';
import AggregateRating from '../components/aggregateRating';
import { getPageContent } from '../helpers/serverSideHelpers';
import { draftMode } from 'next/headers';

async function getContent({ searchParams }) {
  const { isEnabled } = await draftMode();
  const {
    content: data,
    abTestContentLabel,
    abTestExperimentName
  } = await getPageContent({
    searchParams,
    cookieKey: 'definitions',
    fallbackContentId: GLOSSARY_PAGE_ID,
    getContentFn: getGlossaryPageContent
  });

  const definations = await getAllGlossaryContent(isEnabled);
  let newList = [];
  await definations?.forEach((item) => {
    const char = item?.name?.charAt(0);
    const index = newList?.findIndex((x) => x?.key === char);
    if (index !== -1) {
      newList[index]?.list?.push(item);
    } else {
      const newItem = {
        key: char,
        list: [item]
      };
      newList?.push(newItem);
    }
  });
  //sort by key
  newList.sort((a, b) => a.key.localeCompare(b.key));

  //next level sort
  //sort by list name
  newList.forEach((item) => {
    item.list.sort((x, y) => x.name.localeCompare(y.name));
  });

  return { glossaryList: newList, seoMetadata: data?.seoMetadata, abTestContentLabel, abTestExperimentName, data };
}

export async function generateMetadata({ searchParams }) {
  const { seoMetadata } = await getContent({ searchParams });
  const seoData = await getSEOData({ 
    data: seoMetadata,
    canonical: `${CURRENT_SITE_URL}/definitions`
  });

  return seoData;
}
export default async function Glossary({ searchParams }) {
  const { glossaryList, data, seoMetadata, abTestContentLabel, abTestExperimentName } = await getContent({
    searchParams
  });

  return (
    <>
      <AggregateRating data={seoMetadata} />
      <Layout abTestContentLabel={abTestContentLabel} abTestExperimentName={abTestExperimentName}>
        <GlossaryPage data={glossaryList} heroSectionDetail={data?.heroSection} />
      </Layout>
    </>
  );
}
