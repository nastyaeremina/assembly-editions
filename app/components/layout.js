import { FOOTER_CONTENT_ID } from '../constants/constant';
import { isEmpty } from '../helpers/helpers';
import { getCommonContent } from '../lib/contentful-common';
import Footer from './footer/footer';
import Analytics from './analytics/analytics';
import Navbar from './navbar/navbar';

export async function getContent() {
  const footerData = (await getCommonContent(FOOTER_CONTENT_ID, true)) ?? [];
  //conver footerdata as row wise
  if (!isEmpty(footerData)) {
    const sections = footerData.split(/\{\d+\}/); // Split on {0}, {1}, {2}, etc.

    let description = '';
    let footerDataList = [];

    sections.forEach((section) => {
      if (section.includes('#Description')) {
        const lines = section.split('\n').filter((line) => line.trim() !== '');

        if (lines[0] === '#Description') {
          lines.shift(); // remove the label
        }

        description = lines.join(' ').trim();
      } else if (section.includes('#')) {
        footerDataList.push(section);
      }
    });
    return { footerDescription: description, footerData: footerDataList };
  }
  return { footerData: [], footerDescription: '' };
}

export default async function Layout({
  children,
  isGlossary = false,
  abTestContentLabel = '',
  abTestExperimentName = ''
}) {
  const { footerData, footerDescription } = await getContent();
  return (
    <>
      <Navbar />
      <div>
        <main>{children}</main>
      </div>
      {!isGlossary && <Footer footerData={footerData} description={footerDescription} />}
      {!isEmpty(abTestExperimentName) && !isEmpty(abTestContentLabel) && (
        <Analytics experimentName={abTestExperimentName} contentLabel={abTestContentLabel} />
      )}
    </>
  );
}
