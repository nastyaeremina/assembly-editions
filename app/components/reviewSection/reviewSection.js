import React, { useMemo, useState } from 'react';
import { Container } from '../../styles/commonStyles';
import ReviewModal from '../reviewModal/reviewModal';
import StartList from './starList';
import ReviewInfo from './reviewInfo';
import {
  Content,
  EmptyCaption,
  EmptyContent,
  EmptyDesign,
  Emptyheading,
  Icon,
  Left,
  OverAllRating,
  RatingIcon,
  RatingNumber,
  ReviewContent,
  SectionHeading
} from './styles';
import SVGComponent from '../../../public/images/svg/SVGComponent';
import ButtonV2Component from '../button/buttonV2/buttonV2';
import { ButtonSize } from '../../constants/constant';

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
          <EmptyDesign>
            <Icon>
              <SVGComponent name='new-star-icon' width='20' height='20' viewBox='0 0 20 21' className='svg-icon' />
            </Icon>
            <EmptyContent>
              <Emptyheading>No reviews yet</Emptyheading>
              <EmptyCaption>Your feedback helps others decide. Start by reviewing Jotform.</EmptyCaption>
            </EmptyContent>

            <ButtonV2Component title='Write a review' onClick={onOpenModal} size={ButtonSize.SMALL} />
          </EmptyDesign>
        )}
        {isModalOpen && (
          <ReviewModal reviewList={reviewList} onClose={closeModal} appId={appId} setReviewList={setReviewList} />
        )}
      </ReviewContent>
    </Container>
  );
}
