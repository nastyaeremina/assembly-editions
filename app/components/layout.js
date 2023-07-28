import { FOOTER_CONTENT_ID } from '../constants/constant';
import { getCommonContent } from '../lib/contentful-common';
import Footer from './footer/footer';

async function getContent() {
  const footerData = (await getCommonContent(FOOTER_CONTENT_ID)) ?? [];

  return { footerData };
}
export default async function Layout({ children = <></>, isEnterPrice = false }) {
  const { footerData } = await getContent();
  return (
    <>
      <div>
        <main>{children}</main>
      </div>
      <Footer isEnterPrice={isEnterPrice} footerData={footerData} />
    </>
  );
}
