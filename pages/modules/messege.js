import Layout from "/components/layout";
import Image from "next/image";
import { NextSeo } from "next-seo";
import Navbar from "../../components/navbar/navbar";
import {
    MsgHeroSection,
    HeroSub,
    MessegeItem
} from "../../styles/modulesStyles";
import CTA from "../../components/cta/cta";
import Tools from "../../components/tools/tool";
import Content from "../../components/content/content";
import Quote from "../../components/quote/quote";
import Client from "../../components/client/client";
import { Container } from "../../styles/commonStyles";

export default function Messege() {
  return (
    <>
      <NextSeo
        title="Copilot - It’s all about connection"
        description="copilot offers client portal software solution to manage sales reporting, management, marketing, improve customer relationships and more. Get the best free CRM system for your business."
      />
      <Layout>
        <Navbar />
       <MsgHeroSection>
        <Container>
    <HeroSub className="msgheropadding">

    <h2>Simplify client</h2>
    <MessegeItem>
    <span> commnication</span>
    <Image src='/images/messege.svg' alt='line-icon' width={147} height={141} layout={'fixed'} className="messsegeimg"/>
    </MessegeItem>
    </HeroSub>
    </Container>
       </MsgHeroSection>
      
      <Content />
      <Tools />
      <Quote />
      <Client />
       <CTA />
      </Layout>
    </>
  );
}
