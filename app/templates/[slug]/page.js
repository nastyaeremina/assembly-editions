import { notFound } from 'next/navigation';
import Layout from '../../components/layout';
import Navbar from '../../components/navbar/navbar';
import { getTemplateDetailContent } from '../../lib/contentful-template';
import { getSEOData, isEmpty, removeEmptyElement } from '../../helpers/helpers';
import TemplateListSection from '../../components/template/templateListSection';
import TemplateDetailHero from '../../components/templateDetailHero/templatedetailhero';
import TemplateBodySection from '../../components/template/templateBodySection';
import BackComponent from '../../components/backComponent/backComponent';

async function getTemplateDetail({ slug }) {
  return (await getTemplateDetailContent({ slug })) ?? {};
}

export async function generateMetadata({ params }) {
  const data = await getTemplateDetail({ slug: params?.slug });
  const seoData = await getSEOData({ data: data?.seoMetadata });
  seoData.alternates = { canonical: `https://www.copilot.com/templates/${params?.slug}` };

  return seoData;
}

export default async function TemplateDetail({ params }) {
  const tempalateDetail = await getTemplateDetail({ slug: params?.slug });

  if (isEmpty(tempalateDetail)) return notFound();
  const relatedTemplateList = removeEmptyElement(tempalateDetail?.relatedTemplatesCollection?.items);
  return (
    <>
      <Layout>
        <Navbar />
        <BackComponent backtext={'Back to templates'} href={'/templates'} />
        <TemplateDetailHero
          title={tempalateDetail?.title}
          description={tempalateDetail?.description}
          primaryButtonText={'Clone workspace'}
          primaryButtonLink={tempalateDetail?.primaryButtonLink}
          secondaryButtonText={'Try client experience'}
          secondaryButtonLink={tempalateDetail?.secondaryButtonLink}
          imageList={removeEmptyElement(tempalateDetail?.imageSliderCollection?.items)}
        />
        <TemplateBodySection
          bodyContent={tempalateDetail?.body}
          appsList={removeEmptyElement(tempalateDetail?.appsCollection?.items)}
          aboutContent={{
            maker: tempalateDetail?.maker,
            highlights: tempalateDetail?.highlights,
            industry: tempalateDetail?.industryNew
          }}
        />
        {!isEmpty(relatedTemplateList) && (
          <TemplateListSection title={'Related templates'} data={relatedTemplateList} isLastSpacing={true} />
        )}
      </Layout>
    </>
  );
}
