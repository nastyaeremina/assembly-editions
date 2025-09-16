import PricingPage from '../components/PageComponent/Pricing/pricingPage';
import Layout from '../components/layout';
import FAQ from '../components/faq/faq';
import { getFAQsData } from '../services/faq';
import AggregateRating from '../components/aggregateRating';
import { getPageContent } from '../helpers/serverSideHelpers';
import { CURRENT_SITE_URL, PRICING_PAGE_ID } from './../constants/constant';
import { getSEOData, isEmpty } from './../helpers/helpers';
import { getPricingPageDetail } from './../lib/contentful-pricing';
import NewCTA from '../components/cta/newCTA';

async function getContent({ searchParams }) {
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

export default async function NewIndex({ searchParams }) {
  const { details, abTestContentLabel, abTestExperimentName } = await getContent({ searchParams });
  const faqData = await getFAQsData({ data: details?.faQsCollection?.items });
  if (isEmpty(details)) return null;

  return (
    <>
      <AggregateRating data={details.seoMetadata} />
      <Layout abTestContentLabel={abTestContentLabel} abTestExperimentName={abTestExperimentName}>
        <PricingPage details={details} faqData={faqData} />
      </Layout>
    </>
  );
}
