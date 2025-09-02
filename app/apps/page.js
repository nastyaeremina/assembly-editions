import { draftMode } from 'next/headers';
import SEO from '../components/seo';
import Layout from '../components/layout';
import { APP_PAGE_ID, CURRENT_SITE_URL, HEADER_LIST } from '../constants/constant';
import { createArrayWithFixedLength, getSEOData } from '../helpers/helpers';
import { getAllAppsWithIcon, getPageAppDetail } from '../lib/contentful-partnerApps';
import AppPage from '../components/PageComponent/Apps/appPage';
import { getFAQsData } from '../services/faq';
import CTA from '../components/cta/cta';
import AggregateRating from '../components/aggregateRating';
import { getPageContent } from '../helpers/serverSideHelpers';

async function getContent({ searchParams }) {
  const { isEnabled } = await draftMode();
  const { content, abTestContentLabel, abTestExperimentName } = await getPageContent({
    searchParams,
    cookieKey: 'apps',
    fallbackContentId: APP_PAGE_ID,
    getContentFn: getPageAppDetail
  });
  const appsList = (await getAllAppsWithIcon(isEnabled)) ?? [];
  return {
    details: content,
    appsList,
    abTestContentLabel,
    abTestExperimentName
  };
}

export async function generateMetadata({ searchParams }) {
  const { details } = await getContent({ searchParams });
  const seoData = await getSEOData({ data: details.seoMetadata });
  seoData.alternates = { canonical: `${CURRENT_SITE_URL}/apps` };

  return seoData;
}

export default async function App({ searchParams }) {
  const { details, appsList, abTestContentLabel, abTestExperimentName } = await getContent({ searchParams });
  const faqData = await getFAQsData({ data: details?.faQsCollection?.items });
  // Create a new array with a fixed length of 50 items to support continuous sliding
  // The larger array size ensures that the slider runs smoothly on larger screens,
  // preventing any noticeable breaks or empty spaces between the first and last slide.
  const sliderAppList = createArrayWithFixedLength(appsList, 50);

  return (
    <>
      <AggregateRating data={details.seoMetadata} />
      <SEO seoData={details?.seoMetadata}></SEO>
      <Layout abTestContentLabel={abTestContentLabel} abTestExperimentName={abTestExperimentName}>
        <AppPage details={details} appsList={sliderAppList} faqList={faqData} />
        <CTA />
      </Layout>
    </>
  );
}
