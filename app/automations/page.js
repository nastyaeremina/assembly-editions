import AutomationPage from '../components/PageComponent/Automation/automationPage';
import Navbar from '../components/navbar/navbar';
import Layout from '../components/layout';
import CTA from '../components/cta/cta';
import { CURRENT_SITE_URL, HEADER_LIST } from '../constants/constant';
import FAQ from '../components/faq/faq';
import { getFAQsData } from '../services/faq';
import AggregateRating from '../components/aggregateRating';
import { getPageAutomationDetail } from './../lib/contentful-automation';
import { getSEOData } from './../helpers/helpers';
import { AUTOMATION_ID } from './../constants/constant';

async function getContent() {
  return await getPageAutomationDetail(AUTOMATION_ID);
}

export async function generateMetadata({ params, searchParams }, parent) {
  const data = await getContent();
  const seoData = await getSEOData({ id: data?.seoMetadata?.sys?.id, data: data?.seoMetadata });
  seoData.alternates = { canonical: `${CURRENT_SITE_URL}/automations` };

  return seoData;
}

export default async function Automation() {
  const details = await getContent();
  const faqData = await getFAQsData({ data: details?.faQsCollection?.items });
  return (
    <>
      <AggregateRating data={details?.seoMetadata} />
      <Layout>
        <Navbar isEnterPrice headerIndex={HEADER_LIST.ENTERPRICE} />
        <AutomationPage details={details} />
        <FAQ faqList={faqData} />
        <CTA />
      </Layout>
    </>
  );
}
