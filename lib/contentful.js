import {
  CONTENTFUL_ACCESS_TOKEN,
  CONTENTFUL_PREVIEW_ACCESS_TOKEN,
  CONTENTFUL_SPACE_ID,
} from "./constants";

export async function fetchGraphQL(query, preview = false) {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${CONTENTFUL_SPACE_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${
          preview ? CONTENTFUL_PREVIEW_ACCESS_TOKEN : CONTENTFUL_ACCESS_TOKEN
        }`,
      },
      body: JSON.stringify({ query }),
    }
  ).then((response) => response.json());
}

export async function getEntryType(id) {
  const entries = await fetchGraphQL(
    `query {
        entryCollection(where:{sys:{id:"${id}"}}) {
          items {
            __typename
          }
        }
      }`
  );
  // eslint-disable-next-line no-underscore-dangle
  return entries?.data?.entryCollection?.items[0]?.__typename;
}
