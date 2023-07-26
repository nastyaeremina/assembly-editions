import { getSEOData } from '../helpers/helpers';
import PartnershipPage from '../components/PageComponent/Partnership/partnershipPage';
import Layout from '../components/layout';
import Navbar from '../components/navbar/navbar';
import FAQ from '../components/faq/faq';
import { getPartnershipDetail } from './../lib/contentful-partnership';
import { PARTNERSHIP_FAQ_ID, PARTNERSHIP_ID } from './../constants/constant';

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

  return (
    <>
      <Layout>
        <Navbar />
        <PartnershipPage details={details} />
        <FAQ contentID={PARTNERSHIP_FAQ_ID} />
      </Layout>
    </>
  );
}
