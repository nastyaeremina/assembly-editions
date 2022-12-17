import { fetchGraphQL } from "./contentful";


function extractData(fetchResponse) {
    return fetchResponse?.data?.seoMetadata;
}

export async function getSEOdata(id) {
    const entries = await fetchGraphQL(
    `query{
      seoMetadata(id:"${id}"){
        seoTitle
        description
        noIndex
        noFollow
      }
    }
    `
    );
    return extractData(entries);
}
