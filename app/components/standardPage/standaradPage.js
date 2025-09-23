import { isEmpty, transformToTabsData } from '../../helpers/helpers';
import {
  getFeatureComponentContent,
  getSectionBoxesComponentContent,
  getSectionCTAContent,
  getSectionTabContent,
  getSectionTestimonialGroupContent,
  getSectionRedirectContent,
  getSectionHighlightContent,
  getSectionBentoBoxComponentContent,
  getSectionStoryModeContent
} from '../../lib/contentful-standardPage';
import Modern from '../solution/modern/modern';
import Quote from '../quote/quote';
import FAQ from '../faq/faq';
import { getFAQsData } from '../../services/faq';
import TabsComponent from '../tabsComponent/tabscomponent';
import StandardHero from '../standardHero/standardHero';
import AutomationCardSection from '../automationcard';
import RedirectsComponent from '../Redirects/redirectsComponent';
import CTA from '../cta/newCTA';
import TestimonialTableSection from '../newTestimonial/testimonialTableSection';
import HighlightSection from '../highlightSection/highlightSection';
import { draftMode } from 'next/headers';
import FeatureBentoBoxSection from '../featureBentoBoxSection/featureBentoBoxSection';
import { FEATURE_COMPONENT_TYPE } from '../../constants/constant';
import CarouselSection from '../CarouselSection/carouselSection';
import StoryMode from '../StoryMode/storymode';
import TestimonialCard from '../testimonialCard';

