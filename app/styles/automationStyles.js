import styled, { css } from 'styled-components';
import { Body2, Body3, ButtonText, CardTxt, Heading2, Heading3, MbBody2, MbBody3, TableText } from './styles';

import {
  greendark,
  bgpages,
  greenlight,
  borderColor,
  body,
  caption,
  bodycolor,
  lightgray,
  browndark,
  brownlight,
  title,
  bluedark,
  primary,
  whiteColor,
  black,
  bluelight,
  purpledark,
} from './../styles/color';

const AutomationHero = styled.div`
  width: 100%;
  padding: 180px 0 0px 0;
  margin-bottom: 50px;
  text-align: center;
  overflow: hidden;
  background-color: ${greendark};
  .apps-image {
    width: 100%;
    max-height: 536px;
    height: 100%;
  }
  .automation-image {
    max-width: 1224px;
    width: 100%;
  }
  @media only screen and (max-width: 749px) {
    padding: 148px 0 0px 0;
    .automation-image {
      display: none;
    }
  }
  @media only screen and (max-width: 768px) {
    margin-bottom: 30px;
    .automation-image {
      display: none;
    }
  }
  @media only screen and (max-width: 768px) {
    .appsbutton {
      flex-direction: row;
    }
  }
`;
const Title = styled.div`
  ${Heading2}
  text-align: center;
  color: ${greenlight};
  @media only screen and (max-width: 449px) {
    ${TableText}
  }
`;
const Caption = styled.div`
  margin: 20px auto 0;
  max-width: 880px;
  width: 100%;
  ${Body2}
  text-align: center;
  letter-spacing: 0.02em;
  color: ${greenlight};
  @media only screen and (max-width: 426px) {
    ${MbBody2}
  }
`;
const AutomationButton = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-top: 32px;
  @media only screen and (max-width: 768px) {
    padding-bottom: 40px;
  }
  @media only screen and (max-width: 426px) {
    flex-direction: column;
    gap: 12px;
  }
`;
const SetupAutomation = styled.div`
  padding-top: 50px;
  padding-bottom: 40px;
  max-width: 780px;
  width: 100%;
  ${Heading3}
  color: ${title};
  span {
    color: ${primary};
  }
  ${(props) =>
    props.istitle &&
    css`
      max-width: 100%;
    `}
`;
const Cards = styled.div`
  display: flex;
  gap: 20px;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
const CardSec = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-bottom: 50px;
  @media only screen and (max-width: 426px) {
    padding-bottom: 30px;
  }
`;
const Featured = styled.div`
  padding-top: 100px;
  padding-bottom: 40px;
  @media only screen and (max-width: 426px) {
    padding-top: 80px;
  }
`;
const DirectoryButton = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  @media only screen and (max-width: 426px) {
    gap: 12px;
  }
`;
const DirectoryCard = styled.div``;
const Cardbottom = styled.div`
  padding: 8px 16px;
  background: #e3ffee;
  border-top: 1px solid #000000;
  border-radius: 0px 0px 4px 4px;
  color: ${purpledark};
  ${CardTxt}
`;
const LogoSection = styled.div`
  display: flex;
  gap: 16px;
  padding-top: 22px;
  padding-bottom: 20px;
  .logo {
    width: 80px;
    height: 80px;
    border: 2px solid #e9e9ea;
    border-radius: 160px;
  }
  @media only screen and (max-width: 426px) {
    .logo {
      width: 40px;
      height: 40px;
      border: 1px solid #e9e9ea;
      border-radius: 80px;
    }
  }
`;
const DetailTitle = styled.h1`
  ${Heading3}
  color: ${title};
  margin: 0;
`;
const DetailCaption = styled.p`
  margin: 16px 0 28px;
  ${Body3}
  color: ${body};
  @media only screen and (max-width: 426px) {
    ${MbBody3}
  }
`;
const DetailButtonSection = styled.div`
  display: flex;
  gap: 20px;
  @media only screen and (max-width: 749px) {
    flex-wrap: wrap;
  }
  @media only screen and (max-width: 449px) {
    .iconbutton {
      a {
        padding: 8px 24px;
      }
    }
  }
`;
const ImageSection = styled.div`
  background-color: #f5f5f5;
  margin-top: 50px;
  margin-bottom: 100px;
  padding: 40px 0;
  .detailimage {
    max-width: 849px;
    width: 100%;
  }
  @media only screen and (max-width: 449px) {
    margin-bottom: 80px;
  }
`;
const Head = styled.h2`
  margin: 0 0 50px 0;
  ${Heading3}
  color: ${title};
  @media only screen and (max-width: 449px) {
    margin: 0 0 40px 0;
  }
`;

const CardAuto = styled.div`
  -webkit-transition: all 0.2ms ease-in-out;
  transition: all 0.2ms ease-in-out;
  border: 1px solid transparent;
  border-radius: 4px;
  cursor: pointer;
  background-color: #fff;
  max-width: 423px;
  width: 100%;
  .directorycard {
    -webkit-transition: all 0.2ms ease-in-out;
    transition: all 0.2ms ease-in-out;
    border: 1px solid #00160e;
    border-radius: 4px;
  }
  :hover {
    -webkit-transition: all 0.2ms ease-in-out;
    transition: all 0.2ms ease-in-out;
    border: 2px solid #00160e;
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
    .directorycard {
      -webkit-transition: all 0.2ms ease-in-out;
      transition: all 0.2ms ease-in-out;
      border: 0px solid #00160e;
    }
  }
`;
export {
  AutomationHero,
  Title,
  Caption,
  AutomationButton,
  SetupAutomation,
  Cards,
  CardSec,
  Featured,
  DirectoryButton,
  DirectoryCard,
  Cardbottom,
  LogoSection,
  DetailTitle,
  DetailCaption,
  DetailButtonSection,
  ImageSection,
  Head,
  CardAuto
};
