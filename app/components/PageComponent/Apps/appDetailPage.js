'use client';

import { useMemo, useState } from 'react';
import { AppsDetailMain } from '../../../styles/appsStyles';
import { calculateAverageRate, isEmpty, removeEmptyElement } from '../../../helpers/helpers';
import BackComponent from '../../backComponent/backComponent';
import AppsDetailComponent from '../../appsDetail/appsDetailComponent';
import AppsCardSection from '../../appsCards/appsCardSection';
import ReviewSection from '../../reviewSection/reviewSection';

export default function AppsDetailPage({ appDetail, relatedAppList, isUserAuthenticated }) {
  const [reviewList, setReviewList] = useState(appDetail?.reviewsCollection?.items || []);

  //calculate average rate
  const averageRate = useMemo(() => {
    return calculateAverageRate(removeEmptyElement(reviewList)) || 0;
  }, [reviewList]);

  return (
    <>
      <AppsDetailMain>
        <>
          <BackComponent backtext={'Back to all apps'} href={'/apps/directory'} isDirectorydetail />
          <AppsDetailComponent
            detail={appDetail?.guideArticle}
            reviewList={reviewList}
            content={{ ...appDetail, averageRate }}
            isUserAuthenticated={isUserAuthenticated}
          />
          {/* show review section only if user is authenticated (case of no review exist user can add first one)
          show review section if review list is not exist */}
          {(isUserAuthenticated || !isEmpty(removeEmptyElement(reviewList))) && (
            <ReviewSection
              totalReview={appDetail?.reviewsCollection?.total}
              reviewList={reviewList}
              averageRate={averageRate}
              isAuthenticated={isUserAuthenticated}
              appId={appDetail?.sys.id}
              setReviewList={setReviewList}
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
