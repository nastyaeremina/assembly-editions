import { fetchGraphQL } from './contentful';

const POST_GRAPHQL_CASESTUDY_DETAILS_FIELDS = `
name
slug
title
description
testimonial{
   name
  role
  industry
  quote
  image{
    url
  }
}
highlights{
  json
}
body{
  json
}
`;

function extractPostEntries(fetchResponse) {
  return fetchResponse?.data?.testimonialCollection?.items;
}

export async function getCaseStudyDetail({ id = '6rTLVQGBmsUivoqZFrlffc', preview }) {
  const entries = await fetchGraphQL(
    `query {
        caseStudies(id:"6rTLVQGBmsUivoqZFrlffc",preview: ${preview ? 'true' : 'false'}) {
          ${POST_GRAPHQL_CASESTUDY_DETAILS_FIELDS}
        
      }
    }`,
    preview
  );

  return entries?.data?.caseStudies;
}
