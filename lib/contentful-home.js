import { fetchGraphQL } from './contentful';

function extractData(fetchResponse) {
  return fetchResponse?.data?.pageHome;
}

export async function getHomeContent() {
  const entries = await fetchGraphQL(
    `query {
      pageHome(id: "1cPG7VsMO1XCahxAnz3rne") {
        heroTitle
        heroBody
        heading1
        body1
        heading2
        body2
        heading3
        body3
        heading4
        body4
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
            slug
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
