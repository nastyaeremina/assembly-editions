import { CONTENTFUL_API_TAG, PER_API_LIMIT_FOR_REVIEWS } from '../constants/constant';
import { fetchGraphQL } from './contentful';
import { POST_GRAPHQL_FAQ_COLLECTION_FIELDS } from './contentful-faq';
import { POST_GRAPHQL_GUIDE_ARTICLE_CONTENT_FIELDS } from './contentful-guide';
import { POST_GRAPHQL_SEOMETADATA_FIELDS } from './contentful-seo';
export const POST_GRAPHQL_PARTNER_APPS_CARD_ITEM_FIELDS = `
name
slug
appsType
appType
description
isFeatured
pricing
icon{
    url
}
reviewsCollection(preview:false){
  total
  items{
    rate
  }
}`;

export const POST_GRAPHQL_PARTNER_APPS_DETAILS_FIELDS = `
name
slug
appsType
description
website
isFeatured
icon{
    url
}
logo{
   url
}
`;


const POST_GRAPHQL_PAGE_APPS_DETAILS_FIELDS_SECTION_1 = `
    
    header
    body
    heroImage{
      url
    }
   ${POST_GRAPHQL_FAQ_COLLECTION_FIELDS}
    demoPortalUrl
    seoMetadata {
       ${POST_GRAPHQL_SEOMETADATA_FIELDS}
      }
    sectionCaseStudyHeader
    sectionCaseStudyContent{
      slug
      sys{
    id
  }
  heroSection{
   heroDescription
  }
  highlights
  caseStudyImage{
    url
  }
  customerLogo{
    name
    companyWebsite
    imageAsset{
      url
    }
  }
    }
    sectionFeaturedHeader
     sectionFeaturedBody{
       json
    }
    sectionFeaturedContentCollection{
      items{
        ${POST_GRAPHQL_PARTNER_APPS_DETAILS_FIELDS}
      }
    }
`;

const POST_GRAPHQL_PAGE_APPS_DETAILS_FIELDS_SECTION_2 = `
sectionHeader1
    sectionContent1Collection{
      items{
        
        name
        title
        subTitle
        description
        image{
          url
        }
      }
      
    }
   
    sectionHeader2
    sectionContent2Collection{	
    items{
      header
      body
      image{
        url
      }
    }
    }
`;

function extractPostEntry(fetchResponse) {
  return fetchResponse?.data?.partnerAppsCollection?.items?.[0];
}

function extractPostEntries(fetchResponse) {
  return fetchResponse?.data?.partnerAppsCollection?.items;
}

export async function getPageAppDetail({ id, preview }) {
  const entries1 = await fetchGraphQL(
    `query {
      pageApps(id:"${id}",preview: ${preview ? 'true' : 'false'}) {
               ${POST_GRAPHQL_PAGE_APPS_DETAILS_FIELDS_SECTION_1}
              }
            }`,
    preview,
    [CONTENTFUL_API_TAG.APP]
  );
  const entries2 = await fetchGraphQL(
    `query {
                pageApps(id:"${id}",preview: ${preview ? 'true' : 'false'}) {
        ${POST_GRAPHQL_PAGE_APPS_DETAILS_FIELDS_SECTION_2}
      }
    }`,
    preview,
    [CONTENTFUL_API_TAG.APP]
  );
  return { ...entries1?.data?.pageApps, ...entries2?.data?.pageApps };
}

export async function getAllPartnerApps(apptype, preview) {
  const entries = await fetchGraphQL(
    `query {
      partnerAppsCollection(where:{appsType:"${apptype}",isHidden:false, },preview: ${preview ? 'true' : 'false'}) {
        items {
          ${POST_GRAPHQL_PARTNER_APPS_CARD_ITEM_FIELDS}
        }
      }
    }`,
    preview,
    [CONTENTFUL_API_TAG.APP]
  );
  return extractPostEntries(entries);
}

export async function getAllPartnerAppsWithSlug(preview) {
  const entries = await fetchGraphQL(
    `query {
      partnerAppsCollection(preview: ${preview ? 'true' : 'false'}) {
        items {
        slug
        }
      }
    }`,
    preview,
    [CONTENTFUL_API_TAG.APP]
  );
  return extractPostEntries(entries);
}
const POST_GRAPHQL_DATA_APPS_DETAILS_FIELDS = `
sys{
  id
}
isReviewVisible  
name
slug
appsType
appType
description
website
icon{
    url
}
guideArticle{
  ${POST_GRAPHQL_GUIDE_ARTICLE_CONTENT_FIELDS}
}
      isPlatformApp
      requirements
      builtBy
      pricing
      imageListCollection(preview:false){
        items{
          url
        }
      }
      `;

const POST_GRAPHQL_DATA_APPS_REVIEW_DETAILS_FIELDS = `    
customerName
rate
comment
date
`;

const POST_GRAPHQL_NAVBAR_FEATURES_APP_DETAIL = `
name
slug
icon{
  url
}
navbarDescription
      `;

