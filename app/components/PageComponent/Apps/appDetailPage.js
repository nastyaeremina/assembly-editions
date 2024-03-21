'use client';

import { AppsDetailMain } from '../../../styles/appsStyles';
import { calculateAverageRate, isEmpty, removeEmptyElement } from '../../../helpers/helpers';
import BackComponent from '../../backComponent/backComponent';
import AppsDetailComponent from '../../appsDetail/appsDetailComponent';
import AppsCardSection from '../../appsCards/appsCardSection';
import ReviewSection from '../../reviewSection/reviewSection';

export default function AppsDetailPage({ appDetail }) {
  const avarageRate = calculateAverageRate(removeEmptyElement(appDetail?.reviewsCollection?.items));

  return (
    <>
      <AppsDetailMain>
        <>
          <BackComponent backtext={'Back to all apps'} href={'/apps/directory'} isDirectorydetail />
          <AppsDetailComponent detail={appDetail?.body} content={{ ...appDetail, avarageRate }} />
          {!isEmpty(removeEmptyElement(appDetail?.reviewsCollection?.items)) && (
            <ReviewSection
              totalReview={appDetail?.reviewsCollection?.total}
              reviewList={appDetail?.reviewsCollection?.items}
              avarageRate={avarageRate}
            />
          )}
          {!isEmpty(removeEmptyElement(appDetail?.relativeAppsCollection?.items)) && (
            <AppsCardSection
              heading={'More apps like this'}
              appList={removeEmptyElement(appDetail?.relativeAppsCollection?.items)}
              isBottom
              is4Card
            />
          )}
        </>
      </AppsDetailMain>
    </>
  );
}
