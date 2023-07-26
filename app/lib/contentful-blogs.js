const POST_GRAPHQL_LIST_FIELDS = `
slug
title
description
banner {
  title
  url
}
categoryCollection{
  items{
    name
    slug
  }
}
date
reader
`;

const POST_GRAPHQL_ITEM_FIELDS = `
slug
title
banner {
  title
  url
}
categoryCollection{
  items{
    name
    slug
  }
}
date,
body{
  json
  links {
    assets{
      block{
        title
        description
        contentType
        fileName
        url
      }
    }
  }
}
`;

const CATEGORY_TAG = `
name
slug`;
async function fetchGraphQL(query, preview = false) {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${
          preview
            ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.CONTENTFUL_ACCESS_TOKEN
        }`,
      },
      body: JSON.stringify({ query }),
    }
  ).then((response) => response.json());
}

function extractPost(fetchResponse) {
  return fetchResponse?.data?.blogCollection?.items?.[0];
}

function extractPostEntries(fetchResponse) {
  return fetchResponse?.data?.blogCollection?.items;
}

function extractCategoryPostEntries(fetchResponse) {
  return fetchResponse?.data?.blogCategoryCollection?.items;
}

export async function getPreviewPostBySlug(slug) {
  const entry = await fetchGraphQL(
    `query {
      blogCollection(where: { slug: "${slug}" }, preview: true, limit: 1) {
        items {
          ${POST_GRAPHQL_ITEM_FIELDS}
        }
      }
    }`,
    true
  );
  return extractPost(entry);
}

export async function getAllPostsWithSlug() {
  const entries = await fetchGraphQL(
    `query {
      blogCollection(where: { slug_exists: true }, order: date_DESC) {
        items {
          ${POST_GRAPHQL_LIST_FIELDS}
        }
      }
    }`
  );
  return extractPostEntries(entries);
}

export async function getAllBlogs(preview) {
  const entries = await fetchGraphQL(
    `query {
      blogCollection(order: date_DESC, preview: ${preview ? "true" : "false"}) {
        items {
          ${POST_GRAPHQL_LIST_FIELDS}
        }
      }
    }`,
    preview
  );
  return extractPostEntries(entries);
}

export async function getCategoryWithSlug() {
  const entries = await fetchGraphQL(
    `query {
      blogCategoryCollection(where: { slug_exists: true }) {
        items {
          ${CATEGORY_TAG}
        }
      }
    }`
  );
  return extractCategoryPostEntries(entries);
}

export async function getPostAndMorePosts(slug, preview) {
  const entry = await fetchGraphQL(
    `query {
      blogCollection(where: { slug: "${slug}" }, preview: ${
      preview ? "true" : "false"
    }, limit: 1) {
        items {
          ${POST_GRAPHQL_ITEM_FIELDS}
        }
      }
    }`,
    preview
  );
  return extractPost(entry);
}
