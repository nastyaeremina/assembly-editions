import { FEATURES_HELPDESK_ID, HEADER_LIST } from '../../constants/constant';
import { getFeatureById } from '../../lib/contentful-features';
import HelpDeskPage from '../../components/featurePages/helpDeskPage';
import { getSEOData } from '../../helpers/helpers';
import Layout from '../../components/layout';
import Navbar from '../../components/navbar/navbar';

async function getContent() {
  return await getFeatureById(FEATURES_HELPDESK_ID);
}

export async function generateMetadata() {
  const data = await getContent();
  const seoData = await getSEOData({ id: data?.seoMetadata?.sys?.id, data: data?.seoMetadata });
  return seoData;
}
export default async function MessagingApp() {
  const details = await getContent();
  return (
    <>
      <Layout>
        <Navbar isModule={true} headerIndex={HEADER_LIST.HELPDESK} />
        <HelpDeskPage details={details} />
      </Layout>
    </>
  );
}
