import { FOOTER_CONTENT_ID } from '../constants/constant';
import { isEmpty } from '../helpers/helpers';
import { getCommonContent } from '../lib/contentful-common';
import Footer from './footer/footer';
import Analytics from './analytics/analytics';

export async function getContent() {
  const footerData = (await getCommonContent(FOOTER_CONTENT_ID)) ?? [];
  //conver footerdata as row wise
  if (!isEmpty(footerData)) {
    const rowWiseFooterData = footerData?.split(/[\{\}]/);
    const finalFooterList = rowWiseFooterData?.filter((item) => item?.startsWith('\n'));
    return { footerData: finalFooterList };
  }
  return { footerData: [] };
}
function getFooterData() {}

export default async function Layout({
  children,
  isGlossary = false,
  abTestContentLabel = '',
  abTestExperimentName = ''
}) {
  const { footerData } = await getContent();

  return (
    <>
      <div>
        <main>{children}</main>
      </div>
      {!isGlossary && <Footer footerData={footerData} />}
      {!isEmpty(abTestExperimentName) && !isEmpty(abTestContentLabel) && (
        <Analytics experimentName={abTestExperimentName} contentLabel={abTestContentLabel} />
      )}
    </>
  );
}
