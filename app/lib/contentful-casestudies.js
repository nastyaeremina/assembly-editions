import { CONTENTFUL_API_TAG, PER_API_LIMIT_FOR_CUSTOMERS } from '../constants/constant';
import { fetchGraphQL } from './contentful';
import { POST_GRAPHQL_RICHTEXT_ENTRY_WITH_VIDEO_CONTENT_FIELDS } from './contentful-guide';
import { POST_GRAPHQL_HERO_COMPONENT_FIELDS, POST_GRAPHQL_TESTIMONIAL_CARD_FIELDS } from './contentful-standardPage';

// Testimonial content fields for inline entries
export const POST_GRAPHQL_TESTIMONIAL_CONTENT_FIELDS = `
links{
  entries{
    inline{
      sys{
        id
      }
      __typename
      ...on Testimonial{
        quoteNew
        name
        role
        industry
        reviewSource
        isFeatured
        logo{
          url
        }
      }
    }
  }
}`;

const POST_GRAPHQL_ASSET_CONTENT_FIELDS = `
links{
    assets{
       block{
         sys{
           id
         }
         title
         description
         contentType
         fileName
         url
         contentType
       }
       hyperlink{
        url
       }
     }
   }
`;

const POST_GRAPHQL_CASESTUDY_DETAILS_FIELDS = `
slug
testimonial{
   ${POST_GRAPHQL_TESTIMONIAL_CARD_FIELDS}
}
body{
  json
  ${POST_GRAPHQL_RICHTEXT_ENTRY_WITH_VIDEO_CONTENT_FIELDS}
  ${POST_GRAPHQL_TESTIMONIAL_CONTENT_FIELDS}
  ${POST_GRAPHQL_ASSET_CONTENT_FIELDS}
}
heroSection{
  ${POST_GRAPHQL_HERO_COMPONENT_FIELDS}
}
highlights
customerSince
customerCompanyUrl
customerFounded
industry{
  title
  slug
}
appsCollection{
  items{
    slug
    name
    icon{
      url
    }
  }
}
customerLogo{
  name
  companyWebsite
  imageAsset{
    url
  }
}
seoMetadata{
  sys{
    id
  }
}
`;

function extractPostEntries(fetchResponse) {
  return fetchResponse?.data?.caseStudiesCollection?.items;
}

function extractPostEntry(fetchResponse) {
  return fetchResponse?.data?.caseStudiesCollection?.items[0];
}
export async function getCaseStudyDetail({ slug, preview }) {
  const entries = await fetchGraphQL(
    `query {
        caseStudiesCollection(where:{slug:"${slug}"},limit:1,preview: ${preview ? 'true' : 'false'}) {
          items{
            ${POST_GRAPHQL_CASESTUDY_DETAILS_FIELDS}
          }
        
      }
    }`,
    preview,
    [CONTENTFUL_API_TAG.CASESTUDY]
  );

  return extractPostEntry(entries);
}
export async function getCaseStudyWithSlug(preview) {
  const entries = await fetchGraphQL(
    `query {
        caseStudiesCollection(preview: ${preview ? 'true' : 'false'}) {
          items{
            slug
          }        
      }
    }`,
    preview,
    [CONTENTFUL_API_TAG.CASESTUDY]
  );

  return extractPostEntries(entries);
}
// Fetch a single page of customers (for pagination)
export async function getCustomers({ preview, limit = PER_API_LIMIT_FOR_CUSTOMERS, skip = 0 }) {
  try {
    const data = await fetchGraphQL(
      `query {
        customerCollection(preview: ${preview ? 'true' : 'false'}, limit: ${limit}, skip: ${skip}) {
          items {
            customerName
            logo { url }
            industry
            url
          }
        }
      }`,
      preview,
      [CONTENTFUL_API_TAG.CUSTOMER]
    );

    const items = data?.data?.customerCollection?.items || [];
    return items;
  } catch (error) {
    console.error('Error fetching customers:', error);
    return [];
  }
}

export async function getHeroComponentContent(id, preview) {
  const entries = await fetchGraphQL(
    `query {
        componentHero(id: "${id}", preview: ${preview ? 'true' : 'false'}) {
          ${POST_GRAPHQL_HERO_COMPONENT_FIELDS}
        }
      }`,
    preview,
    [CONTENTFUL_API_TAG.STANDARD_PAGE]
  );
  return entries?.data?.componentHero || {};
}
