import React from 'react';
import { Container } from '../../styles/commonStyles';
import {
  APPS_TYPE,
  AppInfoMessage,
  ClientAppInfoMessage,
  EmbedInfoMessage,
  InternalAppInfoMessage
} from '../../constants/constant';
import { calculateAverageRate, isEmpty, removeEmptyElement } from '../../helpers/helpers';
import { CardListSection, DirectoryCardSection, SectionHeader, SectionHeading } from './styles';
import AppsCard from './appsCards';

export default function AppsCardSection({ isBottom, is4Card, appList, heading, caption, isSearchEmpty }) {
  const isShowHeader = !isEmpty(heading) || !isEmpty(caption);
  return (
    <Container>
      <DirectoryCardSection isSearchEmpty={isSearchEmpty}>
        {isShowHeader && (
          <SectionHeader>
            {(!isEmpty(heading) || !isEmpty(caption)) && (
              <SectionHeading>
                {!isEmpty(heading) && <h3>{heading}</h3>}
                {!isEmpty(caption) && <p>{caption}</p>}
              </SectionHeading>
            )}
          </SectionHeader>
        )}
        <CardListSection is4Card={is4Card}>
          {appList?.map((item, index) => {
            const avrageRate = calculateAverageRate(removeEmptyElement(item?.reviewsCollection?.items));
            const appsType = item?.appsType;
            return (
              <AppsCard
                key={index}
                link={`/apps/directory/${item.slug}`}
                title={item?.name}
                rate={avrageRate}
                reviews={item?.reviewsCollection?.total}
                description={item?.description}
                isBottom={isBottom}
                icon={item?.icon?.url}
                pricingStatus={item?.pricing}
                appType={item?.appType}
                appTypeInfo={item?.appType === APPS_TYPE.EMBED ? EmbedInfoMessage : AppInfoMessage}
                appVisibility={appsType === APPS_TYPE.CLIENT ? 'Client-facing' : 'Internal-facing'}
                appVisibilityInfo={appsType === APPS_TYPE.CLIENT ? ClientAppInfoMessage : InternalAppInfoMessage}
              />
            );
          })}
        </CardListSection>
      </DirectoryCardSection>
    </Container>
  );
}
