import React from 'react';
import { draftMode } from 'next/headers';
import CustomerPage from '../components/PageComponent/Customers/customersPage';
import Layout from '../components/layout';
import AggregateRating from '../components/aggregateRating';
import { CURRENT_SITE_URL, CUSTOMER_SEO_ID } from './../constants/constant';
import { getAllFeaturedCaseStudies, getAllFeaturedTestimonial } from './../lib/contentful-testimonial';
import { getSEOData } from './../helpers/helpers';
import { getCustomers } from './../lib/contentful-casestudies';
import { getExternalLinks } from '../helpers/serverSideHelpers';

async function getContent() {
  try {
    const { isEnabled } = await draftMode();

    // Fetch all data concurrently
    const [testimonialPosts = [], casestudiesPosts = [], externalLinks = {}, customers = []] = await Promise.all([
      getAllFeaturedTestimonial(isEnabled),
      getAllFeaturedCaseStudies(isEnabled),
      getExternalLinks({ asMap: true }),
      getCustomers(isEnabled)
    ]);

    return { testimonialPosts, casestudiesPosts, externalLinks, customers };
  } catch (error) {
    console.error('Error fetching content:', error);
    return { testimonialPosts: [], casestudiesPosts: [], externalLinks: {}, customers: [] };
  }
}

export async function generateMetadata() {
  const seoData = await getSEOData({ id: CUSTOMER_SEO_ID });
  seoData.alternates = { canonical: `${CURRENT_SITE_URL}/customers` };

  return seoData;
}

export default async function Customer() {
  const { testimonialPosts, casestudiesPosts, externalLinks, customers } = await getContent();

  const caseStudiesData =
    customers?.map((item) => ({
      customerLogo: item.logo?.url,
      customerName: item.customerName,
      designation: item.industry,
      slug: item.slug,
      visitLink: item.url
    })) ?? [];

  const designations = [...new Set(customers?.map((c) => c.industry) ?? [])];

  return (
    <>
      <AggregateRating id={CUSTOMER_SEO_ID} />
      <Layout>
        <CustomerPage
          casestudiesPosts={casestudiesPosts}
          externalLinks={externalLinks}
          customers={customers}
          caseStudiesData={caseStudiesData}
          designations={designations}
        />
      </Layout>
    </>
  );
}
