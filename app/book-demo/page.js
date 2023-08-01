import { BOOK_DEMO_SEO_ID, PRODUCT_DEMO_PAGE_ID } from '../constants/constant';
import { getSEOData } from '../helpers/helpers';
import BookDemoPage from '../components/PageComponent/Book-demo/bookDemoPage';
import { getProductDemoContent } from '../lib/contentful-weeklyDemo';

export async function generateMetadata({ params, searchParams }, parent) {
  const seoData = await getSEOData({ id: BOOK_DEMO_SEO_ID });
  seoData.canonical = 'https://www.copilot.com/book-demo';
  return seoData;
}

async function getContent() {
  const productdetails = await getProductDemoContent(PRODUCT_DEMO_PAGE_ID);

  return {
    productDemoSlug: productdetails?.slug
  };
}

export default async function BookDemo() {
  const { productDemoSlug } = await getContent();
  return (
    <>
      <BookDemoPage productDemoSlug={productDemoSlug} />
    </>
  );
}
