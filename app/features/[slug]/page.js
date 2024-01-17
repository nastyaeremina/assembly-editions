import { notFound } from 'next/navigation';
import { FEATURE_THEME_LIST } from '../../constants/constant';
import { getFeatureById } from '../../lib/contentful-features';
import FeatureAppPage from '../../components/featurePages/featureAppPage';
import { getSEOData, isEmpty } from '../../helpers/helpers';
import Layout from '../../components/layout';
import Navbar from '../../components/navbar/navbar';
import FeatureHero from '../../components/featurehero/featurehero';
import Content from '../../components/content/content';
import Tools from '../../components/tools/tool';
import Quote from '../../components/quote/quote';
import Client from '../../components/client/client';
import CTA from '../../components/cta/cta';

async function getContent({ slug }) {
  return await getFeatureById(slug);
}

export async function generateMetadata({ params, searchParams }, parent) {
  const data = await getContent({ slug: params?.slug });
  const seoData = await getSEOData({ id: data?.seoMetadata?.sys?.id, data: data?.seoMetadata });
  return seoData;
}

export default async function FeatureApp({ params }) {
  const details = await getContent({ slug: params?.slug });
  if (isEmpty(details)) return notFound();
  const colorList = FEATURE_THEME_LIST[details?.theme].colorList;
  const imageList = FEATURE_THEME_LIST[details?.theme].imageList;

  return (
    <>
      <Layout>
        <Navbar isModule={true} colorList={colorList} />
        <FeatureHero
          colorList={colorList}
          title={details?.header}
          heroImage={details?.heroImage?.url}
          description={details?.body}
          iconUrl={details?.featureIcon?.url}
          videoId={details?.videoId}
        />
        {/* Display content section 1 if available */}
        {details?.section1Header && <Content title={details?.section1Header} description={details?.section1Body} />}

        <FeatureAppPage details={details} />

        {/* Display tools section if internal features are available */}
        {!isEmpty(details?.internalFeaturesCollection?.items) && (
          <Tools data={details?.internalFeaturesCollection?.items} title={details?.section2Header} />
        )}

        {/* Display testimonial section if testimonial data is available */}
        {!isEmpty(details?.testimonial) && <Quote gradientImage={imageList} data={details?.testimonial} />}

        {/* Display client section with the current module and title */}
        <Client data={details?.section3ContentCollection?.items} title={details?.section3Header} />

        {/* Display call-to-action section with module name and color list */}
        <CTA moduleName={details?.theme} colorList={colorList} />
      </Layout>
    </>
  );
}