/**
 * Fetches a single page of reviews for a partner app from Contentful.
 * @param {Object} params - The parameters for fetching reviews.
 * @param {string} params.slug - The slug of the partner app.
 * @param {boolean} params.preview - Whether to use Contentful preview mode.
 * @param {number} params.limit - The number of reviews to fetch per page.
 * @param {number} params.skip - The number of reviews to skip (for pagination).
 * @returns {Promise<{ items: Array}>} The review collection with  items array.
 */
async function fetchReviewPage({slug, preview, limit, skip}) {
  try {
    const reviewEntries = await fetchGraphQL(
      `query {
        partnerAppsCollection(where:{slug:"${slug}"},limit:1,preview: ${preview ? 'true' : 'false'}) {
          items {
            reviewsCollection(preview:${preview ? 'true' : 'false'},order:date_DESC,limit:${limit},skip:${skip}) {
              items{
                 ${POST_GRAPHQL_DATA_APPS_REVIEW_DETAILS_FIELDS}
              }
            }
          }
        }
      }`,
      preview,
      [CONTENTFUL_API_TAG.APP, CONTENTFUL_API_TAG.APP_REVIEW]
    );
    
    return extractPostEntry(reviewEntries)?.reviewsCollection || {  items: [] };
  } catch (error) {
    console.error('Error fetching review page:', error);
    return {  items: [] };
  }
}

/**
 * Fetches all reviews for a partner app from Contentful, handling pagination.
 * @param {Object} params - The parameters for fetching all reviews.
 * @param {string} params.slug - The slug of the partner app.
 * @param {boolean} params.preview - Whether to use Contentful preview mode.
 * @returns {Promise<{total: number, items: Array}>} The complete review collection with total count and all items.
 */
async function fetchAllReviews({slug, preview}) {
  try {
    // First, get the total count of reviews
    const reviewCountQuery = await fetchGraphQL(
      `query {
        partnerAppsCollection(where:{slug:"${slug}"},limit:1,preview: ${preview ? 'true' : 'false'}) {
          items {
            reviewsCollection(preview:${preview ? 'true' : 'false'},order:date_DESC) {
              total
            }
          }
        }
      }`,
      preview,
      [CONTENTFUL_API_TAG.APP, CONTENTFUL_API_TAG.APP_REVIEW]
    );
    const totalReviews = extractPostEntry(reviewCountQuery)?.reviewsCollection?.total || 0;
    if (totalReviews === 0) {
      return { total: 0, items: [] };
    }
    let allReviews = [];
    const totalPages = Math.ceil(totalReviews / PER_API_LIMIT_FOR_REVIEWS);
    // Fetch all reviews across multiple pages
    for (let page = 0; page < totalPages; page++) {
      const skip = page * PER_API_LIMIT_FOR_REVIEWS;
      const pageReviews = await fetchReviewPage({slug, preview, limit:  PER_API_LIMIT_FOR_REVIEWS, skip});
      
      allReviews = allReviews.concat(pageReviews.items || []);
    }
    return {
      total: totalReviews,
      items: allReviews
    };
  } catch (error) {
    console.error('Error fetching all reviews:', error);
    return { total: 0, items: [] };
  }
}

/**
 * Fetches detailed information for a partner app including reviews if enabled.
 * @param {string} slug - The unique slug identifier of the partner app.
 * @param {boolean} preview - Whether to use Contentful preview mode for draft content.
 * @returns {Promise<Object>} The partner app details with optional review collection if reviews are visible.
 */
export async function getPartnerAppDetail(slug, preview) {
  const entries = await fetchGraphQL(
    `query {
      partnerAppsCollection(where:{slug:"${slug}"},limit:1,preview: ${preview ? 'true' : 'false'}) {
        items {
          ${POST_GRAPHQL_DATA_APPS_DETAILS_FIELDS}
        }
      }
    }`,
    preview,
    [CONTENTFUL_API_TAG.APP, CONTENTFUL_API_TAG.GUIDE]
  );
  const appDetail = extractPostEntry(entries);
  
  // Only fetch review data if isReviewVisible is true
  if (appDetail && appDetail.isReviewVisible) {
    const reviewData = await fetchAllReviews({slug, preview});
    
    // Create the final review data structure
    const reviewDataStructure = {
      reviewsCollection: reviewData
    };
    console.log("reviewDataStructure",reviewDataStructure);
    
    return { ...appDetail, ...reviewDataStructure };
  }
  
  // Return app detail without review data if isReviewVisible is false or null
  return appDetail;
}

export async function getAllAppsWithIcon(preview) {
  const entries = await fetchGraphQL(
    `query {
      partnerAppsCollection(preview: ${preview ? 'true' : 'false'}) {
        items {
        slug
        icon{url}
        }
      }
    }`,
    preview,
    [CONTENTFUL_API_TAG.APP]
  );
  return extractPostEntries(entries);
}
