import { fetchGraphQL } from './contentful';
import { POST_GRAPHQL_SEOMETADATA_FIELDS } from './contentful-seo';

function extractData(fetchResponse) {
  return fetchResponse?.data?.pageDemo;
}
export async function getWeeklyDemoContent(id) {
  const entries = await fetchGraphQL(
    `query {
        pageDemo(id:"${id}"){
            header
            body{
              json
            }
            slug
            tag
            seoMetadata{
              seoTitle
              description
              noIndex
              noFollow
              openGraphImage
              {
                url
              }
            }
            speakerCollection{
              items{
                name
                profileLink
                profilePicture{
                  url
                }
                about
              }
        }
      }
     }
           
      `
  );
  return extractData(entries);
}

export async function getProductDemoContent(id) {
  const entries = await fetchGraphQL(
    `query {
      pageProductDemo(id:"${id}"){
        header
        videoUrl
        seoMetadata{ 
          ${POST_GRAPHQL_SEOMETADATA_FIELDS}
        }
        slug
        body{
          json
        }
      } 
    }   
      `
  );
  return entries?.data?.pageProductDemo;
}
