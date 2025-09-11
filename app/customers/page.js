import React from 'react';
import { draftMode } from 'next/headers';
import CustomerPage from '../components/PageComponent/Customers/customersPage';
import Layout from '../components/layout';
import CTA from '../components/cta/cta';
import AggregateRating from '../components/aggregateRating';
import { CURRENT_SITE_URL, CUSTOMER_SEO_ID } from './../constants/constant';
import { getAllFeaturedCaseStudies, getAllFeaturedTestimonial } from './../lib/contentful-testimonial';
import { getSEOData } from './../helpers/helpers';
import { getExternalLinks } from '../helpers/serverSideHelpers';

async function getContent() {
  try {
    const { isEnabled } = await draftMode();

    // Fetch all data concurrently
    const [testimonialPosts = [], casestudiesPosts = [], externalLinks = {}] = await Promise.all([
      getAllFeaturedTestimonial(isEnabled),
      getAllFeaturedCaseStudies(isEnabled),
      getExternalLinks({ asMap: true })
    ]);

    return { testimonialPosts, casestudiesPosts, externalLinks };
  } catch (error) {
    console.error('Error fetching content:', error);
    return { testimonialPosts: [], casestudiesPosts: [], externalLinks: {} };
  }
}

export async function generateMetadata() {
  const seoData = await getSEOData({ id: CUSTOMER_SEO_ID });
  seoData.alternates = { canonical: `${CURRENT_SITE_URL}/customers` };

  return seoData;
}

export default async function Customer() {
  const { testimonialPosts, casestudiesPosts, externalLinks } = await getContent();

  return (
    <>
      <AggregateRating id={CUSTOMER_SEO_ID} />
      <Layout>
        <CustomerPage
          testimonialPosts={testimonialPosts}
          casestudiesPosts={casestudiesPosts}
          externalLinks={externalLinks}
        />
        <CTA />
      </Layout>
    </>
  );
}
