import Layout from "/components/layout";
import Link from "next/link";
import { NextSeo } from "next-seo";
import Navbar from "../../components/navbar/navbar";
import {
  DetailLink,
  AppsDetailMain,
  AppDetailCard,
  DetailWrap,
  DetailMain,
  DetailRight,
  RightWrap,
  DetailTxt,
  HelpWrap,
  RightTxt,
  AppWrap,
  CardSection,
  FeatureImg,
  CardText,
  CardEnd,
  FeatureCard,
} from "../../styles/appsStyles";
import { Container, PrimaryButton } from "../../styles/commonStyles";
import CTA from "../../components/cta/cta";
import Image from "next/image";
import {
  getAllDataIntegrationAppWithSlug,
  getAllPartnerApps,
  getAllPartnerAppsWithSlug,
} from "../../lib/contentful-partnerApps";
import { useMemo } from "react";
import { isEmpty } from "../../helpers/helpers";

export default function AppsDetail({ appDetail, relatedApps }) {
  const renderRelatedAppView = useMemo(() => {
    if (isEmpty(relatedApps)) return null;
    return relatedApps?.map((item, index) => {
      return (
        <FeatureCard key={`renderrelatedappsview_index_${index}`}>
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
  }, [relatedApps]);

  const renderCategoryView = useMemo(() => {
    if (isEmpty(appDetail?.partnerAppCategoriesCollection?.items)) return null;
    return appDetail?.partnerAppCategoriesCollection?.items?.map(
      (item, index) => {
        return (
          <RightTxt key={`rendercategoryview_index_${index}`}>
            <h4>{item?.name}</h4>
          </RightTxt>
        );
      }
    );
  }, [appDetail?.partnerAppCategoriesCollection?.items]);

  return (
    <>
      <NextSeo
        title="copilot blogs to keep you up with the  Sales Tactics!"
        description="Sale is a prominent part of any business & nothing can be better than getting tried tactics for it. So get all that you want to know about sales from our Blogs."
      />
      <Layout>
        <Navbar />
        <AppsDetailMain>
          <Container>
            <Link href="/apps">
              <DetailLink>
                <Image
                  src="/images/leftarrow.svg"
                  alt="bill-icon"
                  width={12}
                  height={12}
                  layout={"fixed"}
                />
                <p>Back to all Apps</p>
              </DetailLink>
            </Link>
          </Container>
          <AppDetailCard>
            <Container>
              <Image
                src={appDetail?.logo?.url}
                alt="bill-icon"
                width={350}
                height={68}
                layout={"fixed"}
              />
              <p>{appDetail?.description}</p>
              <PrimaryButton>
                <Link
                  href={appDetail?.setupInstructionsLink ?? ""}
                  target="_blank"
                >
                  Setup instructions
                </Link>
              </PrimaryButton>
            </Container>
          </AppDetailCard>
          <Container>
            <DetailMain>
              <DetailWrap>
                <Image
                  src={appDetail?.preview?.url}
                  alt="bill-icon"
                  width={869}
                  height={543}
                  layout={"fixed"}
                />
              </DetailWrap>
              <DetailRight>
                <RightWrap>
                  <Image
                    src="/images/linesmall.svg"
                    alt="bill-icon"
                    width={45}
                    height={1}
                    layout={"fixed"}
                    className="mr10"
                  />
                  <DetailTxt>
                    <p>Type</p>
                    <HelpWrap>
                      <span>App</span>
                      <Image
                        src="/images/help.svg"
                        alt="bill-icon"
                        width={20}
                        height={20}
                        layout={"fixed"}
                      />
                    </HelpWrap>
                  </DetailTxt>
                </RightWrap>
                {!isEmpty(appDetail?.website) && (
                  <RightWrap>
                    <Image
                      src="/images/linesmall.svg"
                      alt="bill-icon"
                      width={45}
                      height={1}
                      layout={"fixed"}
                      className="mr10"
                    />
                    <DetailTxt>
                      <p>Website</p>

                      <Link
                        href={`https://${appDetail?.website}`}
                        target="_blank"
                      >
                        {appDetail?.website}
                      </Link>
                    </DetailTxt>
                  </RightWrap>
                )}
                {!isEmpty(appDetail?.partnerAppCategoriesCollection?.items) && (
                  <RightWrap>
                    <Image
                      src="/images/linesmall.svg"
                      alt="bill-icon"
                      width={45}
                      height={1}
                      layout={"fixed"}
                      className="mr10"
                    />

                    <DetailTxt>
                      <p>Categories</p>
                      {renderCategoryView}
                    </DetailTxt>
                  </RightWrap>
                )}
              </DetailRight>
            </DetailMain>
            {!isEmpty(relatedApps) && (
              <AppWrap>
                <h3>Related apps</h3>
                <CardSection>{renderRelatedAppView}</CardSection>
              </AppWrap>
            )}
          </Container>
        </AppsDetailMain>

        <CTA />
      </Layout>
    </>
  );
}

export async function getServerSideProps({ params, preview = false }) {
  const allPosts = (await getAllPartnerApps(preview)) ?? [];
  const appDetail = allPosts?.filter(
    (item) => item?.slug === params?.slug
  )?.[0];
  const categoryList = appDetail?.partnerAppCategoriesCollection?.items?.map(
    (item) => item?.slug
  );
  const relatedApps = allPosts
    ?.filter(
      (item) =>
        item?.partnerAppCategoriesCollection?.items?.some((element) =>
          categoryList.includes(element?.slug)
        ) && item?.slug !== params?.slug
    )
    ?.slice(0, 4);
  return {
    props: { appDetail, relatedApps },
  };
}

export async function getServerSidePaths() {
  const allAppsSlug = (await getAllPartnerAppsWithSlug()) ?? [];
  const allDataIntegrationAppsSlug =
    (await getAllDataIntegrationAppWithSlug()) ?? [];
  const allPosts = { ...allAppsSlug, ...allDataIntegrationAppsSlug };
  return {
    paths: allPosts?.map((slug) => `${slug}`) ?? [],

    fallback: true,
  };
}
