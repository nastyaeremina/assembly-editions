import { CONTENTFUL_API_TAG } from '../constants/constant';
import { fetchGraphQL } from './contentful';

function extractData(fetchResponse) {
  return fetchResponse?.data?.customCodeCollection?.items;
}

export async function getCustomeCode() {
  const entries = await fetchGraphQL(
    `query{
        customCodeCollection{
        items{
            name
            code
        }
      }
    }
    `,
    false,
    [CONTENTFUL_API_TAG.COMMON_CONTENT]
  );
  return extractData(entries);
}
