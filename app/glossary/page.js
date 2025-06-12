import React from 'react';
import Layout from '../components/layout';
import Navbar from '../components/navbar/navbar';
import { CURRENT_SITE_URL, GLOSSARY_PAGE_ID } from '../constants/constant';
import GlossaryPage from '../components/PageComponent/Glossary/glossarypage';
import { getAllGlossaryContent, getGlossaryPageContent } from '../lib/contentful-glossary';
import { getSEOData } from '../helpers/helpers';
import AggregateRating from '../components/aggregateRating';
import { getABTestInfoFromCookie } from '../helpers/serverSideHelpers';

async function getContent() {

  const {
    contentId,
    abTestContentLabel,
    abTestExperimentName
  } = getABTestInfoFromCookie({
    cookieKey: 'glossary',
    fallbackContentId: GLOSSARY_PAGE_ID
  });

  const data = await getGlossaryPageContent(contentId);

  const definations = await getAllGlossaryContent();
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

  return { glossaryList: newList, seoMetadata: data?.seoMetadata, abTestContentLabel, abTestExperimentName };
}

export async function generateMetadata({ params, searchParams }, parent) {
  const { seoMetadata } = await getContent();
  const seoData = await getSEOData({ data: seoMetadata });
  seoData.alternates = { canonical: `${CURRENT_SITE_URL}/glossary` };

  return seoData;
}
export default async function Glossary() {
  const { glossaryList, seoMetadata, abTestContentLabel, abTestExperimentName } = await getContent();
  return (
    <>
      <AggregateRating data={seoMetadata} />
      <Layout abTestContentLabel={abTestContentLabel} abTestExperimentName={abTestExperimentName}>
        <Navbar />
        <GlossaryPage data={glossaryList} />
      </Layout>
    </>
  );
}
