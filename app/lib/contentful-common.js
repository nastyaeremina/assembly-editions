import { CONTENTFUL_API_TAG } from '../constants/constant';
import { fetchGraphQL } from './contentful';

function extractData(fetchResponse) {
  return fetchResponse?.data?.commonContent?.content;
}

export async function getCommonContent(id) {
  const entries = await fetchGraphQL(
    `query {
        commonContent(id: "${id}") {
            content
            }
        }
    `,
    false,
    [CONTENTFUL_API_TAG.COMMON_CONTENT]
  );
  return extractData(entries);
}
