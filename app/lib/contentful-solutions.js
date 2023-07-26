import { fetchGraphQL } from './contentful';

const POST_GRAPHQL_SOLUTION_DETAILS_FIELDS = `
    name
    slug
    header
    body
    sectionTitle
    demoPortalUrl
    imageForeground{
      url
    }
    imageBackground{
      url
    }
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

const POST_GRAPHQL_SOLUTION_NAME_SLUG_FIELDS = `
name
slug
showNavbar
showFooter
industryIcon{
  url
}
`;

function extractPostEntries(fetchResponse) {
  return fetchResponse?.data?.solution;
}

function extractPostEntry(fetchResponse) {
  return fetchResponse?.data?.solutionCollection?.items?.[0];
}

export async function getSolutionById(id, preview) {
  const entries = await fetchGraphQL(
    `query {
            solution(id:"${id}",preview: ${preview ? 'true' : 'false'}) {
               ${POST_GRAPHQL_SOLUTION_DETAILS_FIELDS}
      }
    }`,
    preview
  );
  return extractPostEntries(entries);
}

export async function getSolutionBySlug(slug, preview) {
  const entries = await fetchGraphQL(
    `query {
      solutionCollection(where:{slug:"${slug}"},limit:1,preview:false){
        items{
          ${POST_GRAPHQL_SOLUTION_DETAILS_FIELDS}
        }
      }
  }`,
    preview
  );
  return extractPostEntry(entries);
}

export async function getAllSolutionWithSlug(preview) {
  const entries = await fetchGraphQL(
    `query {
      solutionCollection(preview: false,order:order_ASC) {
        items {
         ${POST_GRAPHQL_SOLUTION_NAME_SLUG_FIELDS}
        }
      }
    }`,
    preview
  );
  return entries?.data?.solutionCollection?.items;
}

export async function getAllNavbarSolution(preview) {
  const entries = await fetchGraphQL(
    `query {
      solutionCollection(where:{showNavbar:true},preview: false,order:order_ASC) {
        items {
         ${POST_GRAPHQL_SOLUTION_NAME_SLUG_FIELDS}
        }
      }
    }`,
    preview
  );
  return entries?.data?.solutionCollection?.items;
}
