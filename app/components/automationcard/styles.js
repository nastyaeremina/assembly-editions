import styled, { css } from 'styled-components';
import { Body3, Heading3, MbBody3, MbBody4 } from '../../styles/styles';
import { Heading4 } from '../../styles/styles';
import { Heading6 } from '../../styles/styles';

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
      padding: 0 0 100px;
    `}
    @media only screen and (max-width: 768px) {
    ${(props) =>
      props.isStandardPage &&
      css`
        padding: 0 0 80px !important;
      `}
  }
  @media only screen and (max-width: 426px) {
    padding-bottom: 30px;
    ${(props) =>
      props.isAppExplore &&
      css`
        padding-bottom: 0px;
      `}
  }
`;
const CardSectionHead = styled.div`
  ${Heading3}
  color: var(--title);
  span {
    color: var(--primary);
  }
`;
const Card = styled.div`
  border: 1px solid var(--dark-green);
  border-radius: 4px;
  .card-img {
    display: flex;
    max-width: 1222px;
    width: 100%;
    border-top: 1px solid var(--dark-green);
    border-radius: 0 0 3px 3px;
  }
  ${(props) =>
    props.isTwoCard &&
    css`
      width: 50%;
      flex-direction: column;
      display: flex;
      justify-content: space-between;
      @media only screen and (max-width: 449px) {
        width: 100%;
      }
    `}
`;
const CardTop = styled.div`
  padding: 40px;

  @media only screen and (max-width: 449px) {
    padding: 28px;
    ${(props) =>
      props.isStandardPage &&
      css`
        padding: 20px;
      `}
  }
`;
const Head = styled.h3`
  ${Heading4}
  color: var(--title);
  max-width: 780px;
  width: 100%;
  margin: 0;
`;
const Description = styled.p`
  font-weight: 400 !important;
  ${Heading6}
  color: var(--body);
  max-width: 780px;
  width: 100%;
  margin: 12px 0 0;
  @media only screen and (max-width: 449px) {
    ${MbBody4}
  }
`;
const Cards = styled.div`
  display: flex;
  gap: 40px;
  @media only screen and (max-width: 449px) {
    flex-direction: column;
    /* flex-wrap: wrap; */
    width: 100%;
  }
`;

const Body = styled.div`
  p {
    ${Body3};
    color: var(--body);
    margin: 16px 0 0;
  }
  @media only screen and (max-width: 449px) {
    p {
      ${MbBody3}
    }
  }
`;
const HeaderSection = styled.div`
  margin-bottom: 40px;
  max-width: 811px;
  width: 100%;
`;
export { CardSection, CardSectionHead, Card, CardTop, Head, Description, Cards, Body, HeaderSection };
