import Layout from "/components/layout";
import Image from "next/image";
import { NextSeo } from "next-seo";
import Navbar from "../../components/navbar/navbar";
import {
  BillMain,
    BillHeroSub,
    MessegeItem
} from "../../styles/modulesStyles";
import CTA from "../../components/cta/cta";
import Tools from "../../components/tools/tool";
import Content from "../../components/content/content";
import Quote from "../../components/quote/quote";
import Client from "../../components/client/client";
import { Container } from "../../styles/commonStyles";

export default function Billing() {
  return (
    <>
      <NextSeo
        title="Copilot - It’s all about connection"
        description="copilot offers client portal software solution to manage sales reporting, management, marketing, improve customer relationships and more. Get the best free CRM system for your business."
      />
      <Layout>
        <Navbar />
       <BillMain>
        <Container>
    <BillHeroSub className="billpadding">
  <h2 className="headingcolor">Seamless</h2>
    <MessegeItem>
      <span className="billtxt">client</span>
       <Image src='/images/billbg.svg' alt='bill-icon' width={222} height={284} layout={'fixed'}  className="billimage"/>
    </MessegeItem>
    <h2 className="headingcolor">  checkout</h2>
    </BillHeroSub>
    </Container>
       </BillMain>
      
      <Content />
      <Tools />
      <Quote />
      <Client />
       <CTA />
      </Layout>
    </>
  );
}
