'use client';

import { AppsDetailMain } from '../../../styles/appsStyles';
import { calculateAverageRate, isEmpty, removeEmptyElement } from '../../../helpers/helpers';
import BackComponent from '../../backComponent/backComponent';
import AppsDetailComponent from '../../appsDetail/appsDetailComponent';
import AppsCardSection from '../../appsCards/appsCardSection';
import ReviewSection from '../../reviewSection/reviewSection';

export default function AppsDetailPage({ appDetail, relatedAppList }) {
  const avarageRate = calculateAverageRate(removeEmptyElement(appDetail?.reviewsCollection?.items));
  return (
    <>
      <AppsDetailMain>
        <>
          <BackComponent backtext={'Back to all apps'} href={'/apps/directory'} isDirectorydetail />
          <AppsDetailComponent detail={appDetail?.guideArticle} content={{ ...appDetail, avarageRate }} />
          {!isEmpty(removeEmptyElement(appDetail?.reviewsCollection?.items)) && (
            <ReviewSection
              totalReview={appDetail?.reviewsCollection?.total}
              reviewList={appDetail?.reviewsCollection?.items}
              avarageRate={avarageRate}
            />
          )}
          {!isEmpty(relatedAppList) && (
            <AppsCardSection
              heading={'More apps like this'}
              appList={relatedAppList}
              isBottom
              is4Card
              isAppdetail
              isFeature
            />
          )}
        </>
      </AppsDetailMain>
    </>
  );
}
