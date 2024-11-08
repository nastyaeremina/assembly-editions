import { CONTENTFUL_API_TAG } from '../constants/constant';
import { fetchGraphQL } from './contentful';
import { POST_GRAPHQL_FAQ_COLLECTION_FIELDS } from './contentful-faq';
import { POST_GRAPHQL_SEOMETADATA_FIELDS } from './contentful-seo';

const POST_GRAPHQL_JOB_BLOG_POST_DETAILS_FIELDS = `
name
author
date
blogLink
`;

const POST_GRAPHQL_INTERNAL_FEATURES_COLLECTION_FIELDS = `
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
const POST_GRAPHQL_JOB_IMAGES_FIELDS = `
    url
    title
 `;
const POST_GRAPHQL_JOB_DETAILS_FIELDS = `
    title
    description
    banner{
      url
    }
    sectionTitle1
    sectionDescription1
    sectionTitle2
    sectionTitle3
    ${POST_GRAPHQL_INTERNAL_FEATURES_COLLECTION_FIELDS}
    jobImagesCollection{
      items{
      ${POST_GRAPHQL_JOB_IMAGES_FIELDS}
      }
    }     
    seoMetadata{
        ${POST_GRAPHQL_SEOMETADATA_FIELDS}
    }
    `;
function extractPostEntries(fetchResponse) {
  return fetchResponse?.data?.jobBlogPostsCollection?.items;
}

export async function getAllJobBlogPosts(preview) {
  const entries = await fetchGraphQL(
    `query {
            jobBlogPostsCollection(order:[order_ASC],preview: ${preview ? 'true' : 'false'}) {
        items {
          ${POST_GRAPHQL_JOB_BLOG_POST_DETAILS_FIELDS}
        }
      }
    }`,
    preview,
    [CONTENTFUL_API_TAG.JOB]
  );

  return extractPostEntries(entries);
}

export async function getJobDetail(id, preview) {
  const entries = await fetchGraphQL(
    `query {
            pageJob(id:"${id}",preview: ${preview ? 'true' : 'false'}) {
                ${POST_GRAPHQL_JOB_DETAILS_FIELDS}
                ${POST_GRAPHQL_FAQ_COLLECTION_FIELDS}
      }
    }`,
    preview,
    [CONTENTFUL_API_TAG.JOB]
  );
  return entries?.data?.pageJob;
}
