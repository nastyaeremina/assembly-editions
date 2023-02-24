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
    title
    copilotValue
    partnerValue
  }
}
g2ComparisonLink
g2GroupCollection{
  items{
    title
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
