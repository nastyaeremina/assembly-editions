import { notFound } from 'next/navigation';
import { draftMode } from 'next/headers';
import Layout from '../../components/layout';
import { getTemplateDetailContent } from '../../lib/contentful-template';
import { getSEOData, isEmpty, removeEmptyElement } from '../../helpers/helpers';
import TemplateListSection from '../../components/template/templateListSection';
import TemplateDetailHero from '../../components/templateDetailHero/templatedetailhero';
import TemplateBodySection from '../../components/template/templateBodySection';
import BackComponent from '../../components/backComponent/backComponent';
import AggregateRating from '../../components/aggregateRating';
import { CURRENT_SITE_URL } from '../../constants/constant';

async function getTemplateDetail({ slug }) {
  const { isEnabled } = await draftMode();
  return (await getTemplateDetailContent({ slug, preview: isEnabled })) ?? {};
}

export async function generateMetadata({ params }) {
  const data = await getTemplateDetail({ slug: params?.slug });
  const seoData = await getSEOData({ 
    data: data?.seoMetadata,
    canonical: `${CURRENT_SITE_URL}/templates/${params?.slug}`
  });

  return seoData;
}

export default async function TemplateDetail({ params }) {
  const tempalateDetail = await getTemplateDetail({ slug: params?.slug });

  if (isEmpty(tempalateDetail)) return notFound();
  const relatedTemplateList = removeEmptyElement(tempalateDetail?.relatedTemplatesCollection?.items);
  return (
    <>
      <AggregateRating data={tempalateDetail?.seoMetadata} />
      <Layout>
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
