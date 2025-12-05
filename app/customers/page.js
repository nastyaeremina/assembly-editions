import React from 'react';
import { draftMode } from 'next/headers';
import CustomerPage from '../components/PageComponent/Customers/customersPage';
import Layout from '../components/layout';
import AggregateRating from '../components/aggregateRating';
import {
  CURRENT_SITE_URL,
  CUSTOMER_SEO_ID,
  CUSTOMER_PAGE_HERO_ID,
  CUSTOMER_CTA_ID,
  PER_API_LIMIT_FOR_CUSTOMERS
} from './../constants/constant';
import { getAllFeaturedCaseStudies, getAllFeaturedTestimonial } from './../lib/contentful-testimonial';
import { getSEOData } from './../helpers/helpers';
import { getCustomers, getHeroComponentContent } from './../lib/contentful-casestudies';
import { getExternalLinks } from '../helpers/serverSideHelpers';
import { getSectionCTAContent } from '../lib/contentful-standardPage';

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
    const [testimonialPosts = [], casestudiesPosts = [], externalLinks = {}, heroSection = {}, customerCTA = {}] =
      await Promise.all([
        getAllFeaturedTestimonial(isEnabled),
        getAllFeaturedCaseStudies(isEnabled),
        getExternalLinks({ asMap: true }),
        getHeroComponentContent(CUSTOMER_PAGE_HERO_ID, isEnabled),
        getSectionCTAContent(CUSTOMER_CTA_ID, isEnabled)
      ]);

    casestudiesPosts.sort((a, b) => {
      if (a.isFullWidth === true && b.isFullWidth !== true) return -1;
      if (b.isFullWidth === true && a.isFullWidth !== true) return 1;
      return 0; // keep original order otherwise
    });

    return { testimonialPosts, casestudiesPosts, externalLinks, customers: allCustomers, heroSection, customerCTA };
  } catch (error) {
    console.error('Error fetching content:', error);
    return {
      testimonialPosts: [],
      casestudiesPosts: [],
      externalLinks: {},
      customers: [],
      heroSection: {},
      customerCTA: {}
    };
  }
}

export async function generateMetadata() {
  const seoData = await getSEOData({ 
    id: CUSTOMER_SEO_ID,
    canonical: `${CURRENT_SITE_URL}/customers`
  });
  return seoData;
}

export default async function Customer() {
  const { testimonialPosts, casestudiesPosts, externalLinks, customers, heroSection, customerCTA } = await getContent();

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
          customerCTA={customerCTA}
        />
      </Layout>
    </>
  );
}
