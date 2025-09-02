import React from 'react';
import { draftMode } from 'next/headers';
import CustomerPage from '../components/PageComponent/Customers/customersPage';
import Layout from '../components/layout';
import CTA from '../components/cta/cta';
import AggregateRating from '../components/aggregateRating';
import { CURRENT_SITE_URL, CUSTOMER_SEO_ID } from './../constants/constant';
import { getAllFeaturedCaseStudies, getAllFeaturedTestimonial } from './../lib/contentful-testimonial';
import { getSEOData } from './../helpers/helpers';

async function getContent() {
  const { isEnabled } = await draftMode();
  const testimonialPosts = await getAllFeaturedTestimonial(isEnabled);
  const casestudiesPosts = await getAllFeaturedCaseStudies(isEnabled);
  return { testimonialPosts, casestudiesPosts };
}

export async function generateMetadata() {
  const seoData = await getSEOData({ id: CUSTOMER_SEO_ID });
  seoData.alternates = { canonical: `${CURRENT_SITE_URL}/customers` };

  return seoData;
}

export default async function Customer() {
  const { testimonialPosts, casestudiesPosts } = await getContent();

  return (
    <>
      <AggregateRating id={CUSTOMER_SEO_ID} />
      <Layout>
        <CustomerPage testimonialPosts={testimonialPosts} casestudiesPosts={casestudiesPosts} />
        <CTA />
      </Layout>
    </>
  );
}
