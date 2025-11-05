import styled, { css } from 'styled-components';
import { body_regular, h2_semibold, h4_regular } from '../../styles/typography';

const CardSection = styled.div`
  padding-top: 50px;
  padding-bottom: 50px;
  ${(props) =>
    props.isAppExplore &&
    css`
      padding-bottom: 0px;
    `}
  ${(props) =>
    props.isStandardPage &&
    css`
      padding: var(--space-64) 0;
    `}
    @media only screen and (max-width: 991px) {
    ${(props) =>
      props.isStandardPage &&
      css`
        padding: var(--space-48) 0;
      `}
  }
  @media only screen and (max-width: 449px) {
    padding-bottom: 30px;
    ${(props) =>
      props.isStandardPage &&
      css`
        padding: var(--space-40) 0;
      `}
    ${(props) =>
      props.isAppExplore &&
      css`
        padding-bottom: 0px;
      `}
  }
`;
const CardSectionHead = styled.div`
  ${h2_semibold}
  color: var(--title);
`;
const Card = styled.div`
  padding: var(--space-32) var(--space-32) 0;
  background-color: var(--off-white-550);
  border-radius: var(--radius-16);
  .card-img {
    display: flex;
    margin: 0 auto;
    max-width: 462px;
    width: 100%;
    height: 100%;
    border-radius: var(--radius-8) var(--radius-8) 0 0;
  }
  @media only screen and (max-width: 449px) {
    padding: var(--space-20) var(--space-20) 0;
  }
  ${(props) =>
    props.isTwoCard &&
    css`
      width: 50%;
      flex-direction: column;
      display: flex;
      justify-content: space-between;
      @media only screen and (max-width: 991px) {
        width: 100%;
      }
    `}
`;
const CardTop = styled.div`
  margin-bottom: var(--space-24);
  @media only screen and (max-width: 449px) {
    margin-bottom: var(--space-16);
    ${(props) =>
      props.isStandardPage &&
      css`
        margin-bottom: var(--space-16);
      `}
  }
`;
const Head = styled.h3`
  ${h4_regular}
  color: var(--title);
  max-width: 780px;
  width: 100%;
  margin: 0;
`;
const Description = styled.p`
  font-weight: 400 !important;
  ${body_regular}
  color: var(--title);
  max-width: 780px;
  width: 100%;
  margin: var(--space-8) 0 0;
`;
const Cards = styled.div`
  display: flex;
  gap: var(--space-24);
  @media only screen and (max-width: 991px) {
    gap: var(--space-40);
    flex-direction: column;
    /* flex-wrap: wrap; */
    width: 100%;
  }
  @media only screen and (max-width: 449px) {
    gap: var(--space-32);
  }
`;

const Body = styled.div`
  p {
    ${body_regular};
    color: var(--title);
    margin: var(--space-12) 0 0;
  }
  @media only screen and (max-width: 449px) {
    p {
      margin: var(--space-16) 0 0;
    }
  }
`;
const HeaderSection = styled.div`
  margin-bottom: var(--space-48);
  max-width: 600px;
  width: 100%;
  .button-group {
    margin-top: var(--space-28);
  }
  @media only screen and (max-width: 991px) {
    margin-bottom: var(--space-40);
  }
  @media only screen and (max-width: 449px) {
    margin-bottom: var(--space-32);
  }
`;
export { CardSection, CardSectionHead, Card, CardTop, Head, Description, Cards, Body, HeaderSection };
