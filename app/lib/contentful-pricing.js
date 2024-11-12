import { CONTENTFUL_API_TAG } from '../constants/constant';
import { fetchGraphQL } from './contentful';
import { POST_GRAPHQL_FAQ_COLLECTION_FIELDS } from './contentful-faq';
import { POST_GRAPHQL_SEOMETADATA_FIELDS } from './contentful-seo';

const POST_GRAPHQL_PRICING_PLAN_DETAILS_FIELDS = `
    name
    details
    description
    monthlyPrice
    monthlyExtraUserPrice
    annualPrice
    annualExtraUserPrice
    primaryCtaText
    primaryCtaLink
    secondaryCtaText
    secondaryCtaLink
    colorScheme
    highlights{
      json
    }
`;

const POST_GRAPHQL_PLAN_FEATURES_FIELDS = `
    name
    description{
      json
    }
    section
    planStarter
    planProfessional
    planAdvanced
    planSupersonic
`;
const POST_GRAPHQL_PRICING_DETAILS_FIELDS = `
name
slug
header
body
${POST_GRAPHQL_FAQ_COLLECTION_FIELDS}
seoMetadata{
    ${POST_GRAPHQL_SEOMETADATA_FIELDS}
}
plansCollection{
  total
  items{ 
   ${POST_GRAPHQL_PRICING_PLAN_DETAILS_FIELDS} 
  }
}
planFeaturesCollection{
  items{
    ${POST_GRAPHQL_PLAN_FEATURES_FIELDS}
  }
}
`;

function extractData(fetchResponse) {
  return fetchResponse?.data?.pagePricing;
}

export async function getPricingPageDetail({ id }) {
  const entries = await fetchGraphQL(
    `query {
        pagePricing(id: "${id}" ) {
        ${POST_GRAPHQL_PRICING_DETAILS_FIELDS}
        }
      }      
    `,
    false,
    [CONTENTFUL_API_TAG.PRICING]
  );
  return extractData(entries);
}
