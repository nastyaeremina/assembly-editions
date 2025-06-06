import { isEmpty } from '../../helpers/helpers';
import {
  getFeatureComponentContent,
  getSectionBoxesComponentContent,
  getSectionCTAContent,
  getSectionTabContent,
  getSectionTestimonialGroupContent,
  getSectionRedirectContent,
  getSectionHighlightContent
} from '../../lib/contentful-standardPage';
import Modern from '../solution/modern/modern';
import Quote from '../quote/quote';
import FAQ from '../faq/faq';
import { getFAQsData } from '../../services/faq';
import TabsComponent from '../tabsComponent/tabscomponent';
import CustomerTestimonial from '../customer/testimonials';
import StandardHero from '../standardHero/standardHero';
import AutomationCardSection from '../automationcard';
import RedirectsComponent from '../Redirects/redirectsComponent';
import CTA from '../cta/newCTA';
import SimpleSection from '../standardHero/simpleSection/simpleSection';
import TestimonialTableSection from '../newTestimonial/testimonialTableSection';
import HighlightSection from '../highlightSection/highlightSection';

export default async function StandardPage({ data }) {
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
        if (componentData.sys?.id) {
          const featureData = (await getFeatureComponentContent(componentData.sys?.id)) ?? {};
          if (!isEmpty(featureData))
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
          const tabData = (await getSectionTabContent(componentData.sys?.id)) ?? {};
          return !isEmpty(tabData) ? <TabsComponent type={tabData.type} content={tabData} /> : null;
        }
        return null;
      case 'SectionBoxes':
        if (componentData.sys?.id) {
          const data = (await getSectionBoxesComponentContent(componentData.sys?.id)) ?? {};
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
          <CustomerTestimonial
            componentData={componentData}
            logo={componentData.customerLogo?.imageAsset?.url}
            banner={componentData.caseStudyImage?.url}
            body={componentData.description}
            highlightsData={componentData.highlights}
            slug={componentData.slug}
            isStandardPage={true}
          />
        );
      case 'SectionRedirect':
        const redirectData = (await getSectionRedirectContent(componentData.sys?.id)) ?? {};
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
          const data = (await getSectionCTAContent(componentData.sys?.id)) ?? {};
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
      case 'SectionSimple':
        return (
          <SimpleSection
            title={componentData.heroTitle}
            description={componentData.heroDescription}
            primaryButtonText={componentData.primaryButtonText}
            primaryButtonLink={componentData.primaryButtonLink}
            secondaryButtonText={componentData.secondaryButtonText}
            secondaryButtonLink={componentData.secondaryButtonLink}
            banner={componentData.banner1?.url}
            isHeading1={true}
            videoUrl={componentData.videoUrl}
          />
        );
      case 'SectionTestimonialGroup':
        if (componentData.sys?.id) {
          const data = (await getSectionTestimonialGroupContent(componentData.sys?.id)) ?? {};
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
        const data = (await getSectionHighlightContent(componentData.sys?.id)) ?? {};
        if (isEmpty(data?.content?.json)) return null;
        return (
          <>
            <HighlightSection data={data.content.json} />
          </>
        );
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
