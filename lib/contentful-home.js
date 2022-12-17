import { fetchGraphQL } from "./contentful";


function extractData(fetchResponse) {
    return fetchResponse?.data?.pageHome;
}

export async function getHomeContent() {
    const entries = await fetchGraphQL(
    `query {
      pageHome(id: "1cPG7VsMO1XCahxAnz3rne") {
        heroTitle
        heroBody
        testimonialsCollection {
          items {
            name
            quote
            image {
              url
            }
          }
        }
        featuresCollection {
          items {
            sys {
              id
            }
          }
        }
        partnerAppsCollection {
          items {
            name
            website
            icon {
              url
            }
          }
        }
        seoMetadata {
          sys {
            id
          }
        }
      }
    }         
    `
    );
    return extractData(entries);
}
