import { fetchGraphQL } from './contentful';
import { POST_GRAPHQL_FAQ_COLLECTION_FIELDS } from './contentful-faq';

const POST_GRAPHQL_PARTNERSHIP_DETAILS_FIELDS = `
    title
    description
    link
    image1{
      url
    }
    image2{
      url
    }
    section1Header
    section1Description
    section1Link
    section1Image{
      url
    }
    section2Header
    section2Description
    section2Link
    section2Image{
      url
    }
    section3Header
    
    section3Description
    section3Link
    section3Image{
      url
    }
   seoMetadata{
      name
      seoTitle
      description
      noIndex
      noFollow
    }
`;

function extractData(fetchResponse) {
  return fetchResponse?.data?.pagePartnership;
}

export async function getPartnershipDetail({ id }) {
  const entries = await fetchGraphQL(
    `query {
        pagePartnership(id: "${id}" ) {
                ${POST_GRAPHQL_PARTNERSHIP_DETAILS_FIELDS}
                ${POST_GRAPHQL_FAQ_COLLECTION_FIELDS}
        }
      }      
    `
  );
  return extractData(entries);
}
