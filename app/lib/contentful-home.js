import { CONTENTFUL_API_TAG } from '../constants/constant';
import { fetchGraphQL } from './contentful';

function extractData(fetchResponse) {
  return fetchResponse?.data?.pageHome;
}

export async function getHomeContent(id) {
  const entries = await fetchGraphQL(
    `query {
      pageHome(id: "${id}") {
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
        heroImage1{
          url
          title
        }
        heroImage2{
          url
          title
        }
        solutionCollection(preview:false){
          items{
            name
            slug
            header
            imageBackground{
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
        heading5
        supportSectionImage{
          url
        }
         supportSectionCollection(limit:4){
          items{
            title
            body
            linkText
            linkUrl
          }
        }
        seoMetadata {
          sys {
            id
          }
        }
      }
    }         
    `,
    false,
    [CONTENTFUL_API_TAG.HOME]
  );
  return extractData(entries);
}
