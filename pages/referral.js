import { NextSeo } from 'next-seo';
import Layout from '../components/layout';
import Navbar from '../components/navbar/navbar';
import Referral from '../components/referral';
import { useRouter } from 'next/router'
import { useState, useEffect } from "react";

export default function ReferralPage() {
  const router = useRouter();
  const [code, setCode] = useState((useRouter().query.code || "").toString());

  useEffect(()=>{
    if(router.query.code != null)
    {
      setCode(router.query.code)
    }
  },[router]);

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
