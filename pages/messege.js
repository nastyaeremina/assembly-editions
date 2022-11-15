import Layout from "/components/layout";
import Image from "next/image";
import { NextSeo } from "next-seo";
import Link from "next/link";
import Navbar from "../components/navbar/navbar";
import {
  Container,
  PrimaryButton,
  SecondryButton,
} from "../styles/commonStyles";

import {
    MsgHeroSection,
    HeroSub,
    HeroTop
} from "../styles/homepageStyles";
import BusinessSlider from "../components/businessSlider/businessslider";
import ExtensionSlider from "../components/extensionslider/extensionslider";
import CTA from "../components/cta/cta";
import Tools from "../components/tools/tool";
import Content from "../components/content/content";
import Quote from "../components/quote/quote";
import Client from "../components/client/client";

export default function Home() {
  return (
    <>
      <NextSeo
        title="Copilot - It’s all about connection"
        description="copilot offers client portal software solution to manage sales reporting, management, marketing, improve customer relationships and more. Get the best free CRM system for your business."
      />
      <Layout>
        <Navbar />
       <MsgHeroSection>
    <HeroSub>
<HeroTop></HeroTop>
    <h2>Simplify client <span>commu</span>nication</h2>

    </HeroSub>
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
