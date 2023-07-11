import React from 'react';
import Layout from '../components/layout';
import Navbar from '../components/navbar/navbar';
import SEO from '../components/seo';
import { Container } from '../components/weeklyhero/styles';
import WeeklyHero from '../components/weeklyhero/weeklyhero';
import { WEEKLY_DEMO_PAGE_ID } from '../constants/constant';
import { getWeeklyDemoContent } from '../lib/contentful-weeklyDemo';

export default function WeeklyDemo({ seoData, details }) {
  return (
    <>
      <SEO seoData={details?.seoMetadata} />
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
  return {
    props: {
      details
    }
  };
}

export async function getStaticPaths() {
  const details = (await getWeeklyDemoContent(WEEKLY_DEMO_PAGE_ID)) ?? [];

  return {
    paths: [`/${details?.slug}`] ?? [],
    fallback: false
  };
}
