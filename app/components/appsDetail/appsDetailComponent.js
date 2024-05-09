import React from 'react';
import Image from 'next/image';
import moment from 'moment';
import { Container } from '../../styles/commonStyles';
import AboutComponent from '../template/aboutComponent';
import { isEmpty, removeEmptyElement } from '../../helpers/helpers';
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
  LeftContent,
  RightContent,
  Section,
  Title
} from './styles';
import ImageSection from './ImageSection';
import AppsDetailDescription from './appsDetailDescription';
import Button from '../button/button';
import { black, whiteColor } from '../../styles/color';

export default function AppsDetailComponent({ detail, content, isUserAuthenticated }) {
  const imageList = removeEmptyElement(content?.imageListCollection?.items);
  return (
    <Container>
      <AppDetail>
        <Section>
          <DetailTitleSection>
            <Title>
              {!isEmpty(content?.icon?.url) && (
                <AppLogo>
                  <Image src={content?.icon?.url} alt='app-logo' width={80} height={80} />
                </AppLogo>
              )}
              <h3>{content?.name}</h3>
            </Title>
            <Caption>{content?.description}</Caption>
          </DetailTitleSection>

          {isUserAuthenticated && (
            <Button
              text={'Install'}
              href={`https://dashboard.copilot.com/install/${content?.slug}`}
              target='_blank'
              className={'install-button'}
              bgColor={black}
              fontColor={whiteColor}
              borderColor={black}
              hoverColor={'rgba(255, 255, 255,0.8)'}
            />
          )}
        </Section>
        <DetailContent>
          {(!isEmpty(imageList) || !isEmpty(detail?.content?.json)) && (
            <LeftContent>
              {!isEmpty(imageList) && <ImageSection imageList={imageList} />}
              {!isEmpty(detail?.content?.json) && (
                <AppsDetailDescription
                  jsonData={detail?.content?.json}
                  assets={detail?.content?.links?.assets?.block}
                  isAppdetail
                />
              )}
            </LeftContent>
          )}
          <RightContent>
            <AboutComponent
              isDirectory={true}
              content={content}
              data={[
                {
                  label: 'Launched',
                  value: isEmpty(content?.launchDate) ? '' : moment(content?.launchDate).format('MMMM DD, YYYY')
                },
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
                  value:
                    content.reviewsCollection?.total !== 0
                      ? `${content.avarageRate}/5 (${content.reviewsCollection?.total} reviews)`
                      : ''
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
        </DetailContent>
      </AppDetail>
    </Container>
  );
}
