import { fetchGraphQL } from './contentful';
import { POST_GRAPHQL_SEOMETADATA_FIELDS } from './contentful-seo';

const POST_GRAPHQL_PAGE_GUIDE_DETAILS_FIELDS = `
seoMetadata{
  ${POST_GRAPHQL_SEOMETADATA_FIELDS}
}
`;
export const POST_GRAPHQL_GUIDE_ARTICLE_FAQ_FIELDS = `
faQsCollection{
  items{
    sys{
      id
    }
  }
}`;

const POST_GRAPHQL_GUIDE_ARTICLE_DETAILS_FIELDS = `
slug
sys{
    id
}
name
icon{
  url
}

`;
export async function getGuidePageContent({ id }) {
  const entries = await fetchGraphQL(
    `query {
        pageDocs(id: "${id}") {
            ${POST_GRAPHQL_PAGE_GUIDE_DETAILS_FIELDS}
            sectionsCollection{
                items{
                    name
                    sys{
                      id
                    }
                }
            }
        }
    }         
    `,
    false,
    ['guide']
  );
  return entries?.data?.pageDocs;
}

export async function getAllGuideSectionContent(idList, preview) {
  const entries = await fetchGraphQL(
    `query {
        guideSectionsCollection(where:{sys:{${idList}}},limit:10,preview: ${preview ? 'true' : 'false'}) {
             items{
              sys{
                id
              }
              name
                articlesCollection{
                  total
                    items{

                        ${POST_GRAPHQL_GUIDE_ARTICLE_DETAILS_FIELDS}
                    }
                }
             }
          }
      }         
      `
  );
  return entries?.data?.guideSectionsCollection?.items;
}

export async function getArticleData(slug, preview) {
  const entries = await fetchGraphQL(
    `query {
      guideArticleCollection(where:{slug:"${slug}"},limit:1,preview: ${preview ? 'true' : 'false'}) {
             items{
                        ${POST_GRAPHQL_GUIDE_ARTICLE_DETAILS_FIELDS}
                        ${POST_GRAPHQL_GUIDE_ARTICLE_FAQ_FIELDS}
                        header
                        content{
                          json
                        }
             }
          }
      }         
      `
  );
  return entries?.data?.guideArticleCollection?.items?.[0];
}

export async function getAllGuideArticleSlug(preview) {
  const entries = await fetchGraphQL(
    `query {
      guideArticleCollection(preview: ${preview ? 'true' : 'false'}) {
             items{
                       slug
             }
          }
      }         
      `
  );
  return entries?.data?.guideArticleCollection?.items;
}
