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
            tagCollection{
              items{
                name
                description
                profilePicture{
                  url
                }
              }
            }
          }
        
      }         
      `
  );
  return extractData(entries);
}
