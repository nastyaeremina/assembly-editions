import React from 'react';
import moment from 'moment';
import { Body, Info, PersonName, PersonReview, Review, ReviewDetail, ReviewDiv, Star } from './styles';
import { isEmpty } from '../../helpers/helpers';

import StartList from './starList';
export default function ReviewInfo({ data }) {
  console.log('data', data);
  return (
    <ReviewDiv>
      <Info>
        <PersonName>{data?.customerName}</PersonName>
        <Body>{data?.location}</Body>
        {!isEmpty(data?.yearsWithApp) && <Body>{`About ${data?.yearsWithApp} years using the app`}</Body>}{' '}
      </Info>
      <Review>
        <PersonReview>
          <StartList rate={data?.rate} />
          {!isEmpty(data?.date) && <Body>{moment(data?.date).format('MMMM DD, YYYY')}</Body>}
        </PersonReview>
        <ReviewDetail>{data?.comment}</ReviewDetail>
      </Review>
    </ReviewDiv>
  );
}
