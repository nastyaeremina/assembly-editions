import styled from 'styled-components';
import {
  Body3,
  Body4,
  Body5,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  MbBody3,
  MbBody4,
  MbPrimaryBtn
} from '../../styles/styles';
import { body, border, lightgray, title } from '../../styles/color';

const ReviewContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding-bottom: 100px;
  @media only screen and (max-width: 768px) {
    padding-bottom: 80px;
  }
  @media only screen and (max-width: 768px) {
    gap: 24px;
  }
`;
const SectionHeading = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  h3 {
    ${Heading4}
    color: ${title};
    margin: 0;
  }
  p {
    ${Body4};
    color: ${body};
    margin: 0;
  }
  @media only screen and (max-width: 449px) {
    ${Body5}
    gap:8px;
  }
`;

const Content = styled.div``;
const OverAllRating = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  @media only screen and (max-width: 449px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    margin-bottom: 16px;
  }
`;
const Left = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  h4 {
    ${Body4};
    color: ${lightgray};
    margin: 0;
  }
`;
const RatingNumber = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  ${Heading5};
  color: ${title};
`;
const RatingIcon = styled.div`
  display: flex;
  gap: 4px;
`;

const ReviewDiv = styled.div`
  display: flex;
  gap: 54px;
  justify-content: space-between;
  padding: 30px 0;
  border-bottom: 1px solid ${border};
  :last-child {
    border-bottom: none;
    padding: 30px 0 0;
  }
  @media only screen and (max-width: 449px) {
    flex-direction: column-reverse;
    gap: 12px;
    padding: 20px 0;
    :last-child {
      border-bottom: none;
      padding: 20px 0 0;
    }
  }
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 306px;
  width: 100%;
  @media only screen and (max-width: 449px) {
    gap: 6px;
  }
`;
const Review = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media only screen and (max-width: 449px) {
    gap: 12px;
  }
`;
const PersonName = styled.div`
  ${Heading6};
  color: ${title};
  @media only screen and (max-width: 449px) {
    ${MbPrimaryBtn}
  }
`;
const Body = styled.div`
  ${Body4};
  color: ${lightgray};
  @media only screen and (max-width: 449px) {
    ${MbBody4}
  }
`;
const PersonReview = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Star = styled.div`
  display: flex;
  gap: 4px;
`;
const ReviewDetail = styled.div`
  ${Body4};
  color: ${body};
  @media only screen and (max-width: 449px) {
    ${MbBody3}
  }
`;
export {
  ReviewContent,
  SectionHeading,
  Content,
  OverAllRating,
  Left,
  RatingNumber,
  RatingIcon,
  ReviewDiv,
  Info,
  Review,
  PersonName,
  Body,
  PersonReview,
  Star,
  ReviewDetail
};
