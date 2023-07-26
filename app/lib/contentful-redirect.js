import { fetchGraphQL } from './contentful';

const POST_GRAPHQL_REDIRECT_DETAILS_FIELDS = `
name
oldPath
redirectToPath
`;

function extractPostEntries(fetchResponse) {
  return fetchResponse?.data?.redirectCollection?.items;
}

export async function getRedirectPosts(preview) {
  const entries = await fetchGraphQL(
    `query {
        redirectCollection(preview: ${preview ? 'true' : 'false'}) {
        items {
          ${POST_GRAPHQL_REDIRECT_DETAILS_FIELDS}
        }
      }
    }`,
    preview
  );

  return extractPostEntries(entries);
}
