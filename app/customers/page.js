import React from 'react';
import { draftMode } from 'next/headers';
import CustomerPage from '../components/PageComponent/Customers/customersPage';
import Layout from '../components/layout';
import AggregateRating from '../components/aggregateRating';
import { CURRENT_SITE_URL, CUSTOMER_SEO_ID, CUSTOMER_PAGE_HERO_ID } from './../constants/constant';
import { getAllFeaturedCaseStudies, getAllFeaturedTestimonial } from './../lib/contentful-testimonial';
import { getSEOData } from './../helpers/helpers';
import { getCustomers, getHeroComponentContent } from './../lib/contentful-casestudies';
import { getExternalLinks } from '../helpers/serverSideHelpers';

async function getContent() {
  try {
    const { isEnabled } = await draftMode();

    // Fetch all data concurrently
    const [casestudiesPosts = [], externalLinks = {}, customers = [], heroSection = {}] = await Promise.all([
      getAllFeaturedCaseStudies(isEnabled),
      getExternalLinks({ asMap: true }),
      getCustomers(isEnabled),
      getHeroComponentContent(CUSTOMER_PAGE_HERO_ID, isEnabled)
    ]);
    casestudiesPosts.sort((a, b) => {
      if (a.isFullWidth === true && b.isFullWidth !== true) return -1;
      if (b.isFullWidth === true && a.isFullWidth !== true) return 1;
      return 0; // keep original order otherwise
    });
    return { casestudiesPosts, externalLinks, customers, heroSection };
  } catch (error) {
    console.error('Error fetching content:', error);
    return { casestudiesPosts: [], externalLinks: {}, customers: [], heroSection: {} };
  }
}

export async function generateMetadata() {
  const seoData = await getSEOData({ id: CUSTOMER_SEO_ID });
  seoData.alternates = { canonical: `${CURRENT_SITE_URL}/customers` };
  return seoData;
}

export default async function Customer() {
  const { casestudiesPosts, externalLinks, customers, heroSection } = await getContent();

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
