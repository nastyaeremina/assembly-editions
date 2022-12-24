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
            industry
            image {
              url
            }
          }
        }
        featuresCollection {
          items {
            title
            description
            subTitle
            image{
              url
            }
            icon{
              url
            }
            link
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
