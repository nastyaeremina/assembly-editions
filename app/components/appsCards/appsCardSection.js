import React from 'react';
import {
  APPS_TYPE,
  AppInfoMessage,
  ClientAppInfoMessage,
  EmbedInfoMessage,
  InternalAppInfoMessage
} from '../../constants/constant';
import { calculateAverageRate, isEmpty, removeEmptyElement } from '../../helpers/helpers';
import { CardListSection, DirectoryCardSection, SectionHeading } from './styles';
import AppsCard from './appsCards';

export default function AppsCardSection({
  isBottom,
  appList,
  heading,
  caption,
  hasPadding = false,
  hideHeadingOnMobile = false
}) {
  const isShowHeader = !isEmpty(heading) || !isEmpty(caption);
  return (
    <DirectoryCardSection>
      {isShowHeader && (
        <>
          {(!isEmpty(heading) || !isEmpty(caption)) && (
            <SectionHeading hasPadding={hasPadding} hideOnMobile={hideHeadingOnMobile}>
              {!isEmpty(heading) && <h3>{heading}</h3>}
              {!isEmpty(caption) && <p>{caption}</p>}
            </SectionHeading>
          )}
        </>
      )}
      {appList?.length > 0 && (
        <CardListSection>
          {appList?.map((item, index) => {
            const averageRate = calculateAverageRate(removeEmptyElement(item?.reviewsCollection?.items));
            const appsType = item?.appsType;
            return (
              <AppsCard
                key={index}
                link={`/apps/directory/${item.slug}`}
                title={item?.name}
                rate={averageRate.toFixed(1)}
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
      )}
    </DirectoryCardSection>
  );
}
