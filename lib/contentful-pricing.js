import { fetchGraphQL } from './contentful';
import { POST_GRAPHQL_SEOMETADATA_FIELDS } from './contentful-seo';

const POST_GRAPHQL_PRICING_PLAN_DETAILS_FIELDS = `
name
    details
    description
    monthlyPrice
    annualPrice
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
`;
const POST_GRAPHQL_PRICING_DETAILS_FIELDS = `
name
slug
header
body
faqGroup{
  sys{
    id
  }
}
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
    `
  );
  return extractData(entries);
}
