import styled from 'styled-components';
import {
  Body2,
  Body3,
  Body4,
  Body5,
  HeaderFont,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  MbBody3,
  MbBody4,
  MbButtonText,
  MbPrimaryBtn
} from '../../styles/styles';

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
    color: var(--title);
    margin: 0;
  }
  p {
    ${Body4};
    color: var(--body);
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
  .button {
    a {
      padding: 7px 32px;
      ${HeaderFont}
    }
  }
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
    color: var(--medium-gray);
    margin: 0;
  }
`;
const RatingNumber = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  ${Heading5};
  color: var(--title);
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
  border-bottom: 1px solid var(--border);
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
  @media only screen and (max-width: 768px) {
    max-width: 200px;
  }
  @media only screen and (max-width: 449px) {
    gap: 6px;
  }
`;
const Review = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  @media only screen and (max-width: 449px) {
    gap: 12px;
  }
`;
const PersonName = styled.div`
  ${Heading6};
  color: var(--title);
  @media only screen and (max-width: 449px) {
    ${MbPrimaryBtn}
  }
`;
const Body = styled.div`
  ${Body4};
  color: var(--medium-gray);
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
  color: var(--body);
  @media only screen and (max-width: 449px) {
    ${MbBody3}
  }
`;

const EmptyDesign = styled.div`
  max-width: 524px;
  margin: 0 auto;
  .review-empty-logo {
    margin: 0 auto;
    display: flex;
  }
`;

const EmptyContent = styled.div`
  margin-top: 40px;
  .empty-section-button {
    display: flex;
    justify-content: center;
    a {
      padding: 7px 32px;
      ${HeaderFont}
    }
  }
`;

const Emptyheading = styled.h4`
  ${Body2}
  color:var(--dark-green);
  margin: 0;
  text-align: center;
`;

const EmptyCaption = styled.p`
  ${Body4};
  color: var(--medium-gray);
  margin: 16px 0 32px;
  text-align: center;
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
  ReviewDetail,
  EmptyDesign,
  EmptyContent,
  Emptyheading,
  EmptyCaption
};
