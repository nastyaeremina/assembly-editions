import { fetchGraphQL } from "./contentful";


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
    `
    );
    return extractData(entries);
}
