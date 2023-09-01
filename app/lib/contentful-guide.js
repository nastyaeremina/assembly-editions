import { PER_API_LIMIT_FOR_GUIDE_SECTION } from '../constants/constant';
import { fetchGraphQL } from './contentful';
import { POST_GRAPHQL_SEOMETADATA_FIELDS } from './contentful-seo';

const POST_GRAPHQL_PAGE_GUIDE_DETAILS_FIELDS = `
seoMetadata{
  ${POST_GRAPHQL_SEOMETADATA_FIELDS}
}
`;

const POST_GRAPHQL_GUIDE_ARTICLE_DETAILS_FIELDS = `
sys{
    id
}
name
header
icon{
  url
}
content{
  json
}
faqGroup{
  sys{
    id
  }
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
    `, false, ['guide']);
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
