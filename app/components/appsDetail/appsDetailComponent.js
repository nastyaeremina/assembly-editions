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
  Title
} from './styles';
import TemplateDetail from '../template/templateDetail';
import ImageSection from './ImageSection';
export default function AppsDetailComponent({ detail, content }) {
  const imageList = removeEmptyElement(content?.imageListCollection?.items);
  return (
    <Container>
      <AppDetail>
        <DetailTitleSection>
          <Title>
            <AppLogo>
              <Image src={content?.icon?.url} alt='app-logo' width={80} height={80} />
            </AppLogo>
            <h3>{content?.name}</h3>
          </Title>
          <Caption>{content?.description}</Caption>
        </DetailTitleSection>
        <DetailContent>
          {!isEmpty(imageList) && (
            <LeftContent>
              <ImageSection imageList={imageList} /> <TemplateDetail content={detail} />
            </LeftContent>
          )}
          <RightContent>
            <AboutComponent
              isDirectory={true}
              content={content}
              buttonText='Read setup instructions'
              buttonLink={content.setupInstructionsLink}
              data={[
                {
                  label: 'Launched',
                  value: isEmpty(content?.launchDate) ? '' : moment(content?.launchDate).format('MMMM DD, YYYY')
                },
                {
                  label: 'Type',
                  value: content.appType,
                  labelInfo: content.appType === APPS_TYPE.EMBED ? EmbedInfoMessage : AppInfoMessage
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
