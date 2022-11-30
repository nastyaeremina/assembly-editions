import Layout from "/components/layout";
import Link from "next/link";
import { NextSeo } from "next-seo";
import { getAllBlogs } from "../../lib/contentful-blogs";
import Navbar from "../../components/navbar/navbar";
import {
  HeroSection,
  FeatureSection,
  FeatureWrap,
  Input,
  Catagory,
  Catagoryitem,
  FeatureLeft,
  LeftWrap,
  InputWrap,
  FeatureRight,
  FeatureMenu,
  FeatureCard,
  CardText,
  CardEnd,
  FeatureImg,
  Featured,
  ExtensionsSection,
  ExtensionCard,
  CardSub,
  CardInfo,
  SchedulingApps,
  AppsTitle,
  BuildWrap,
  BuildAppsDetail,
  OtherWrap,
} from "../../styles/appsStyles";
import {
  Container,
  PrimaryButton,
  SecondryButton,
} from "../../styles/commonStyles";
import CTA from "../../components/cta/cta";
import Image from "next/image";
import FAQ from "../../components/faq/faq";
import {
  getAllDataIntegrationApp,
  getAllParrtnerAppsCategories,
  getAllPartnerApps,
  getFeaturedPartnerAppsContent,
} from "../../lib/contentful-partnerApps";
import { useCallback, useEffect, useMemo, useState } from "react";
import { isEmpty } from "../../helpers/helpers";

