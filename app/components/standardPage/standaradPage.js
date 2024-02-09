import { isEmpty } from '../../helpers/helpers';
import { getFeatureComponentContent } from '../../lib/contentful-standardPage';
import HeroComponent from '../Hero/hero';
import Modern from '../solution/modern/modern';
import Quote from '../quote/quote';
import FAQ from '../faq/faq';
import { getFAQsData } from '../../services/faq';

export default async function StandardPage({ data }) {
  const renderComponent = async (componentData) => {
    // eslint-disable-next-line no-underscore-dangle
    switch (componentData.__typename) {
      case 'ComponentHero':
        return (
          <>
            <HeroComponent data={componentData} />
          </>
        );
      case 'ComponentFeature':
        if (componentData?.sys?.id) {
          const featureData = (await getFeatureComponentContent(componentData?.sys?.id)) ?? {};
          if (!isEmpty(featureData))
            return (
              <>
                {!isEmpty(featureData?.featuresCollection?.items) && (
                  <Modern
                    data={featureData?.featuresCollection?.items}
                    title={featureData?.title}
                    isStandardPage={true}
                  />
                )}
              </>
            );
        }
        return null;
      case 'Testimonial':
        return <Quote data={componentData} isStandardPage={true} />;
      case 'ComponentFaq':
        if (!isEmpty(componentData?.faQsCollection?.items)) {
          const faqList = await getFAQsData({ data: componentData?.faQsCollection?.items });
          return <FAQ faqList={faqList} title={componentData?.title} isStandardPage={true} />;
        }
        return null;
      default:
        return null;
    }
  };
  return (
    <>
      {data?.map((componentData) => (
        <>{renderComponent(componentData)}</>
      ))}
    </>
  );
}
