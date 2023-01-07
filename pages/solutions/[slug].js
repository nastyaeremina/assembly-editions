import { NextSeo } from 'next-seo';
import CTA from '../../components/cta/cta';
import Layout from '../../components/layout';
import Navbar from '../../components/navbar/navbar';
import ExploreTab from '../../components/solution/clienttab/exploretab';
import Modern from '../../components/solution/modern/modern';
import Quote from '../../components/solution/quote/quote';
import SolutionHero from '../../components/solution/solutionhero/solutionhero';
import { isEmpty, removeEmptyElement } from '../../helpers/helpers';
import { getAllSolutionWithSlug, getSolutionBySlug } from '../../lib/contentful-solutions';
import { MainWrap } from '../../components/solution/clienttab/styles';

export default function Solution({ details }) {
  return (
    <>
      <NextSeo
        title={details?.seoMetadata?.seoTitle}
        description={details?.seoMetadata?.description}
        openGraph={{
          type: 'website',
          locale: 'en_IE',
          site_name: 'SiteName',
          images: isEmpty(details?.seoMetadata?.openGraphImage)
            ? []
            : [
                {
                  url: details?.seoMetadata?.openGraphImage?.url
                }
              ]
        }}
      />
      <Layout>
        <Navbar />
        <MainWrap>
          <SolutionHero
            title={details?.header}
            description={details?.body}
            mobileImage={details?.imageForeground?.url}
            webImage={details?.imageBackground?.url}
          />
          {!isEmpty(details?.solutionValueCollection?.items) && (
            <Modern data={details?.solutionValueCollection?.items} title={details?.sectionTitle} />
          )}
          {!isEmpty(details?.clientExperienceCollection?.items) && (
            <ExploreTab data={removeEmptyElement(details?.clientExperienceCollection?.items)} />
          )}
          {!isEmpty(details?.testimonial) && <Quote data={details?.testimonial} />}
        </MainWrap>
        <CTA />
      </Layout>
    </>
  );
}
export async function getStaticProps({ params, preview = false }) {
  const details = (await getSolutionBySlug(params?.slug, preview)) ?? [];
  return {
    props: { details }
  };
}

export async function getStaticPaths() {
  const allPosts = await getAllSolutionWithSlug();
  return {
    paths: allPosts?.map(({ slug }) => `/solutions/${slug}`) ?? [],

    fallback: true
  };
}
