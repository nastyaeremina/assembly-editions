import React from 'react';
import Layout from '../../components/layout';
import Navbar from '../../components/navbar/navbar';

import SEO from '../../components/seo';
import { Container } from '../../components/weeklyhero/styles';
import WeeklyHero from '../../components/weeklyhero/weeklyhero';
import { UPDATES_SEO_ID, WEEKLYDEMO_SEO_ID, WEEKLY_DEMO_PAGE_ID } from '../../constants/constant';
import { getSEOdata } from '../../lib/contentful-seo';
import { getWeeklyDemoContent } from '../../lib/contentful-weeklyDemo';

export default function WeeklyDemo({ seoData, details }) {
  return (
    <>
      <SEO seoData={seoData} />
      <Container>
        <Layout>
          <Navbar />
          <WeeklyHero data={details} />
        </Layout>
      </Container>
    </>
  );
}
export async function getStaticProps({ preview = false }) {
  const details = (await getWeeklyDemoContent(WEEKLY_DEMO_PAGE_ID)) ?? [];
  const seoData = (await getSEOdata(WEEKLYDEMO_SEO_ID)) ?? [];
  return {
    props: {
      seoData,
      details
    }
  };
}
