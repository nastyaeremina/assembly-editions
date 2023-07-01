import { fetchGraphQL } from './contentful';

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
            tag
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
