import PricingPage from '../components/PageComponent/Pricing/pricingPage';
import Layout from '../components/layout';
import Navbar from '../components/navbar/navbar';
import FAQ from '../components/faq/faq';
import CTA from '../components/cta/cta';
import { getFAQsData } from '../services/faq';
import { PRICING_PAGE_ID } from './../constants/constant';
import { getSEOData } from './../helpers/helpers';
import { getPricingPageDetail } from './../lib/contentful-pricing';

async function getContent() {
  const details = await getPricingPageDetail({ id: PRICING_PAGE_ID });
  return details;
}

export async function generateMetadata() {
  const details = await getContent();
  const seoData = await getSEOData({ data: details?.seoMetadata });
  return seoData;
}

export default async function NewIndex() {
  const details = await getContent();
  const faqData = await getFAQsData({ data: details?.faQsCollection?.items });

  return (
    <>
      <Layout>
        <Navbar />
        <PricingPage details={details} />
        <FAQ faqList={faqData} />
        <CTA />
      </Layout>
    </>
  );
}
