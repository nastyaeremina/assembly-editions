import { CONTENTFUL_API_TAG } from '../constants/constant';
import { fetchGraphQL } from './contentful';

function extractData(fetchResponse) {
  return fetchResponse?.data?.commonContent?.content;
}

export async function getCommonContent(id, preview) {
  const entries = await fetchGraphQL(
    `query {
        commonContent(id: "${id}",preview: ${preview ? 'true' : 'false'}) {
            content
            }
        }
    `,
    preview,
    [CONTENTFUL_API_TAG.COMMON_CONTENT]
  );
  return extractData(entries);
}
