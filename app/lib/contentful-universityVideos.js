import { CONTENTFUL_API_TAG } from '../constants/constant';
import { fetchGraphQL, getContentTypeDetail } from './contentful';

const POST_GRAPHQL_UNIVERSITY_VIDEOS_DETAILS_FIELDS = `
name
slug
description
videoCategory
videoLink
thumbnail{
  url
}
`;

const POST_GRAPHQL_UNIVERSITY_VIDEOS_LIST_FIELDS = `
name
slug
videoCategory
thumbnail{
  url
}
`;
function extractPostEntry(fetchResponse) {
  return fetchResponse?.data?.universityVideosCollection?.items?.[0];
}

function extractPostEntries(fetchResponse) {
  return fetchResponse?.data?.universityVideosCollection?.items;
}

export async function getAllUniversityVideos(skip, preview) {
  const entries = await fetchGraphQL(
    `query {
        universityVideosCollection(order:[order_ASC],skip:${skip},limit:100,preview: ${preview ? 'true' : 'false'}) {
        items {
          ${POST_GRAPHQL_UNIVERSITY_VIDEOS_LIST_FIELDS}
        }
      }
    }`,
    preview,
    [CONTENTFUL_API_TAG.UNIVERSITY]
  );
  return extractPostEntries(entries);
}

export async function getUniversityVideoDetail(slug, preview) {
  const entries = await fetchGraphQL(
    `query {
        universityVideosCollection(where:{slug:"${slug}"},preview: ${preview ? 'true' : 'false'}) {
        items {
          ${POST_GRAPHQL_UNIVERSITY_VIDEOS_DETAILS_FIELDS}
        }
      }
    }`,
    preview,
    [CONTENTFUL_API_TAG.UNIVERSITY]
  );
  return extractPostEntry(entries);
}

export async function getAllUniversityVideoWithSlug(preview) {
  const entries = await fetchGraphQL(
    `query {
        universityVideosCollection(preview: ${preview ? 'true' : 'false'}) {
        items {
          slug
        }
      }
    }`,
    preview,
    [CONTENTFUL_API_TAG.UNIVERSITY]
  );
  return extractPostEntries(entries);
}

/**
 * fetch all predefine  video category on contentful model
 * @returns {Array} - The array of Video Category.
 */
export async function getUniversityVideoCategory() {
  const contentTypeId = 'universityVideos';
  const data = await getContentTypeDetail(contentTypeId);
  if (data) {
    const defaultValue = data.fields
      .find((field) => field.id === 'videoCategory')
      ?.validations?.find((item) => item?.in)?.in;
    return defaultValue;
  }
  return [];
}
