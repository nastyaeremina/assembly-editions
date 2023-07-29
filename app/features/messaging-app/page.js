import { FEATURES_MESSAG_ID, HEADER_LIST } from '../../constants/constant';
import { getFeatureById } from '../../lib/contentful-features';
import MessagingAppPage from '../../components/featurePages/messagingAppPage';
import { getSEOData } from '../../helpers/helpers';
import Navbar from '../../components/navbar/navbar';
import Layout from '../../components/layout';
async function getContent() {
  return await getFeatureById(FEATURES_MESSAG_ID);
}

export async function generateMetadata({ params, searchParams }, parent) {
  const data = await getContent();
  const seoData = await getSEOData({ id: data?.seoMetadata?.sys?.id, data: data?.seoMetadata });
  return seoData;
}

export default async function MessagingApp() {
  const details = await getContent();
  return (
    <>
      <Layout>
        <Navbar isModule={true} headerIndex={HEADER_LIST.MESSAGING} />
        <MessagingAppPage details={details} />
      </Layout>
    </>
  );
}
