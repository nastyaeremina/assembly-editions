import styled, { css } from 'styled-components';
import { HeroTypes } from '../../../constants/constant';
import { body_regular, h1_semibold } from '../../../styles/typography';

const LeftHeroSectionMainDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  ${(props) =>
    props.variant === HeroTypes.CENTER &&
    css`
      align-items: center;
      justify-content: center;
      @media only screen and (max-width: 449px) {
        justify-content: flex-start;
        align-items: flex-start;
      }
    `}
`;

const HeroHeading = styled.h1`
  ${h1_semibold};
  color: var(--title);
  margin: 0 0 var(--space-12);
  max-width: 900px;
  text-align: left;

  span {
    color: var(--title);
  }

  ${(props) =>
    props.variant === HeroTypes.CENTER &&
    css`
      text-align: center;
      @media only screen and (max-width: 449px) {
        text-align: left;
      }
    `}
  @media only screen and (max-width: 449px) {
    text-align: left;
    letter-spacing: -0.8px;
    margin: 0 0 var(--space-20);
  }
`;

const Para = styled.p`
  max-width: 550px;
  width: 100%;
  ${body_regular}
  margin: 0;
  color: var(--text-secondary);
  text-align: left;
  p {
    margin: 0;
  }
  p + p {
    margin-top: var(--space-16);
  }
  ${(props) =>
    props.variant === HeroTypes.CENTER &&
    css`
      text-align: center;
      @media only screen and (max-width: 449px) {
        text-align: left;
      }
    `}
`;

const ButtonGroups = styled.div`
  display: flex;
  gap: var(--space-8);
  margin-top: var(--space-24);
  @media only screen and (max-width: 449px) {
    margin-top: var(--space-32);
  }
`;

export { LeftHeroSectionMainDiv, HeroHeading, Para, ButtonGroups };
