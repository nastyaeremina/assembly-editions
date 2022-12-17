import { fetchGraphQL } from "./contentful";

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
        universityVideosCollection(order:[order_ASC],skip:${skip},limit:100,preview: ${
      preview ? "true" : "false"
    }) {
        items {
          ${POST_GRAPHQL_UNIVERSITY_VIDEOS_LIST_FIELDS}
        }
      }
    }`,
    preview
  );
  return extractPostEntries(entries);
}

export async function getUniversityVideoDetail(slug, preview) {
  const entries = await fetchGraphQL(
    `query {
        universityVideosCollection(where:{slug:"${slug}"},preview: ${
      preview ? "true" : "false"
    }) {
        items {
          ${POST_GRAPHQL_UNIVERSITY_VIDEOS_DETAILS_FIELDS}
        }
      }
    }`,
    preview
  );
  return extractPostEntry(entries);
}

export async function getAllUniversityVideoWithSlug(preview) {
  const entries = await fetchGraphQL(
    `query {
        universityVideosCollection(preview: ${preview ? "true" : "false"}) {
        items {
          slug
        }
      }
    }`,
    preview
  );
  return extractPostEntries(entries);
}
