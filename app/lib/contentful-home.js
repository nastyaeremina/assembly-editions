import { CONTENTFUL_API_TAG } from '../constants/constant';
import { fetchGraphQL } from './contentful';
import { POST_GRAPHQL_SECTION_CTA_FIELDS } from './contentful-standardPage';

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
export async function getHomeContent({id, preview}) {
  const entries = await fetchGraphQL(
    `query {
      pageHome(id: "${id}", preview: ${preview ? 'true' : 'false'}) {
        heroTitle
        heroBody
        heroPrimaryButtonText
        heroPrimaryButtonLink
        heroSecondaryButtonText
        heroSecondaryButtonLink
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
        primaryButtonText4
        primaryButtonLink4
        secondaryButtonText4
        secondaryButtonLink4
        heroImage1{
          url
          title
        }
        heroImage2{
          url
          title
        }
        section1Collection(preview:false){
          items{
            slug
            hiddenAttributes{
               content
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
        seoMetadata {
          sys {
            id
          }
        }
        ctaSection{
          ${POST_GRAPHQL_SECTION_CTA_FIELDS}  
        }   
      }
    }
    `,
    preview,
    [CONTENTFUL_API_TAG.HOME]
  );
  return extractData(entries);
}
