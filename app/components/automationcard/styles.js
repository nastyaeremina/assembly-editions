import styled, { css } from 'styled-components';
import { body_regular, h2_semibold, h3_regular } from '../../styles/typography';

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
      padding-block: var(--space-64);
    `}
    @media only screen and (max-width: 991px) {
    ${(props) =>
      props.isStandardPage &&
      css`
        padding-block: var(--space-40);
      `}
  }
  @media only screen and (max-width: 449px) {
    padding-bottom: 30px;
    ${(props) =>
      props.isStandardPage &&
      css`
        padding-block: var(--space-48);
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
  border: 1px solid var(--border-default);
  border-radius: var(--radius-16);
  .card-img {
    display: flex;
    max-width: 1222px;
    width: 100%;
    height: 100%;
    border-top: 1px solid var(--border-default);
    border-radius: 0 0 var(--radius-16) var(--radius-16);
  }
  ${(props) =>
    props.isTwoCard &&
    css`
      width: 50%;
      flex-direction: column;
      display: flex;
      justify-content: space-between;
      @media only screen and (max-width: 768px) {
        width: 100%;
      }
    `}
`;
const CardTop = styled.div`
  padding: var(--space-24);
  @media only screen and (max-width: 449px) {
    padding: var(--space-28);
    ${(props) =>
      props.isStandardPage &&
      css`
        padding: var(--space-12);
      `}
  }
`;
const Head = styled.h3`
  ${h3_regular}
  color: var(--title);
  max-width: 780px;
  width: 100%;
  margin: 0;
`;
const Description = styled.p`
  font-weight: 400 !important;
  ${body_regular}
  color: var(--body);
  max-width: 780px;
  width: 100%;
  margin-block: var(--space-12) 0;
  @media only screen and (max-width: 449px) {
    margin-block: var(--space-12) 0;
  }
`;
const Cards = styled.div`
  display: flex;
  gap: var(--space-40);
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    /* flex-wrap: wrap; */
    width: 100%;
  }
`;

const Body = styled.div`
  p {
    ${body_regular};
    color: var(--body);
    margin-block: var(--space-16) 0;
  }
  @media only screen and (max-width: 449px) {
    p {
      margin-block: var(--space-32) 0;
    }
  }
`;
const HeaderSection = styled.div`
  margin-bottom: var(--space-64);
  max-width: 600px;
  width: 100%;
  .button-group {
    margin-top: var(--space-28);
  }
`;
export { CardSection, CardSectionHead, Card, CardTop, Head, Description, Cards, Body, HeaderSection };
