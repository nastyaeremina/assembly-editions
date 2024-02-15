import { CONTENTFUL_API_TAG } from '../constants/constant';
import { fetchGraphQL } from './contentful';
import { POST_GRAPHQL_SEOMETADATA_FIELDS } from './contentful-seo';

const POST_GRAPHQL_STANDARD_PAGE_LIST_FIELDS = `
slug
seoMetadata {
  ${POST_GRAPHQL_SEOMETADATA_FIELDS}
}
contentCollection{
    items{
        __typename
        ...on ComponentHero{
            heroTitle
            heroDescription
            primaryButtonText
            primaryButtonLink
            secondaryButtonText
            secondaryButtonLink
          }
          ...on ComponentFeature{
            sys{
              id
            }
        }
        ...on   Testimonial{
            name
            role
            image{
              url
            }
            industry
            quote
        }
        ...on ComponentFaq{
            title
            faQsCollection{
              items{
                sys{
                  id
                }
              }
            }
          }
    }
}

`;
const POST_GRAPHQL_FEATURE_COMPONENT_LIST_FIELDS = `
title
description
featuresCollection{
  items{
    title
    description
    image{
      url
    }
  }
}
`;
export async function getFeatureComponentContent(id, preview) {
  const entries = await fetchGraphQL(
    `query {
        componentFeature(id:"${id}",preview: ${preview ? 'true' : 'false'}) {
         ${POST_GRAPHQL_FEATURE_COMPONENT_LIST_FIELDS}
        
      }
    }`,
    preview,
    [CONTENTFUL_API_TAG.STANDARD_PAGE]
  );
  return entries?.data?.componentFeature;
}

export async function getStandardPageContent(slug, preview) {
  const entries = await fetchGraphQL(
    `query {
          pageTemplateCollection(where:{slug:"${slug}"},limit:1,preview: ${preview ? 'true' : 'false'}) {
          items {
           ${POST_GRAPHQL_STANDARD_PAGE_LIST_FIELDS}
          }
        }
      }`,
    preview,
    [CONTENTFUL_API_TAG.STANDARD_PAGE]
  );
  return entries?.data?.pageTemplateCollection?.items?.[0];
}
