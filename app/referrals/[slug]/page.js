import { headers } from 'next/headers';
import Layout from '../../components/layout';
import Referral from '../../components/referral';
import { CURRENT_SITE_URL, REFERRAL_SEO_ID } from '../../constants/constant';
import { getSEOData } from '../../helpers/helpers';
import AggregateRating from '../../components/aggregateRating';

export async function generateMetadata() {
  const seoData = await getSEOData({ id: REFERRAL_SEO_ID });
  seoData.alternates = { canonical: `${CURRENT_SITE_URL}/referrals` };

  return seoData;
}
export default async function ReferralPage() {
  const host = headers().get('host').replace('www.', '');
  return (
    <>
      <AggregateRating id={REFERRAL_SEO_ID} />
      <Layout>
        <Referral hostName={host} />
      </Layout>
    </>
  );
}
