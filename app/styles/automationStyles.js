import styled, { css } from 'styled-components';
import { body_regular, h2_semibold, h3_semibold, tag } from './typography';

const AutomationHero = styled.div`
  width: 100%;
  padding: var(--space-80) 0 0px 0;
  margin-bottom: 50px;
  text-align: center;
  overflow: hidden;
  background-color: var(--dark-green);
  .apps-image {
    width: 100%;
    max-height: 536px;
    height: 100%;
  }
  .automation-image {
    max-width: 1224px;
    width: 100%;
  }
  .button-group {
    align-items: center;
    justify-content: center;
    margin-top: 32px;
    z-index: 11;
    position: relative;
  }
  @media only screen and (max-width: 768px) {
    padding: var(--space-64) 0 0px 0;
    margin-bottom: 30px;
    .automation-image {
      display: none;
    }
    .button-group {
      margin-bottom: 40px;
    }
    .automation-image {
      display: none;
    }
    .appsbutton {
      flex-direction: row;
    }
  }
`;

const Title = styled.div`
  ${h2_semibold}
  text-align: center;
  color: var(--light-green);
`;
const Caption = styled.div`
  margin: 20px auto 0;
  max-width: 880px;
  width: 100%;
  ${body_regular}
  text-align: center;
  letter-spacing: 0.02em;
  color: var(--light-green);
`;
const SetupAutomation = styled.div`
  padding-top: 50px;
  padding-bottom: 40px;
  max-width: 780px;
  width: 100%;
  ${h3_semibold}
  color: var(--title);
  span {
    color: var(--primary);
  }
  ${(props) =>
    props.istitle &&
    css`
      max-width: 100%;
    `}
  ${(props) =>
    props.isRemovePadding &&
    css`
      padding: 0;
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
  background: var(--light-green);
  border-top: 1px solid var(--black);
  border-radius: 0px 0px 4px 4px;
  color: var(--dark-purple);
  ${tag}
`;
const LogoSection = styled.div`
  display: flex;
  gap: 16px;
  padding-bottom: 20px;
  .logo {
    width: 80px;
    height: 80px;
    border: 2px solid var(--logo-border-color);
    border-radius: 160px;
  }
  @media only screen and (max-width: 426px) {
    .logo {
      width: 40px;
      height: 40px;
      border: 1px solid var(--logo-border-color);
      border-radius: 80px;
    }
  }
`;
const DetailTitle = styled.h1`
  ${h3_semibold}
  color: var(--title);
  margin: 0;
`;
const DetailCaption = styled.p`
  margin: 16px 0 28px;
  ${body_regular}
  color: var(--text-secondary);
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
  background-color: var(--image-bg-color);
  margin-top: 50px;
  margin-bottom: 100px;
  padding: 40px 0;
  .detailimage {
    max-width: 849px;
    width: 100%;
    height: auto;
  }
  @media only screen and (max-width: 449px) {
    margin-bottom: 80px;
  }
`;

const CardAuto = styled.div`
  -webkit-transition: all 0.2ms ease-in-out;
  transition: all 0.2ms ease-in-out;
  border: 1px solid var(--dark-green);
  border-radius: 4px;
  cursor: pointer;
  background-color: var(--white);
  max-width: 423px;
  width: 100%;
  .directorycard {
    -webkit-transition: all 0.2ms ease-in-out;
    transition: all 0.2ms ease-in-out;
    border-radius: 4px;
  }
  :hover {
    -webkit-transition: all 0.2ms ease-in-out;
    transition: all 0.2ms ease-in-out;
    box-shadow: 0px 4px 16px var(--black-shadow-10);
    .directorycard {
      -webkit-transition: all 0.2ms ease-in-out;
      transition: all 0.2ms ease-in-out;
    }
  }
`;

const RightWrapper = styled.div`
  width: 100%;
`;

export {
  AutomationHero,
  Title,
  Caption,
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
  CardAuto,
  RightWrapper
};
