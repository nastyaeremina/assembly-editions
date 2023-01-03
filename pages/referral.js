import { NextSeo } from 'next-seo';
import Layout from '../components/layout';
import Navbar from '../components/navbar/navbar';
import Referral from '../components/referral';

export default function ReferralPage() {
  return (
    <>
      <NextSeo
        title='Create your portal, pick a plan later'
        description='Try Copilot free for 14 days, no credit card required'
      />
      <Layout>
        <Navbar />
        <Referral firstName="Marlon"/>
      </Layout>
    </>
  );
}
