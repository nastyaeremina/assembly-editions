import { fetchGraphQL } from "./contentful";

const POST_GRAPHQL_PARTNER_APPS_DETAILS_FIELDS = `
name
slug
description
website
isFeatured
setupInstructionsLink
icon{
    url
}
logo{
   url
}
preview{
  url
}
partnerAppCategoriesCollection{
  items{
    name
    slug
  }
}
`;

const POST_GRAPHQL_PARTNER_APPS_CATEGORY_FIELDS = `
name
slug
`;

const POST_GRAPHQL_DATA_INTEGRATIOB_APPS_DETAILS_FIELDS = `
name
slug
description
website
icon{
    url
}
logo{
   url
}
preview{
  url
}
`;

function extractPostEntry(fetchResponse) {
  return fetchResponse?.data?.partnerAppsCollection?.items?.[0];
}

function extractPostEntries(fetchResponse) {
  return fetchResponse?.data?.partnerAppsCollection?.items;
}
export async function getAllParrtnerAppsCategories(preview) {
  const entries = await fetchGraphQL(
    `query {
      partnerAppCategoryCollection( order:name_ASC,preview: ${
        preview ? "true" : "false"
      }) {
        items {
          ${POST_GRAPHQL_PARTNER_APPS_CATEGORY_FIELDS}
        }
      }
    }`,
    preview
  );
  return entries?.data?.partnerAppCategoryCollection?.items;
}

export async function getAllPartnerApps(preview) {
  const entries = await fetchGraphQL(
    `query {
      partnerAppsCollection(preview: ${preview ? "true" : "false"}) {
        items {
          ${POST_GRAPHQL_PARTNER_APPS_DETAILS_FIELDS}
        }
      }
    }`,
    preview
  );
  return extractPostEntries(entries);
}

export async function getAllDataIntegrationApp(preview) {
  const entries = await fetchGraphQL(
    `query {
      dataIntegrationAppsCollection(preview: ${preview ? "true" : "false"}) {
        items {
          ${POST_GRAPHQL_DATA_INTEGRATIOB_APPS_DETAILS_FIELDS}
        }
      }
    }`,
    preview
  );
  return entries?.data?.dataIntegrationAppsCollection?.items;
}

export async function getAllDataIntegrationAppWithSlug(preview) {
  const entries = await fetchGraphQL(
    `query {
      dataIntegrationAppsCollection(preview: ${preview ? "true" : "false"}) {
        items {
          slug
        }
      }
    }`,
    preview
  );
  return entries?.data?.dataIntegrationAppsCollection?.items;
}

export async function getAllPartnerAppsWithSlug(preview) {
  const entries = await fetchGraphQL(
    `query {
      partnerAppsCollection(preview: ${preview ? "true" : "false"}) {
        items {
        slug
        }
      }
    }`,
    preview
  );
  return extractPostEntries(entries);
}

export async function getPartnerAppDetail(slug, preview) {
  const entries = await fetchGraphQL(
    `query {
      partnerAppsCollection(where:{slug:"${slug}"},preview: ${
      preview ? "true" : "false"
    }) {
        items {
          ${POST_GRAPHQL_PARTNER_APPS_DETAILS_FIELDS}
        }
      }
    }`,
    preview
  );
  return extractPostEntry(entries);
}
