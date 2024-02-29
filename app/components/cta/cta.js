import { CTA_CONTENT_ID } from '../../constants/constant';
import { getSitemap } from '../../lib/contentful-sitemap.js';
import MainCTA from './mainCTA';
async function getCTAContent() {
  return await getSitemap(CTA_CONTENT_ID);
}

export default async function CTA({ moduleName, colorList }) {
  const { content: ctaData } = (await getCTAContent()) ?? { content: '' };

  return (
    <>
      <MainCTA moduleName={moduleName} colorList={colorList} ctaContent={ctaData} />
    </>
  );
}
