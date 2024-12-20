import React from 'react';
import CustomerPage from '../components/PageComponent/Customers/customersPage';
import Layout from '../components/layout';
import Navbar from '../components/navbar/navbar';
import CTA from '../components/cta/cta';
import AggregateRating from '../components/aggregateRating';
import { CUSTOMER_SEO_ID } from './../constants/constant';
import { getAllFeaturedCaseStudies, getAllFeaturedTestimonial } from './../lib/contentful-testimonial';
import { getSEOData } from './../helpers/helpers';

async function getContent() {
  const testimonialPosts = await getAllFeaturedTestimonial();
  const casestudiesPosts = await getAllFeaturedCaseStudies();
  return { testimonialPosts, casestudiesPosts };
}

export async function generateMetadata() {
  const seoData = await getSEOData({ id: CUSTOMER_SEO_ID });
  return seoData;
}

export default async function Customer() {
  const { testimonialPosts, casestudiesPosts } = await getContent();

  return (
    <>
      <AggregateRating id={CUSTOMER_SEO_ID} />
      <Layout>
        <Navbar />
        <CustomerPage testimonialPosts={testimonialPosts} casestudiesPosts={casestudiesPosts} />
        <CTA />
      </Layout>
    </>
  );
}