export default async function StandardPage({ data }) {
  const { isEnabled } = await draftMode();

  const renderComponent = async (componentData) => {
    if (isEmpty(componentData)) return null;
    // eslint-disable-next-line no-underscore-dangle
    switch (componentData.__typename) {
      case 'ComponentHero':
        return (
          <>
            <StandardHero type={componentData.type} data={componentData} />
          </>
        );
      case 'ComponentFeature':
        if (componentData.sys?.id && componentData.type) {
          const featureData =
            (await getFeatureComponentContent(componentData.sys?.id, isEnabled, componentData.type)) ?? {};
          if (!isEmpty(featureData))
            if (featureData.type === FEATURE_COMPONENT_TYPE.BOX_GROUP_COMPONENT) {
              return (
                <>
                  {!isEmpty(featureData.featuresCollection?.items) && (
                    <Modern
                      data={featureData.featuresCollection?.items}
                      title={featureData.title}
                      description={featureData.description}
                      isStandardPage={true} // isStandardPage props use for standard Page wise spacing design
                      primaryButtonText={featureData.primaryButtonText}
                      primaryButtonLink={featureData.primaryButtonLink}
                      secondaryButtonLink={featureData.secondaryButtonLink}
                      secondaryButtonText={featureData.secondaryButtonText}
                    />
                  )}
                </>
              );
            } else if (featureData.type === FEATURE_COMPONENT_TYPE.CAROUSEL_COMPONENT) {
              return (
                <>
                  <CarouselSection
                    title={featureData.title}
                    description={featureData.description}
                    primaryButtonLink={featureData.primaryButtonLink}
                    primaryButtonText={featureData.primaryButtonText}
                    carouselData={featureData.featuresCollection?.items}
                  />
                </>
              );
            }
        }
        return null;
      case 'Testimonial':
        return <Quote data={componentData} isStandardPage={true} />;
      case 'ComponentFaq':
        if (!isEmpty(componentData.faQsCollection?.items)) {
          const faqList = await getFAQsData({ data: componentData.faQsCollection?.items });
          return <FAQ faqList={faqList} title={componentData.title} isStandardPage={true} />;
        }
        return null;
      case 'SectionTab':
        if (componentData.sys?.id) {
          const tabData = (await getSectionTabContent(componentData.sys?.id, isEnabled)) ?? {};
          return !isEmpty(tabData) ? <TabsComponent type={tabData.type} content={tabData} /> : null;
        }
        return null;
      case 'SectionBoxes':
        if (componentData.sys?.id) {
          const data = (await getSectionBoxesComponentContent(componentData.sys?.id, isEnabled)) ?? {};
          const content = [
            {
              header: data?.box1Title,
              body: data?.box1Description,
              image: {
                url: data?.box1Image?.url
              }
            }
          ];
          if (!isEmpty(data?.box2Title))
            content.push({
              header: data.box2Title,
              body: data?.box2Description,
              image: {
                url: data?.box2Image?.url
              }
            });

          return !isEmpty(data) ? (
            <AutomationCardSection
              title={data.title}
              description={data.description}
              primaryButtonText={data.primaryButtonText}
              primaryButtonLink={data.primaryButtonLink}
              secondaryButtonText={data.secondaryButtonText}
              secondaryButtonLink={data.secondaryButtonLink}
              data={content}
              isStandardPage
            />
          ) : null;
        }
        return null;
      case 'CaseStudies':
        return (
          <TestimonialCard
            logo={componentData.customerLogo?.imageAsset?.url}
            banner={componentData.caseStudyImage?.url}
            body={componentData.heroSection?.heroDescription}
            highlightsData={componentData.highlights}
            slug={componentData.slug}
            isStandardPage={true}
          />
        );
      case 'SectionRedirect':
        const redirectData = (await getSectionRedirectContent(componentData.sys?.id, isEnabled)) ?? {};
        if (isEmpty(redirectData)) return null;
        return (
          <RedirectsComponent
            Heading={redirectData.title}
            description={redirectData.description}
            primaryButtonText={redirectData.primaryButtonText}
            primaryButtonLink={redirectData.primaryButtonLink}
            secondaryButtonText={redirectData.secondaryButtonText}
            secondaryButtonLink={redirectData.secondaryButtonLink}
            redirectsData={redirectData.featuresCollection?.items}
          />
        );
      case 'SectionCta':
        if (componentData.sys?.id) {
          const data = (await getSectionCTAContent(componentData.sys?.id, isEnabled)) ?? {};
          return !isEmpty(data) ? (
            <CTA
              title={data.title}
              description={data.description}
              primaryButtonText={data.primaryButtonText}
              primaryButtonLink={data.primaryButtonLink}
              secondaryButtonText={data.secondaryButtonText}
              secondaryButtonLink={data.secondaryButtonLink}
              banner={data.banner?.url}
            />
          ) : null;
        }
        return null;
      case 'SectionTestimonialGroup':
        if (componentData.sys?.id) {
          const data = (await getSectionTestimonialGroupContent(componentData.sys?.id, isEnabled)) ?? {};
          return !isEmpty(data) ? (
            <TestimonialTableSection
              title={data.title}
              description={data.description}
              primaryButtonText={data.primaryButtonText}
              primaryButtonLink={data.primaryButtonLink}
              secondaryButtonText={data.secondaryButtonText}
              secondaryButtonLink={data.secondaryButtonLink}
              tableData={data.contentCollection?.items}
              isStandardPage
            />
          ) : null;
        }
        return null;
      case 'SectionHighlight':
        const data = (await getSectionHighlightContent(componentData.sys?.id, isEnabled)) ?? {};
        if (isEmpty(data?.content?.json)) return null;
        return (
          <>
            <HighlightSection data={data.content.json} />
          </>
        );

      case 'SectionBentoBox':
        if (componentData.sys?.id) {
          const data = (await getSectionBentoBoxComponentContent(componentData.sys?.id, isEnabled)) ?? {};
          return !isEmpty(data) ? (
            <FeatureBentoBoxSection
              title={data.title}
              description={data.description}
              primaryButtonText={data.primaryButtonText}
              primaryButtonLink={data.primaryButtonLink}
              secondaryButtonText={data.secondaryButtonText}
              secondaryButtonLink={data.secondaryButtonLink}
              features={data.contentCollection?.items}
            />
          ) : null;
        }
        return null;
      case 'SectionStoryMode':
        try {
          if (componentData?.sys?.id) {
            const data = await getSectionStoryModeContent(componentData.sys.id, isEnabled);

            if (isEmpty(data?.contentCollection?.items)) return null;

            const transformedTabsData = transformToTabsData(data.contentCollection.items);

            return <StoryMode tabsData={transformedTabsData} tone={data.theme} />;
          }
        } catch (error) {
          console.error('Error rendering SectionStoryMode:', error);
        }
        return null;
      default:
        return null;
    }
  };
  // Await all async component renderings
  const renderedComponents = await Promise.all(data.map((componentData) => renderComponent(componentData)));
  return (
    <div className='standard-page'>
      {renderedComponents.map((Component, index) => (
        <>{Component}</>
      ))}
    </div>
  );
}
