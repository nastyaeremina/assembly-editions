import React, { useMemo } from 'react';
import { Content, Left, OverAllRating, RatingIcon, RatingNumber, ReviewContent, SectionHeading } from './styles';
import { Container } from '../../styles/commonStyles';
import SVGComponent from '../../../public/images/svg/SVGComponent';
import Button from '../button/button';
import { black, gainsboro } from '../../styles/color';
import ReviewInfo from './reviewInfo';
import StartList from './starList';

export default function ReviewSection({ totalReview, avarageRate = 0, reviewList }) {
  const renderReviewList = useMemo(() => {
    return reviewList?.map((item, index) => {
      return <ReviewInfo key={`review_index_${index}`} data={item} />;
    });
  }, [reviewList]);
  return (
    <Container>
      <ReviewContent>
        <SectionHeading>
          <h3>Reviews ({totalReview})</h3>
        </SectionHeading>
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
            {/* <Button
              bgColor={'transparent'}
              fontColor={black}
              borderColor={black}
              text={'Write a review'}
              href={'/'}
              hoverColor={gainsboro}
            /> */}
          </OverAllRating>
          {renderReviewList}
        </Content>
      </ReviewContent>
    </Container>
  );
}
