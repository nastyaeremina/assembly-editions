import EnterprisePage from '../components/PageComponent/CopilotPlus/copilotPlusPage';
import { getSEOData } from '../helpers/helpers';
import Layout from '../components/layout';
import Navbar from '../components/navbar/navbar';
import FAQ from '../components/faq/faq';
import { ENTERPRICE_SEO_ID, HEADER_LIST } from './../constants/constant';

export async function generateMetadata({ params, searchParams }, parent) {
  const seoData = await getSEOData({ id: ENTERPRICE_SEO_ID });
  seoData.canonical = 'https://www.copilot.com/copilot-plus';
  return seoData;
}

export default async function Enterprise() {
  return (
    <>
      <Layout isEnterPrice={true}>
        {/* <MainWrap> */}
        <Navbar isEnterPrice={true} headerIndex={HEADER_LIST.ENTERPRICE} />
        <EnterprisePage />
        <FAQ enterprise contentID={'69O3U5pBty7DqueKYykMSz'} />
        {/* </MainWrap> */}
      </Layout>
    </>
  );
}
