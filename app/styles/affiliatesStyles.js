import styled, { css } from 'styled-components';
import { body_regular, body_semibold, h2_semibold, h3_semibold, h4_semibold } from './typography';

const MainHero = styled.div`
  padding: 80px 0 50px 0;
  @media only screen and (max-width: 769px) {
    padding-bottom: 80px;
    padding-top: 116px;
  }
  ${(props) =>
    props.isStandardPage &&
    css`
      padding: 0 0 100px;
      @media only screen and (max-width: 768px) {
        padding: 0 0 80px;
      }
    `}
`;
const HeroSection = styled.div`
  padding-top: 100px;
  padding-bottom: 50px;
  text-align: center;
  h1 {
    ${h2_semibold};
    color: var(--title);
    margin: 0;
  }
  .button-group {
    align-items: center;
    justify-content: center;
    @media only screen and (max-width: 449px) {
      margin-top: 28px;
    }
  }
  @media only screen and (max-width: 769px) {
    padding: 0;
  }
  ${(props) =>
    props.isStandardPage &&
    css`
      padding: 0;
      @media only screen and (max-width: 768px) {
        padding: 0;
      }
    `}
`;

const HeroCaption = styled.div`
  max-width: 880px;
  width: 100%;
  margin: 0 auto;
  h1 {
    ${h2_semibold};
    color: var(--title);
    margin: 0 0 20px 0;
  }
  h2 {
    ${h3_semibold};
    color: var(--title);
    margin: 0 0 20px 0;
  }
  h3 {
    ${h4_semibold};
    color: var(--title);
    margin: 0 0 20px 0;
  }
  h4 {
    ${body_semibold};
    color: var(--title);
    margin: 0 0 20px 0;
  }
  p {
    ${body_regular};
    color: var(--text-secondary);
    margin: 20px 0 0px 0;
  }
`;

export { HeroSection, MainHero, HeroCaption };
