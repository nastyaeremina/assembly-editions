import { useEffect, useState } from 'react';
import Layout from '../../components/layout';
import Navbar from '../../components/navbar/navbar';
import Referral from '../../components/referral';
import SEO from '../../components/seo';
import { REFERRAL_SEO_ID } from '../../constants/constant';

export default function ReferralPage({ code, host }) {
  return (
    <>
      <SEO id={REFERRAL_SEO_ID} />
      <Layout>
        <Navbar />
        <Referral
          firstName={code?.split('_')?.[0] || 'Someone'}
          url={`https://dashboard.${host}/onboarding?referred=${code?.replace(code?.split('_')?.[0]+'_','')}`}
        />
      </Layout>
    </>
  );
}

export async function getServerSideProps(context) {
  const code = context?.params?.slug || null;
  const host = context.req.headers.host.replace('www.', '');
  return {
    props: {
      code,
      host
    }
  };
}
