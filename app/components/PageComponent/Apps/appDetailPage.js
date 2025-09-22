'use client';

import { useMemo, useState } from 'react';
import { AppsDetailMain } from '../../../styles/appsStyles';
import { calculateAverageRate, isEmpty, removeEmptyElement } from '../../../helpers/helpers';
import AppsDetailComponent from '../../appsDetail/appsDetailComponent';
import ReviewSection from '../../reviewSection/reviewSection';
import NewCTA from '../../cta/newCTA';
import { CTAData } from '../../../constants/raw';

export default function AppsDetailPage({ appDetail, isUserAuthenticated, externalLinks = {}, hasTopbar }) {
  const [reviewList, setReviewList] = useState(appDetail?.reviewsCollection?.items || []);

  //calculate average rate
  const averageRate = useMemo(() => {
    return calculateAverageRate(removeEmptyElement(reviewList)) || 0;
  }, [reviewList]);

  return (
    <>
      <AppsDetailMain>
        <>
          <AppsDetailComponent
            detail={appDetail?.guideArticle}
            reviewList={reviewList}
            content={{ ...appDetail, averageRate }}
            isUserAuthenticated={isUserAuthenticated}
            externalLinks={externalLinks}
            hasTopbar={hasTopbar}
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
          <NewCTA
            title={CTAData.title}
            description={CTAData.description}
            primaryButtonText={CTAData.primaryButtonText}
            primaryButtonLink={CTAData.primaryButtonLink}
            secondaryButtonText={CTAData.secondaryButtonText}
            secondaryButtonLink={CTAData.secondaryButtonLink}
          />
        </>
      </AppsDetailMain>
    </>
  );
}
