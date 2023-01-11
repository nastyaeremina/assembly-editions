import { fetchGraphQL } from './contentful';

const POST_GRAPHQL_TAB_DETAILS_FIELDS = `
title
description
subTitle
image{
    url
}
icon{
    url
}
link
`;

function extractPostEntries(fetchResponse) {
  return fetchResponse?.data?.tabCollection?.items;
}

export async function getTabPosts(preview) {
  const entries = await fetchGraphQL(
    `query {
            tabCollection(preview: ${preview ? 'true' : 'false'}) {
        items {
          ${POST_GRAPHQL_TAB_DETAILS_FIELDS}
        }
      }
    }`,
    preview
  );

  return extractPostEntries(entries);
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
    preview
  );

  return extractPostEntries(entries);
}
