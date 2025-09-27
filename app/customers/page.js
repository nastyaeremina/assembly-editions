import React from 'react';
import { draftMode } from 'next/headers';
import CustomerPage from '../components/PageComponent/Customers/customersPage';
import Layout from '../components/layout';
import AggregateRating from '../components/aggregateRating';
import {
  CURRENT_SITE_URL,
  CUSTOMER_SEO_ID,
  CUSTOMER_PAGE_HERO_ID,
  PER_API_LIMIT_FOR_CUSTOMERS
} from './../constants/constant';
import { getAllFeaturedCaseStudies, getAllFeaturedTestimonial } from './../lib/contentful-testimonial';
import { getSEOData } from './../helpers/helpers';
import { getCustomers, getHeroComponentContent } from './../lib/contentful-casestudies';
import { getExternalLinks } from '../helpers/serverSideHelpers';

async function getContent() {
  try {
    const { isEnabled } = await draftMode();

    // Fetch all customers using pagination (same pattern as automation directory)
    let allCustomers = [];
    let data = [];
    let page = 0;
    do {
      const skip = page * PER_API_LIMIT_FOR_CUSTOMERS;
      data = await getCustomers({ preview: isEnabled, limit: PER_API_LIMIT_FOR_CUSTOMERS, skip });
      allCustomers = allCustomers.concat(data);
      if (data?.length !== PER_API_LIMIT_FOR_CUSTOMERS) break;
      // eslint-disable-next-line no-plusplus
      page++;
    } while (data?.length !== 0);

    // Fetch other data concurrently
    const [testimonialPosts = [], casestudiesPosts = [], externalLinks = {}, heroSection = {}] = await Promise.all([
      getAllFeaturedTestimonial(isEnabled),
      getAllFeaturedCaseStudies(isEnabled),
      getExternalLinks({ asMap: true }),
      getHeroComponentContent(CUSTOMER_PAGE_HERO_ID, isEnabled)
    ]);

    return { testimonialPosts, casestudiesPosts, externalLinks, customers: allCustomers, heroSection };
  } catch (error) {
    console.error('Error fetching content:', error);
    return { testimonialPosts: [], casestudiesPosts: [], externalLinks: {}, customers: [], heroSection: {} };
  }
}

export async function generateMetadata() {
  const seoData = await getSEOData({ id: CUSTOMER_SEO_ID });
  seoData.alternates = { canonical: `${CURRENT_SITE_URL}/customers` };
  return seoData;
}

export default async function Customer() {
  const { testimonialPosts, casestudiesPosts, externalLinks, customers, heroSection } = await getContent();

  // Map customers to caseStudiesData and keep isFullWidth field
  let caseStudiesData =
    customers?.map((item) => ({
      customerLogo: item.logo?.url,
      customerName: item.customerName,
      designation: item.industry,
      slug: item.slug,
      visitLink: item.url,
      isFullWidth: item.isFullWidth || false
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
          heroSection={heroSection}
        />
      </Layout>
    </>
  );
}
