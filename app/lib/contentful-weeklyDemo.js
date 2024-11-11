import { CONTENTFUL_API_TAG } from '../constants/constant';
import { fetchGraphQL } from './contentful';
import { POST_GRAPHQL_SEOMETADATA_FIELDS } from './contentful-seo';

export async function getProductDemoContent(id) {
  const entries = await fetchGraphQL(
    `query {
      pageProductDemo(id:"${id}"){
        header
        videoUrl
        seoMetadata{ 
          ${POST_GRAPHQL_SEOMETADATA_FIELDS}
        }
        slug
        body{
          json
        }
      } 
    }   
      `,
    false,
    [CONTENTFUL_API_TAG.WEEKLY_DEMO]
  );
  return entries?.data?.pageProductDemo;
}
