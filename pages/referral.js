import { NextSeo } from 'next-seo';
import Layout from '../components/layout';
import Navbar from '../components/navbar/navbar';
import Referral from '../components/referral';

export default function ReferralPage({code}) {
  return (
    <>
      <NextSeo
        title='Create your portal, pick a plan later'
        description='Try Copilot free for 14 days, no credit card required'
      />
      <Layout>
        <Navbar />
        <Referral firstName={code.split("_")[0]} url={'https://dashboard.copilot.com/onboarding?referred=' + code.split("_")[1]}/>
      </Layout>
    </>
  );
}

export async function getServerSideProps({query}) {
  const code = query.code;
  return {
    props: {
      code
    }
  };
}

