import { fetchGraphQL } from "./contentful";


function extractData(fetchResponse) {
    return fetchResponse?.data?.commonContent;
}

export async function getSitemap(id) {
    const entries = await fetchGraphQL(
        `query {
            commonContent(id: "${id}" ) {
                content
        }
      }      
    `
    );
    return extractData(entries);
}
