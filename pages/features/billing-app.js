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
import { FEATURES_BILLING_ID, FEATURES_BILLING_TAB_ID, HEADER_LIST, HOME_MODULE_LIST, MODULE_COLOR_LIST, MODULE_GRADIENT_IMAGE_LIST, MUDULE_LIST, NAVBAR_COLOR_LIST } from "../../constants/constant";
import { useMemo } from "react";
import { getTabPosts } from "../../lib/contentful-tabs";
import { BottomFunction } from "../../components/content/styles";
import TabView from "../../components/tab/tab";
import { getFeatureById } from "../../lib/contentful-features";

const CURRENT_MODULE = MUDULE_LIST.BILLING
export default function MessagingApp({ details }) {
    const renderHeroSection = useMemo(() => {
        return (
            <>
                <Navbar isModule={true} headerIndex={HEADER_LIST.BILLING} />
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
            </>
        );
    }, []);

    return (
        <>
            <NextSeo
                title="Copilot - It’s all about connection"
                description="copilot offers client portal software solution to manage sales reporting, management, marketing, improve customer relationships and more. Get the best free CRM system for your business."
            />
            <Layout>
                {renderHeroSection}
                <Content />
                <Container>
                    <BottomFunction>
                        <TabView
                            tabId={FEATURES_BILLING_TAB_ID}
                            tabData={details?.clientFeaturesCollection?.items || []}
                            bgColor={MODULE_COLOR_LIST[HOME_MODULE_LIST['Billing']]?.bgColor}
                            textColor={MODULE_COLOR_LIST[HOME_MODULE_LIST['Billing']]?.fontColor} />
                    </BottomFunction>
                </Container>
                <Tools />
                <Quote gradientImage={MODULE_GRADIENT_IMAGE_LIST[CURRENT_MODULE]} />
                <Client currentModule={CURRENT_MODULE} />
                <CTA moduleName={CURRENT_MODULE} colorList={NAVBAR_COLOR_LIST[HEADER_LIST.BILLING]} />
            </Layout>
        </>
    );
}

export async function getServerSideProps({ preview = false }) {
    const details = (await getFeatureById(FEATURES_BILLING_ID, preview)) ?? [];
    return {
        props: { details },
    };
}
