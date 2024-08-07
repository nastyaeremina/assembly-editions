import Layout from '../components/layout';
import { TEMPLATE_PAGE_ID } from '../constants/constant';
import { getTemplateHomeContent } from '../lib/contentful-template';
import TemplateListSection from '../components/template/templateListSection';
import { getSEOData, isEmpty, removeEmptyElement } from './../helpers/helpers';
import Navbar from './../components/navbar/navbar';
import HeroComponent from '../components/standardHero/hero';
async function getTemplateContent() {
  return (await getTemplateHomeContent(TEMPLATE_PAGE_ID)) ?? {};
}

export async function generateMetadata() {
  const data = await getTemplateContent();
  const seoData = await getSEOData({ data: data?.seoMetadata });
  seoData.alternates = { canonical: 'https://www.copilot.com/templates' };
  return seoData;
}

export default async function University() {
  const templateData = await getTemplateContent();
  const section1TemplateList = removeEmptyElement(templateData?.section1TemplatesCollection?.items);
  const section2TemplateList = removeEmptyElement(templateData?.section2TemplatesCollection?.items);
  const section3TemplateList = removeEmptyElement(templateData?.section3TemplatesCollection?.items);
  return (
    <>
      <Layout>
        <Navbar />
        <HeroComponent data={templateData?.templateHeroSection} />
        {!isEmpty(section1TemplateList) && (
          <TemplateListSection title={templateData?.section1Title} data={section1TemplateList} isBigCard={true} />
        )}
        {!isEmpty(section2TemplateList) && (
          <TemplateListSection title={templateData?.section2Title} data={section2TemplateList} />
        )}

        {!isEmpty(section3TemplateList) && (
          <TemplateListSection title={templateData?.section3Title} data={section3TemplateList} isLastSpacing={true} />
        )}
      </Layout>
    </>
  );
}
