import { fetchGraphQL } from './contentful';

export const POST_GRAPHQL_SEOMETADATA_FIELDS = `
seoTitle
description
noIndex
noFollow
openGraphImage
{
  url
}`;

function extractData(fetchResponse) {
  return fetchResponse?.data?.seoMetadata;
}

export async function getSEOdata(id) {
  const entries = await fetchGraphQL(
    `query{
      seoMetadata(id:"${id}"){
        ${POST_GRAPHQL_SEOMETADATA_FIELDS}
      }
    }
    `
  );
  return extractData(entries);
}
