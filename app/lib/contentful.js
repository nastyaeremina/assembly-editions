export async function fetchGraphQL(query, preview = false, type = ['other']) {
  return fetch(`https://graphql.contentful.com/content/v1/spaces/l41zuz9np7js`, {
    method: 'POST',
    next: { tags: type },
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${
        preview ? 'ZgkVOC33Z2rxYcGzUwVEKRr05h59HfY4Yo8Q14Y4oN8' : 'SzwToPTvkUQeo7liE28HvSTV1n-q_2ckxZ4KUpwsdA0'
      }`
    },
    body: JSON.stringify({ query })
  }).then((response) => response.json());
}

/**
 * Asynchronously fetches details of a Content Type from the Contentful API.
 * @param {string} contentTypeId - The unique identifier of the Content Type to be retrieved.
 * @returns {Promise<Object>} - A Promise that resolves to the details of the specified Content Type.
 */
export async function getContentTypeDetail(contentTypeId) {
  try {
    const apiUrl = `https://api.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/content_types/${contentTypeId}`;

    const result = await fetch(apiUrl, {
      headers: {
        Authorization: `Bearer ${process.env.CONTENTFUL_MANAGEMENT_TOKEN}`
      }
    });
    const data = await result.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
    return [];
  }
}
