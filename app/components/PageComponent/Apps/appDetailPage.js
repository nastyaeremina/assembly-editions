'use client';

import { useMemo, useState } from 'react';
import { AppsDetailMain } from '../../../styles/appsStyles';
import { calculateAverageRate, isEmpty, removeEmptyElement } from '../../../helpers/helpers';
import AppsDetailComponent from '../../appsDetail/appsDetailComponent';
import ReviewSection from '../../reviewSection/reviewSection';
import NewCTA from '../../cta/newCTA';

export default function AppsDetailPage({ appDetail, isUserAuthenticated, externalLinks = {}, appCTA = null }) {
  const [reviewList, setReviewList] = useState(appDetail?.reviewsCollection?.items || []);

  //calculate average rate
  const averageRate = useMemo(() => {
    return calculateAverageRate(removeEmptyElement(reviewList)) || 0;
  }, [reviewList]);

  return (
    <div className='component-wrapper'>
      <>
        <AppsDetailComponent
          detail={appDetail?.guideArticle}
          reviewList={reviewList}
          content={{ ...appDetail, averageRate }}
          isUserAuthenticated={isUserAuthenticated}
          externalLinks={externalLinks}
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
            isReviewVisible={appDetail.isReviewVisible}
            setReviewList={setReviewList}
          />
        )}
        {!isEmpty(appCTA) && (
          <NewCTA
            title={appCTA.title}
            description={appCTA.description}
            primaryButtonText={appCTA.primaryButtonText}
            primaryButtonLink={appCTA.primaryButtonLink}
            secondaryButtonText={appCTA.secondaryButtonText}
            secondaryButtonLink={appCTA.secondaryButtonLink}
          />
        )}
      </>
    </div>
  );
}
