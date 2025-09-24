import React, { useMemo, useState } from 'react';
import { Container } from '../../styles/commonStyles';
import ReviewModal from '../reviewModal/reviewModal';
import StartList from './starList';
import ReviewInfo from './reviewInfo';
import { Content, Left, OverAllRating, RatingIcon, RatingNumber, ReviewContent, SectionHeading } from './styles';
import ButtonV2Component from '../button/buttonV2/buttonV2';
import SearchEmptyState from '../SearchEmptyState/searchEmptyState';

export default function ReviewSection({
  appId,
  averageRate = 0,
  reviewList,
  isAuthenticated = false,
  setReviewList,
  isReviewVisible
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to handle button click
  const onOpenModal = () => {
    setIsModalOpen(true);
  };

  // Function to handle modal close
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const renderReviewList = useMemo(() => {
    return reviewList?.map((item, index) => {
      return <ReviewInfo key={`review_index_${index}`} data={item} />;
    });
  }, [reviewList]);

  return (
    <Container>
      <ReviewContent>
        <SectionHeading>
          <h2>Reviews</h2>
        </SectionHeading>
        {isReviewVisible && reviewList?.length > 0 ? (
          <Content>
            <OverAllRating>
              <Left>
                <h4>Overall rating</h4>
                <RatingNumber>
                  <h4>{averageRate.toFixed(1)}</h4>
                  <RatingIcon>
                    <StartList rate={averageRate} />
                  </RatingIcon>
                </RatingNumber>
              </Left>

              {isAuthenticated && <ButtonV2Component title='Write a review' onClick={onOpenModal} />}
            </OverAllRating>
            {renderReviewList}
          </Content>
        ) : (
          <SearchEmptyState
            buttonTitle='Write a review'
            onClick={onOpenModal}
            icon={'new-star-icon'}
            title={'No reviews yet'}
            description={'Your feedback helps others decide. Start by reviewing Jotform.'}
          />
        )}
        {isModalOpen && (
          <ReviewModal reviewList={reviewList} onClose={closeModal} appId={appId} setReviewList={setReviewList} />
        )}
      </ReviewContent>
    </Container>
  );
}
