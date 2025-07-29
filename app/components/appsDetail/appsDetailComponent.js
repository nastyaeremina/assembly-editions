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
import Button from '../button/button';
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
import { COPILOT_DASHBOARD_LINK } from '../../constants/externalLinks';

export default function AppsDetailComponent({ detail, content, isUserAuthenticated, reviewList }) {
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
              href={`${COPILOT_DASHBOARD_LINK}/install/${content?.slug}`}
              target='_blank'
              className={'install-button'}
              bgColor={'--black'}
              fontColor={'--white'}
              borderColor={'--black'}
              hoverColor={'--secondary-hover-color'}
            />
          )}
        </Section>
        <DetailContent>
          {(!isEmpty(imageList) || !isEmpty(detail?.content?.json)) && (
            <LeftContent>
              {!isEmpty(imageList) && <ImageSection imageList={imageList} />}
              {!isEmpty(detail?.content?.json) && (
                <AppsDetailDescription jsonData={detail?.content?.json} assets={detail?.content?.links} isAppdetail />
              )}
            </LeftContent>
          )}
          <RightContent>
            <AboutComponent
              isDirectory={true}
              content={content}
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
        </DetailContent>
      </AppDetail>
    </Container>
  );
}
