import { fetchGraphQL } from './contentful';

const POST_GRAPHQL_COMPARISON_DETAILS_FIELDS = `
name
slug
compititorName
image{
  url
}
description
section1Header
solutionValueCollection{
  items{
    name
    title
  description
    image{
      url
    }
  }
}
section2Header
comparisonTableCollection{
  items{
    name
    copilotValue
    partnerValue
  }
}
g2ComparisonLink
g2GroupCollection{
  items{
    name
    copilotValue
    partnerValue
  }
}
testimonial{
  name
  role
  image{
    url
  }
  industry
  quote
}
faq{
sys{
  id
}
}
seoMetadata{
  sys{
    id
  }
}
`;

const POST_GRAPHQL_COMPARISON_ALL_COMPITITOE_DETAILS_FIELDS = `
slug
logo{
  url
}
`;

const POST_GRAPHQL_COMPARISON_ALL_COMPITITOE_COMPARISON_DETAILS_FIELDS = `
slug
comparisonTableCollection{
  items{
    name
    copilotValue
    partnerValue
  }
}
compititorName
`;

const POST_GRAPHQL_MASTER_COMPARISON_DETAILS_FIELDS = `
title
description
image{
  url
}
testimonial{
  name
  role
  quote
  image
  {
    url
  }
}
seoMetadata{
  name
  seoTitle
  description
  noIndex
  noFollow
}
`;
function extractPostEntry(fetchResponse) {
  return fetchResponse?.data?.pageComparisionCollection?.items?.[0];
}

function extractPostEntries(fetchResponse) {
  return fetchResponse?.data?.pageComparisionCollection?.items;
}

export async function getAllComparisonWithSlug(preview) {
  const entries = await fetchGraphQL(
    `query {
        pageComparisionCollection(preview: ${preview ? 'true' : 'false'}) {
        items {
        slug
        }
      }
    }`,
    preview
  );
  return extractPostEntries(entries);
}

export async function getComparisonDetail(slug, preview) {
  const entry = await fetchGraphQL(
    `query {
      pageComparisionCollection(where:{slug:"${slug}"},preview: ${preview ? 'true' : 'false'}) {
        items {
          sys{
            id
        }
        }
      }
    }`,
    preview
  );
  const data = extractPostEntry(entry);
  const sysId = data?.sys?.id;

  const entries = await fetchGraphQL(
    `query {
        pageComparision(id:"${sysId}",preview: ${preview ? 'true' : 'false'}) {
               ${POST_GRAPHQL_COMPARISON_DETAILS_FIELDS}
      }
    }`,
    preview
  );
  return entries?.data?.pageComparision;
}

export async function getAllCompetitor(preview) {
  const entry = await fetchGraphQL(
    `query {
        pageComparisionCollection(where:{isFeatures:true},preview: ${preview ? 'true' : 'false'}) {
        items {
          ${POST_GRAPHQL_COMPARISON_ALL_COMPITITOE_DETAILS_FIELDS}
        }
      }
    }`,
    preview
  );
  return extractPostEntries(entry);
}

export async function getAllCompetitorComparisonDetail(preview) {
  const entry = await fetchGraphQL(
    `query {
        pageComparisionCollection(preview: ${preview ? 'true' : 'false'}) {
        items {
          ${POST_GRAPHQL_COMPARISON_ALL_COMPITITOE_COMPARISON_DETAILS_FIELDS}
        }
      }
    }`,
    preview
  );
  return extractPostEntries(entry);
}

export async function getMasterComparisonDetail(preview) {
  const entry = await fetchGraphQL(
    `query {
      masterComparisonCollection(preview: ${preview ? 'true' : 'false'}) {
        items {
          ${POST_GRAPHQL_MASTER_COMPARISON_DETAILS_FIELDS}
        }
      }
    }`,
    preview
  );
  return entry?.data?.masterComparisonCollection?.items?.[0];
}
