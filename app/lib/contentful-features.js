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
const POST_GRAPHQL_FEATURES_DETAILS_FIELDS = `
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
            feature(id:"${id}",preview: ${preview ? 'true' : 'false'}) {
               ${POST_GRAPHQL_FEATURES_DETAILS_FIELDS}
      }
    }`,
    preview,
    [CONTENTFUL_API_TAG.FEATURES]
  );
  return entries?.data?.feature;
}
