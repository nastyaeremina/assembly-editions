import { SOLUTION_CONTENT_ID } from '../constants/constant';
import { isEmpty, parseData } from '../helpers/helpers';
import { getSitemap } from './contentful-sitemap';

const POST_GRAPHQL_SOLUTION_NAME_SLUG_FIELDS = `
name
slug
showNavbar
showFooter
industryIcon{
  url
}
solutionType
`;

export async function getAllNavbarSolution(preview) {
  const data = (await getSitemap(SOLUTION_CONTENT_ID)) || {};
  if (isEmpty(data)) return null;
  const list = parseData(data.content) || []
  return list;
}
