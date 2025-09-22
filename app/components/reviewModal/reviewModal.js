import React, { useEffect, useState, useCallback, useRef } from 'react';
import StarRatings from 'react-star-ratings';
import axios from 'axios';
import SVGComponent from '../../../public/images/svg/SVGComponent';
import {
  Caption,
  CloseIcon,
  Content,
  Head,
  Header,
  Heading,
  Icon,
  Input,
  InputSection,
  Modal,
  NameInfo,
  OverLayDiv,
  ReviewModalCard,
  StarRatingSection,
  TextArea,
  ThankYouCard,
  Title
} from './styles';
import ButtonV2Component from '../button/buttonV2/buttonV2';
import { ButtonSize } from '../../constants/constant';
import Validation from '../Validation/validation';
import useFocusTrap from '../../hooks/useFocusTrap';

export default function ReviewModal({ onClose, appId, setReviewList, reviewList }) {
  const [rate, setRate] = useState(0);
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [reviews, setReviews] = useState(reviewList);
  const [loading, setLoading] = useState(false);
  const [isSucess, setIsSucess] = useState(false);

  // ref variable
  const modalRef = useRef();
  useFocusTrap(modalRef);

  // State for field-specific errors
  const [errors, setErrors] = useState({
    name: '',
    comment: '',
    rate: ''
  });

  const changeRating = (newRating) => {
    setRate(newRating);
    setErrors((prev) => ({ ...prev, rate: '' })); // clear error when user selects rating
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
    setErrors({ name: '', comment: '', rate: '' });
  }, []);

  const validateForm = () => {
    let isValid = true;
    const newErrors = { name: '', comment: '', rate: '' };

    if (!rate || rate === 0) {
      newErrors.rate = 'Please provide a rating';
      isValid = false;
    }
    if (!name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }
    if (!comment.trim()) {
      newErrors.comment = 'Review is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const onSubmit = useCallback(
    async (e) => {
      e.preventDefault();

      if (!validateForm()) return; // stop if validation fails

      try {
        setLoading(true);
        // Send request to add review
        const response = await axios.post('/api/addreview', {
          appId,
          customerName: name,
          comment,
          rate
        });
        if (response?.status === 201) {
          const updatedReviewList = [response.data.review, ...reviewList]; // Assuming prevAppData is the existing review list
          setIsSucess(true);
          setReviews(updatedReviewList);
          clearFormData();
        } else {
          setErrors((prev) => ({
            ...prev,
            apiError: response?.message || 'Something went wrong'
          }));
        }
      } catch (error) {
        setErrors((prev) => ({
          ...prev,
          apiError: error?.message || 'Something went wrong'
        }));
      } finally {
        setLoading(false);
      }
    },
    [appId, name, comment, rate, reviewList, clearFormData]
  );

  useEffect(() => {
    const onPointerDown = () => {
      document.body.classList.add('using-mouse');
      document.body.classList.remove('using-keyboard');
    };
    const onKeyDown = (e) => {
      if (e.key === 'Tab') {
        document.body.classList.add('using-keyboard');
        document.body.classList.remove('using-mouse');
      }
    };

    window.addEventListener('pointerdown', onPointerDown, true);
    window.addEventListener('keydown', onKeyDown, true);

    return () => {
      window.removeEventListener('pointerdown', onPointerDown, true);
      window.removeEventListener('keydown', onKeyDown, true);
    };
  }, []);

  return (
    <Modal ref={modalRef}>
      {isSucess ? (
        <ThankYouCard>
          <Icon>
            <SVGComponent name='correct-sign-icon' width='20' height='20' viewBox='0 0 20 20' />
          </Icon>
          <Title>
            <Head>Thank you for your review!</Head>
            <Caption>Your review has been successfully submitted.</Caption>
          </Title>

          <ButtonV2Component title='Back to App details' size={ButtonSize.SMALL} onClick={onCloseModal} />
        </ThankYouCard>
      ) : (
        <ReviewModalCard>
          <Header>
            <Heading>Write a review</Heading>
            <CloseIcon onClick={onCloseModal}>
              <SVGComponent name='modal-close-icon' width='16' height='16' viewBox='0 0 16 16' />
            </CloseIcon>
          </Header>

          <Content onSubmit={onSubmit}>
            <InputSection>
              <StarRatingSection>
                <p>Overall Rating</p>
                <StarRatings
                  isSelectable={true}
                  changeRating={changeRating}
                  rating={rate}
                  starDimension='24px'
                  starSpacing='var(--space-4)'
                  starRatedColor='var(--title)'
                  starEmptyColor='var(--border-default)'
                  starHoverColor='var(--title)'
                  svgIconPath='M9.703 1.33a.79.79 0 0 0-.7-.428.79.79 0 0 0-.7.428L5.895 6.048.663 6.88a.787.787 0 0 0-.435 1.332l3.743 3.746-.824 5.231a.788.788 0 0 0 1.132.825l4.724-2.402 4.721 2.402a.786.786 0 0 0 1.132-.825l-.828-5.231 3.743-3.746a.783.783 0 0 0 .19-.798.782.782 0 0 0-.625-.534l-5.228-.83L9.703 1.33Z'
                  svgIconViewBox='0 0 18 19'
                />
                {errors.rate && <Validation error={errors.rate} isApplyMargin={true} />}
              </StarRatingSection>

              <NameInfo>
                <label>Your Name</label>
                <Input
                  type='text'
                  className='inputtext'
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    setErrors((prev) => ({ ...prev, name: '' }));
                  }}
                  placeholder='Your Name'
                  isError={errors.name}
                />
                {errors.name && <Validation error={errors.name} isApplyMargin={true} />}
              </NameInfo>

              <NameInfo>
                <label>Review</label>
                <TextArea
                  className='inputtext'
                  placeholder='Write your review here...'
                  value={comment}
                  onChange={(e) => {
                    setComment(e.target.value);
                    setErrors((prev) => ({ ...prev, comment: '' }));
                  }}
                  isError={errors.comment}
                />
                {errors.comment && <Validation error={errors.comment} isApplyMargin={true} />}
              </NameInfo>
            </InputSection>

            <ButtonV2Component title='Submit' type='submit' size={ButtonSize.SMALL} isLoading={loading} />

            {errors.apiError && <Validation>{errors.apiError}</Validation>}
          </Content>
        </ReviewModalCard>
      )}
      <OverLayDiv onClick={onCloseModal} />
    </Modal>
  );
}
