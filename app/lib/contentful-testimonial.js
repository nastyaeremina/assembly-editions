import { CONTENTFUL_API_TAG } from '../constants/constant';
import { fetchGraphQL } from './contentful';
import { POST_GRAPHQL_HERO_COMPONENT_FIELDS, POST_GRAPHQL_TESTIMONIAL_CARD_FIELDS } from './contentful-standardPage';

const POST_GRAPHQL_TESTIMONIAL_DETAILS_FIELDS = `
${POST_GRAPHQL_TESTIMONIAL_CARD_FIELDS}
reviewSource
imageHeadshot
{
  url
}
`;

const POST_GRAPHQL_CASESTUDY_DETAILS_FIELDS = `
  sys{
    id
  }
  slug
  heroSection{
  ${POST_GRAPHQL_HERO_COMPONENT_FIELDS}
 }
  isFullWidth
  highlights
  caseStudyImage{
    url
  }
  customerLogo{
    name
    companyWebsite
    imageAsset{
      url
    }
  }
`;

function extractPostEntries(fetchResponse) {
  return fetchResponse?.data?.testimonialCollection?.items;
}

export async function getAllFeaturedTestimonial(preview) {
  const entries = await fetchGraphQL(
    `query {
        testimonialCollection(where:{isFeatured:true},preview: ${preview ? 'true' : 'false'}) {
        items {
          ${POST_GRAPHQL_TESTIMONIAL_DETAILS_FIELDS}
        }
      }
    }`,
    preview
  );
  return extractPostEntries(entries);
}

export async function getAllFeaturedCaseStudies(preview) {
  const entries = await fetchGraphQL(
    `query {
        caseStudiesCollection(where:{isFeatured:true},preview: ${preview ? 'true' : 'false'}) {
          items {
            ${POST_GRAPHQL_CASESTUDY_DETAILS_FIELDS}
          }
        }
      }`,
    preview,
    [CONTENTFUL_API_TAG.CASESTUDY]
  );
  return entries?.data?.caseStudiesCollection?.items;
}
