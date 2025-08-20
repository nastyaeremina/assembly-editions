import { CONTENTFUL_API_TAG } from '../constants/constant';
import { fetchGraphQL } from './contentful';
import { POST_GRAPHQL_FAQ_COLLECTION_FIELDS } from './contentful-faq';
import { POST_GRAPHQL_SEOMETADATA_FIELDS } from './contentful-seo';
import { POST_GRAPHQL_SECTION_CTA_FIELDS } from './contentful-standardPage';

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
ctaSection{
  ${POST_GRAPHQL_SECTION_CTA_FIELDS}
}
`;

function extractData(fetchResponse) {
  return fetchResponse?.data?.pagePricing;
}

export async function getPricingPageDetail({ id, preview }) {
  const entries = await fetchGraphQL(
    `query {
        pagePricing(id: "${id}" ,preview: ${preview ? 'true' : 'false'}) {
        ${POST_GRAPHQL_PRICING_DETAILS_FIELDS}
        }
      }      
    `,
    preview,
    [CONTENTFUL_API_TAG.PRICING]
  );
  return extractData(entries);
}
