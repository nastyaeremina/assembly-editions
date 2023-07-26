import { FEATURES_FILES_ID, HEADER_LIST } from '../../constants/constant';
import { getFeatureById } from '../../lib/contentful-features';
import FileAppPage from '../../components/featurePages/filesAppPage';
import { getSEOData } from '../../helpers/helpers';
import Layout from '../../components/layout';
import Navbar from '../../components/navbar/navbar';

async function getContent() {
  return await getFeatureById(FEATURES_FILES_ID);
}

export async function generateMetadata({ params, searchParams }, parent) {
  const data = await getContent();
  const seoData = await getSEOData({ id: data?.seoMetadata?.sys?.id, data: data?.seoMetadata });
  return seoData;
}

export default async function FilesApp() {
  const details = await getContent();
  return (
    <>
      <Layout>
        <Navbar isModule={true} headerIndex={HEADER_LIST.FILES} />
        <FileAppPage details={details} />
      </Layout>
    </>
  );
}
