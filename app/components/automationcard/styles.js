import styled, { css } from 'styled-components';
import { Heading3 } from '../../styles/styles';
import { Heading4 } from '../../styles/styles';
import { Heading6 } from '../../styles/styles';

import {
  body,
  title,
  primary
} from './../../styles/color';

const CardSection = styled.div`
  padding-top: 50px;
  padding-bottom: 50px;
  ${(props) =>
    props.isAppExplore &&
    css`
      padding-bottom: 0px;
    `}
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
  color: ${title};
  margin-bottom: 40px;
  span {
    color: ${primary};
  }
`;
const Card = styled.div`
  border: 1px solid #00160e;
  border-radius: 4px;
  .card-img {
    display: flex;
    max-width: 1222px;
    width: 100%;
    border-top: 1px solid #00160e;
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
  }
`;
const Head = styled.h3`
  ${Heading4}
  color: ${title};
  max-width: 780px;
  width: 100%;
  margin: 0;
`;
const Description = styled.p`
  font-weight: 400 !important;
  ${Heading6}
  color: ${body};
  max-width: 780px;
  width: 100%;
  margin: 12px 0 0;
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
export { CardSection, CardSectionHead, Card, CardTop, Head, Description, Cards };
