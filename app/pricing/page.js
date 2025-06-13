import PricingPage from '../components/PageComponent/Pricing/pricingPage';
import Layout from '../components/layout';
import Navbar from '../components/navbar/navbar';
import FAQ from '../components/faq/faq';
import CTA from '../components/cta/cta';
import { getFAQsData } from '../services/faq';
import AggregateRating from '../components/aggregateRating';
import { getABTestInfoFromCookie, getPageContent } from '../helpers/serverSideHelpers';
import { CURRENT_SITE_URL, PRICING_PAGE_ID } from './../constants/constant';
import { getSEOData } from './../helpers/helpers';
import { getPricingPageDetail } from './../lib/contentful-pricing';

async function getContent({searchParams}) {
  const {
    content: details,
    abTestContentLabel,
    abTestExperimentName
  } = await getPageContent({
    searchParams,
    cookieKey: 'pricing',
    fallbackContentId: PRICING_PAGE_ID,
    getContentFn: getPricingPageDetail
  });
  return { details, abTestContentLabel, abTestExperimentName };
}

export async function generateMetadata({ searchParams }) {
  const { details } = await getContent({ searchParams });
  const seoData = await getSEOData({ data: details?.seoMetadata });
  seoData.alternates = { canonical: `${CURRENT_SITE_URL}/pricing` };

  return seoData;
}

export default async function NewIndex({searchParams}) {
  const { details, abTestContentLabel, abTestExperimentName } = await getContent({searchParams});
  const faqData = await getFAQsData({ data: details?.faQsCollection?.items });

  return (
    <>
      <AggregateRating data={details?.seoMetadata} />
      <Layout abTestContentLabel={abTestContentLabel} abTestExperimentName={abTestExperimentName}>
        <Navbar />
        <PricingPage details={details} />
        <FAQ faqList={faqData} />
        <CTA />
      </Layout>
    </>
  );
}
