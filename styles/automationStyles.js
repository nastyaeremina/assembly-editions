import styled, { css } from 'styled-components';
import { Body2, Body3, ButtonText, CardTxt, Heading2, Heading3, MbBody2, MbBody3, TableText } from './styles';

const AutomationHero = styled.div`
  width: 100%;
  padding: 180px 0 0px 0;
  margin-bottom: 50px;
  text-align: center;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.greendark};
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
  color: ${({ theme }) => theme.colors.greenlight};
  @media only screen and (max-width: 426px) {
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
  color: ${({ theme }) => theme.colors.greenlight};
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
  color: ${({ theme }) => theme.colors.title};
  span {
    color: ${({ theme }) => theme.colors.primary};
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
const DirectoryCard = styled.div`
  border: 1px solid #00160e;
  border-radius: 4px;
  cursor: pointer;
  background-color: #fff;
  max-width: 423px;
  width: 100%;
  :hover {
    outline: 1px solid #00160e;
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
  }
`;
const Cardbottom = styled.div`
  padding: 8px 16px;
  background: #e3ffee;
  border-top: 1px solid #000000;
  border-radius: 0px 0px 5px 5px;
  color: ${({ theme }) => theme.colors.purpledark};
  ${CardTxt}
`;
const LogoSection = styled.div`
  display: flex;
  gap: 16px;
  padding-top: 22px;
  padding-bottom: 20px;
  @media only screen and (max-width: 426px) {
    .logo {
      width: 40px;
      height: 40px;
    }
  }
`;
const DetailTitle = styled.h1`
  ${Heading3}
  color: ${({ theme }) => theme.colors.title};
  margin: 0;
`;
const DetailCaption = styled.p`
  margin: 16px 0 28px;
  ${Body3}
  color: ${({ theme }) => theme.colors.body};
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
  background-color: ${({ theme }) => theme.colors.background};
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
  color: ${({ theme }) => theme.colors.title};
  @media only screen and (max-width: 449px) {
    margin: 0 0 40px 0;
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
  Head
};
