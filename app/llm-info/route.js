import { fetchGraphQL } from '../lib/contentful';

export async function GET(request) {
  try {
    const LLMPageEntryID = '2ix97zh14cx6ikrkrdVCun';

    const query = `
      query {
        commonContent(id: "${LLMPageEntryID}") {
          content
        }
      }
    `;

    const response = await fetchGraphQL(query);

    if (response.errors) {
      console.error('Contentful GraphQL errors:', response.errors);
      return new Response('Failed to fetch content from Contentful', {
        status: 500,
        headers: { 'Content-Type': 'text/plain' }
      });
    }

    if (!response.data || !response.data.commonContent) {
      return new Response('Content not found', {
        status: 404,
        headers: { 'Content-Type': 'text/plain' }
      });
    }

    // FIX: content from Contentful contains escaped \n
    const raw = response.data.commonContent.content;
    const formatted = raw.replace(/\\n/g, '\n');

    return new Response(formatted, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'no-cache'
      }
    });
  } catch (error) {
    console.error('Error in blog API:', error);
    return new Response('Failed to fetch blog posts', {
      status: 500,
      headers: { 'Content-Type': 'text/plain' }
    });
  }
}
