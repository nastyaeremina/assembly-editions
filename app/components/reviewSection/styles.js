import styled from 'styled-components';
import {
  body_regular,
  body_semibold,
  button_regular,
  h2_semibold,
  h4_regular,
  h4_semibold
} from '../../styles/typography';

const ReviewContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-48);
  padding: var(--space-64) 0;
  @media only screen and (max-width: 991px) {
    padding: var(--space-48) 0;
    gap: var(--space-40);
  }
  @media only screen and (max-width: 449px) {
    padding: var(--space-40) 0;
    gap: var(--space-32);
  }
`;
const SectionHeading = styled.div`
  display: flex;
  width: 100%;
  h2 {
    ${h2_semibold}
    color: var(--title);
    margin: 0;
  }
`;

const Content = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
`;
const OverAllRating = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--space-12);
  width: 100%;
  padding-bottom: var(--space-16);

  @media only screen and (max-width: 449px) {
    flex-direction: column;
    align-items: flex-start;
    gap: var(--space-40);
    padding-bottom: var(--space-8);
  }
`;
const Left = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-12);

  h4 {
    ${h4_regular};
    color: var(--title);
    margin: 0;
  }
`;
const RatingNumber = styled.div`
  display: flex;
  align-items: flex-start;
  gap: var(--space-8);
  h4 {
    margin: 0;
    ${h4_semibold};
    color: var(--title);
  }
`;
const RatingIcon = styled.div`
  display: flex;
  gap: var(--space-4);
  margin-top: var(--space-5);
  @media only screen and (max-width: 449px) {
    margin-top: var(--space-3);
  }
`;

const ReviewDiv = styled.div`
  display: flex;
  gap: var(--space-48);
  justify-content: space-between;
  padding: var(--space-32) 0;
  border-bottom: 1px solid var(--border-default);
  @media only screen and (max-width: 991px) {
    flex-direction: column-reverse;
    padding: var(--space-24) 0 var(--space-20);
    gap: var(--space-24);
  }
  @media only screen and (max-width: 449px) {
    gap: var(--space-20);
  }
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-8);
  max-width: 306px;
  width: 100%;
  @media only screen and (max-width: 991px) {
    max-width: 100%;
    flex-direction: row;
    align-items: center;
  }
`;
const Review = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-16);
  width: 100%;
`;
const PersonName = styled.p`
  ${body_semibold};
  color: var(--title);
  margin: 0;
`;
const Body = styled.p`
  ${body_regular};
  color: var(--text-secondary);
  margin: 0;
  &.date {
    ${button_regular}
  }
`;
const PersonReview = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Star = styled.div`
  display: flex;
  gap: var(--space-4);
`;
const ReviewDetail = styled.p`
  ${body_regular};
  color: var(--title);
  margin: 0;
`;

const DotIcon = styled.div`
  display: none;
  @media only screen and (max-width: 991px) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 16px;
    height: 16px;
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
  ReviewDetail,
  DotIcon
};
