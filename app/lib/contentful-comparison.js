import { CONTENTFUL_API_TAG } from '../constants/constant';
import { fetchGraphQL, getContentTypeDetail } from './contentful';
import { POST_GRAPHQL_FAQ_COLLECTION_FIELDS } from './contentful-faq';
import { POST_GRAPHQL_SEOMETADATA_FIELDS } from './contentful-seo';
import { POST_GRAPHQL_SECTION_CTA_FIELDS } from './contentful-standardPage';

const POST_GRAPHQL_COMPARISON_DETAILS_FIELDS = `
name
slug
compititorName
primaryButtonText
primaryButtonLink
secondaryButtonText
secondaryButtonLink
headerTag
image{
  url
}
logo{
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
featuresCollection{
        items{
          title
          header
          description
          icon{
            url
          }
featureDetail{
  json
}
 }   
 }
g2SectionTitle
g2SectionDescription
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
${POST_GRAPHQL_FAQ_COLLECTION_FIELDS}
seoMetadata{
  sys{
    id
  } 
}
  copilotValue
  comparisonTag
  competitorValue
  smallLogo{
  url
  }
ctaSection{
  ${POST_GRAPHQL_SECTION_CTA_FIELDS}
}
`;

const POST_GRAPHQL_COMPARISON_ALL_COMPITITOE_DETAILS_FIELDS = `
slug
category
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
  ${POST_GRAPHQL_SEOMETADATA_FIELDS}
}
ctaSection{
  ${POST_GRAPHQL_SECTION_CTA_FIELDS}  
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
    preview,
    [CONTENTFUL_API_TAG.COMPARISON]
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
    preview,
    [CONTENTFUL_API_TAG.COMPARISON]
  );
  return entry?.data?.masterComparisonCollection?.items?.[0];
}

/**
 * fetch all predefine  automation category on contentful model
 * @returns {Array} - The array of Automation Category.
 */

export async function getAllComparisonCategories(preview) {
  const contentTypeId = 'pageComparision';
  const data = await getContentTypeDetail(contentTypeId);

  if (data) {
    const defaultValue = data.fields
      .find((field) => field.id === 'category')
      ?.validations?.find((item) => item?.in)
      ?.in?.sort();

    return defaultValue;
  }
  return [];
}
