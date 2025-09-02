import Layout from '../components/layout';
import { CURRENT_DOMAIN, CURRENT_SITE_URL, SITEMAP_CONTENT_ID, SITEMAP_SEO_ID } from '../constants/constant';
import { getSEOData, isEmpty, removeEmptyElement } from '../helpers/helpers';
import { getSitemap } from '../lib/contentful-sitemap';
import SiteMapPage from '../components/PageComponent/Sitemap/sitemapPage';
import AggregateRating from '../components/aggregateRating';

async function getSitemapContent() {
  // Retrieve data from the sitemap
  const sitemapData = (await getSitemap(SITEMAP_CONTENT_ID)) ?? '';
  const content = sitemapData?.content;

  // If content is not empty, process it
  if (!isEmpty(content)) {
    // Prepend a newline character to the content
    const newContent = '\n' + content;
    // Split the content into a list based on '#'
    const itemList = newContent?.split('\n#');
    itemList?.shift(); // Remove the first element

    let sitemapList = [];

    // Iterate through each item in the list
    itemList?.forEach((item) => {
      // Split the item into lines and remove empty elements
      const newItemList = removeEmptyElement(item?.split('\n'));

      // Extract the title from the first element
      const title = newItemList?.[0];
      newItemList?.shift(); // Remove the title from the list

      const mapList = [];

      // Iterate through each element in the newItemList
      newItemList?.forEach((element) => {
        // Split the element using regex to extract relevant parts
        const newObject = element.split(/[\[\]\(\)]/);
        // Extract the URL, considering it might be internal or external
        const url = newObject[3]?.split(CURRENT_DOMAIN)?.[1] || newObject[3];
        // Push the extracted data into mapList
        mapList?.push({ name: newObject[1], url, isExternal: url === newObject[3] });
      });

      // Push title and associated list to sitemapList
      sitemapList?.push({ title, list: mapList });
    });

    // Return the sitemapList containing titles and associated lists
    return { content: sitemapList };
  }

  // If content is empty, return an empty array
  return {
    content: []
  };
}

export async function generateMetadata() {
  const seoData = await getSEOData({ id: SITEMAP_SEO_ID });
  seoData.alternates = { canonical: `${CURRENT_SITE_URL}/sitemap` };
  return seoData;
}

export default async function Sitemap() {
  const { content } = await getSitemapContent();

  return (
    <>
      <AggregateRating id={SITEMAP_SEO_ID} />
      <Layout>
        <SiteMapPage data={content} />
      </Layout>
    </>
  );
}
