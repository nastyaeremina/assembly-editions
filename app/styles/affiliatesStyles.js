import styled, { css } from 'styled-components';
import { Body2, Body3, Heading2, Heading3, Heading4, Heading5, MbBody3, MobileH2, MobileH4 } from './styles';

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
    ${Heading2};
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
    h1 {
      ${MobileH2}
    }
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
    ${Heading2};
    color: var(--title);
    margin: 0 0 20px 0;
  }
  h2 {
    ${Heading3};
    color: var(--title);
    margin: 0 0 20px 0;
  }
  h3 {
    ${Heading4};
    color: var(--title);
    margin: 0 0 20px 0;
  }
  h4 {
    ${Heading5};
    color: var(--title);
    margin: 0 0 20px 0;
  }
  p {
    ${Body2};
    color: var(--body);
    margin: 20px 0 0px 0;
  }
  @media only screen and (max-width: 749px) {
    h2 {
      ${MobileH4}
    }
    p {
      ${MbBody3}
      font-size:17px;
    }
  }
`;

export { HeroSection, MainHero, HeroCaption };
