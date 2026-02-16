import { fetchGraphQL } from './contentful';

export async function getAllAppEmbeds() {
  const PAGE_SIZE = 100;
  let skip = 0;
  let total = 0;
  const allItems = [];

  do {
    const data = await fetchGraphQL(
      `
        query {
          appEmbedCollection(limit: ${PAGE_SIZE}, skip: ${skip}) {
            total
            items {
              name
              embedUrl
              path
            }
          }
        }
      `,
      false,
      ['appEmbed']
    );

    if (!data?.data?.appEmbedCollection) break;

    const { items, total: t } = data.data.appEmbedCollection;
    total = t;
    allItems.push(...items);

    skip += PAGE_SIZE;
  } while (skip < total);

  return allItems;
}
