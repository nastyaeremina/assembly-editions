import React from 'react';
import moment from 'moment';
import { isEmpty } from '../../helpers/helpers';
import { Body, DotIcon, Info, PersonName, PersonReview, Review, ReviewDetail, ReviewDiv } from './styles';

import StartList from './starList';
import SVGComponent from '../../../public/images/svg/SVGComponent';
export default function ReviewInfo({ data }) {
  return (
    <ReviewDiv>
      <Info>
        {data?.customerName && <PersonName>{data?.customerName}</PersonName>}
        <DotIcon>
          <SVGComponent name='small-dot-icon' width='4' height='4' viewBox='0 0 4 4' />
        </DotIcon>
        {data?.location && <Body>{data?.location}</Body>}
      </Info>
      <Review>
        <PersonReview>
          <StartList rate={data?.rate} iconSize='18' />
          {!isEmpty(data?.date) && <Body className='date'>{moment(data?.date).format('MMMM DD, YYYY')}</Body>}
        </PersonReview>
        <ReviewDetail>{data?.comment}</ReviewDetail>
      </Review>
    </ReviewDiv>
  );
}
