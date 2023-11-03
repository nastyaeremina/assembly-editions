import { PER_API_LIMIT_FOR_FAQ_SECTION } from '../constants/constant';
import { fetchGraphQL } from './contentful';

function extractData(fetchResponse) {
  return fetchResponse?.data?.faqGroup?.faQsCollection?.items;
}

export const POST_GRAPHQL_FAQ_COLLECTION_FIELDS = `
faQsCollection{
  items{
    sys{
      id
    }
  }
}`;

const POST_GRAPHQL_GUIDE_ARTICLE_FAQ_DETAIL_FIELDS = `
sys{
  id
}
question
answer
`;

export async function getFAQData(idList, preview) {
  const entries = await fetchGraphQL(
    `query {
      faqCollection(where:{sys:{${idList}}},limit:${PER_API_LIMIT_FOR_FAQ_SECTION},preview: ${
      preview ? 'true' : 'false'
    }) {
             items{
               ${POST_GRAPHQL_GUIDE_ARTICLE_FAQ_DETAIL_FIELDS}
             }
          }
      }         
      `
  );
  return entries?.data?.faqCollection?.items;
}
