import React from 'react';
import { notFound } from 'next/navigation';
import Layout from '../../components/layout';
import Navbar from '../../components/navbar/navbar';
import { getCaseStudyDetail } from '../../lib/contentful-casestudies';
import CaseStudiesPage from '../../components/PageComponent/Customers/customerDetailPage';
import { getSEOData, isEmpty } from '../../helpers/helpers';
import CTA from '../../components/cta/cta';
import AggregateRating from '../../components/aggregateRating';
import { CURRENT_SITE_URL } from '../../constants/constant';

async function getContent({ slug }) {
  const details = await getCaseStudyDetail({ slug });
  return details;
}

export async function generateMetadata({ params }) {
  const details = await getContent({ slug: params?.slug });
  const seoData = await getSEOData({ id: details?.seoMetadata?.sys?.id });
  seoData.alternates = { canonical: `${CURRENT_SITE_URL}/customers/${params?.slug}` };
  return seoData;
}

export default async function CaseStudies({ params }) {
  const details = await getContent({ slug: params?.slug });
  if (isEmpty(details)) return notFound();
  return (
    <>
      <AggregateRating id={details?.seoMetadata?.sys?.id} />
      <Layout>
        <Navbar />
        <CaseStudiesPage details={details} />
        <CTA />
      </Layout>
    </>
  );
}
