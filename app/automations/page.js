import AutomationPage from '../components/PageComponent/Automation/automationPage';
import Navbar from '../components/navbar/navbar';
import Layout from '../components/layout';
import CTA from '../components/cta/cta';
import { CURRENT_SITE_URL, HEADER_LIST } from '../constants/constant';
import FAQ from '../components/faq/faq';
import { getFAQsData } from '../services/faq';
import AggregateRating from '../components/aggregateRating';
import { getPageContent } from '../helpers/serverSideHelpers';
import { getPageAutomationDetail } from './../lib/contentful-automation';
import { getSEOData } from './../helpers/helpers';
import { AUTOMATION_ID } from './../constants/constant';

async function getContent({ searchParams }) {
  const {
    content: details,
    abTestContentLabel,
    abTestExperimentName
  } = await getPageContent({
    searchParams,
    cookieKey: 'automation',
    fallbackContentId: AUTOMATION_ID,
    getContentFn: getPageAutomationDetail
  });
  return { details, abTestContentLabel, abTestExperimentName };
}

export async function generateMetadata({ searchParams }) {
  const { details: data } = await getContent({ searchParams });
  const seoData = await getSEOData({ id: data?.seoMetadata?.sys?.id, data: data?.seoMetadata });
  seoData.alternates = { canonical: `${CURRENT_SITE_URL}/automations` };

  return seoData;
}

export default async function Automation({ searchParams }) {
  const { details, abTestContentLabel, abTestExperimentName } = await getContent({ searchParams });
  const faqData = await getFAQsData({ data: details?.faQsCollection?.items });
  return (
    <>
      <AggregateRating data={details?.seoMetadata} />
      <Layout abTestContentLabel={abTestContentLabel} abTestExperimentName={abTestExperimentName}>
        <Navbar isEnterPrice headerIndex={HEADER_LIST.ENTERPRICE} />
        <AutomationPage details={details} />
        <FAQ faqList={faqData} />
        <CTA />
      </Layout>
    </>
  );
}
