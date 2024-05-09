import Image from 'next/image';
import React, { useMemo, useState } from 'react';
import { Container } from '../../styles/commonStyles';
import Button from '../button/button';
import { black, gainsboro, primary, whiteColor } from '../../styles/color';
import ReviewModal from '../reviewModal/reviewModal';
import reviewemptylogo from '../../../public/images/reviewemptylogo.svg';
import StartList from './starList';
import ReviewInfo from './reviewInfo';
import {
  Content,
  EmptyCaption,
  EmptyContent,
  EmptyDesign,
  Emptyheading,
  Left,
  OverAllRating,
  RatingIcon,
  RatingNumber,
  ReviewContent,
  SectionHeading
} from './styles';

export default function ReviewSection({ appId, avarageRate = 0, reviewList, isAuthenticated = false, setReviewList }) {
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
          <h3>Reviews</h3>
        </SectionHeading>
        {reviewList?.length > 0 ? (
          <Content>
            <OverAllRating>
              <Left>
                <h4>Overall rating</h4>
                <RatingNumber>
                  {avarageRate}
                  <RatingIcon>
                    <StartList rate={avarageRate} isBig={true} />
                  </RatingIcon>
                </RatingNumber>
              </Left>
              <div>
                {isAuthenticated && (
                  <Button
                    bgColor={'transparent'}
                    fontColor={black}
                    borderColor={black}
                    text={'Write a review'}
                    hoverColor={gainsboro}
                    onClick={onOpenModal}
                    className={'button'}
                  />
                )}
                {isModalOpen && (
                  <ReviewModal
                    reviewList={reviewList}
                    onClose={closeModal}
                    appId={appId}
                    setReviewList={setReviewList}
                  />
                )}
              </div>
            </OverAllRating>
            {renderReviewList}
          </Content>
        ) : (
          <EmptyDesign>
            <Image src={reviewemptylogo} alt='review-empty' width={288} height={150} className='review-empty-logo' />
            <EmptyContent>
              <Emptyheading>No Reviews Yet!</Emptyheading>
              <EmptyCaption>Be the first to share your thoughts. Your feedback matters to us.</EmptyCaption>
              <div>
                <Button
                  bgColor={primary}
                  fontColor={whiteColor}
                  borderColor={primary}
                  text={'Write a review'}
                  hoverColor={'rgba(255, 255, 255,0.8)'}
                  onClick={onOpenModal}
                  className={'empty-section-button'}
                />
                {isModalOpen && (
                  <ReviewModal
                    reviewList={reviewList}
                    onClose={closeModal}
                    appId={appId}
                    setReviewList={setReviewList}
                  />
                )}
              </div>
            </EmptyContent>
          </EmptyDesign>
        )}
      </ReviewContent>
    </Container>
  );
}
