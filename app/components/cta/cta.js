import { CTA_CONTENT_ID } from '../../constants/constant';
import { getSitemap } from '../../lib/contentful-sitemap.js';
import MainCTA from './mainCTA';
import { getExternalLinks } from '../../helpers/serverSideHelpers';
async function getCTAContent() {
  try {
  const [{content}, externalLinks] = await Promise.all([getSitemap(CTA_CONTENT_ID), getExternalLinks({ asMap: true })]);
  return { content, externalLinks };
  } catch (error) {
    console.error('Error fetching CTA content:', error);
    return { content: '', externalLinks: {} };
  }
}

export default async function CTA({ moduleName, colorList }) {
  const { content: ctaData, externalLinks } = (await getCTAContent()) ?? { content: '', externalLinks: {} };

  return (
    <>
      <MainCTA moduleName={moduleName} colorList={colorList} ctaContent={ctaData} externalLinks={externalLinks} />
    </>
  );
}
