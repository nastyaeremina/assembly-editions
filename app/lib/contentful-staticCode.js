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
    `
  );
  return extractData(entries);
}
