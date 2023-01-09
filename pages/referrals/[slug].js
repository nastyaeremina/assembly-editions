import { useEffect, useState } from 'react';
import Layout from '../../components/layout';
import Navbar from '../../components/navbar/navbar';
import Referral from '../../components/referral';
import SEO from '../../components/seo';
import { REFERRAL_SEO_ID } from '../../constants/constant';
import { isEmpty } from '../../helpers/helpers';

export default function ReferralPage({ code }) {
  const [hostname, sethostName] = useState('');
  const [firstName, setFirstName] = useState('Someone');
  const [referralcode, setReferralcode] = useState('');

  useEffect(() => {
    const codeList = code?.split('_');
    if (!isEmpty(codeList)) {
      setFirstName(codeList?.[0]);
      setReferralcode(codeList?.[1]);
    }
    if (window !== undefined) {
      const host = window.location.host;
      const newhost = host?.replace('www.', '');
      sethostName(newhost);
    }
  }, [code]);

  return (
    <>
      <SEO id={REFERRAL_SEO_ID} />
      <Layout>
        <Navbar />
        <Referral
          firstName={firstName || 'Someone'}
          url={`https://dashboard.${hostname}/onboarding?referred=${referralcode}`}
        />
      </Layout>
    </>
  );
}

export async function getServerSideProps({ params }) {
  console.log('query', params);
  const code = params?.slug || null;
  return {
    props: {
      code
    }
  };
}
