import React, { useEffect, useState, useCallback } from 'react';
import StarRatings from 'react-star-ratings';
import axios from 'axios';
import Button from '../button/button';
import SVGComponent from '../../../public/images/svg/SVGComponent';
import {
  Caption,
  CloseIcon,
  Content,
  Head,
  Header,
  Heading,
  Input,
  Modal,
  NameInfo,
  OverLayDiv,
  ReviewModalCard,
  StarRatingSection,
  TextArea,
  ThankYouCard,
  Title
} from './styles';

export default function ReviewModal({ onClose, appId, setReviewList, reviewList }) {
  const [rate, setRate] = useState(0);
  const [name, setName] = useState();
  const [reviews, setReviews] = useState(reviewList);
  const [comment, setComment] = useState();
  const [loading, setLoading] = useState(false);
  const [isSucess, setIsSucess] = useState(false);
  const [error, setError] = useState();
  const changeRating = (newRating) => {
    setRate(newRating);
  };

  // when Modal is open than after page scroll is hidden
  useEffect(() => {
    // Update the body's CSS to set overflow to hidden
    document.body.style.overflow = 'hidden';

    // Clean up function to reset overflow to its original value when the component unmounts
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);
  const onCloseModal = useCallback(() => {
    setReviewList(reviews);
    onClose();
  }, [onClose, reviews, setReviewList]);

  const clearFormData = useCallback(() => {
    setName('');
    setComment('');
    setRate(0);
  }, []);

  const onSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      try {
        setLoading(true);
        // Send request to add review
        const response = await axios.post('/api/addreview', {
          appId: appId,
          customerName: name,
          comment,
          rate
        });
        if (response?.status === 201) {
          const updatedReviewList = [response.data.review, ...reviewList]; // Assuming prevAppData is the existing review list
          setIsSucess(true);
          setReviews(updatedReviewList);
          setLoading(false);
          clearFormData();
        } else {
          setLoading(false);
          setError(response?.message);
        }
      } catch (error) {
        setLoading(false);
        setError(error);
        console.error('Error adding review:', error);
      }
    },
    [appId, name, comment, rate, reviewList, clearFormData]
  );
  return (
    <>
      <Modal>
        {isSucess ? (
          <ThankYouCard>
            <div>
              <SVGComponent name='thankyou-card-true-icon' width='80' height='80' viewBox='80' />
            </div>
            <Title>
              <Head>Thank you for your review!</Head>
              <Caption>Your review has been successfully submitted.</Caption>
            </Title>
            <Button
              bgColor={'#09AA6C'}
              fontColor={'#fff'}
              borderColor={'#09AA6C'}
              text={'Go back'}
              hoverColor={'rgba(255, 255, 255,0.8)'}
              className={'back-button'}
              onClick={onCloseModal}
            />
          </ThankYouCard>
        ) : (
          <>
            <ReviewModalCard>
              <Header>
                <Heading>Write a review</Heading>
                <CloseIcon onClick={onCloseModal}>
                  <SVGComponent name='modal-close-icon' width='20' height='20' viewBox='0 0 20 20' />
                </CloseIcon>
              </Header>

              <Content onSubmit={onSubmit}>
                <StarRatingSection>
                  <p>Overall Rating</p>
                  <StarRatings
                    isSelectable={true}
                    changeRating={changeRating}
                    rating={rate}
                    starDimension='32px'
                    starSpacing='4px'
                    starRatedColor='#09AA6C'
                    starEmptyColor='#A5ABA9'
                    starHoverColor='#09AA6C'
                    svgIconPath='m16.003 4.361 3.913 7.991 8.753 1.29-6.333 6.215 1.495 8.782-7.828-4.148-7.828 4.148 1.494-8.782-6.333-6.216 8.752-1.289 3.915-7.99Z'
                    svgIconViewBox='0 0 32 32'
                  />
                </StarRatingSection>
                <NameInfo>
                  <label>Your Name </label>
                  <Input
                    type='text'
                    className='inputtext'
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    required
                  />
                </NameInfo>
                <NameInfo>
                  <label>Review</label>
                  <TextArea
                    className='inputtext'
                    placeholder='Write your review here...'
                    value={comment}
                    onChange={(e) => {
                      setComment(e.target.value);
                    }}
                    required
                  />
                </NameInfo>
                <Button text={'Submit'} type={'submit'} className={'submit-button'} isLoading={loading} />
                {error && <div>error</div>}
              </Content>
            </ReviewModalCard>
          </>
        )}
        <OverLayDiv onClick={onCloseModal}> </OverLayDiv>
      </Modal>
    </>
  );
}
