import { useEffect, useState } from 'react';
import Layout from '../../components/layout';
import Navbar from '../../components/navbar/navbar';
import Referral from '../../components/referral';
import SEO from '../../components/seo';
import { REFERRAL_SEO_ID } from '../../constants/constant';
import { getSEOdata } from '../../lib/contentful-seo';

export default function ReferralPage({ code, host, seoData }) {
  return (
    <>
      <SEO seoData={seoData} />
      <Layout>
        <Navbar />
        <Referral
          firstName={code?.split('_')?.[0] || 'Someone'}
          url={`https://dashboard.${host}/onboarding?referred=${code?.replace(code?.split('_')?.[0] + '_', '')}`}
        />
      </Layout>
    </>
  );
}

export async function getServerSideProps(context) {
  const code = context?.params?.slug || null;
  const host = context.req.headers.host.replace('www.', '');
  const seoData = (await getSEOdata(REFERRAL_SEO_ID)) ?? [];

  return {
    props: {
      code,
      host,
      seoData
    }
  };
}
