import React from 'react';
import Layout from '../../components/layout';
import Navbar from '../../components/navbar/navbar';
import { getCaseStudyDetail } from '../../lib/contentful-casestudies';
import CaseStudiesPage from '../../components/PageComponent/Customers/customerDetailPage';
import { getSEOData } from '../../helpers/helpers';

async function getContent({ slug }) {
  const details = await getCaseStudyDetail({ slug });
  return details;
}

export async function generateMetadata({ params }) {
  const details = await getContent({ slug: params?.slug });
  const seoData = await getSEOData({ id: details?.seoMetadata?.sys?.id });
  return seoData;
}

export default async function CaseStudies({ params }) {
  const details = await getContent({ slug: params?.slug });
  return (
    <>
      <Layout>
        <Navbar />
        <CaseStudiesPage details={details} />
      </Layout>
    </>
  );
}
