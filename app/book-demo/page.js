import { BOOK_DEMO_ID, BOOK_DEMO_SEO_ID, PRODUCT_DEMO_PAGE_ID } from '../constants/constant';
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
  const productdetails = await getProductDemoContent(PRODUCT_DEMO_PAGE_ID);
  const content = (await getSitemap(BOOK_DEMO_ID)) ?? '';

  return {
    productDemoSlug: productdetails?.slug,
    content: content?.content
  };
}

export default async function BookDemo() {
  const { productDemoSlug, content } = await getContent();
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
      <BookDemoPage productDemoSlug={productDemoSlug} data={dataList} />
    </>
  );
}
