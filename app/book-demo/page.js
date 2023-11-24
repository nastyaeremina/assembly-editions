import { BOOK_DEMO_ID, BOOK_DEMO_SEO_ID, BOOK_DEMO_THANK_YOU_ID, PRODUCT_DEMO_PAGE_ID } from '../constants/constant';
import { getSEOData, removeEmptyElement } from '../helpers/helpers';
import BookDemoPage from '../components/PageComponent/Book-demo/bookDemoPage';
import { getProductDemoContent } from '../lib/contentful-weeklyDemo';
import { getSitemap } from '../lib/contentful-sitemap';

export async function generateMetadata({ params, searchParams }, parent) {
  const seoData = await getSEOData({ id: BOOK_DEMO_SEO_ID });

  seoData.alternates = { canonical: 'https://www.copilot.com/book-demo' };
  return seoData;
}

async function getContent() {
  // Start both API calls concurrently
  const [productDetailsResponse, contentResponse, thankYouMessageResponse] = await Promise.all([
    getProductDemoContent(PRODUCT_DEMO_PAGE_ID),
    getSitemap(BOOK_DEMO_ID),
    getSitemap(BOOK_DEMO_THANK_YOU_ID)
  ]);

  // Handle the responses
  const productdetails = productDetailsResponse ?? '';
  const content = contentResponse ?? '';
  const thankYouMessage = thankYouMessageResponse ?? '';

  return {
    productDemoSlug: productdetails?.slug,
    content: content?.content,
    thankYouMessage: thankYouMessage?.content
  };
}

export default async function BookDemo() {
  const { productDemoSlug, content, thankYouMessage } = await getContent();
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
      <BookDemoPage productDemoSlug={productDemoSlug} data={dataList} thankYouMessage={thankYouMessage} />
    </>
  );
}
