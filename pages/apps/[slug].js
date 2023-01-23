import Layout from '/components/layout';
import Link from 'next/link';
import { NextSeo } from 'next-seo';
import Navbar from '../../components/navbar/navbar';
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
  ImageWrap,
  AppsDetailWrap,
  FirstImg,
  TooltipWrap,
  Tooltip,
  CardMain
} from '../../styles/appsStyles';
import { Container, PrimaryButton } from '../../styles/commonStyles';
import CTA from '../../components/cta/cta';
import Image from 'next/image';
import {
  getAllDataIntegrationAppWithSlug,
  getAllPartnerApps,
  getAllPartnerAppsWithSlug,
  getPartnerAppDetail
} from '../../lib/contentful-partnerApps';
import { useMemo } from 'react';
import { isEmpty } from '../../helpers/helpers';
import Button from '../../components/button/button';
import SEO from '../../components/seo';

export default function AppsDetail({ appDetail, relatedApps }) {
  const renderRelatedAppView = useMemo(() => {
    if (isEmpty(relatedApps)) return null;
    return relatedApps?.map((item, index) => {
      return (
        <>
          <CardMain>
            <FeatureCard key={`renderrelatedappsview_index_${index}`}>
              <Link href={`/apps/${item?.slug}`}>
                <FeatureImg>
                  <Image src={item?.logo?.url} alt='main-logo' width={236} height={56} objectFit='contain' />
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
          </CardMain>
        </>
      );
    });
  }, [relatedApps]);

  const renderCategoryView = useMemo(() => {
    if (isEmpty(appDetail?.partnerAppCategoriesCollection?.items)) return null;
    return appDetail?.partnerAppCategoriesCollection?.items?.map((item, index) => {
      return (
        <RightTxt key={`rendercategoryview_index_${index}`}>
          <h4>{item?.name}</h4>
        </RightTxt>
      );
    });
  }, [appDetail?.partnerAppCategoriesCollection?.items]);

  return (
    <>
      <SEO
        seoData={{
          seoTitle: `Connect ${appDetail?.name} to Copilot in 2 minutes • Copilot`,
          description: appDetail?.description
        }}
      />

      <Layout>
        <Navbar />
        <AppsDetailMain>
          <Container>
            <Link href='/apps'>
              <DetailLink>
                <Image src='/images/leftarrow.svg' alt='bill-icon' width={12} height={12} layout={'fixed'} />
                <p>Back to all Apps</p>
              </DetailLink>
            </Link>
          </Container>
          <AppDetailCard>
            <Container>
              <AppsDetailWrap>
                <FirstImg>
                  <Image src={appDetail?.logo?.url} alt='bill-icon' width={309} height={68} />
                </FirstImg>
                <p>{appDetail?.description}</p>
                <Button
                  text={'Setup instructions'}
                  hoverColor={'rgba(255, 255, 255, 0.8)'}
                  href={appDetail?.setupInstructionsLink ?? ''}
                />
              </AppsDetailWrap>
            </Container>
          </AppDetailCard>
          <Container>
            <DetailMain>
              <DetailWrap>
                <ImageWrap>
                  <Image src={appDetail?.preview?.url} alt='bill-icon' width={869} height={543} layout={'fixed'} />
                </ImageWrap>
              </DetailWrap>

              <DetailRight>
                {!isEmpty(appDetail?.appType) && (
                  <RightWrap>
                    <Image
                      src='/images/linesmall.svg'
                      alt='bill-icon'
                      width={45}
                      height={1}
                      layout={'fixed'}
                      className='mr10'
                    />
                    <DetailTxt>
                      <p>Type</p>
                      <HelpWrap>
                        <span>{appDetail?.appType}</span>
                        <TooltipWrap className='tooltip'>
                          <Image src='/images/help.svg' alt='bill-icon' width={20} height={20} layout={'fixed'} />
                          <Tooltip className='tooltiptext'>
                            <h5>{appDetail?.appType}</h5>
                            <p>
                              Partner Apps are products from other companies like Airtable and Calendly that you can
                              embed into your portal so that clients can access them in one place.
                            </p>
                          </Tooltip>
                        </TooltipWrap>
                      </HelpWrap>
                    </DetailTxt>
                  </RightWrap>
                )}
                {!isEmpty(appDetail?.website) && (
                  <RightWrap>
                    <Image
                      src='/images/linesmall.svg'
                      alt='bill-icon'
                      width={45}
                      height={1}
                      layout={'fixed'}
                      className='mr10'
                    />
                    <DetailTxt>
                      <p>Website</p>

                      <Link
                        href={
                          appDetail?.website.startsWith('http://') || appDetail?.website.startsWith('https://')
                            ? appDetail?.website
                            : `https://${appDetail?.website}`
                        }
                        target='_blank'>
                        {appDetail?.website}
                      </Link>
                    </DetailTxt>
                  </RightWrap>
                )}
                {!isEmpty(appDetail?.partnerAppCategoriesCollection?.items) && (
                  <RightWrap>
                    <Image
                      src='/images/linesmall.svg'
                      alt='bill-icon'
                      width={45}
                      height={1}
                      layout={'fixed'}
                      className='mr10'
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

export async function getStaticProps({ params, preview = false }) {
  const appDetail = (await getPartnerAppDetail(params?.slug, preview)) ?? {};
  const allPosts = (await getAllPartnerAppsWithSlug()) ?? [];

  let relatedApps = [];
  if (!isEmpty(appDetail)) {
    const allPosts = (await getAllPartnerApps(appDetail?.appType, preview)) ?? [];
    const categoryList = appDetail?.partnerAppCategoriesCollection?.items?.map((item) => item?.slug);
    relatedApps = allPosts
      ?.filter(
        (item) =>
          item?.partnerAppCategoriesCollection &&
          item?.partnerAppCategoriesCollection?.items?.some((element) => categoryList.includes(element?.slug)) &&
          item?.slug !== params?.slug
      )
      ?.slice(0, 4);
  }
  return {
    props: { appDetail, relatedApps }
  };
}

export async function getStaticPaths() {
  const allPosts = (await getAllPartnerAppsWithSlug()) ?? [];
  return {
    paths: allPosts?.map(({ slug }) => `/apps/${slug}`) ?? [],

    fallback: true
  };
}
