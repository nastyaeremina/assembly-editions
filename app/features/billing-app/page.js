import { FEATURES_BILLING_ID, HEADER_LIST, MUDULE_LIST, NAVBAR_COLOR_LIST } from '../../constants/constant';
import { getFeatureById } from '../../lib/contentful-features';
import BillingAppPage from '../../components/featurePages/billingAppPage';
import { getSEOData } from '../../helpers/helpers';
import Layout from '../../components/layout';
import Navbar from '../../components/navbar/navbar';

async function getContent() {
  return await getFeatureById(FEATURES_BILLING_ID);
}

export async function generateMetadata({ params, searchParams }, parent) {
  const data = await getContent();
  const seoData = await getSEOData({ id: data?.seoMetadata?.sys?.id, data: data?.seoMetadata });
  return seoData;
}

export default async function BillinggApp() {
  const details = await getContent();
  return (
    <>
      <Layout>
        <Navbar isModule={true} headerIndex={HEADER_LIST.BILLING} />
        <BillingAppPage details={details} />
      </Layout>
    </>
  );
}
