'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useMemo } from 'react';
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
} from '../../../styles/appsStyles';
import { Container } from '../../../styles/commonStyles';
import { isEmpty } from '../../../helpers/helpers';
import Button from '../../../components/button/button';

export default function AppsDetailPage({ appDetail, relatedApps }) {
  const renderRelatedAppView = useMemo(() => {
    if (isEmpty(relatedApps)) return null;
    return relatedApps?.map((item, index) => {
      return (
        <>
          <CardMain>
            <FeatureCard key={`renderrelatedappsview_index_${index}`}>
              <Link href={`/apps/directory/${item?.slug}`}>
                <FeatureImg>
                  <Image src={item?.logo?.url} alt='main-logo' width={236} height={56} objectFit='contain' />
                </FeatureImg>
                <CardText>
                  <h3>{item?.name}</h3>
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
      <AppsDetailMain>
        <Container>
          <Link href='/apps/directory'>
            <DetailLink>
              <svg width='12' height='12' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M8.42969 1.37109L3.8012 5.99958L8.42969 10.6281'
                  stroke='#757575'
                  stroke-width='1.92854'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
              </svg>
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
              {!isEmpty(appDetail?.appsType) && (
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
                      <span>{appDetail?.appsType}</span>
                      <TooltipWrap className='tooltip'>
                        <Image src='/images/help.svg' alt='bill-icon' width={20} height={20} layout={'fixed'} />
                        <Tooltip className='tooltiptext'>
                          <h5>{appDetail?.appsType}</h5>
                          <p>
                            Partner Apps are products from other companies like Airtable and Calendly that you can embed
                            into your portal so that clients can access them in one place.
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
              <h2>Related apps</h2>
              <CardSection>{renderRelatedAppView}</CardSection>
            </AppWrap>
          )}
        </Container>
      </AppsDetailMain>
    </>
  );
}
