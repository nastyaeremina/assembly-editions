import Layout from "/components/layout";
import Image from "next/image";
import { NextSeo } from "next-seo";
import Navbar from "../../components/navbar/navbar";
import {
  BillMain,
  BillHeroSub,
  MessegeItem,
  ContractHero,
  KnowHero,
  ContractWrap,
  FileMain,
  HeroSub,
  FileWrap,
  FormMain,
  FormHero,
  FormWrap,
  KnowledgeHero,
  MsgHeroSection,
} from "../../styles/modulesStyles";
import CTA from "../../components/cta/cta";
import Tools from "../../components/tools/tool";
import Content from "../../components/content/content";
import Quote from "../../components/quote/quote";
import Client from "../../components/client/client";
import { Container } from "../../styles/commonStyles";
import { HEADER_LIST, MUDULE_LIST } from "../../constants/constant";
import { useMemo } from "react";

export default function Modules({ module }) {
  console.log("module", module);

  const renderHeroSection = useMemo(() => {
    switch (module) {
      case MUDULE_LIST.BILLING:
        return (
          <BillMain>
            <Container>
              <BillHeroSub className="billpadding">
                <h2 className="headingcolor">Seamless</h2>
                <MessegeItem>
                  <span className="billtxt">client</span>
                  <Image
                    src="/images/billbg.svg"
                    alt="bill-icon"
                    width={222}
                    height={284}
                    layout={"fixed"}
                    className="billimage"
                  />
                </MessegeItem>
                <h2 className="headingcolor"> checkout</h2>
              </BillHeroSub>
            </Container>
          </BillMain>
        );
      case MUDULE_LIST.CONTRACT:
        return (
          <ContractHero>
            <Container>
              <KnowHero className="contractgap">
                <ContractWrap>
                  <h2>eSignatu</h2>
                  <MessegeItem>
                    <span className="contracttext">res</span>
                    <Image
                      src="/images/contract.svg"
                      alt="bill-icon"
                      width={330}
                      height={174}
                      layout={"fixed"}
                      className="contractimg"
                    />
                  </MessegeItem>
                </ContractWrap>
                <span>made easy</span>
              </KnowHero>
            </Container>
          </ContractHero>
        );
      case MUDULE_LIST.FILES:
        return (
          <FileMain>
            <Container>
              <HeroSub className="filepadding">
                <h2 className="filetext">Organize client</h2>
                <FileWrap>
                  <p>files</p>
                  <Image
                    src="/images/svg.svg"
                    alt="-icon"
                    width={216}
                    height={239}
                    layout={"fixed"}
                    className="fileimage"
                  />
                </FileWrap>
              </HeroSub>
            </Container>
          </FileMain>
        );
      case MUDULE_LIST.MESSAGING:
        return (
          <MsgHeroSection>
            <Container>
              <HeroSub className="msgheropadding">
                <h2>Simplify client</h2>
                <MessegeItem>
                  <span> commnication</span>
                  <Image
                    src="/images/messege.svg"
                    alt="line-icon"
                    width={147}
                    height={141}
                    layout={"fixed"}
                    className="messsegeimg"
                  />
                </MessegeItem>
              </HeroSub>
            </Container>
          </MsgHeroSection>
        );
      case MUDULE_LIST.KNOWLEDGE:
        return (
          <KnowledgeHero>
            <Container>
              <KnowHero>
                <h2>Create a </h2>

                <MessegeItem>
                  <span className="orengecolor">knowledge</span>
                  <Image
                    src="/images/know.svg"
                    alt="bill-icon"
                    width={200}
                    height={246}
                    layout={"fixed"}
                    className="knowimage"
                  />
                </MessegeItem>
                <h2>repository</h2>
              </KnowHero>
            </Container>
          </KnowledgeHero>
        );
      case MUDULE_LIST.FORMS:
        return (
          <FormMain>
            <Container>
              <FormHero className="gap">
                <h2 className="formtext">Streamline</h2>
                <FormWrap>
                  <MessegeItem>
                    <span className="formtxt">form</span>

                    <Image
                      src="/images/formhero.svg"
                      alt="bill-icon"
                      width={232}
                      height={222}
                      layout={"fixed"}
                      className="formimage"
                    />
                  </MessegeItem>
                  <h2 className="formtext">intake</h2>
                </FormWrap>
              </FormHero>
            </Container>
          </FormMain>
        );
      default:
        return;
    }
  }, [module]);
  return (
    <>
      <NextSeo
        title="Copilot - It’s all about connection"
        description="copilot offers client portal software solution to manage sales reporting, management, marketing, improve customer relationships and more. Get the best free CRM system for your business."
      />
      <Layout>
        <Navbar isModule={true} moduleIndex={HEADER_LIST.BILLING} />
        {renderHeroSection}
        <Content />
        <Tools />
        <Quote />
        <Client />
        <CTA />
      </Layout>
    </>
  );
}

export async function getServerSideProps({ params, preview = false }) {
  return {
    props: { preview, module: params?.slug },
  };
}

export async function getServerSidePaths() {
  const allPosts = [
    "billing",
    "contract",
    "file",
    "form",
    "knowledge",
    "messege",
  ];

  return {
    paths: allPosts?.map((slug) => `${slug}`) ?? [],

    fallback: true,
  };
}
