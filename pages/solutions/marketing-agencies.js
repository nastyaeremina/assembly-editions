import { NextSeo } from 'next-seo';
import CTA from '../../components/cta/cta';
import Layout from '../../components/layout';
import Navbar from '../../components/navbar/navbar';
import ExploreTab from '../../components/solution/clienttab/exploretab';
import Modern from '../../components/solution/modern/modern';
import Quote from '../../components/solution/quote/quote';
import SolutionHero from '../../components/solution/solutionhero/solutionhero';
import { SOLUTION_MARKETING_AGENCY_ID } from '../../constants/constant';
import { isEmpty } from '../../helpers/helpers';
import { getSolutionById } from '../../lib/contentful-solutions';
import { MainWrap } from '../../components/solution/clienttab/styles';

export default function MarketingAgency({ details }) {
  return (
    <>
      <NextSeo
        title='Create your portal, pick a plan later'
        description='Try Copilot free for 14 days, no credit card required'
      />
      <Layout>
        <Navbar />
        <MainWrap>
          <SolutionHero title={details?.header} description={details?.body} />
          {!isEmpty(details?.solutionValueCollection?.items) && (
            <Modern data={details?.solutionValueCollection?.items} />
          )}
          {!isEmpty(details?.clientExperienceCollection?.items) && (
            <ExploreTab data={details?.clientExperienceCollection?.items} />
          )}
          {!isEmpty(details?.testimonial) && <Quote data={details?.testimonial} />}
        </MainWrap>
        <CTA />
      </Layout>
    </>
  );
}
export async function getServerSideProps({ preview = false }) {
  const details = (await getSolutionById(SOLUTION_MARKETING_AGENCY_ID, preview)) ?? [];
  return {
    props: { details }
  };
}
