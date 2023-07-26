export async function fetchGraphQL(query, preview = false) {
  return fetch(`https://graphql.contentful.com/content/v1/spaces/l41zuz9np7js`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${
        preview ? 'ZgkVOC33Z2rxYcGzUwVEKRr05h59HfY4Yo8Q14Y4oN8' : 'SzwToPTvkUQeo7liE28HvSTV1n-q_2ckxZ4KUpwsdA0'
      }`
    },
    body: JSON.stringify({ query })
  }).then((response) => response.json());
}

export async function getEntryType(id) {
  const entries = await fetchGraphQL(
    `query {
        entryCollection(where:{sys:{id:"${id}"}}) {
          items {
            __typename
          }
        }
      }`
  );
  // eslint-disable-next-line no-underscore-dangle
  return entries?.data?.entryCollection?.items[0]?.__typename;
}
