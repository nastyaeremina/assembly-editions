import Layout from "/components/layout";
import Image from "next/image";
import { NextSeo } from "next-seo";
import Navbar from "../../components/navbar/navbar";
import {
  FormMain,
    FormHero,
    FormWrap,
    MessegeItem
} from "../../styles/modulesStyles";
import CTA from "../../components/cta/cta";
import Tools from "../../components/tools/tool";
import Content from "../../components/content/content";
import Quote from "../../components/quote/quote";
import Client from "../../components/client/client";
import { Container } from "../../styles/commonStyles";

export default function Form() {
  return (
    <>
      <NextSeo
        title="Copilot - It’s all about connection"
        description="copilot offers client portal software solution to manage sales reporting, management, marketing, improve customer relationships and more. Get the best free CRM system for your business."
      />
      <Layout>
        <Navbar />
       <FormMain>
        <Container>
    <FormHero className="gap">
    <h2 className="formtext">Streamline</h2>
    <FormWrap>
    <MessegeItem>
      <span className="formtxt">form</span>
      
 
    <Image src='/images/formhero.svg' alt='bill-icon' width={232} height={222} layout={'fixed'}  className="formimage"/>
    </MessegeItem>
    <h2 className="formtext">intake</h2>
    </FormWrap>
    </FormHero>
    </Container>
       </FormMain>
      
      <Content />
      <Tools />
      <Quote />
      <Client />
       <CTA />
      </Layout>
    </>
  );
}
