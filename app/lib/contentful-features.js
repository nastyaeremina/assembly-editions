import { CONTENTFUL_API_TAG } from '../constants/constant';
import { fetchGraphQL } from './contentful';

export const POST_GRAPHQL_INTERNAL_FEATURES_COLLECTION_FIELDS = `
internalFeaturesCollection{
  items{
    name
    title
    description
    image{
      url
    }
  }
}`;

const POST_GRAPHQL_FEATURES_DETAILS_CARD_DETAIL = `
name
slug
featureIconSvg
theme`;

const POST_GRAPHQL_FEATURES_DETAILS_NAVBAR_DETAIL = `
name
slug
featureIcon{
  url
}
navbarDescription
theme`;

const POST_GRAPHQL_FEATURES_DETAILS_FIELDS = `
      theme
      featureIcon{
        url
      }
      section3ContentCollection{
        items{
${POST_GRAPHQL_FEATURES_DETAILS_CARD_DETAIL}
        }
      }
    clientFeaturesCollection{
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
    header
    body
    heroImage
    {
      url
    }
    videoId
    section1Header
    section1Body
    section2Header
    section3Header
   ${POST_GRAPHQL_INTERNAL_FEATURES_COLLECTION_FIELDS}
    seoMetadata{
      name
      seoTitle
      description
      noIndex
      noFollow
    }
    testimonial{
      name
      role
      industry
      quote
      image{
        url
      }
    }
`;

function extractPostEntries(fetchResponse) {
  return fetchResponse?.data?.tabCollection?.items;
}

export async function getTabPostsWithSlug(preview) {
  const entries = await fetchGraphQL(
    `query {
            tabCollection(preview: ${preview ? 'true' : 'false'}) {
        items {
         name
        }
      }
    }`,
    preview,
    [CONTENTFUL_API_TAG.FEATURES]
  );

  return extractPostEntries(entries);
}

export async function getFeatureById(id, preview) {
  const entries = await fetchGraphQL(
    `query {
      featureCollection(where:{slug:"${id}"},limit:1,preview: ${preview ? 'true' : 'false'}) {
              items{
                ${POST_GRAPHQL_FEATURES_DETAILS_FIELDS}
              }
      }
    }`,
    preview,
    [CONTENTFUL_API_TAG.FEATURES]
  );
  return entries?.data?.featureCollection?.items?.[0];
}

/**
 * get all Features app with theme,name and Icon
 *
 * @param {Boolean} preview -  Determines whether to fetch features in preview mode.
 *                           Set to `true` for draft content preview, and `false` for published content.
 * @returns {Array} - An array of feature items fetched from Contentful.
 */
export async function getAllFeature(preview) {
  const entries = await fetchGraphQL(
    `query {
      featureCollection(preview: ${preview ? 'true' : 'false'}) {
              items{
                ${POST_GRAPHQL_FEATURES_DETAILS_CARD_DETAIL}
              }
      }
    }`,
    preview,
    [CONTENTFUL_API_TAG.FEATURES]
  );
  return entries?.data?.featureCollection?.items;
}

/**
 * get all Features app with theme,name ,description and navbarIcon
 *
 * @param {Boolean} preview -  Determines whether to fetch features in preview mode.
 *                           Set to `true` for draft content preview, and `false` for published content.
 * @returns {Array} - An array of ordered feature items fetched from Contentful.
 */
export async function getNavbarFeature(preview) {
  const entries = await fetchGraphQL(
    `query {
      featureCollection(order:[order_ASC],preview: ${preview ? 'true' : 'false'}) {
              items{
                ${POST_GRAPHQL_FEATURES_DETAILS_NAVBAR_DETAIL}
              }
      }
    }`,
    preview,
    [CONTENTFUL_API_TAG.FEATURES]
  );
  return entries?.data?.featureCollection?.items;
}
