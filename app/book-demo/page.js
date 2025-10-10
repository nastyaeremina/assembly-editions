import { BOOK_DEMO_ID, BOOK_DEMO_SEO_ID, BOOK_DEMO_THANK_YOU_ID, CURRENT_SITE_URL } from '../constants/constant';
import { getSEOData, removeEmptyElement } from '../helpers/helpers';
import BookDemoPage from '../components/PageComponent/Book-demo/bookDemoPage';
import { getSitemap } from '../lib/contentful-sitemap';
import AggregateRating from '../components/aggregateRating';
import { getExternalLinks } from '../helpers/serverSideHelpers';
import Layout from '../components/layout';

export async function generateMetadata({ params, searchParams }, parent) {
  const seoData = await getSEOData({ id: BOOK_DEMO_SEO_ID });

  seoData.alternates = { canonical: `${CURRENT_SITE_URL}/book-demo` };
  return seoData;
}

async function getContent() {
  // Start both API calls concurrently
  const [contentResponse, thankYouMessageResponse] = await Promise.all([
    getSitemap(BOOK_DEMO_ID),
    getSitemap(BOOK_DEMO_THANK_YOU_ID)
  ]);

  // Handle the responses
  const content = contentResponse ?? '';
  const thankYouMessage = thankYouMessageResponse ?? '';

  return {
    content: content?.content,
    thankYouMessage: thankYouMessage?.content
  };
}

export default async function BookDemo() {
  const [{ content, thankYouMessage }, externalLinks] = await Promise.all([
    getContent(),
    getExternalLinks({ asMap: true })
  ]);
  const newContent = '\n' + content;
  const list = newContent?.split('\n#');
  list?.shift();
  let dataList = {};
  list?.forEach((item) => {
    const newItemList = removeEmptyElement(item?.split('\n'));
    dataList[newItemList[0]] = newItemList.splice(1);
  });

  return (
    <>
      <AggregateRating id={BOOK_DEMO_SEO_ID} />
      <Layout>
        <BookDemoPage data={dataList} thankYouMessage={thankYouMessage} externalLinks={externalLinks} />
      </Layout>
    </>
  );
}
