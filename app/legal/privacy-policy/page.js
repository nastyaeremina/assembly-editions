import { HEADER_LIST, PRIVACY_POLICY_SEO_ID, PRIVCY_POLICY_ID } from '../../constants/constant';
import { getSitemap } from '../../lib/contentful-sitemap';
import { getSEOData } from '../../helpers/helpers';
import PrivacyPolicyPage from '../../components/PageComponent/Legal/privacyPolicyPage';
import Navbar from '../../components/navbar/navbar';

async function getContent() {
  const data = await getSitemap(PRIVCY_POLICY_ID);
  return { content: data?.content };
}

export async function generateMetadata() {
  const seoData = await getSEOData({ id: PRIVACY_POLICY_SEO_ID });
  return seoData;
}

export default async function PrivacyPolicy() {
  const { content } = await getContent();
  return (
    <>
      <Navbar isEnterPrice={true} headerIndex={HEADER_LIST.ENTERPRICE} />
      <PrivacyPolicyPage content={content} />
    </>
  );
}
