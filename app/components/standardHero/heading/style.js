import styled, { css } from 'styled-components';
import { Body2, Heading2, MbBody1, MobileH2 } from '../../../styles/styles';
import { HeroTypes } from '../../../constants/constant';

const LeftHeroSectionMainDiv = styled.div`
  display: flex;
  flex-direction: column;
  ${(props) =>
    props.variant === HeroTypes.CENTER &&
    css`
      align-items: center;
      justify-content: center;
    `}
  .button-group {
    margin-top: 32px;
    @media only screen and (max-width: 449px) {
      margin-top: 28px;
    }
  }
  .center-button-group {
    align-items: center;
    justify-content: center;
    margin-top: 32px;
    @media only screen and (max-width: 449px) {
      margin-top: 28px;
    }
  }
`;

const HeroHeading = styled.h1`
  ${Heading2};
  color: var(--title);
  margin: 0 0 20px;
  max-width: 1000px;
  span {
    color: var(--primary);
  }
  ${(props) =>
    props.variant === HeroTypes.CENTER &&
    css`
      text-align: center;
    `}
  @media only screen and (max-width: 991px) {
    ${Heading2}
  }
  @media only screen and (max-width: 749px) {
    margin-bottom: 20px;
    ${MobileH2}
  }
`;

const Para = styled.p`
  max-width: 880px;
  width: 100%;
  ${Body2}
  letter-spacing: 0.02em;
  margin: 0;
  color: var(--body);
  p {
    margin: 0;
  }
  p + p {
    margin-top: 16px;
  }
  ${(props) =>
    props.variant === HeroTypes.CENTER &&
    css`
      text-align: center;
    `}
  @media only screen and (max-width: 991px) {
    ${Body2}
  }
  @media only screen and (max-width: 749px) {
    ${MbBody1};
  }
`;

export { LeftHeroSectionMainDiv, HeroHeading, Para };