export default function Extensions({
  featuredApps,
  allCategoryWithPost,
  dataIntegrationApps,
}) {
  const [selected_category, setSelected_category] = useState();
  useEffect(() => {
    if (typeof window !== "undefined") {
      console.log(window.location);
      let hash = window.location.hash;
      let result = hash.replace(/#/g, "");
      setSelected_category(result);
    }
  }, []);
  const renderFeaturedView = useMemo(() => {
    if (isEmpty(featuredApps)) return null;
    return featuredApps?.map((item, index) => {
      return (
        <FeatureCard key={`featuredview_index_${index}`}>
          <Link href={`/apps/${item?.slug}`}>
            <FeatureImg>
              <Image
                src={item?.logo?.url}
                alt="main-logo"
                width={236}
                height={56}
              />
            </FeatureImg>
            <CardText>
              <h4>{item?.name}</h4>
              <p>{item?.description}</p>
            </CardText>
            <CardEnd>
              <p>{item?.partnerAppCategoriesCollection?.items[0]?.name}</p>
            </CardEnd>
          </Link>
        </FeatureCard>
      );
    });
  }, [featuredApps]);

  const renderCategoryList = useMemo(() => {
    if (isEmpty(allCategoryWithPost)) return null;
    return allCategoryWithPost?.map((item, index) => {
      let isActive = item?.category?.slug === selected_category;
      return (
        <Catagoryitem key={`categorylist_index_${index}`} isActive={isActive}>
          <Link
            href={`#${item?.category?.slug}`}
            onClick={() => {
              setSelected_category(item?.category?.slug);
            }}
          >
            {item?.category?.name}
          </Link>
        </Catagoryitem>
      );
    });
  }, [allCategoryWithPost, selected_category]);

  const renderPartnerAppsView = useCallback((appList) => {
    if (isEmpty(appList)) return null;
    return appList?.map((item, index) => {
      return (
        <CardSub key={`partnerappview_index${index}`}>
          <Link href={`/apps/${item?.slug}`}>
            <CardInfo>
              <Image
                src={item?.icon?.url}
                alt="red-icon"
                width={35}
                height={35}
                layout={"fixed"}
              />
              <h4>{item?.name}</h4>
            </CardInfo>
            <p>{item?.description}</p>
          </Link>
        </CardSub>
      );
    }, []);
  }, []);

  const renderAllCategoryAppsView = useMemo(() => {
    if (isEmpty(allCategoryWithPost)) return null;
    return allCategoryWithPost?.map((item, index) => {
      return (
        <ExtensionsSection
          id={item?.category?.slug}
          key={`allCategoryappsview_index_${index}`}
        >
          <h3>{item?.category?.name}</h3>
          <ExtensionCard>{renderPartnerAppsView(item?.list)}</ExtensionCard>
        </ExtensionsSection>
      );
    });
  }, [allCategoryWithPost, renderPartnerAppsView]);

  const renderDataIntegrationApps = useMemo(() => {
    if (isEmpty(dataIntegrationApps)) return null;
    return renderPartnerAppsView(dataIntegrationApps);
  }, [dataIntegrationApps, renderPartnerAppsView]);

  return (
    <>
      <NextSeo
        title="copilot blogs to keep you up with the  Sales Tactics!"
        description="Sale is a prominent part of any business & nothing can be better than getting tried tactics for it. So get all that you want to know about sales from our Blogs."
      />
      <Layout>
        <Navbar />
        <HeroSection>
          <Container>
            <h2>App Directory</h2>
            <p>Try Copilot free for 14 days, no credit card required</p>
            <PrimaryButton>
              <Link href="https://dashboard.copilot.com/onboarding">
                Start Trial
              </Link>
            </PrimaryButton>
          </Container>
        </HeroSection>
        <FeatureSection>
          <Container>
            <FeatureWrap>
              <FeatureLeft>
                <LeftWrap>
                  <InputWrap>
                    <Image
                      src="/images/searchicon.svg"
                      alt="search-icon"
                      width={20}
                      height={20}
                    />
                    <Input placeholder="Find an app" />
                  </InputWrap>
                  <Catagory>
                    <h4>Partner Apps</h4>
                    <Catagoryitem>
                      <Link href={"#Brief-Section"}>Featured</Link>
                    </Catagoryitem>
                    {renderCategoryList}
                  </Catagory>
                  <OtherWrap>
                    <h4>Other</h4>
                    <Catagoryitem>
                      <Link href={"#Integrations-Section"}>
                        Data Integrations
                      </Link>
                    </Catagoryitem>
                    <Catagoryitem>
                      <Link href={"#custome-apps"}>Custom Apps</Link>
                    </Catagoryitem>
                  </OtherWrap>
                </LeftWrap>
              </FeatureLeft>

              <FeatureRight>
                {!isEmpty(featuredApps) && (
                  <Featured id="Brief-Section">
                    <h3>Featured</h3>
                    <FeatureMenu>{renderFeaturedView}</FeatureMenu>
                  </Featured>
                )}
                {renderAllCategoryAppsView}

                {!isEmpty(dataIntegrationApps) && (
                  <ExtensionsSection id="Integrations-Section">
                    <AppsTitle>
                      <h3>Data Integrations</h3>
                      <p>Integrations</p>
                    </AppsTitle>
                    <ExtensionCard>{renderDataIntegrationApps}</ExtensionCard>
                  </ExtensionsSection>
                )}
                <ExtensionsSection id="custome-apps">
                  <AppsTitle>
                    <h3>Custom Apps</h3>
                  </AppsTitle>
                  <BuildWrap>
                    <BuildAppsDetail>
                      <h5>Build your own app</h5>
                      <p>
                        A custom app is a web application that can be embedded
                        into your portal and receives information about the
                        current user or company. With that capability you can
                        render custom content automatically depending on the
                        user that is currently signed in.
                      </p>
                      <SecondryButton>
                        <Link href="/">Read API docs</Link>
                      </SecondryButton>
                    </BuildAppsDetail>
                  </BuildWrap>
                </ExtensionsSection>
              </FeatureRight>
            </FeatureWrap>
          </Container>
        </FeatureSection>
        <FAQ />
        <CTA />
      </Layout>
    </>
  );
}

export async function getServerSideProps({ preview = false }) {
  const allPosts = (await getAllPartnerApps(preview)) ?? [];
  const allCategory = (await getAllParrtnerAppsCategories(preview)) ?? [];
  const dataIntegrationApps = (await getAllDataIntegrationApp(preview)) ?? [];

  const featuredApps = allPosts?.filter((item) => item?.isFeatured === true);

  let allCategoryWithPost = [];

  allCategory?.forEach((item) => {
    const filterList = allPosts?.filter((element) =>
      element?.partnerAppCategoriesCollection?.items?.some(
        (category) => category?.slug === item?.slug
      )
    );
    if (!isEmpty(filterList))
      allCategoryWithPost?.push({ category: item, list: filterList });
  });

  return {
    props: {
      featuredApps,
      allCategoryWithPost,
      dataIntegrationApps,
    },
  };
}
