import SEO from '../components/seo';
import Navbar from '../components/navbar/navbar';
import Layout from '../components/layout';
import { APP_PAGE_ID, CURRENT_SITE_URL, HEADER_LIST } from '../constants/constant';
import { createArrayWithFixedLength, getSEOData } from '../helpers/helpers';
import { getAllAppsWithIcon, getPageAppDetail } from '../lib/contentful-partnerApps';
import AppPage from '../components/PageComponent/Apps/appPage';
import { getFAQsData } from '../services/faq';
import CTA from '../components/cta/cta';
import AggregateRating from '../components/aggregateRating';
import { getABTestInfoFromCookie } from '../helpers/serverSideHelpers';

async function getContent() {

  const {
    contentId,
    abTestContentLabel,
    abTestExperimentName
  } = getABTestInfoFromCookie({
    cookieKey: 'apps',
    fallbackContentId: APP_PAGE_ID
  });

  const details = (await getPageAppDetail(contentId)) ?? [];
  const appsList = (await getAllAppsWithIcon()) ?? [];
  return {
    details,
    appsList,
    abTestContentLabel,
    abTestExperimentName
  };
}

export async function generateMetadata() {
  const { details } = await getContent();
  const seoData = await getSEOData({ data: details.seoMetadata });
  seoData.alternates = { canonical: `${CURRENT_SITE_URL}/apps` };

  return seoData;
}
export default async function Automation() {
  const { details, appsList, abTestContentLabel, abTestExperimentName } = await getContent();
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
        <Navbar isEnterPrice headerIndex={HEADER_LIST.ENTERPRICE} />
        <AppPage details={details} appsList={sliderAppList} faqList={faqData} />
        <CTA />
      </Layout>
    </>
  );
}
