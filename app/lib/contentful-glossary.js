import { CONTENTFUL_API_TAG } from '../constants/constant';
import { fetchGraphQL } from './contentful';
import { POST_GRAPHQL_VIDEO_CONTENT_FIELDS } from './contentful-guide';
import { POST_GRAPHQL_SEOMETADATA_FIELDS } from './contentful-seo';

const POST_GRAPHQL_PAGE_GLOSSARY_DETAILS_FIELDS = `

seoMetadata{
    ${POST_GRAPHQL_SEOMETADATA_FIELDS}
}
`;

const POST_GRAPHQL_GLOSSARY_DETAILS_FIELDS = `
name
slug
body{
  json
    ${POST_GRAPHQL_VIDEO_CONTENT_FIELDS}
}
metaDescription
metaTitle
`;
export async function getGlossaryPageContent(id) {
  const entries = await fetchGraphQL(
    `query {
        pageGlossary(id: "${id}") {
            ${POST_GRAPHQL_PAGE_GLOSSARY_DETAILS_FIELDS}
        }
    }         
    `
  );
  return entries?.data?.pageGlossary;
}

export async function getAllGlossaryContent(preview) {
  const entries = await fetchGraphQL(
    `query {
        glossaryDefinitionsCollection(preview: ${preview ? 'true' : 'false'}) {
             items{
                name
                slug
             }
          }
      }         
      `
  );
  return entries?.data?.glossaryDefinitionsCollection?.items;
}
export async function getGlossaryDetails(slug, preview) {
  const entries = await fetchGraphQL(
    `query {
            glossaryDefinitionsCollection(where:{slug:"${slug}"},limit:1,preview: ${preview ? 'true' : 'false'}) {
        items {
          ${POST_GRAPHQL_GLOSSARY_DETAILS_FIELDS}
        }
      }
    }`,
    preview,
    [CONTENTFUL_API_TAG.GLOSSARY]
  );
  return entries?.data?.glossaryDefinitionsCollection?.items[0] || {};
}
