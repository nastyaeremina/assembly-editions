import { headers } from 'next/headers';
import Layout from '../../components/layout';
import Navbar from '../../components/navbar/navbar';
import Referral from '../../components/referral';
import { REFERRAL_SEO_ID } from '../../constants/constant';
import { getSEOData } from '../../helpers/helpers';

export async function generateMetadata() {
  const seoData = await getSEOData({ id: REFERRAL_SEO_ID });
  seoData.canonical = 'https://www.copilot.com/referrals';

  return seoData;
}
export default async function ReferralPage() {
  const host = headers().get('host').replace('www.', '');
  return (
    <>
      <Layout>
        <Navbar />
        <Referral hostName={host} />
      </Layout>
    </>
  );
}
