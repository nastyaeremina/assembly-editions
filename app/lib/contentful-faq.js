import { fetchGraphQL } from "./contentful";


function extractData(fetchResponse) {
    return fetchResponse?.data?.faqGroup?.faQsCollection?.items;
}

export async function getFAQs(id) {
    const entries = await fetchGraphQL(
    `query {
        faqGroup(id: "${id}" ) {
          faQsCollection {
            items {
              question
              answer
            }
          }
        }
      }      
    `
    );
    return extractData(entries);
}
