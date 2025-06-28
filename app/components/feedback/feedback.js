import Image from 'next/image';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import {
  Caption,
  CardDetail,
  CardHeader,
  Cardleft,
  CardRight,
  Feedbackcard,
  PersonDetail,
  PersonName,
  Rating
} from './styles';
import SVGComponent from '../../../public/images/svg/SVGComponent';

export default function FeedBack({ name, caption, body, isStar = false, logoicon, profile, bodyhead }) {
  return (
    <>
      <Feedbackcard>
        <CardHeader>
          <Cardleft>
            <Image src={profile} alt='profile' width={40} height={40} layout={'fixed'} className='cardprofile' />
            <PersonDetail>
              <PersonName>{name}</PersonName>
              <Caption>{caption}</Caption>
            </PersonDetail>
          </Cardleft>
          <CardRight>{logoicon}</CardRight>
        </CardHeader>
        <CardDetail>
          <span>{bodyhead}</span>
          <ReactMarkdown>{body}</ReactMarkdown>
        </CardDetail>
        {isStar && (
          <Rating>
            <SVGComponent name='feedback-rating-icon' width='112' height='20' viewBox='0 0 112 20' />
          </Rating>
        )}
      </Feedbackcard>
    </>
  );
}
