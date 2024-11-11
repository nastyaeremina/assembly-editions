import { CONTENTFUL_API_TAG } from '../constants/constant';
import { fetchGraphQL } from './contentful';

function extractData(fetchResponse) {
  return fetchResponse?.data?.commonContentCollection?.items;
}

export async function getCustomeCode(ids) {
  const entries = await fetchGraphQL(
    `query{
        commonContentCollection(where:{sys:{id_in:[${ids}]}}){
    items{
      content
      sys{
        id
      }
    
  }
      }
    }
    `,
    false,
    [CONTENTFUL_API_TAG.COMMON_CONTENT]
  );
  return extractData(entries);
}
