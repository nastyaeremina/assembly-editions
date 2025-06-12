import PricingPage from '../components/PageComponent/Pricing/pricingPage';
import Layout from '../components/layout';
import Navbar from '../components/navbar/navbar';
import FAQ from '../components/faq/faq';
import CTA from '../components/cta/cta';
import { getFAQsData } from '../services/faq';
import AggregateRating from '../components/aggregateRating';
import { getABTestInfoFromCookie } from '../helpers/serverSideHelpers';
import { CURRENT_SITE_URL, PRICING_PAGE_ID } from './../constants/constant';
import { getSEOData } from './../helpers/helpers';
import { getPricingPageDetail } from './../lib/contentful-pricing';

async function getContent() {
  const {
    contentId,
    abTestContentLabel,
    abTestExperimentName
  } = getABTestInfoFromCookie({
    cookieKey: 'pricing',
    fallbackContentId: PRICING_PAGE_ID
  });
  const details = await getPricingPageDetail({ id: contentId });
  return { details, abTestContentLabel, abTestExperimentName };
}

export async function generateMetadata() {
  const { details } = await getContent();
  const seoData = await getSEOData({ data: details?.seoMetadata });
  seoData.alternates = { canonical: `${CURRENT_SITE_URL}/pricing` };

  return seoData;
}

export default async function NewIndex() {
  const { details, abTestContentLabel, abTestExperimentName } = await getContent();
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
