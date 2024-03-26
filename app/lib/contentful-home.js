import { CONTENTFUL_API_TAG } from '../constants/constant';
import { fetchGraphQL } from './contentful';

function extractData(fetchResponse) {
  return fetchResponse?.data?.pageHome;
}

const POST_GRAPHQL_HOME_TAB_CONTENT_FIELDS = `
items {
  title
  description
  backgroundImage{
    url
  }
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
`;
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
        primaryButtonText2
        primaryButtonLink2
        secondaryButtonText2
        secondaryButtonLink2
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
            summary
            imageBackground{
              url
            }
          }
        }
        featuresCollection {
          ${POST_GRAPHQL_HOME_TAB_CONTENT_FIELDS}
        }
        body6
    heading6
    primaryButtonText6
    primaryButtonLink6
    secondaryButtonText6
    secondaryButtonLink6
    section6DataCollection{
      ${POST_GRAPHQL_HOME_TAB_CONTENT_FIELDS}
    }
    heading7
    body7
    section7DataCollection{
    items{
      name
      role
      industry
      imageHeadshot{
        url
      }
      logo{
        url
      }
      quoteNew
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
