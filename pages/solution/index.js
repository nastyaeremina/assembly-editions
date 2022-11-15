import { NextSeo } from "next-seo";
import CTA from "../../components/cta/cta";
import Layout from "../../components/layout";
import Navbar from "../../components/navbar/navbar";
import ExploreTab from "../../components/solution/clienttab/exploretab";
import Modern from "../../components/solution/modern/modern";
import Quote from "../../components/solution/quote/quote";
import SolutionHero from "../../components/solution/solutionhero/solutionhero";

export default function Solution() {
  return (
    <>
      <NextSeo
        title="Create your portal, pick a plan later"
        description="Try Copilot free for 14 days, no credit card required"
      />
      <Layout>
        <Navbar />
        <SolutionHero />
        <Modern />
        <ExploreTab />
        <Quote />
        <CTA />
      </Layout>
    </>
  );
}
