import React from 'react';
import { notFound } from 'next/navigation';
import { draftMode } from 'next/headers';
import Layout from '../../components/layout';
import { getCaseStudyDetail } from '../../lib/contentful-casestudies';
import CaseStudiesPage from '../../components/PageComponent/Customers/customerDetailPage';
import { getSEOData, isEmpty } from '../../helpers/helpers';
import AggregateRating from '../../components/aggregateRating';
import { CURRENT_SITE_URL, CUSTOMER_CTA_ID } from '../../constants/constant';
import { getSectionCTAContent } from '../../lib/contentful-standardPage';

async function getContent({ slug }) {
  const { isEnabled } = await draftMode();
  const [details, customerCTA] = await Promise.all([
    getCaseStudyDetail({ slug, preview: isEnabled }),
    getSectionCTAContent(CUSTOMER_CTA_ID, isEnabled)
  ]);
  return { details, customerCTA };
}

export async function generateMetadata({ params }) {
  const { details } = await getContent({ slug: params?.slug });
  const seoData = await getSEOData({ id: details?.seoMetadata?.sys?.id });
  seoData.alternates = { canonical: `${CURRENT_SITE_URL}/customers/${params?.slug}` };
  return seoData;
}

export default async function CaseStudies({ params }) {
  const { details, customerCTA } = await getContent({ slug: params?.slug });
  if (isEmpty(details)) return notFound();
  return (
    <>
      <AggregateRating id={details?.seoMetadata?.sys?.id} />
      <Layout>
        <CaseStudiesPage details={details} customerCTA={customerCTA} />
      </Layout>
    </>
  );
}
