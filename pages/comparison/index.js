import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import ComparisonHero from '../../components/comparison/comparisonhero/comparisonhero';
import CTA from '../../components/cta/cta';
import Layout from '../../components/layout';
import Navbar from '../../components/navbar/navbar';
import { MainWrap } from '../../components/solution/clienttab/styles';
import { Container } from '../../styles/commonStyles';
import {
  getAllCompetitor,
  getAllCompetitorComparisonDetail,
  getMasterComparisonDetail
} from '../../lib/contentful-comparison';
import { isEmpty } from '../../helpers/helpers';
import Quote from '../../components/solution/quote/quote';
import SEO from '../../components/seo';
import { getSEOdata } from '../../lib/contentful-seo';
import Cardsection from '../../components/comparison/cardsection/cardsection';
import { COMPARISON_SEO_ID } from '../../constants/constant';
import ComparisonTableView from '../../components/comparison/comparisonTable';

export default function Comparison({ featuredCompetitorList, comparisonList, details, seoData }) {
  return (
    <>
      <SEO seoData={seoData}></SEO>
      <Layout>
        <Navbar />
        <MainWrap>
          <ComparisonHero
            title={details?.title}
            description={details?.description}
            image={
              'https://images.ctfassets.net/l41zuz9np7js/3tCWcW1AwmKcbgrX3eN3Om/3d9324f730b08c4e24e9baf092c6acc0/suitedash.png'
            }
          />
          <Container>
            {!isEmpty(featuredCompetitorList) && <Cardsection data={featuredCompetitorList} />}
            {!isEmpty(comparisonList) && <ComparisonTableView data={comparisonList} />}
          </Container>
          {!isEmpty(details?.testimonial) && <Quote data={details?.testimonial} isMasterComparison />}
          {/* <FAQ contentID={details?.faq?.sys?.id} /> */}
          <CTA />
        </MainWrap>
      </Layout>
    </>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const featuredCompetitorList = (await getAllCompetitor()) ?? [];
  const details = (await getMasterComparisonDetail()) ?? [];
  const comparisonList = (await getAllCompetitorComparisonDetail()) ?? [];
  const seoData = details?.seoMetadata ?? {};
  return {
    props: { featuredCompetitorList, comparisonList, details, seoData }
  };
}
