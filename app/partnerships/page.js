import { getSEOData } from '../helpers/helpers';
import PartnershipPage from '../components/PageComponent/Partnership/partnershipPage';
import Layout from '../components/layout';
import Navbar from '../components/navbar/navbar';
import FAQ from '../components/faq/faq';
import { getFAQsData } from '../services/faq';
import { getPartnershipDetail } from './../lib/contentful-partnership';
import { PARTNERSHIP_ID } from './../constants/constant';

async function getContent() {
  const details = await getPartnershipDetail({ id: PARTNERSHIP_ID });
  return details;
}

export async function generateMetadata() {
  const details = await getContent();
  const seoData = await getSEOData({ data: details?.seoMetadata });
  return seoData;
}

export default async function Partnership() {
  const details = await getContent();
  const faqData = await getFAQsData({ data: details?.faQsCollection?.items });

  return (
    <>
      <Layout>
        <Navbar />
        <PartnershipPage details={details} />
        <FAQ faqList={faqData} />
      </Layout>
    </>
  );
}
