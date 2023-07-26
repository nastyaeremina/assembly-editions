import AutomationPage from '../components/PageComponent/Automation/automationPage';
import Navbar from '../components/navbar/navbar';
import Layout from '../components/layout';
import CTA from '../components/cta/cta';
import { HEADER_LIST } from '../constants/constant';
import FAQ from '../components/faq/faq';
import { getPageAutomationDetail } from './../lib/contentful-automation';
import { getSEOData } from './../helpers/helpers';
import { AUTOMATION_ID } from './../constants/constant';

async function getContent() {
  return await getPageAutomationDetail(AUTOMATION_ID);
}

export async function generateMetadata({ params, searchParams }, parent) {
  const data = await getContent();
  const seoData = await getSEOData({ id: data?.seoMetadata?.sys?.id, data: data?.seoMetadata });
  return seoData;
}

export default async function Automation() {
  const details = await getContent();
  return (
    <>
      <Layout>
        <Navbar isEnterPrice headerIndex={HEADER_LIST.ENTERPRICE} />
        <AutomationPage details={details} />
        <FAQ contentID={details?.faqGroup?.sys?.id} />
        <CTA />
      </Layout>
    </>
  );
}
