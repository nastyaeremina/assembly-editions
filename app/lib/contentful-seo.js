import { CONTENTFUL_API_TAG } from '../constants/constant';
import { fetchGraphQL } from './contentful';

export const POST_GRAPHQL_SEOMETADATA_FIELDS = `
seoTitle
description
noIndex
noFollow
openGraphImage
{
  url
}
isEnableReviewSnippet
canonical`;

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
    `,
    false,
    [CONTENTFUL_API_TAG.SEO]
  );
  return extractData(entries);
}
