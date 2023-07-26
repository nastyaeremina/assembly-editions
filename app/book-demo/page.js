import { BOOK_DEMO_SEO_ID } from '../constants/constant';
import { getSEOData } from '../helpers/helpers';
import BookDemoPage from '../components/PageComponent/Book-demo/bookDemoPage';

export async function generateMetadata({ params, searchParams }, parent) {
  const seoData = await getSEOData({ id: BOOK_DEMO_SEO_ID });
  seoData.canonical = 'https://www.copilot.com/book-demo';
  return seoData;
}
export default function BookDemo() {
  return (
    <>
      <BookDemoPage />
    </>
  );
}
