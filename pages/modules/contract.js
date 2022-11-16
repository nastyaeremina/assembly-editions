import Layout from "/components/layout";
import Image from "next/image";
import { NextSeo } from "next-seo";
import Navbar from "../../components/navbar/navbar";
import {
    ContractHero,
    KnowHero,
    ContractWrap,
    MessegeItem
} from "../../styles/modulesStyles";
import CTA from "../../components/cta/cta";
import Tools from "../../components/tools/tool";
import Content from "../../components/content/content";
import Quote from "../../components/quote/quote";
import Client from "../../components/client/client";
import { Container } from "../../styles/commonStyles";

export default function Knowledge() {
  return (
    <>
      <NextSeo
        title="Copilot - It’s all about connection"
        description="copilot offers client portal software solution to manage sales reporting, management, marketing, improve customer relationships and more. Get the best free CRM system for your business."
      />
      <Layout>
        <Navbar />
       <ContractHero>
        <Container>
        <KnowHero className="contractgap">
        <ContractWrap>
    <h2>eSignatu</h2>
    <MessegeItem>
    <span className="contracttext">res</span>
         <Image src='/images/contract.svg' alt='bill-icon' width={330} height={174} layout={'fixed'}  className="contractimg"/>
     </MessegeItem>
     </ContractWrap>
      <span>made easy</span>

   
   
    </KnowHero>
    </Container>
       </ContractHero>
      
      <Content />
      <Tools />
      <Quote />
      <Client />
       <CTA />
      </Layout>
    </>
  );
}
