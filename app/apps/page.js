import SEO from '../components/seo';
import Navbar from '../components/navbar/navbar';
import Layout from '../components/layout';
import { APP_PAGE_ID, HEADER_LIST } from '../constants/constant';
import { createArrayWithFixedLength, getSEOData } from '../helpers/helpers';
import { getAllAppsWithIcon, getPageAppDetail } from '../lib/contentful-partnerApps';
import AppPage from '../components/PageComponent/Apps/appPage';
import { getFAQsData } from '../services/faq';
import CTA from '../components/cta/cta';
async function getContent() {
  const details = (await getPageAppDetail(APP_PAGE_ID)) ?? [];
  const appsList = (await getAllAppsWithIcon()) ?? [];
  return {
    details,
    appsList
  };
}

export async function generateMetadata() {
  const { details } = await getContent();
  const seoData = await getSEOData({ data: details.seoMetadata });
  return seoData;
}
export default async function Automation() {
  const { details, appsList } = await getContent();
  const faqData = await getFAQsData({ data: details?.faQsCollection?.items });
  // Create a new array with a fixed length of 50 items to support continuous sliding
  // The larger array size ensures that the slider runs smoothly on larger screens,
  // preventing any noticeable breaks or empty spaces between the first and last slide.
  const sliderAppList = createArrayWithFixedLength(appsList, 50);

  return (
    <>
      <SEO seoData={details?.seoMetadata}></SEO>
      <Layout>
        <Navbar isEnterPrice headerIndex={HEADER_LIST.ENTERPRICE} />
        <AppPage details={details} appsList={sliderAppList} faqList={faqData} />
        <CTA />
      </Layout>
    </>
  );
}
