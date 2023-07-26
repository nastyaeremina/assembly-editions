import SEO from '../components/seo';
import Navbar from '../components/navbar/navbar';
import Layout from '../components/layout';
import CTA from '../components/cta/cta';
import { APP_PAGE_ID, HEADER_LIST } from '../constants/constant';
import { getSEOData } from '../helpers/helpers';
import FAQ from '../components/faq/faq';
import { getAllAppsWithIcon, getPageAppDetail } from '../lib/contentful-partnerApps';
import AppPage from '../components/PageComponent/Apps/appPage';

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

  return (
    <>
      <SEO seoData={details?.seoMetadata}></SEO>
      <Layout>
        <Navbar isEnterPrice headerIndex={HEADER_LIST.ENTERPRICE} />
        <AppPage details={details} appsList={appsList} />
      </Layout>
    </>
  );
}
