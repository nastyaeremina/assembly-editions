import { CONTENTFUL_API_TAG } from '../constants/constant';
import { fetchGraphQL } from './contentful';
import { POST_GRAPHQL_SEOMETADATA_FIELDS } from './contentful-seo';

export async function getProductDemoContent({ id, slug, preview }) {
  const condition = slug ? `slug: "${slug}"` : `sys: {id: "${id}"}`;
  const entries = await fetchGraphQL(
    `query {
      pageProductDemoCollection(where: {${condition}},preview: ${preview ? 'true' : 'false'}){
        items{
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
    }   
      `,
    preview,
    [CONTENTFUL_API_TAG.WEEKLY_DEMO]
  );
  return entries?.data?.pageProductDemoCollection?.items[0] ?? {};
}
