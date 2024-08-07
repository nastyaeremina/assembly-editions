import styled, { css } from 'styled-components';
import {
  Body2,
  Body3,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  MbBody3,
  MobileH2,
  MobileH3,
  MobileH4
} from '../../styles/styles';
import { body, title } from '../../styles/color';

const PageTitle = styled.h2`
  ${Heading3};
  color: ${title};
  margin: 0;
`;
const Caption = styled.div`
  p {
    ${Body3};
    color: ${body};
    margin: 0;
  }
  @media only screen and (max-width: 449px) {
    p {
      ${MbBody3}
    }
  }
`;

const MainHero = styled.div`
  padding: 0;
  @media only screen and (max-width: 769px) {
    /* padding-bottom: 40px; */
    /* padding-top: 112px; */
  }
`;
const HeroSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 810px;
  width: 100%;
  text-align: left;
  h1 {
    font-family: 'Bagoss';
    ${Heading3};
    color: ${title};
    margin: 0;
  }
  .button-section {
    margin-top: 8px;
  }
  @media only screen and (max-width: 769px) {
    h1 {
      ${MobileH2}
    }
  }
  @media only screen and (max-width: 449px) {
    h1 {
      ${MobileH3}
    }
  }
`;

const HeroCaption = styled.div`
  max-width: 880px;
  width: 100%;
  margin: 0;
  h1 {
    ${Heading2};
    color: ${title};
    margin: 0 0 20px 0;
  }
  h2 {
    ${Heading3};
    color: ${title};
    margin: 0 0 20px 0;
  }
  h3 {
    ${Heading4};
    color: ${title};
    margin: 0 0 20px 0;
  }
  h4 {
    ${Heading5};
    color: ${title};
    margin: 0 0 20px 0;
  }
  p {
    ${Body2};
    color: ${body};
    margin: 0;
  }
  @media only screen and (max-width: 768px) {
    p {
      ${Body3}
    }
  }
  @media only screen and (max-width: 449px) {
    h2 {
      font-family: 'Bagoss';
      ${MobileH3}
      line-height:30.8px;
      letter-spacing: 0em;
      text-align: left;
    }
    p {
      ${MbBody3}
    }
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 20px;
  justify-content: flex-start;
`;

const SubHeroSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 918px;
  width: 100%;
  h1 {
    font-family: 'Bagoss';
    ${Heading3};
    color: ${title};
    margin: 0;
  }
  .button-section {
    margin-top: 8px;
  }
  ${(props) =>
    props.hasFullWidth &&
    css`
      max-width: 100%;
    `}
  @media only screen and (max-width: 768px) {
    h1 {
      ${MobileH2}
      line-height: 50px;
    }
  }
  @media only screen and (max-width: 449px) {
    h1 {
      ${MobileH3}
    }
  }
`;
const SubHeroCaption = styled.div`
  max-width: 918px;
  width: 100%;
  margin: 0;
  h1 {
    ${Heading2};
    color: ${title};
    margin: 0 0 20px 0;
  }
  h2 {
    ${Heading3};
    color: ${title};
    margin: 0 0 20px 0;
  }
  h3 {
    ${Heading4};
    color: ${title};
    margin: 0 0 20px 0;
  }
  h4 {
    ${Heading5};
    color: ${title};
    margin: 0 0 20px 0;
  }
  p {
    ${Body3};
    color: ${body};
    margin: 0;
  }
  ${(props) =>
    props.hasFullWidth &&
    css`
      max-width: 100%;
    `}
  @media only screen and (max-width: 768px) {
    p {
      ${Body3}
    }
  }
  @media only screen and (max-width: 449px) {
    h2 {
      font-family: 'Bagoss';
      ${MobileH3}
      line-height:30.8px;
      letter-spacing: 0em;
      text-align: left;
    }
    p {
      ${MbBody3}
    }
  }
`;
export { HeroSection, PageTitle, Caption, MainHero, HeroCaption, ButtonGroup, SubHeroSection, SubHeroCaption };
