import { fetchGraphQL } from "./contentful";

const POST_GRAPHQL_SOLUTION_DETAILS_FIELDS = `
    name
    header
    body
    clientExperienceCollection{
      items{
        name
        title
        slug
        subTitle
        description
        image{
          url
        }
        icon{
          url
        }
        link
      }
    }
    testimonial{
      name
      role
      quote
      image
      {
        url
      }
    }
    seoMetadata{
      name
      seoTitle
      description
      noIndex
      noFollow
    }
    solutionValueCollection{
      items{
        title
        description
        image{
          url
        }
	 }
    }
`;

function extractPostEntry(fetchResponse) {
    return fetchResponse?.data?.solution;
}

export async function getSolutionById(id, preview) {
    const entries = await fetchGraphQL(
        `query {
            solution(id:"${id}",preview: ${preview ? "true" : "false"}) {
               ${POST_GRAPHQL_SOLUTION_DETAILS_FIELDS}
      }
    }`,
        preview
    );
    return extractPostEntry(entries);
}