import { NextSeo } from "next-seo";
import CTA from "../../components/cta/cta";
import Layout from "../../components/layout";
import Navbar from "../../components/navbar/navbar";
import ExploreTab from "../../components/solution/clienttab/exploretab";
import Modern from "../../components/solution/modern/modern";
import Quote from "../../components/solution/quote/quote";
import SolutionHero from "../../components/solution/solutionhero/solutionhero";
import { SOLUTION_STARTUP_ID } from "../../constants/constant";
import { isEmpty } from "../../helpers/helpers";
import { getSolutionById } from "../../lib/contentful-solutions";

export default function Startups({ details }) {
    return (
        <>
            <NextSeo
                title="Create your portal, pick a plan later"
                description="Try Copilot free for 14 days, no credit card required"
            />
            <Layout>
                <Navbar />
                <SolutionHero title={details?.header} description={details?.body} />
                {!isEmpty(details?.solutionValueCollection?.items) && <Modern data={details?.solutionValueCollection?.items} />}
                <ExploreTab />
                <Quote />
                <CTA />
            </Layout>
        </>
    );
}
export async function getServerSideProps({ preview = false }) {
    const details = (await getSolutionById(SOLUTION_STARTUP_ID, preview)) ?? [];
    return {
        props: { details }
    };
}