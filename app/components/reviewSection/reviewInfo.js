import React from 'react';
import moment from 'moment';
import { isEmpty } from '../../helpers/helpers';
import { Body, Info, PersonName, PersonReview, Review, ReviewDetail, ReviewDiv, Star } from './styles';

import StartList from './starList';
export default function ReviewInfo({ data }) {
  return (
    <ReviewDiv>
      <Info>
        {data?.customerName && <PersonName>{data?.customerName}</PersonName>}
        {data?.location && <Body>{data?.location}</Body>}
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
