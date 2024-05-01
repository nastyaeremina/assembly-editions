import { CONTENTFUL_API_TAG } from '../constants/constant';

export async function fetchGraphQL(query, preview = false, type = ['other']) {
  // Check if 'template' tag is present in the type array
  const isTemplate = type.includes(CONTENTFUL_API_TAG.TEMPLATE);

  return fetch(`https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`, {
    method: 'POST',
    cache: isTemplate ? 'no-store' : 'force-cache',
    next: { tags: type },
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN}`
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
