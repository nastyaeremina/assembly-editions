import React from 'react';
import Image from 'next/image';
import { Container, Content } from '../../styles/commonStyles';
import AboutComponent from '../template/aboutComponent';
import { isEmpty, removeEmptyElement } from '../../helpers/helpers';
import { EXTERNAL_LINK_KEYS } from '../../constants/constant';
import {
  APPS_TYPE,
  AppInfoMessage,
  ClientAppInfoMessage,
  EmbedInfoMessage,
  InternalAppInfoMessage
} from '../../constants/constant';
import {
  AppDetail,
  AppLogo,
  Caption,
  DetailContent,
  DetailTitleSection,
  HeroSectionWrapper,
  LeftContent,
  MainHeroSectionWrapper,
  RightContent,
  Section,
  Title
} from './styles';
import ImageSection from './ImageSection';
import Breadcrumbs from '../Breadcrumbs/breadcrumbs';
import ButtonV2Component from '../button/buttonV2/buttonV2';
import RichTextDetail from '../richTextDetail/richText';

export default function AppsDetailComponent({
  detail,
  content,
  isUserAuthenticated,
  reviewList,
  externalLinks = {},
  hasTopbar
}) {
  const imageList = removeEmptyElement(content?.imageListCollection?.items);

  const BreadcrumbItem = [{ label: 'All apps', href: '/apps/directory' }];
  return (
    <Container>
      <AppDetail>
        <MainHeroSectionWrapper>
          <Section>
            <HeroSectionWrapper>
              <Breadcrumbs breadcrumbs={BreadcrumbItem} currentLabel={content?.name} />
              <DetailTitleSection>
                <Title>
                  {!isEmpty(content?.icon?.url) && (
                    <AppLogo>
                      <Image src={content?.icon?.url} alt='app-logo' width={80} height={80} />
                    </AppLogo>
                  )}
                  <h2>{content?.name}</h2>
                </Title>
                <Caption>{content?.description}</Caption>
              </DetailTitleSection>
            </HeroSectionWrapper>

            {isUserAuthenticated && (
              <ButtonV2Component
                title={'Install'}
                href={`${externalLinks?.[EXTERNAL_LINK_KEYS.DashboardLink] || ''}/install/${content?.slug}`}
                target='_blank'
              />
            )}
          </Section>
          {!isEmpty(imageList) && <ImageSection imageList={imageList} />}
        </MainHeroSectionWrapper>

        <DetailContent>
          <RightContent hasTopbar={hasTopbar}>
            <AboutComponent
              isDirectory={true}
              content={content}
              showTitle={false}
              data={[
                {
                  label: 'Type',
                  value: content.appType,
                  valueInfo: content.appType === APPS_TYPE.EMBED ? EmbedInfoMessage : AppInfoMessage
                },
                {
                  label: 'App Visibility',
                  value: content.appsType,
                  valueInfo: content.appsType === APPS_TYPE.CLIENT ? ClientAppInfoMessage : InternalAppInfoMessage
                },
                {
                  label: 'Requirements',
                  value: content.requirements
                },
                {
                  label: 'Rating',
                  value: reviewList?.length !== 0 ? `${content.averageRate}/5 (${reviewList?.length} reviews)` : ''
                },
                {
                  label: 'Pricing',
                  value: content.pricing
                },
                {
                  label: 'Built by',
                  value: content.builtBy,
                  link: content.website
                }
              ]}
            />
          </RightContent>
          {!isEmpty(detail?.content?.json) && (
            <LeftContent>
              {!isEmpty(detail?.content?.json) && (
                <Content>
                  <RichTextDetail data={detail?.content?.json} assets={detail?.content?.links} />
                </Content>
              )}
            </LeftContent>
          )}
        </DetailContent>
      </AppDetail>
    </Container>
  );
}
